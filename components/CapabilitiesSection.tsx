'use client';

import React from 'react';
import { ShieldCheck, Globe, BarChart3, Bot, Wrench } from 'lucide-react';
import { capabilities } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Globe,
  BarChart3,
  Bot,
  Wrench,
};

const CapabilitiesSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg" id="servicios">
      <div className="container-width">
        <div className={cn(
          "max-w-3xl mb-20 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="heading-lg mb-6">
            Servicios diseñados para empresas que <br />
            <span className="text-aegrix-cyan">quieren crecer con control.</span>
          </h2>
          <p className="body-lg">
            No instalamos herramientas sueltas. Diseñamos sistemas digitales seguros, medibles e inteligentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((service, idx) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className={cn(
                  "card-base card-hover flex flex-col transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                  idx >= 3 ? "lg:col-span-1.5" : "" // Handle 3+2 layout logic slightly different in grid
                )}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-aegrix-bg flex items-center justify-center text-aegrix-cyan border border-aegrix-border">
                    {Icon && <Icon size={24} />}
                  </div>
                  <span className="label-tag bg-transparent border-none p-0 text-[10px] opacity-60">AEGRIX Service</span>
                </div>
                
                <h3 className="heading-md mb-4 text-xl md:text-2xl">{service.title}</h3>
                <p className="body-md mb-8 flex-grow">{service.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span 
                      key={item}
                      className="bg-aegrix-bg text-aegrix-muted text-[10px] px-2.5 py-1.5 rounded-md border border-aegrix-border group-hover:border-aegrix-cyan/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
