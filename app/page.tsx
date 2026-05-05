import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import PlatformSection from '@/components/PlatformSection';
import WebGrowthSection from '@/components/WebGrowthSection';
import DiagnosticSection from '@/components/DiagnosticSection';
import ProductDivisions from '@/components/ProductDivisions';
import SectorsSection from '@/components/SectorsSection';
import ProcessSection from '@/components/ProcessSection';
import ImplementationModels from '@/components/ImplementationModels';
import UseCasesSection from '@/components/UseCasesSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-aegrix-bg">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <ProblemSection />
        <PlatformSection />
        <ProductDivisions />
        <WebGrowthSection />
        <DiagnosticSection />
        <SectorsSection />
        <ProcessSection />
        <ImplementationModels />
        <UseCasesSection />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
