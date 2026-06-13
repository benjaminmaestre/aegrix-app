'use client';

import React from 'react';
import { implementationModels } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { Briefcase, Users, CheckCircle2 } from 'lucide-react';

const ImplementationModels = () => {
  const { ref, inView } = useInView();

  return (
    <section className="section-padding bg-aegrix-bg-2">
      <div className="container-width">
        <div ref={ref} className={cn(
          "max-w-3xl mb-20 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="label-tag mb-6">Modelos de Implementación</div>
          <h2 className="heading-lg mb-8 text-aegrix-text">
            Escala según las necesidades <br />
            <span className="text-aegrix-cyan">de tu infraestructura.</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            Ofrecemos modelos flexibles diseñados para adaptarse a la madurez tecnológica de tu empresa, desde proyectos cerrados hasta alianzas estratégicas de largo plazo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {implementationModels.map((model, idx) => (
            <div 
              key={idx}
              className={cn(
                "card-base bg-aegrix-surface border border-aegrix-border p-5 sm:p-8 md:p-10 hover:border-aegrix-cyan/20 transition-all duration-700 shadow-sm",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-aegrix-cyan/10 text-aegrix-cyan">
                  {idx === 0 ? <Briefcase size={24} /> : <Users size={24} />}
                </div>
                <h3 className="heading-md text-aegrix-text">{model.title}</h3>
              </div>
              
              <p className="body-md mb-8 text-aegrix-muted leading-relaxed">
                {model.desc}
              </p>

              <div className="space-y-4">
                {model.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-aegrix-text/80">
                    <CheckCircle2 size={16} className="text-aegrix-cyan" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationModels;
