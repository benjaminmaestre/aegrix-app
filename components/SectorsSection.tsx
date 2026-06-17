'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
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
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';

  const isEn = lang === 'en';

  return (
    <section id="sectores" ref={ref} className="section-padding bg-aegrix-bg-2">
      <div className="container-width">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-12 md:mb-20 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="label-tag mb-6">{isEn ? "Expertise by sector" : "Expertise por sector"}</div>
          <h2 className="heading-lg mb-8 text-aegrix-text">
            {isEn ? (
              <>Solutions for companies that need <br /> <span className="text-aegrix-cyan">security, clarity, and growth.</span></>
            ) : (
              <>Soluciones para empresas que necesitan <br /> <span className="text-aegrix-cyan">seguridad, claridad y crecimiento.</span></>
            )}
          </h2>
          <p className="body-lg text-aegrix-muted">
            {isEn 
              ? "We adapt the Digital Control Layer to the specific requirements of each commercial sector in Latin America."
              : "Adaptamos la Capa de Control Digital a las necesidades específicas de cada sector comercial en Latinoamérica."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => {
            const Icon = iconMap[sector.icon];
            return (
              <Link 
                key={sector.name}
                href={`/${lang}/${sector.path}`}
                className={cn(
                  "relative p-6 sm:p-8 md:p-10 flex flex-col items-center justify-between text-center group transition-all duration-500 bg-aegrix-surface border border-aegrix-border rounded-[32px] shadow-sm hover:shadow-[0_0_35px_-5px_rgba(0,255,255,0.08)] hover:-translate-y-1.5 hover:border-aegrix-cyan/30 overflow-hidden cursor-pointer",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                )}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />
                
                <div className="flex flex-col items-center">
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-aegrix-bg-2 border border-aegrix-border flex items-center justify-center text-aegrix-cyan mb-6 group-hover:bg-aegrix-cyan group-hover:text-aegrix-bg transition-all duration-500 shadow-sm">
                    {Icon && <Icon size={30} />}
                  </div>
                  <h3 className="relative z-10 font-sora font-bold text-aegrix-text text-xl tracking-tight transition-colors duration-300 group-hover:text-aegrix-cyan">{sector.name}</h3>
                </div>

                <div className="relative z-10 mt-6 text-xs font-semibold text-aegrix-cyan opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5">
                  {isEn ? "View solution" : "Ver solución"}
                  <span className="text-sm">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
