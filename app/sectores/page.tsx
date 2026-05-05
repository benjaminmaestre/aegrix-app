import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectorsSection from '@/components/SectorsSection';
import UseCasesSection from '@/components/UseCasesSection';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'Sectores AEGRIX | Soluciones Digitales por Industria',
  description:
    'Especialización técnica en Fintech, Legal, E-commerce y Salud. Adaptamos nuestra Capa de Control Digital a los desafíos de tu sector.',
};

export default function SectoresPage() {
  return (
    <main className="relative min-h-screen bg-aegrix-bg">
      <Navbar />
      <div className="pt-40 pb-20 container-width">
        <div className="max-w-3xl">
          <div className="label-tag mb-6">Expertise Vertical</div>
          <h1 className="heading-xl mb-8 text-white">
            Impacto real en <span className="text-aegrix-cyan">industrias críticas.</span>
          </h1>
          <p className="body-lg text-aegrix-muted">
            Adaptamos nuestra tecnología a los desafíos específicos de cada sector comercial, asegurando cumplimiento y eficiencia.
          </p>
        </div>
      </div>
      
      <SectorsSection />
      <UseCasesSection />
      
      <FinalCTA />
      <Footer />
    </main>
  );
}
