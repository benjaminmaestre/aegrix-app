'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL } from '@/lib/data';

const FinalCTA = () => {
  const { ref, inView } = useInView();

  return (
    <section id="contacto" ref={ref} className="section-padding bg-aegrix-bg relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-aegrix-cyan/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container-width relative z-10">
        <div className={cn(
          "max-w-4xl mx-auto text-center transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="label-tag mb-8 border-aegrix-cyan/20">The Final Step</div>
          <h2 className="heading-lg mb-8 text-white">
            Construye una empresa más <br />
            <span className="text-aegrix-cyan">segura, medible e inteligente.</span>
          </h2>
          <p className="body-lg mb-12 text-aegrix-muted max-w-2xl mx-auto">
            No importa en qué etapa tecnológica se encuentre tu empresa. Puedes empezar por lo más urgente y escalar tu Capa de Control Digital por fases.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href={WHATSAPP_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto px-12 py-5 group text-center flex items-center justify-center gap-3"
            >
              Solicitar Diagnóstico 360
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="mailto:info@aegrix.com" className="btn-secondary w-full sm:w-auto px-12 py-5 text-center flex items-center justify-center gap-3">
              Hablar con un consultor
              <MessageSquare size={20} className="ml-2 opacity-60" />
            </Link>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12 text-white/40">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest">Seguridad</span>
              <span className="text-xs">Diseñada para durar</span>
            </div>
            <div className="w-px h-8 bg-white/5 hidden md:block" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest">Control</span>
              <span className="text-xs">Visibilidad absoluta</span>
            </div>
            <div className="w-px h-8 bg-white/5 hidden md:block" />
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest">Escala</span>
              <span className="text-xs">Arquitectura de futuro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
