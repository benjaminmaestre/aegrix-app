'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Database, Globe, Lock, AlertCircle, MessageSquare, TrendingDown, Cpu } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';

const cardsData = [
  {
    id: 1,
    code: '[WARN_PAGINA_ESTATICA]',
    title: 'Tu página no vende',
    description: 'Tu sitio web se ve bien, pero no genera clientes reales ni consultas comerciales.',
    icon: Globe,
    num: '01',
    colorClass: 'text-pink-500',
    colorHex: '#EC4899',
    hoverBgClass: 'hover:bg-pink-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(236,72,153,0.01)]',
    iconHoverClass: 'group-hover:text-pink-500 group-hover:border-pink-500/20',
    dotShadow: 'shadow-[0_0_8px_rgba(236,72,153,0.6)]',
    lineDecor: 'bg-pink-500/10 group-hover:bg-pink-500/40',
    radarColor: 'bg-[linear-gradient(rgba(236,72,153,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.008)_1px,transparent_1px)]',
  },
  {
    id: 2,
    code: '[WARN_TRABAJO_REPETITIVO]',
    title: 'Caos operativo en Excel',
    description: 'Tus empleados pierden horas haciendo tareas repetitivas de forma manual en hojas de cálculo.',
    icon: Database,
    num: '02',
    colorClass: 'text-orange-500',
    colorHex: '#F97316',
    hoverBgClass: 'hover:bg-orange-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(249,115,22,0.01)]',
    iconHoverClass: 'group-hover:text-orange-500 group-hover:border-orange-500/20',
    dotShadow: 'shadow-[0_0_8px_rgba(249,115,22,0.6)]',
    lineDecor: 'bg-orange-500/10 group-hover:bg-orange-500/40',
    radarColor: 'bg-[linear-gradient(rgba(249,115,22,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.008)_1px,transparent_1px)]',
  },
  {
    id: 3,
    code: '[WARN_COMUNICACION_FUGA]',
    title: 'Fuga de chats en WhatsApp',
    description: 'Recibes mensajes de interesados por WhatsApp, pero no les haces seguimiento ni los mides.',
    icon: MessageSquare,
    num: '03',
    colorClass: 'text-green-500',
    colorHex: '#22C55E',
    hoverBgClass: 'hover:bg-green-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(34,197,94,0.01)]',
    iconHoverClass: 'group-hover:text-green-500 group-hover:border-green-500/20',
    dotShadow: 'shadow-[0_0_8px_rgba(34,197,94,0.6)]',
    lineDecor: 'bg-green-500/10 group-hover:bg-green-500/40',
    radarColor: 'bg-[linear-gradient(rgba(34,197,94,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.008)_1px,transparent_1px)]',
  },
  {
    id: 4,
    code: '[WARN_METRICAS_CIEGAS]',
    title: 'Medición comercial a ciegas',
    description: 'No sabes de dónde vienen tus prospectos ni cuántas oportunidades de venta pierdes al mes.',
    icon: TrendingDown,
    num: '04',
    colorClass: 'text-blue-500',
    colorHex: '#3B82F6',
    hoverBgClass: 'hover:bg-blue-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(59,130,246,0.01)]',
    iconHoverClass: 'group-hover:text-blue-500 group-hover:border-blue-500/20',
    dotShadow: 'shadow-[0_0_8px_rgba(59,130,246,0.6)]',
    lineDecor: 'bg-blue-500/10 group-hover:bg-blue-500/40',
    radarColor: 'bg-[linear-gradient(rgba(59,130,246,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.008)_1px,transparent_1px)]',
  },
  {
    id: 5,
    code: '[WARN_RIESGO_INFORMACION]',
    title: 'Desorden en seguridad digital',
    description: 'Tus empleados comparten archivos, contraseñas y correos sin políticas activas de protección.',
    icon: Lock,
    num: '05',
    colorClass: 'text-red-500',
    colorHex: '#EF4444',
    hoverBgClass: 'hover:bg-red-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(239,68,68,0.01)]',
    iconHoverClass: 'group-hover:text-red-500 group-hover:border-red-500/20',
    dotShadow: 'shadow-[0_0_8px_rgba(239,68,68,0.6)]',
    lineDecor: 'bg-red-500/10 group-hover:bg-red-500/40',
    radarColor: 'bg-[linear-gradient(rgba(239,68,68,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.008)_1px,transparent_1px)]',
  },
  {
    id: 6,
    code: '[WARN_IA_SIN_APLICAR]',
    title: 'Incertidumbre con IA',
    description: 'Quieres automatizar procesos o usar IA para reducir costos, pero no sabes por dónde empezar.',
    icon: Cpu,
    num: '06',
    colorClass: 'text-aegrix-cyan',
    colorHex: '#00C2FF',
    hoverBgClass: 'hover:bg-aegrix-cyan/[0.02] hover:shadow-[inset_0_0_24px_rgba(0,194,255,0.01)]',
    iconHoverClass: 'group-hover:text-aegrix-cyan group-hover:border-aegrix-cyan/20',
    dotShadow: 'shadow-[0_0_8px_rgba(0,194,255,0.6)]',
    lineDecor: 'bg-aegrix-cyan/10 group-hover:bg-aegrix-cyan/40',
    radarColor: 'bg-[linear-gradient(rgba(0,194,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(0,194,255,0.008)_1px,transparent_1px)]',
  },
];

const ProblemSection = () => {
  const { ref, inView } = useInView();
  const params = useParams();
  const lang = (params?.lang as string) || 'es';

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg relative overflow-hidden">
      {/* Subtle Background Mark */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.015] pointer-events-none">
        <AlertCircle size={400} />
      </div>

      <div className="container-width relative z-10">
        <div className={cn(
          "max-w-3xl mb-12 md:mb-20 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="label-tag mb-6 text-red-500 bg-red-500/5 border-red-500/20">
            {lang === 'en' ? 'EVALUATION: CURRENT RISKS' : 'EVALUACIÓN: RIESGOS ACTUALES'}
          </div>
          <h2 className="heading-lg mb-8 text-aegrix-text">
            {lang === 'en' ? 'Does your company face any of these challenges?' : '¿Tu empresa tiene alguno de estos problemas?'}
          </h2>
          <p className="body-lg text-aegrix-muted">
            {lang === 'en' 
              ? 'Many companies have tools, websites, and emails, but lack a coherent architecture that connects security, web, data, and growth. Identify which of these are stalling your business.'
              : 'Muchas empresas cuentan con herramientas, páginas web y correos, pero no con una arquitectura coherente que conecte ciberseguridad, web, datos e inteligencia artificial. Identifica cuáles están frenando tu negocio.'}
          </p>
        </div>

        {/* Monolithic Diagnostic Console Grid (3 columns for 6 items) */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {cardsData.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.id}
                className={cn(
                  "relative group p-6 sm:p-8 rounded-[24px] md:rounded-[32px] bg-aegrix-surface border border-aegrix-border hover:border-aegrix-cyan/20 flex flex-col justify-between transition-all duration-500",
                  card.hoverBgClass,
                  inView ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Tech grid texture in hover */}
                <div className={cn(
                  "absolute inset-0 bg-size-[15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[24px] md:rounded-[32px]",
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
          "mt-16 p-px rounded-[24px] bg-[linear-gradient(to_right,#EF4444,#F97316,#22C55E,#3B82F6)] relative overflow-hidden transition-all duration-1000 delay-500",
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          {/* Inner Content Box */}
          <div className="p-6 sm:p-8 md:p-10 rounded-[23px] bg-aegrix-surface flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Grid / Dots Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.015)_1px,transparent_1px)] bg-size-[20px_20px] opacity-35 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 flex-1">
              {/* Emergency Radar Icon */}
              <div className="relative flex items-center justify-center shrink-0">
                <div className="absolute w-16 h-16 rounded-full border border-red-500/15 animate-ping opacity-40" />
                <div className="absolute w-12 h-12 rounded-full border border-red-500/20" />
                <div className="relative p-4 rounded-full bg-red-500/10 text-red-500 border border-red-500/15">
                  <AlertCircle size={28} />
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-transparent bg-clip-text bg-linear-to-r from-red-500 via-orange-500 to-green-500 uppercase">
                    {lang === 'en' ? 'RECOMMENDED STATUS: SYSTEM AUDIT' : 'ESTADO RECOMENDADO: AUDITORÍA DE SISTEMAS'}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-sora font-extrabold text-aegrix-text mb-3">
                  {lang === 'en' ? 'If you checked 2 or more, you need a digital diagnosis.' : 'Si marcaste 2 o más, necesitas un diagnóstico digital.'}
                </h3>
                <p className="text-sm text-aegrix-muted max-w-2xl leading-relaxed">
                  {lang === 'en'
                    ? 'Do not keep operating blindly. We evaluate your web presence, conversion flow, operational processes, security, and AI opportunities completely free of charge.'
                    : 'No sigas operando a ciegas. Evaluamos gratis tu presencia web, flujos de conversión, procesos operativos, seguridad y oportunidades de automatización con IA.'}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 shrink-0 w-full lg:w-auto text-center">
              <Link 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block w-full sm:w-auto text-center"
              >
                {lang === 'en' ? 'Request Free Diagnosis' : 'Solicitar diagnóstico gratuito'}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
