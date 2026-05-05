import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import PlatformSection from '@/components/PlatformSection';
import WebGrowthSection from '@/components/WebGrowthSection';
import DiagnosticSection from '@/components/DiagnosticSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import SectorsSection from '@/components/SectorsSection';
import ProcessSection from '@/components/ProcessSection';
import DifferentiatorsSection from '@/components/DifferentiatorsSection';
import ImplementationModels from '@/components/ImplementationModels';
import ImpactSection from '@/components/ImpactSection';
import UseCasesSection from '@/components/UseCasesSection';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-aegrix-bg">
      <Navbar />
      <Hero />
      <ProblemSection />
      <PlatformSection />
      <WebGrowthSection />
      <DiagnosticSection />
      <CapabilitiesSection />
      <SectorsSection />
      <ProcessSection />
      <DifferentiatorsSection />
      <ImplementationModels />
      <ImpactSection />
      <UseCasesSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
