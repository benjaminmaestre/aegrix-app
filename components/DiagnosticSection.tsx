'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { diagnosticChecklist } from '@/lib/data';

const DiagnosticSection = () => {
  return (
    <section className="section-padding bg-aegrix-bg-2 relative" id="diagnostico">
      {/* Background radial accent */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: 'radial-gradient(circle at center, #00C2FF22 0%, transparent 70%)' }} />

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-aegrix-surface border border-aegrix-cyan/25 rounded-[2rem] p-8 md:p-16 shadow-cyan-lg"
        >
          <div className="text-center mb-12">
            <span className="label-tag mb-6">Punto de entrada</span>
            <h2 className="heading-lg mb-4 text-white">Diagnóstico AEGRIX 360</h2>
            <h3 className="heading-md text-aegrix-cyan mb-8">
              Descubre qué tan segura, visible e inteligente está realmente tu empresa.
            </h3>
            <p className="body-lg max-w-2xl mx-auto">
              Evaluamos tu infraestructura digital de extremo a extremo para identificar riesgos críticos y oportunidades inmediatas de crecimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {diagnosticChecklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 py-2 border-b border-white/5 group">
                <CheckCircle2 size={18} className="text-aegrix-cyan group-hover:scale-110 transition-transform" />
                <span className="font-manrope text-sm text-white/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-8">
            <a 
              href="https://wa.me/573107379163" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg px-12 py-5 shadow-cyan-md hover:shadow-cyan-lg"
            >
              Solicitar diagnóstico ahora →
            </a>
            <p className="body-md text-center max-w-lg opacity-70">
              No necesitas cambiarlo todo de inmediato. Te mostramos por dónde empezar y qué puede generar más impacto en tu negocio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
