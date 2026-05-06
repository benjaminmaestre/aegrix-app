import type { Metadata } from 'next';
import { Sora, Manrope } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';
import { getDictionary } from '@/lib/get-dictionary';

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'es');
  
  return (
    <html lang={lang || 'es'} className={`${sora.variable} ${manrope.variable}`}>
      <body className="bg-aegrix-bg text-white font-manrope selection:bg-aegrix-cyan/20">
        <script
          type="application/ld+json"
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
        <Navbar lang={lang as 'en' | 'es'} dict={dict.navbar} />
        {children}
      </body>
    </html>
  );
}
