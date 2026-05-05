'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { webBenefits, conversionFunnel } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const WebGrowthSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg-2 overflow-hidden">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className={cn(
            "transition-all duration-700",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <span className="label-tag mb-6">AEGRIX Web</span>
            <h2 className="heading-lg mb-8">
              Infraestructura web segura, <br />
              <span className="text-aegrix-cyan">rápida y orientada a conversión.</span>
            </h2>
            <p className="body-lg mb-10">
              Tu página web no debe ser solo una tarjeta de presentación. Debe ser una herramienta que trabaje 24/7 para atraer, convencer y convertir clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {webBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-aegrix-cyan/10 flex items-center justify-center text-aegrix-cyan shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="font-manrope text-sm text-aegrix-muted">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary">
              Quiero una web que venda más →
            </button>
          </div>

          {/* Right Column - Conversion Funnel */}
          <div className={cn(
            "relative transition-all duration-1000 delay-300",
            inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}>
            <div className="bg-aegrix-surface border border-aegrix-border rounded-3xl p-8 md:p-12 shadow-cyan-lg">
              <div className="text-center mb-10">
                <h3 className="font-sora font-bold text-xl text-white mb-2">Funnel de conversión web</h3>
                <p className="text-xs text-aegrix-muted uppercase tracking-widest font-bold">Optimización de punta a punta</p>
              </div>

              <div className="flex flex-col items-center gap-2">
                {conversionFunnel.map((step, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "group relative flex items-center justify-between px-6 py-4 rounded-xl border border-white/5 transition-all duration-500 hover:border-aegrix-cyan/30",
                      step.bg
                    )}
                    style={{ width: step.width }}
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] text-aegrix-muted uppercase font-bold tracking-tighter opacity-60">Paso 0{idx + 1}</span>
                      <span className="text-sm font-sora font-bold text-white">{step.label}</span>
                    </div>
                    <div className="text-right">
                      <span className={cn(
                        "text-xs font-black px-2 py-1 rounded",
                        idx >= 3 ? "bg-aegrix-cyan text-aegrix-bg" : "text-aegrix-cyan"
                      )}>
                        {step.metric}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-aegrix-border flex justify-between gap-4">
                <p className="text-[11px] text-aegrix-muted italic">"Una web lenta pierde clientes."</p>
                <p className="text-[11px] text-aegrix-muted italic text-right">"Una web sin medición pierde aprendizajes."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebGrowthSection;
