'use client';

import React from 'react';
import { processSteps } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronRight } from 'lucide-react';

const ProcessSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="proceso" ref={ref} className="section-padding bg-aegrix-bg">
      <div className="container-width">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-24 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="label-tag mb-6">Metodología de Control</div>
          <h2 className="heading-lg mb-8 text-white">
            Un proceso de despliegue <br />
            <span className="text-aegrix-cyan">preciso y sin fricciones.</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            Desde el diagnóstico inicial hasta el control operativo continuo, seguimos un protocolo diseñado para minimizar el riesgo y maximizar la visibilidad.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="absolute top-12 left-0 w-full h-px bg-linear-to-r from-transparent via-aegrix-cyan/20 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className={cn(
                  "flex flex-col items-center text-center transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="relative mb-8 group">
                  <div className="absolute inset-0 bg-aegrix-cyan/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <div className="w-16 h-16 rounded-2xl bg-aegrix-surface border border-aegrix-border flex items-center justify-center text-aegrix-cyan shadow-2xl relative z-10 transition-all duration-300 group-hover:border-aegrix-cyan/50">
                    <span className="font-sora font-bold text-xl">{step.number}</span>
                  </div>
                </div>

                <h3 className="font-sora font-bold text-lg text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="body-md text-xs leading-relaxed max-w-[200px]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
