import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProcessSection from '@/components/ProcessSection';
import ImplementationModels from '@/components/ImplementationModels';
import FinalCTA from '@/components/FinalCTA';

export const metadata = {
  title: 'Metodología AEGRIX | Implementación Digital sin Fricciones',
  description:
    'Conoce el método AEGRIX para diagnosticar, diseñar, implementar y controlar soluciones digitales seguras, medibles y escalables para empresas.',
};

export default function MetodologiaPage() {
  return (
    <main className="relative min-h-screen bg-aegrix-bg">
      <Navbar />
      <div className="pt-40 pb-20 container-width">
        <div className="max-w-3xl">
          <div className="label-tag mb-6">El Método AEGRIX</div>
          <h1 className="heading-xl mb-8 text-white">
            Ingeniería de despliegue <span className="text-aegrix-cyan">sin fricciones.</span>
          </h1>
          <p className="body-lg text-aegrix-muted">
            Un protocolo diseñado para minimizar el riesgo y maximizar la visibilidad operativa en cada fase del proyecto.
          </p>
        </div>
      </div>
      
      <ProcessSection />
      <ImplementationModels />
      
      <FinalCTA />
      <Footer />
    </main>
  );
}
