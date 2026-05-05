import type { Metadata } from 'next';
import { Sora, Manrope } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'AEGRIX | Ciberseguridad, Desarrollo Web, Datos e IA',
  description: 'AEGRIX ayuda a empresas a proteger su información, construir presencia digital profesional, vender más con desarrollo web de alto rendimiento y convertir datos en decisiones mediante ciberseguridad, analítica e inteligencia artificial.',
  keywords: [
    'ciberseguridad para empresas',
    'protección de datos empresariales',
    'desarrollo web seguro',
    'desarrollo web en Colombia',
    'desarrollo web en Medellín',
    'páginas web para vender más',
    'landing pages de conversión',
    'desarrollo web con Next.js',
    'analítica de datos para empresas',
    'dashboards Power BI',
    'automatización con inteligencia artificial',
    'inteligencia artificial para empresas',
    'transformación digital pymes',
    'diagnóstico digital empresarial',
  ],
  openGraph: {
    title: 'AEGRIX | Ciberseguridad, Desarrollo Web, Datos e IA',
    description: 'Seguridad, web y datos inteligentes para empresas modernas.',
    type: 'website',
    locale: 'es_CO',
    url: 'https://aegrix.co',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${sora.variable} ${manrope.variable}`}>
      <body className="bg-aegrix-bg text-white font-manrope selection:bg-aegrix-cyan/20">
        {children}
      </body>
    </html>
  );
}
