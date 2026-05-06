import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import DigitalEvolution from '@/components/DigitalEvolution';
import MethodologySection from '@/components/MethodologySection';
import ProductDivisions from '@/components/ProductDivisions';
import SoftwareExcellence from '@/components/SoftwareExcellence';
import SectorSection from '@/components/SectorSection';
import PlatformSection from '@/components/PlatformSection';
import DiagnosticSection from '@/components/DiagnosticSection';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';

import { getDictionary } from '@/lib/get-dictionary';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="relative min-h-screen bg-aegrix-bg">
      <Hero lang={lang} dict={dict.hero} />
      <div className="relative z-10">
        <ProblemSection />
        <DigitalEvolution />
        <MethodologySection />
        <ProductDivisions />
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
