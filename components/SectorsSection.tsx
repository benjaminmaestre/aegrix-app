'use client';

import React from 'react';
import { 
  Building2, UtensilsCrossed, Package, Briefcase, 
  GraduationCap, Church, TrendingUp, Rocket 
} from 'lucide-react';
import { sectors } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const iconMap: Record<string, any> = {
  Building2,
  UtensilsCrossed,
  Package,
  Briefcase,
  GraduationCap,
  Church,
  TrendingUp,
  Rocket,
};

const SectorsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg-2" id="sectores">
      <div className="container-width">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="heading-lg mb-6">
            Soluciones para empresas que necesitan <br />
            <span className="text-aegrix-cyan">seguridad, claridad y crecimiento.</span>
          </h2>
          <p className="body-lg">
            Adaptamos nuestra infraestructura tecnológica a las necesidades específicas de cada sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sectors.map((sector, idx) => {
            const Icon = iconMap[sector.icon];
            return (
              <div 
                key={sector.id}
                className={cn(
                  "card-base card-hover p-6 flex flex-col items-center text-center group transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                )}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-aegrix-bg flex items-center justify-center text-aegrix-cyan mb-6 border border-aegrix-border group-hover:bg-aegrix-cyan group-hover:text-aegrix-bg transition-all duration-300">
                  {Icon && <Icon size={24} />}
                </div>
                <h3 className="font-sora font-semibold text-white text-lg mb-2">{sector.title}</h3>
                <p className="body-md text-xs opacity-70 leading-relaxed">{sector.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
