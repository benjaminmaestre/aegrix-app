import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import PlatformSection from '@/components/PlatformSection';
import HomeServicesSummary from '@/components/HomeServicesSummary';
import DiagnosticSection from '@/components/DiagnosticSection';
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
        <HomeServicesSummary />
        <DiagnosticSection />
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
