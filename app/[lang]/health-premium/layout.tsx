import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'es' | 'en' }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEnglish = lang === 'en';
  const title = isEnglish
    ? 'Healthcare Cybersecurity, HIPAA Readiness & Digital Engineering | AEGRIX'
    : 'Ciberseguridad para Salud, Readiness HIPAA e Ingeniería Digital | AEGRIX';
  const description = isEnglish
    ? 'Cybersecurity assessment, HIPAA Security Rule readiness, high-performance medical web, automation and analytics for healthcare organizations.'
    : 'Evaluación de ciberseguridad, readiness frente a HIPAA Security Rule, web médica de alto rendimiento, automatización y analítica para organizaciones de salud.';
  const url = `https://aegrix.com.co/${lang}/health-premium`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: 'https://aegrix.com.co/es/health-premium',
        en: 'https://aegrix.com.co/en/health-premium',
        'x-default': 'https://aegrix.com.co/es/health-premium',
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'AEGRIX',
      type: 'website',
      locale: isEnglish ? 'en_US' : 'es_CO',
      images: [{ url: 'https://aegrix.com.co/AEGRIX_preview.png', width: 1200, height: 630, alt: isEnglish ? 'AEGRIX Healthcare' : 'AEGRIX Salud' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://aegrix.com.co/AEGRIX_preview.png'],
    },
  };
}

export default function HealthPremiumLayout({ children }: { children: React.ReactNode }) {
  return children;
}
