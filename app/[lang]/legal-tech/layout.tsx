import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: 'es' | 'en' }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEnglish = lang === 'en';
  const title = isEnglish
    ? 'Cybersecurity, NIST & ISO Readiness for Legal and Finance | AEGRIX'
    : 'Ciberseguridad, Readiness NIST e ISO para Legal y Finanzas | AEGRIX';
  const description = isEnglish
    ? 'Security assessment, NIST and ISO/IEC 27001/27002 readiness, secure software, data protection and traceability for legal and financial organizations.'
    : 'Evaluación de seguridad, readiness NIST e ISO/IEC 27001/27002, software seguro, protección de datos y trazabilidad para organizaciones legales y financieras.';
  const url = `https://aegrix.com.co/${lang}/legal-tech`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: 'https://aegrix.com.co/es/legal-tech',
        en: 'https://aegrix.com.co/en/legal-tech',
        'x-default': 'https://aegrix.com.co/es/legal-tech',
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'AEGRIX',
      type: 'website',
      locale: isEnglish ? 'en_US' : 'es_CO',
      images: [{ url: 'https://aegrix.com.co/AEGRIX_preview.png', width: 1200, height: 630, alt: isEnglish ? 'AEGRIX Legal & Finance' : 'AEGRIX Legal y Finanzas' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://aegrix.com.co/AEGRIX_preview.png'],
    },
  };
}

export default function LegalTechLayout({ children }: { children: React.ReactNode }) {
  return children;
}
