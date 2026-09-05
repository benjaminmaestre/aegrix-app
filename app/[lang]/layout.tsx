export const runtime = 'edge';

import type { Metadata, Viewport } from 'next';
import { Sora, Manrope } from 'next/font/google';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import '../globals.css';
import Navbar from '@/components/Navbar';
import CookieBanner from '@/components/CookieBanner';
import ConsentAwareAnalytics from '@/components/ConsentAwareAnalytics';
import RouteNavigationManager from '@/components/RouteNavigationManager';
import { getDictionary } from '@/lib/get-dictionary';
import {
  buildSiteStructuredData,
  getCanonicalUrl,
  getLanguageUrls,
  getRouteSeo,
} from '@/lib/seo';
import { siteConfig } from '@/lib/site-config';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const locales = ['es', 'en'] as const;
type Locale = typeof locales[number];

function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const headersList = await headers();
  const pathname = headersList.get('x-pathname');

  if (!pathname) {
    const errorMsg = 'CRITICAL: The x-pathname header is missing. Verify that proxy.ts is correctly running and injecting it.';
    if (process.env.NODE_ENV === 'development') {
      throw new Error(errorMsg);
    }
    console.error(errorMsg);
  }

  const finalPathname = pathname || `/${lang}`;

  if (!isValidLocale(lang)) {
    return {
      title: 'AEGRIX',
      metadataBase: new URL(siteConfig.origin),
    };
  }

  const isEn = lang === 'en';
  const seo = getRouteSeo(finalPathname, lang);
  const canonicalUrl = getCanonicalUrl(finalPathname);
  const languageUrls = getLanguageUrls(finalPathname);

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(siteConfig.origin),
    alternates: {
      canonical: canonicalUrl,
      languages: languageUrls,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: 'website',
      locale: isEn ? 'en_US' : 'es_CO',
      url: canonicalUrl,
      siteName: siteConfig.brand,
      images: [
        {
          url: `${siteConfig.origin}/AEGRIX_preview.png`,
          width: 1200,
          height: 630,
          alt: 'AEGRIX',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [`${siteConfig.origin}/AEGRIX_preview.png`],
    },
    robots: { index: true, follow: true },
    icons: {
      icon: [
        { url: '/AEGRIX_right_logo_icon.svg', type: 'image/svg+xml' },
        { url: '/icon.png', type: 'image/png', sizes: '96x96' },
        { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      ],
      shortcut: '/favicon.ico',
      apple: '/apple-icon.png',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const requestHeaders = await headers();
  const nonce = requestHeaders.get('x-nonce') || undefined;
  const pathname = requestHeaders.get('x-pathname') || `/${lang}`;
  const structuredData = JSON.stringify(buildSiteStructuredData(pathname, lang)).replace(/</g, '\\u003c');

  return (
    <html lang={lang} className={`${sora.variable} ${manrope.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          id="theme-initializer"
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('aegrix-theme');
                const theme = savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                document.documentElement.dataset.theme = theme;
              } catch (e) {}
            `,
          }}
        />
        <script
          id="json-ld"
          type="application/ld+json"
          nonce={nonce}
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </head>
      <body className="bg-aegrix-bg text-aegrix-text font-manrope selection:bg-aegrix-cyan/20">
        <RouteNavigationManager lang={lang} />
        <Navbar lang={lang} dict={dict.navbar} />
        {children}
        <CookieBanner lang={lang} dict={dict.cookies} />
        <ConsentAwareAnalytics gaId={gaId} nonce={nonce} />
      </body>
    </html>
  );
}
