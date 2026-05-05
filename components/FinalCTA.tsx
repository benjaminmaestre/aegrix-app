'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ChevronRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-aegrix-bg overflow-hidden">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-aegrix-surface border border-aegrix-cyan/20 rounded-[2.5rem] p-10 md:p-20 shadow-cyan-lg text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-aegrix-cyan/5 blur-3xl rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-aegrix-blue/5 blur-3xl rounded-full -ml-16 -mb-16" />

          <h2 className="heading-lg mb-8 leading-tight">
            ¿Quieres saber qué tan segura, visible <br className="hidden md:block" />
            e inteligente está tu empresa?
          </h2>
          
          <p className="body-lg mb-12 max-w-2xl mx-auto">
            Recibe una visión clara de tus riesgos, oportunidades, datos disponibles y próximos pasos para una transformación digital estratégica.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="btn-primary w-full sm:w-auto text-lg px-10 py-5 group">
              Solicitar diagnóstico
              <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/573107379163" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto text-lg px-10 py-5 group"
            >
              <MessageCircle size={22} className="text-aegrix-cyan" />
              Hablar por WhatsApp
              <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          <p className="font-manrope text-sm text-aegrix-muted mt-8 opacity-70">
            Sin compromiso · Respuesta en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
