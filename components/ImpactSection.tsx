'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const ImpactSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg-2 overflow-hidden py-32 md:py-48">
      <div className="container-width">
        <div className={cn(
          "max-w-5xl mx-auto text-center transition-all duration-1000",
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <div className="w-16 h-[2px] bg-aegrix-cyan mx-auto mb-12" />
          
          <h2 className="font-sora font-bold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.2] tracking-tight">
            Una empresa sin seguridad pierde control. <br className="hidden md:block" />
            Una web sin estrategia pierde clientes. <br className="hidden md:block" />
            Datos sin análisis son oportunidades invisibles. <br className="hidden md:block" />
            <span className="text-aegrix-cyan mt-4 block">AEGRIX conecta todo para que tu negocio decida mejor.</span>
          </h2>

          <div className="mt-16">
            <a href="#diagnostico" className="btn-primary inline-flex text-lg px-10 py-5">
              Quiero evaluar mi empresa →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
