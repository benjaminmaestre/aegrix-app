import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

  const requestHeaders = new Headers(request.headers);
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
