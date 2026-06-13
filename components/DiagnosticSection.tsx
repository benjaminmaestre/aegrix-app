'use client';

import React from 'react';
import Link from 'next/link';
import { diagnosticChecklist, WHATSAPP_URL } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { CheckCircle2, ClipboardCheck } from 'lucide-react';

const DiagnosticSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="diagnostico" ref={ref} className="section-padding bg-aegrix-bg-2 relative">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className={cn(
            "transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h2 className="heading-lg mb-8 text-aegrix-text">
              Diagnóstico <span className="text-aegrix-cyan">AEGRIX 360</span>
            </h2>
            <h3 className="text-2xl font-sora font-semibold text-aegrix-text/90 mb-6">
              Descubre qué tan segura, visible e inteligente está realmente tu empresa.
            </h3>
            <p className="body-lg mb-8 md:mb-10 text-aegrix-muted">
              Evaluamos tu seguridad digital, presencia web, capacidad de conversión y madurez de datos para identificar riesgos, oportunidades y mejoras prioritarias. No es una revisión técnica, es una evaluación estratégica de control.
            </p>
            
            <div className="card-base bg-aegrix-surface border-aegrix-border p-5 sm:p-8 mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-aegrix-cyan/10 text-aegrix-cyan">
                  <ClipboardCheck size={24} />
                </div>
                <div className="font-sora font-bold text-aegrix-text">Lo que evaluamos:</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  'Seguridad digital y accesos',
                  'Performance y conversión web',
                  'Analítica y KPIs reales',
                  'Automatización e IA aplicable'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-aegrix-muted">
                    <CheckCircle2 size={16} className="text-aegrix-cyan shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Link 
              href={WHATSAPP_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              Solicitar diagnóstico ahora
            </Link>
          </div>

          <div className={cn(
            "relative transition-all duration-1000 delay-300",
            inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          )}>
            <div className="card-base bg-aegrix-surface border-aegrix-border p-0 overflow-hidden shadow-xl">
              <div className="bg-aegrix-bg-2/50 px-8 py-6 border-b border-aegrix-border">
                <div className="text-[10px] font-bold text-aegrix-muted uppercase tracking-[0.3em]">Evaluation Protocol</div>
              </div>
              <div className="p-5 sm:p-8 space-y-6 md:space-y-10">
                {diagnosticChecklist.map((group, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-aegrix-cyan/10 border border-aegrix-cyan/20 flex items-center justify-center text-aegrix-cyan text-[10px] font-bold">
                        0{idx + 1}
                      </div>
                      <div className="font-sora font-bold text-aegrix-text text-sm uppercase tracking-widest">{group.category}</div>
                    </div>
                    <div className="ml-12 space-y-3">
                      {group.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-xs text-aegrix-muted group cursor-default">
                          <div className="w-1.5 h-1.5 rounded-full bg-aegrix-text/10 group-hover:bg-aegrix-cyan transition-colors" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-aegrix-cyan/5 p-5 sm:p-8 border-t border-aegrix-cyan/10">
                <div className="text-xs text-aegrix-text/60 text-center font-medium">
                  Resultados: Plan de mejora estratégica por fases.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
