'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { Database, Globe, Clock, Lock, AlertCircle } from 'lucide-react';

const cardsData = [
  {
    id: 1,
    code: '[ERR_DATOS_DISPERSOS]',
    title: 'Datos dispersos',
    description: 'Información fragmentada en archivos, correos y plataformas sin una arquitectura que los conecte.',
    icon: Database,
    num: '01',
    colorClass: 'text-orange-500',
    colorHex: '#F97316',
    hoverBgClass: 'hover:bg-orange-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(249,115,22,0.01)]',
    iconHoverClass: 'group-hover:text-orange-500 group-hover:border-orange-500/20',
    dotShadow: 'shadow-[0_0_8px_rgba(249,115,22,0.6)]',
    lineDecor: 'bg-orange-500/10 group-hover:bg-orange-500/40',
    radarColor: 'bg-[linear-gradient(rgba(249,115,22,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.008)_1px,transparent_1px)]',
  },
  {
    id: 2,
    code: '[ERR_SIN_CONVERSION]',
    title: 'Web sin conversión',
    description: 'Páginas que existen como tarjetas de presentación, pero no generan leads ni confianza comercial.',
    icon: Globe,
    num: '02',
    colorClass: 'text-pink-500',
    colorHex: '#EC4899',
    hoverBgClass: 'hover:bg-pink-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(236,72,153,0.01)]',
    iconHoverClass: 'group-hover:text-pink-500 group-hover:border-pink-500/20',
    dotShadow: 'shadow-[0_0_8px_rgba(236,72,153,0.6)]',
    lineDecor: 'bg-pink-500/10 group-hover:bg-pink-500/40',
    radarColor: 'bg-[linear-gradient(rgba(236,72,153,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.008)_1px,transparent_1px)]',
  },
  {
    id: 3,
    code: '[ERR_REPORTES_MANUALES]',
    title: 'Reportes manuales',
    description: 'Horas perdidas procesando Excel críticos sin visibilidad en tiempo real de la operación.',
    icon: Clock,
    num: '03',
    colorClass: 'text-purple-500',
    colorHex: '#A855F7',
    hoverBgClass: 'hover:bg-purple-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(168,85,247,0.01)]',
    iconHoverClass: 'group-hover:text-purple-500 group-hover:border-purple-500/20',
    dotShadow: 'shadow-[0_0_8px_rgba(168,85,247,0.6)]',
    lineDecor: 'bg-purple-500/10 group-hover:bg-purple-500/40',
    radarColor: 'bg-[linear-gradient(rgba(168,85,247,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.008)_1px,transparent_1px)]',
  },
  {
    id: 4,
    code: '[ERR_INFO_VULNERABLE]',
    title: 'Información vulnerable',
    description: 'Accesos y sistemas expuestos por falta de una estrategia proactiva de seguridad digital.',
    icon: Lock,
    num: '04',
    colorClass: 'text-blue-500',
    colorHex: '#3B82F6',
    hoverBgClass: 'hover:bg-blue-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(59,130,246,0.01)]',
    iconHoverClass: 'group-hover:text-blue-500 group-hover:border-blue-500/20',
    dotShadow: 'shadow-[0_0_8px_rgba(59,130,246,0.6)]',
    lineDecor: 'bg-blue-500/10 group-hover:bg-blue-500/40',
    radarColor: 'bg-[linear-gradient(rgba(59,130,246,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.008)_1px,transparent_1px)]',
  },
];

const ProblemSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg relative overflow-hidden">
      {/* Subtle Background Mark */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.015] pointer-events-none">
        <AlertCircle size={400} />
      </div>

      <div className="container-width relative z-10">
        <div className={cn(
          "max-w-3xl mb-20 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="label-tag mb-6 text-red-500 bg-red-500/5 border-red-500/20">
            Diagnosis: Lack of System
          </div>
          <h2 className="heading-lg mb-8 text-aegrix-text">
            El problema no es la falta de tecnología. <br />
            <span className="text-aegrix-muted">Es la falta de sistema.</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            Muchas empresas tienen herramientas, archivos, páginas web, correos y datos, pero no tienen una arquitectura que conecte seguridad, web, datos y crecimiento. El resultado es caos operativo y riesgos invisibles.
          </p>
        </div>

        {/* Monolithic Diagnostic Console Grid */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-[32px] bg-aegrix-surface border border-aegrix-border overflow-hidden transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {cardsData.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                className={cn(
                  "relative group p-10 flex flex-col justify-between transition-all duration-500",
                  card.hoverBgClass,
                  "border-b border-aegrix-border/40 last:border-b-0",
                  "md:nth-1:border-b md:nth-2:border-b md:nth-3:border-b-0 md:nth-4:border-b-0 md:even:border-l md:odd:border-l-0",
                  "lg:border-b-0 lg:not-first:border-l lg:first:border-l-0",
                  inView ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Tech grid texture in hover */}
                <div className={cn(
                  "absolute inset-0 bg-size-[15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                  card.radarColor
                )} />

                {/* Card Number */}
                <div className="absolute top-8 right-8 font-mono text-[10px] font-bold text-aegrix-muted/30 group-hover:text-aegrix-text/20 transition-colors">
                  {card.num}
                </div>

                <div>
                  {/* Icon with status dot */}
                  <div className={cn(
                    "relative mb-8 p-3 w-fit rounded-xl bg-aegrix-bg-2 border border-aegrix-border text-aegrix-muted transition-all duration-500",
                    card.iconHoverClass
                  )}>
                    <Icon size={22} />
                    <span className={cn(
                      "absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-current transition-transform duration-300 group-hover:scale-125",
                      card.colorClass,
                      card.dotShadow
                    )} />
                  </div>

                  {/* Code identifier */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={cn("w-1.5 h-1.5 rounded-full bg-current animate-pulse", card.colorClass)} />
                    <span className={cn("font-mono text-[9px] font-bold uppercase tracking-[0.2em]", card.colorClass)}>
                      {card.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-sora font-bold text-aegrix-text mb-3">{card.title}</h3>
                  <p className="text-sm text-aegrix-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom tech line decor */}
                <div className={cn("w-8 h-[2px] transition-all duration-500 mt-8", card.lineDecor)} />
              </div>
            );
          })}
        </div>

        {/* Executive Console Alert (Aegrix 360 Ecosystem Gradient Border) */}
        <div className={cn(
          "mt-16 p-px rounded-[24px] bg-[linear-gradient(to_right,#F97316,#EC4899,#A855F7,#3B82F6)] relative overflow-hidden transition-all duration-1000 delay-500",
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          {/* Inner Content Box */}
          <div className="p-8 md:p-10 rounded-[23px] bg-aegrix-surface flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            {/* Grid / Dots Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.015)_1px,transparent_1px)] bg-size-[20px_20px] opacity-35 pointer-events-none" />

            {/* Emergency Radar Icon */}
            <div className="relative flex items-center justify-center shrink-0 z-10">
              <div className="absolute w-16 h-16 rounded-full border border-purple-500/15 animate-ping opacity-40" />
              <div className="absolute w-12 h-12 rounded-full border border-purple-500/20" />
              <div className="relative p-4 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/15">
                <AlertCircle size={28} />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex-1 text-center md:text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 uppercase">
                    ESTADO: CONTROL DEGRADADO
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-sora font-extrabold text-aegrix-text mb-3">
                  Pérdida de control digital
                </h3>
                <p className="text-sm text-aegrix-muted max-w-3xl leading-relaxed">
                  Cuando la infraestructura web, la seguridad y los datos no están conectados, la empresa pierde capacidad de reacción y escala con ineficiencias heredadas.
                </p>
              </div>

              <div className="font-mono text-[9px] text-purple-500/50 uppercase tracking-[0.3em] mt-5 pt-4 border-t border-purple-500/10 w-fit">
                NUCLEO_DIAGNOSTICO_AEGRIX / RIESGO_DEL_SISTEMA_DETECTADO
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
