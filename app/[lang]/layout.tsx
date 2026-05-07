export const runtime = 'edge';

import type { Metadata } from 'next';
import { Sora, Manrope } from 'next/font/google';
import { notFound } from 'next/navigation';
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
  
  if (!isValidLocale(lang)) {
    return {
      title: 'AEGRIX',
    };
  }

  const isEn = lang === 'en';

  const title = isEn 
    ? 'AEGRIX | Software Engineering, Cybersecurity & AI Solutions' 
    : 'AEGRIX | Ingeniería de Software, Ciberseguridad y Soluciones de IA';
    
  const description = isEn
    ? 'AEGRIX helps companies achieve digital dominance through robust software development, advanced cybersecurity, and strategic AI training.'
    : 'AEGRIX impulsa el dominio digital empresarial mediante desarrollo de software robusto, ciberseguridad avanzada y capacitación estratégica en IA.';

  return {
    title,
    description,
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
      url: `https://aegrix.co/${lang}`,
      siteName: 'AEGRIX',
    },
    robots: { index: true, follow: true },
    icons: {
      icon: '/AEGRIX_right_logo_icon.svg',
    },
  };
}

import Script from 'next/script';

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
        <Script
          id="theme-initializer"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('aegrix-theme');
                const theme = savedTheme || 'dark';
                document.documentElement.dataset.theme = theme;
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-aegrix-bg text-aegrix-text font-manrope selection:bg-aegrix-cyan/20">
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AEGRIX",
              "url": "https://aegrix.co",
              "logo": "https://aegrix.co/AEGRIX_right_logo_icon.svg",
              "sameAs": [
                "https://www.linkedin.com/company/aegrix",
                "https://x.com/aegrix"
              ],
              "description": "Firma de ingeniería de software, ciberseguridad avanzada y soluciones estratégicas de inteligencia artificial."
            })
          }}
        />
        <Navbar lang={lang} dict={dict.navbar} />
        {children}
        <CookieBanner lang={lang} dict={dict.cookies} />
      </body>
    </html>
  );
}
