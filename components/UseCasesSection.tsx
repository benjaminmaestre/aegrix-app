'use client';

import React from 'react';
import { useCases } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const UseCasesSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg">
      <div className="container-width">
        <div className={cn(
          "max-w-3xl mb-20 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="heading-lg mb-6">
            Casos donde AEGRIX <br />
            <span className="text-aegrix-cyan">puede marcar la diferencia.</span>
          </h2>
          <p className="body-lg">
            Situaciones reales donde nuestra infraestructura digital transforma operaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <div 
              key={idx}
              className={cn(
                "card-base card-hover transition-all duration-700 flex flex-col h-full",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                idx === useCases.length - 1 ? "lg:col-start-2" : ""
              )}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="mb-6">
                <span className="label-tag bg-aegrix-bg text-[10px]">Caso {useCase.number}</span>
              </div>
              
              <h3 className="font-sora font-semibold text-xl text-white mb-6 leading-tight">{useCase.title}</h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <span className="text-[10px] font-bold text-aegrix-muted uppercase tracking-widest block mb-2 opacity-60">Situación actual</span>
                  <p className="body-md text-sm">{useCase.problem}</p>
                </div>
                
                <hr className="border-aegrix-border" />
                
                <div>
                  <span className="text-[10px] font-bold text-aegrix-cyan uppercase tracking-widest block mb-2 opacity-80">Con AEGRIX</span>
                  <p className="text-sm text-white/90 font-medium">{useCase.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
