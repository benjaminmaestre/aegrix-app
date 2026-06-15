export const runtime = 'edge';

import type { Metadata, Viewport } from 'next';
import { Sora, Manrope } from 'next/font/google';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};
import '../globals.css';
import Navbar from '@/components/Navbar';
import CookieBanner from '@/components/CookieBanner';
import { getDictionary } from '@/lib/get-dictionary';

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
  const pathname = headersList.get('x-pathname') || `/${lang}`;
  
  if (!isValidLocale(lang)) {
    return {
      title: 'AEGRIX',
      metadataBase: new URL('https://aegrix.com.co'),
    };
  }

  const isEn = lang === 'en';

  const title = isEn 
    ? 'AEGRIX | Software Engineering, Cybersecurity & AI' 
    : 'AEGRIX | Ingeniería de Software, Ciberseguridad e IA';
    
  const description = isEn
    ? 'AEGRIX helps companies achieve digital dominance through robust software, advanced cybersecurity, and strategic AI training.'
    : 'AEGRIX impulsa el dominio digital con desarrollo de software robusto, ciberseguridad avanzada y capacitación estratégica en IA.';

  return {
    title,
    description,
    metadataBase: new URL('https://aegrix.com.co'),
    alternates: {
      canonical: pathname,
      languages: {
        'es': pathname.replace(/^\/en/, '/es'),
        'en': pathname.replace(/^\/es/, '/en'),
        'x-default': pathname.replace(/^\/en/, '/es'),
      },
    },
    keywords: [
      'ciberseguridad para empresas',
      'desarrollo de software robusto',
      'ingeniería de software',
      'capacitación corporativa en IA',
      'agentes de inteligencia artificial',
      'modernización digital',
      'desarrollo web Next.js',
      'infraestructura segura',
      'IA para empresas',
      'consultoría tecnológica',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: isEn ? 'en_US' : 'es_CO',
      url: `https://aegrix.com.co/${lang}`,
      siteName: 'AEGRIX',
      images: [
        {
          url: '/AEGRIX_preview.png',
          width: 1200,
          height: 630,
          alt: 'AEGRIX Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/AEGRIX_preview.png'],
    },
    robots: { index: true, follow: true },
    icons: {
      icon: '/favicon.ico',
      apple: '/AEGRIX_right_logo_icon.svg',
    },
  };
}

import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

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
  
  return (
    <html lang={lang} className={`${sora.variable} ${manrope.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          id="theme-initializer"
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AEGRIX",
              "url": "https://aegrix.com.co",
              "logo": "https://aegrix.com.co/AEGRIX_right_logo_icon.svg",
              "sameAs": [
                "https://www.linkedin.com/company/aegrix",
                "https://x.com/aegrix"
              ],
              "description": "Firma de ingeniería de software, ciberseguridad avanzada y soluciones estratégicas de inteligencia artificial."
            })
          }}
        />
      </head>
      <body className="bg-aegrix-bg text-aegrix-text font-manrope selection:bg-aegrix-cyan/20">
        <Navbar lang={lang} dict={dict.navbar} />
        {children}
        <CookieBanner lang={lang} dict={dict.cookies} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'} />
      </body>
    </html>
  );
}
