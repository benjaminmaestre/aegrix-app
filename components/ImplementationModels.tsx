'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { plans } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const ImplementationModels = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg">
      <div className="container-width">
        <div className={cn(
          "text-center mb-20 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="label-tag mb-6 bg-transparent border-aegrix-cyan/20">
            Cotización según alcance · Sin precios fijos
          </div>
          <h2 className="heading-lg mb-6">
            Planes escalables según la <br />
            <span className="text-aegrix-cyan">etapa de tu empresa.</span>
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            Puedes iniciar con una necesidad puntual o construir una infraestructura digital completa por fases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <div 
              key={plan.id}
              className={cn(
                "card-base flex flex-col h-full transition-all duration-700 relative",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                plan.featured ? "border-aegrix-cyan shadow-cyan-sm" : "border-aegrix-border"
              )}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-aegrix-cyan text-aegrix-bg text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  Más completo
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-sora font-bold text-2xl text-white mb-2">{plan.name}</h3>
                <p className="body-md text-sm italic opacity-70">{plan.subtitle}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-aegrix-cyan shrink-0 mt-0.5" />
                    <span className="font-manrope text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-3.5 rounded-lg font-manrope font-bold transition-all duration-200 mt-auto",
                plan.featured 
                  ? "bg-aegrix-cyan text-aegrix-bg hover:shadow-cyan-md hover:scale-[1.02]" 
                  : "border border-aegrix-border text-white hover:border-aegrix-cyan hover:text-aegrix-cyan"
              )}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationModels;
