import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTE_MAPPINGS, REVERSE_MAPPINGS } from './lib/navigation';

const locales = ['en', 'es'];

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Enforce non-www and HTTPS
  if (!hostname.includes('localhost')) {
    let shouldRedirect = false;
    
    if (hostname.startsWith('www.')) {
      url.hostname = hostname.replace(/^www\./, '');
      shouldRedirect = true;
    }
    
    if (request.headers.get('x-forwarded-proto') === 'http') {
      url.protocol = 'https:';
      shouldRedirect = true;
    }
    
    if (shouldRedirect) {
      url.port = ''; // Ensure port is cleared for production redirects
      return NextResponse.redirect(url, 301);
    }
  }

  const pathname = request.nextUrl.pathname;

  // Redirect index pages (e.g. /index.html -> /, /es/index.html -> /es)
  const indexMatch = pathname.match(/^(.*)\/(index\.(?:html|php|htm)|default\.(?:html|aspx))$/i);
  if (indexMatch) {
    const cleanPath = indexMatch[1] || '/';
    return NextResponse.redirect(new URL(cleanPath, request.url), 301);
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = 'es'; // Default locale
    const normalizedPathname = pathname === '/' ? '' : pathname;
    return NextResponse.redirect(
      new URL(`/${locale}${normalizedPathname}`, request.url),
      301
    );
  }

  // Parse path: /locale/slug
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0];
  const pageSlug = segments[1];
  const rest = segments.slice(2).join('/');

  const requestHeaders = new Headers(request.headers);

  // Apply routing mappings for English locale
  if (locale === 'en' && pageSlug) {
    // 1. Redirect hybrid / Spanish URLs under /en to their clean English counterparts (301)
    if (REVERSE_MAPPINGS[pageSlug]) {
      const cleanSlug = REVERSE_MAPPINGS[pageSlug];
      const targetPath = `/en/${cleanSlug}${rest ? '/' + rest : ''}`;
      return NextResponse.redirect(new URL(targetPath, request.url), 301);
    }

    // 2. Rewrite clean English URLs to the physical Spanish folder names internally
    if (ROUTE_MAPPINGS[pageSlug]) {
      const internalSlug = ROUTE_MAPPINGS[pageSlug];
      // Set the header to the original PUBLIC pathname (e.g. /en/privacy)
      requestHeaders.set('x-pathname', pathname);
      
      url.pathname = `/en/${internalSlug}${rest ? '/' + rest : ''}`;
      return NextResponse.rewrite(url, {
        request: {
          headers: requestHeaders,
        },
      });
    }
  }

  // Default path: set original public pathname header
  requestHeaders.set('x-pathname', pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap\\.xml|robots\\.txt|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.webp|.*\\.avif).*)'],
};
