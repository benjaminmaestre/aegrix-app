import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTE_MAPPINGS, REVERSE_MAPPINGS } from './lib/navigation';

const locales = ['en', 'es'];
const isDevelopment = process.env.NODE_ENV !== 'production';

function createContentSecurityPolicy(nonce: string) {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDevelopment ? " 'unsafe-eval'" : ''} https://www.googletagmanager.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "media-src 'self'",
    "manifest-src 'self'",
    "worker-src 'self' blob:",
    `connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com${isDevelopment ? ' ws: http: https:' : ''}`,
    "frame-src 'none'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join('; ');
}

function withContentSecurityPolicy(response: NextResponse, contentSecurityPolicy: string) {
  response.headers.set('Content-Security-Policy', contentSecurityPolicy);
  return response;
}

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const originalPathname = request.nextUrl.pathname;
  let shouldRedirect = false;

  // Enforce non-www and HTTPS, but delay the response so path canonicalization
  // can be folded into the same permanent redirect when the request reaches us.
  if (!hostname.includes('localhost')) {
    if (hostname.startsWith('www.')) {
      url.hostname = hostname.replace(/^www\./, '');
      shouldRedirect = true;
    }

    if (request.headers.get('x-forwarded-proto') === 'http') {
      url.protocol = 'https:';
      shouldRedirect = true;
    }

    if (shouldRedirect) {
      url.port = '';
    }
  }

  // RFC 9116 security.txt must live at the non-localized well-known URL.
  if (originalPathname === '/.well-known/security.txt') {
    if (shouldRedirect) {
      return NextResponse.redirect(url, 301);
    }

    url.pathname = '/api/securitytxt';
    return NextResponse.rewrite(url);
  }

  let canonicalPathname = originalPathname;

  // Normalize index-document aliases before locale and language-slug checks so
  // /index.html, /es/index.html and /en/nosotros/index.html need one redirect.
  const indexMatch = canonicalPathname.match(/^(.*)\/(index\.(?:html|php|htm)|default\.(?:html|aspx))$/i);
  if (indexMatch) {
    canonicalPathname = indexMatch[1] || '/';
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !canonicalPathname.startsWith(`/${locale}/`) && canonicalPathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const normalizedPathname = canonicalPathname === '/' ? '' : canonicalPathname;
    canonicalPathname = `/es${normalizedPathname}`;
  } else {
    const canonicalSegments = canonicalPathname.split('/').filter(Boolean);
    const canonicalLocale = canonicalSegments[0];
    const canonicalPageSlug = canonicalSegments[1];
    const canonicalRest = canonicalSegments.slice(2).join('/');

    // Redirect hybrid Spanish slugs under /en directly to the clean English URL.
    if (canonicalLocale === 'en' && canonicalPageSlug && REVERSE_MAPPINGS[canonicalPageSlug]) {
      const cleanSlug = REVERSE_MAPPINGS[canonicalPageSlug];
      canonicalPathname = `/en/${cleanSlug}${canonicalRest ? '/' + canonicalRest : ''}`;
    }
  }

  if (canonicalPathname !== originalPathname) {
    url.pathname = canonicalPathname;
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    url.port = '';
    return NextResponse.redirect(url, 301);
  }

  const pathname = canonicalPathname;
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  const contentSecurityPolicy = createContentSecurityPolicy(nonce);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', contentSecurityPolicy);
  requestHeaders.set('x-pathname', pathname);

  // Parse path: /locale/slug.
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0];
  const pageSlug = segments[1];
  const rest = segments.slice(2).join('/');

  if (locale === 'en' && pageSlug && ROUTE_MAPPINGS[pageSlug]) {
    // Rewrite clean English URLs to the physical Spanish folder names internally.
    const internalSlug = ROUTE_MAPPINGS[pageSlug];
    url.pathname = `/en/${internalSlug}${rest ? '/' + rest : ''}`;
    const response = NextResponse.rewrite(url, {
      request: { headers: requestHeaders },
    });
    return withContentSecurityPolicy(response, contentSecurityPolicy);
  }

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  return withContentSecurityPolicy(response, contentSecurityPolicy);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap\\.xml|robots\\.txt|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.webp|.*\\.avif|.*\\.mp4|.*\\.webm).*)'],
};
