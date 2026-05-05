'use client';

import React from 'react';
import { Eye, Target, Zap, Shield, MessageSquare, LineChart } from 'lucide-react';
import { differentiators } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const iconMap: Record<string, any> = {
  Eye,
  Target,
  Zap,
  Shield,
  MessageSquare,
  LineChart,
};

const DifferentiatorsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg-2">
      <div className="container-width">
        <div className={cn(
          "max-w-3xl mb-20 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="heading-lg mb-6">
            Diseñado para empresas que necesitan <br />
            <span className="text-aegrix-cyan">control, claridad y velocidad.</span>
          </h2>
          <p className="body-lg">
            No instalamos herramientas sueltas. Diseñamos sistemas digitales seguros, medibles e inteligentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div 
                key={item.id}
                className={cn(
                  "card-base card-hover transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                )}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-aegrix-cyan mb-6">
                  {Icon && <Icon size={28} />}
                </div>
                <h3 className="font-sora font-semibold text-xl text-white mb-4">{item.title}</h3>
                <p className="body-md text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
