'use client';

import React from 'react';
import { Database, Globe, Clock, Lock } from 'lucide-react';
import { problemCards } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const icons: Record<string, any> = {
  Database,
  Globe,
  Clock,
  Lock,
};

const ProblemSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg-2 overflow-hidden">
      <div className="container-width">
        <div className={cn(
          "max-w-3xl mb-16 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="label-tag mb-6">El problema real</span>
          <h2 className="heading-lg mb-6">
            El problema no es la falta de tecnología. <br />
            <span className="text-aegrix-cyan">Es la falta de sistema.</span>
          </h2>
          <p className="body-lg max-w-2xl">
            Ventas en Excel, clientes en WhatsApp, reportes manuales y páginas web que no miden nada. El problema es que la información está dispersa, desprotegida y poco aprovechada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemCards.map((card, idx) => {
            const Icon = icons[card.icon];
            return (
              <div 
                key={idx}
                className={cn(
                  "card-base card-hover transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                )}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-aegrix-bg flex items-center justify-center text-aegrix-cyan mb-6 border border-aegrix-border">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="font-sora font-semibold text-xl text-white mb-4">{card.title}</h3>
                <p className="body-md text-sm">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
