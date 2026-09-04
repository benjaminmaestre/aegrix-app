export const runtime = 'edge';

import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import ProductDivisions from '@/components/ProductDivisions';
import DigitalEvolution from '@/components/DigitalEvolution';
import MethodologySection from '@/components/MethodologySection';
import TrustSection from '@/components/TrustSection';
import SoftwareExcellence from '@/components/SoftwareExcellence';
import SectorSection from '@/components/SectorSection';
import PlatformSection from '@/components/PlatformSection';
import DiagnosticSection from '@/components/DiagnosticSection';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';
import { getDictionary } from '@/lib/get-dictionary';

const HERO_BACKGROUNDS = [
  {
    videoMp4: '/videos/hero_two_v2.mp4',
    poster: '/images/aegrix-hero-command-center.avif',
  },
  {
    videoMp4: '/videos/hero_one_v2.mp4',
    poster: '/images/aegrix-hero-command-center.avif',
  },
  {
    videoMp4: '/videos/hero_three.mp4',
    poster: '/images/aegrix-hero-command-center.avif',
  },
];

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const currentMonth = new Date().getMonth();
  const activeBackground = HERO_BACKGROUNDS[currentMonth % HERO_BACKGROUNDS.length];

  return (
    <main className="relative min-h-screen bg-aegrix-bg">
      <Hero lang={lang} dict={dict.hero} activeBackground={activeBackground} />
      <div className="relative z-10">
        <ProblemSection />
        <ProductDivisions />
        <DigitalEvolution />
        <MethodologySection />
        <TrustSection />
        <SoftwareExcellence />
        <SectorSection />
        <PlatformSection />
        <DiagnosticSection />
        <ContactSection />
        <FinalCTA />
      </div>
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
