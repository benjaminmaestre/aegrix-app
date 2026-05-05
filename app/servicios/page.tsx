import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductDivisions from '@/components/ProductDivisions';
import WebGrowthSection from '@/components/WebGrowthSection';
import FinalCTA from '@/components/FinalCTA';

export default function ServiciosPage() {
  return (
    <main className="relative min-h-screen bg-aegrix-bg">
      <Navbar />
      <div className="pt-40 pb-20 container-width">
        <div className="max-w-3xl">
          <div className="label-tag mb-6">Nuestra Infraestructura</div>
          <h1 className="heading-xl mb-8 text-white">
            Divisiones de la Capa de <span className="text-aegrix-cyan">Control Digital.</span>
          </h1>
          <p className="body-lg text-aegrix-muted">
            Diseñamos sistemas modulares que se integran para proteger, medir y escalar tu operación comercial.
          </p>
        </div>
      </div>
      
      <ProductDivisions />
      <WebGrowthSection />
      
      <div className="section-padding">
        <FinalCTA />
      </div>
      <Footer />
    </main>
  );
}
