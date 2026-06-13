'use client';

import React from 'react';
import { 
  Building2, Package, Briefcase, GraduationCap, 
  Activity, Home, type LucideIcon
} from 'lucide-react';
import { sectors } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Package,
  Briefcase,
  GraduationCap,
  Activity,
  Home,
};

const SectorsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="sectores" ref={ref} className="section-padding bg-aegrix-bg-2">
      <div className="container-width">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-12 md:mb-20 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="label-tag mb-6">Expertise por sector</div>
          <h2 className="heading-lg mb-8 text-aegrix-text">
            Soluciones para empresas que necesitan <br />
            <span className="text-aegrix-cyan">seguridad, claridad y crecimiento.</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            Adaptamos la Capa de Control Digital a las necesidades específicas de cada sector comercial en Latinoamérica.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => {
            const Icon = iconMap[sector.icon];
            return (
              <div 
                key={sector.name}
                className={cn(
                  "relative p-6 sm:p-8 md:p-10 flex flex-col items-center text-center group transition-all duration-700 bg-aegrix-surface border border-aegrix-border rounded-[32px] shadow-sm hover:shadow-xl hover:border-aegrix-cyan/20 overflow-hidden",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                )}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-aegrix-bg-2 border border-aegrix-border flex items-center justify-center text-aegrix-cyan mb-6 group-hover:bg-aegrix-cyan group-hover:text-aegrix-bg transition-all duration-500 shadow-sm">
                  {Icon && <Icon size={30} />}
                </div>
                <h3 className="relative z-10 font-sora font-bold text-aegrix-text text-xl tracking-tight">{sector.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
