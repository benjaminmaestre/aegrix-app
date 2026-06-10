'use client';

import React from 'react';
import { problemCards } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { Database, Globe, Clock, Lock, AlertCircle, type LucideIcon } from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  Database,
  Globe,
  Clock,
  Lock,
};

const ProblemSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg relative overflow-hidden">
      {/* Subtle Background Mark */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.02] pointer-events-none">
        <AlertCircle size={400} />
      </div>

      <div className="container-width relative z-10">
        <div className={cn(
          "max-w-3xl mb-24 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="label-tag mb-6 text-red-500 bg-red-500/5 border-red-500/20">
            Diagnosis: Lack of System
          </div>
          <h2 className="heading-lg mb-8 text-aegrix-text">
            El problema no es la falta de tecnología. <br />
            <span className="text-aegrix-muted">Es la falta de sistema.</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            Muchas empresas tienen herramientas, archivos, páginas web, correos y datos, pero no tienen una arquitectura que conecte seguridad, web, datos y crecimiento. El resultado es caos operativo y riesgos invisibles.
          </p>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-6 md:grid-cols-2 lg:grid-cols-4 pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none">
          {problemCards.map((card, idx) => {
            const Icon = icons[card.icon];
            return (
              <div 
                key={card.id}
                className={cn(
                  "group relative p-8 rounded-[32px] bg-aegrix-surface border border-aegrix-border transition-all duration-700 shadow-sm hover:shadow-xl hover:border-aegrix-cyan/20 overflow-hidden",
                  "w-[85%] sm:w-[50%] md:w-auto shrink-0 snap-align-start",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                )}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />
                <div className="relative z-10 mb-8 p-3 w-fit rounded-xl bg-aegrix-bg-2 border border-aegrix-border text-aegrix-muted group-hover:text-red-500 group-hover:border-red-500/20 transition-all duration-500">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-sora font-bold text-aegrix-text mb-4">{card.title}</h3>
                <p className="text-sm text-aegrix-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className={cn(
          "mt-20 p-8 rounded-2xl bg-linear-to-r from-aegrix-surface to-transparent border border-aegrix-border flex flex-col md:flex-row items-center gap-8 transition-all duration-1000 delay-700",
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <div className="p-4 rounded-full bg-red-500/10 text-red-500">
            <AlertCircle size={32} />
          </div>
          <div>
            <div className="text-lg font-sora font-bold text-aegrix-text mb-2">Pérdida de control digital</div>
            <div className="text-sm text-aegrix-muted max-w-2xl">
              Cuando la infraestructura web, la seguridad y los datos no están conectados, la empresa pierde capacidad de reacción y escala con ineficiencias heredadas.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
