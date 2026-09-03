'use client';

import { useParams } from 'next/navigation';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Database, Globe, Lock, AlertCircle, MessageSquare, TrendingDown, Cpu } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';

const cardsData = [
  { id: 1, code: '[WARN_PAGINA_ESTATICA]', codeEn: '[WARN_STATIC_PAGE]', title: 'Tu página no vende', titleEn: 'Your website is not converting', description: 'Tu sitio web se ve bien, pero no genera clientes reales ni consultas comerciales.', descriptionEn: 'Your website may look good, but it is not generating qualified inquiries or measurable commercial actions.', icon: Globe, num: '01', colorClass: 'text-pink-500', hoverBgClass: 'hover:bg-pink-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(236,72,153,0.01)]', iconHoverClass: 'group-hover:text-pink-500 group-hover:border-pink-500/20', dotShadow: 'shadow-[0_0_8px_rgba(236,72,153,0.6)]', lineDecor: 'bg-pink-500/10 group-hover:bg-pink-500/40', radarColor: 'bg-[linear-gradient(rgba(236,72,153,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.008)_1px,transparent_1px)]' },
  { id: 2, code: '[WARN_TRABAJO_REPETITIVO]', codeEn: '[WARN_REPETITIVE_WORK]', title: 'Caos operativo en Excel', titleEn: 'Operational chaos in spreadsheets', description: 'Tus empleados pierden horas haciendo tareas repetitivas de forma manual en hojas de cálculo.', descriptionEn: 'Your team spends hours repeating manual tasks in spreadsheets that could be better structured or automated.', icon: Database, num: '02', colorClass: 'text-orange-500', hoverBgClass: 'hover:bg-orange-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(249,115,22,0.01)]', iconHoverClass: 'group-hover:text-orange-500 group-hover:border-orange-500/20', dotShadow: 'shadow-[0_0_8px_rgba(249,115,22,0.6)]', lineDecor: 'bg-orange-500/10 group-hover:bg-orange-500/40', radarColor: 'bg-[linear-gradient(rgba(249,115,22,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.008)_1px,transparent_1px)]' },
  { id: 3, code: '[WARN_COMUNICACION_FUGA]', codeEn: '[WARN_LEAD_FOLLOWUP]', title: 'Fuga de chats en WhatsApp', titleEn: 'Leads get lost in WhatsApp', description: 'Recibes mensajes de interesados por WhatsApp, pero no les haces seguimiento ni los mides.', descriptionEn: 'You receive prospect messages on WhatsApp, but follow-up and measurement are inconsistent.', icon: MessageSquare, num: '03', colorClass: 'text-green-500', hoverBgClass: 'hover:bg-green-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(34,197,94,0.01)]', iconHoverClass: 'group-hover:text-green-500 group-hover:border-green-500/20', dotShadow: 'shadow-[0_0_8px_rgba(34,197,94,0.6)]', lineDecor: 'bg-green-500/10 group-hover:bg-green-500/40', radarColor: 'bg-[linear-gradient(rgba(34,197,94,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.008)_1px,transparent_1px)]' },
  { id: 4, code: '[WARN_METRICAS_CIEGAS]', codeEn: '[WARN_BLIND_METRICS]', title: 'Medición comercial a ciegas', titleEn: 'Commercial performance without visibility', description: 'No sabes de dónde vienen tus prospectos ni cuántas oportunidades de venta pierdes al mes.', descriptionEn: 'You do not have clear visibility into where prospects come from or which commercial opportunities are being missed.', icon: TrendingDown, num: '04', colorClass: 'text-blue-500', hoverBgClass: 'hover:bg-blue-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(59,130,246,0.01)]', iconHoverClass: 'group-hover:text-blue-500 group-hover:border-blue-500/20', dotShadow: 'shadow-[0_0_8px_rgba(59,130,246,0.6)]', lineDecor: 'bg-blue-500/10 group-hover:bg-blue-500/40', radarColor: 'bg-[linear-gradient(rgba(59,130,246,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.008)_1px,transparent_1px)]' },
  { id: 5, code: '[WARN_RIESGO_INFORMACION]', codeEn: '[WARN_INFORMATION_RISK]', title: 'Desorden en seguridad digital', titleEn: 'Digital security needs structure', description: 'Tus empleados comparten archivos, contraseñas y correos sin políticas activas de protección.', descriptionEn: 'Files, credentials, and email may be handled without consistently applied protection policies and controls.', icon: Lock, num: '05', colorClass: 'text-red-500', hoverBgClass: 'hover:bg-red-500/[0.02] hover:shadow-[inset_0_0_24px_rgba(239,68,68,0.01)]', iconHoverClass: 'group-hover:text-red-500 group-hover:border-red-500/20', dotShadow: 'shadow-[0_0_8px_rgba(239,68,68,0.6)]', lineDecor: 'bg-red-500/10 group-hover:bg-red-500/40', radarColor: 'bg-[linear-gradient(rgba(239,68,68,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.008)_1px,transparent_1px)]' },
  { id: 6, code: '[WARN_IA_SIN_APLICAR]', codeEn: '[WARN_AI_WITHOUT_USE_CASE]', title: 'Incertidumbre con IA', titleEn: 'AI without a clear use case', description: 'Quieres automatizar procesos o usar IA para reducir costos, pero no sabes por dónde empezar.', descriptionEn: 'You want to automate processes or apply AI, but the first practical and measurable use case is still unclear.', icon: Cpu, num: '06', colorClass: 'text-aegrix-cyan', hoverBgClass: 'hover:bg-aegrix-cyan/[0.02] hover:shadow-[inset_0_0_24px_rgba(0,194,255,0.01)]', iconHoverClass: 'group-hover:text-aegrix-cyan group-hover:border-aegrix-cyan/20', dotShadow: 'shadow-[0_0_8px_rgba(0,194,255,0.6)]', lineDecor: 'bg-aegrix-cyan/10 group-hover:bg-aegrix-cyan/40', radarColor: 'bg-[linear-gradient(rgba(0,194,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(0,194,255,0.008)_1px,transparent_1px)]' },
];

const ProblemSection = () => {
  const { ref, inView } = useInView();
  const params = useParams();
  const lang = (params?.lang as string) || 'es';

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="absolute top-0 right-0 p-24 opacity-[0.015] pointer-events-none"><AlertCircle size={400} /></div>
      <div className="container-width relative z-10">
        <div className={cn('max-w-3xl mb-12 md:mb-20 transition-all duration-1000', inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          <div className="label-tag mb-6 text-red-500 bg-red-500/5 border-red-500/20">{lang === 'en' ? 'EVALUATION: CURRENT RISKS' : 'EVALUACIÓN: RIESGOS ACTUALES'}</div>
          <h2 className="heading-lg mb-8 text-aegrix-text">{lang === 'en' ? 'Does your company face any of these challenges?' : '¿Tu empresa tiene alguno de estos problemas?'}</h2>
          <p className="body-lg text-aegrix-muted">{lang === 'en' ? 'Many companies have tools, websites, and emails, but lack a coherent architecture that connects security, web, data, and growth. Identify which of these are stalling your business.' : 'Muchas empresas cuentan con herramientas, páginas web y correos, pero no con una arquitectura coherente que conecte ciberseguridad, web, datos e inteligencia artificial. Identifica cuáles están frenando tu negocio.'}</p>
        </div>

        <div className={cn('flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:overflow-visible transition-all duration-1000', inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}>
          {cardsData.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={card.id} className={cn('w-[80vw] shrink-0 snap-center md:w-auto relative group p-6 sm:p-8 rounded-[24px] md:rounded-[32px] bg-aegrix-surface border border-aegrix-border hover:border-aegrix-cyan/20 flex flex-col justify-between transition-all duration-500', card.hoverBgClass, inView ? 'opacity-100' : 'opacity-0')} style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className={cn('absolute inset-0 bg-size-[15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[24px] md:rounded-[32px]', card.radarColor)} />
                <div className="absolute top-8 right-8 font-mono text-[10px] font-bold text-aegrix-muted/30 group-hover:text-aegrix-text/20 transition-colors">{card.num}</div>
                <div>
                  <div className={cn('relative mb-8 p-3 w-fit rounded-xl bg-aegrix-bg-2 border border-aegrix-border text-aegrix-muted transition-all duration-500', card.iconHoverClass)}>
                    <Icon size={22} aria-hidden="true" />
                    <span className={cn('absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-current transition-transform duration-300 group-hover:scale-125', card.colorClass, card.dotShadow)} />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={cn('w-1.5 h-1.5 rounded-full bg-current animate-pulse', card.colorClass)} />
                    <span className={cn('font-mono text-[9px] font-bold uppercase tracking-[0.2em]', card.colorClass)}>{lang === 'en' ? card.codeEn : card.code}</span>
                  </div>
                  <h3 className="text-lg font-sora font-bold text-aegrix-text mb-3">{lang === 'en' ? card.titleEn : card.title}</h3>
                  <p className="text-sm text-aegrix-muted leading-relaxed">{lang === 'en' ? card.descriptionEn : card.description}</p>
                </div>
                <div className={cn('w-8 h-[2px] transition-all duration-500 mt-8', card.lineDecor)} />
              </div>
            );
          })}
        </div>

        <div className={cn('mt-16 p-px rounded-[24px] bg-[linear-gradient(to_right,#EF4444,#F97316,#22C55E,#3B82F6)] relative overflow-hidden transition-all duration-1000 delay-500', inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95')}>
          <div className="p-6 sm:p-8 md:p-10 rounded-[23px] bg-aegrix-surface flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.015)_1px,transparent_1px)] bg-size-[20px_20px] opacity-35 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 flex-1">
              <div className="relative flex items-center justify-center shrink-0">
                <div className="absolute w-16 h-16 rounded-full border border-red-500/15 animate-ping opacity-40" />
                <div className="absolute w-12 h-12 rounded-full border border-red-500/20" />
                <div className="relative p-4 rounded-full bg-red-500/10 text-red-500 border border-red-500/15"><AlertCircle size={28} aria-hidden="true" /></div>
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-transparent bg-clip-text bg-linear-to-r from-red-500 via-orange-500 to-green-500 uppercase">{lang === 'en' ? 'RECOMMENDED STATUS: SYSTEM REVIEW' : 'ESTADO RECOMENDADO: REVISIÓN DE SISTEMAS'}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-sora font-extrabold text-aegrix-text mb-3">{lang === 'en' ? 'If you identified 2 or more, a digital diagnostic may be useful.' : 'Si identificaste 2 o más, un diagnóstico digital puede ser útil.'}</h3>
                <p className="text-sm text-aegrix-muted max-w-2xl leading-relaxed">{lang === 'en' ? 'We can review your web presence, conversion flow, operational processes, security, and AI opportunities to identify practical priorities.' : 'Podemos revisar tu presencia web, flujos de conversión, procesos operativos, seguridad y oportunidades de automatización con IA para identificar prioridades concretas.'}</p>
              </div>
            </div>
            <div className="relative z-10 shrink-0 w-full lg:w-auto text-center">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block w-full sm:w-auto text-center">{lang === 'en' ? 'Request Diagnostic' : 'Solicitar diagnóstico'}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;