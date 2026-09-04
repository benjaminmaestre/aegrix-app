'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BarChart3, CheckCircle2, Cpu, Globe, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

type HeroControlLayerProps = {
  lang: 'es' | 'en';
};

type ControlLayer = {
  id: string;
  shortLabel: string;
  label: string;
  description: string;
  icon: typeof Shield;
  tags: string[];
  status: string;
  color: string;
  bgColor: string;
  borderColor: string;
};

const controlLayersEs: ControlLayer[] = [
  {
    id: 'cybersecurity',
    shortLabel: 'Seguridad',
    label: 'Ciberseguridad',
    description: 'Evaluamos riesgos, accesos, configuraciones y superficie de ataque para fortalecer los controles que realmente necesita la organización.',
    icon: Shield,
    tags: ['Hardening', 'Control de acceso', 'Revisión de riesgos'],
    status: 'Evaluación y fortalecimiento',
    color: 'text-aegrix-cyan',
    bgColor: 'bg-aegrix-cyan/10',
    borderColor: 'border-aegrix-cyan/30',
  },
  {
    id: 'web-growth',
    shortLabel: 'Web',
    label: 'Software & Web',
    description: 'Diseñamos y optimizamos productos digitales con foco en arquitectura, rendimiento, SEO técnico y recorridos de conversión medibles.',
    icon: Globe,
    tags: ['SEO técnico', 'Rendimiento', 'Medición de conversión'],
    status: 'Diseño, desarrollo y rendimiento',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 'data-intelligence',
    shortLabel: 'Datos',
    label: 'Datos & Analítica',
    description: 'Organizamos fuentes, indicadores y reportes para convertir información dispersa en una base útil para decisiones y seguimiento.',
    icon: BarChart3,
    tags: ['KPIs', 'Power BI', 'Reportes ejecutivos'],
    status: 'Analítica y trazabilidad',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 'ai-automation',
    shortLabel: 'IA',
    label: 'IA & Automatización',
    description: 'Aplicamos automatización e inteligencia artificial a procesos concretos donde puedan reducir trabajo repetitivo, mejorar trazabilidad o acelerar análisis.',
    icon: Cpu,
    tags: ['Flujos de trabajo', 'Asistentes de IA', 'Automatización de procesos'],
    status: 'Automatización aplicada',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
  },
];

const controlLayersEn: ControlLayer[] = [
  {
    id: 'cybersecurity',
    shortLabel: 'Security',
    label: 'Cybersecurity',
    description: 'We assess risks, access, configurations and attack surface to strengthen the controls the organization actually needs.',
    icon: Shield,
    tags: ['Hardening', 'Access control', 'Risk review'],
    status: 'Assessment and strengthening',
    color: 'text-aegrix-cyan',
    bgColor: 'bg-aegrix-cyan/10',
    borderColor: 'border-aegrix-cyan/30',
  },
  {
    id: 'web-growth',
    shortLabel: 'Web',
    label: 'Software & Web',
    description: 'We design and optimize digital products with a focus on architecture, performance, technical SEO and measurable conversion journeys.',
    icon: Globe,
    tags: ['Technical SEO', 'Performance', 'Conversion measurement'],
    status: 'Design, development and performance',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 'data-intelligence',
    shortLabel: 'Data',
    label: 'Data & Analytics',
    description: 'We organize sources, indicators and reports to turn scattered information into a useful foundation for decisions and follow-up.',
    icon: BarChart3,
    tags: ['KPIs', 'Power BI', 'Executive reports'],
    status: 'Analytics and traceability',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 'ai-automation',
    shortLabel: 'AI',
    label: 'AI & Automation',
    description: 'We apply automation and artificial intelligence to concrete processes where they can reduce repetitive work, improve traceability or accelerate analysis.',
    icon: Cpu,
    tags: ['Workflows', 'AI assistants', 'Process automation'],
    status: 'Applied automation',
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
  },
];

const HeroControlLayer = ({ lang }: HeroControlLayerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isEnglish = lang === 'en';
  const controlLayers = isEnglish ? controlLayersEn : controlLayersEs;
  const activeLayer = controlLayers[activeIndex];

  return (
    <div className="relative w-full">
      <div className="absolute -inset-10 bg-aegrix-cyan/2 blur-[80px] rounded-full opacity-20 pointer-events-none" />

      <div className="relative grid grid-cols-1 md:grid-cols-12 bg-aegrix-surface/80 border border-aegrix-border rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="md:hidden flex flex-col border-b border-aegrix-border bg-aegrix-bg-2/30">
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-aegrix-border/50">
            <span className="text-[8.5px] font-bold text-aegrix-text/70 uppercase tracking-widest">
              {isEnglish ? 'AEGRIX capabilities' : 'Capacidades AEGRIX'}
            </span>
            <span className="text-[8px] font-semibold text-aegrix-text/30 tracking-wide">AEGRIX 360</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 p-2 bg-aegrix-bg/40">
            {controlLayers.map((layer, index) => (
              <button
                type="button"
                key={layer.id}
                onClick={() => setActiveIndex(index)}
                aria-pressed={activeIndex === index}
                className={cn(
                  'flex flex-col items-center justify-center py-1.5 px-1 rounded-lg border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60',
                  activeIndex === index
                    ? 'bg-aegrix-surface border-aegrix-cyan/20 shadow-[0_0_8px_rgba(0,194,255,0.08)]'
                    : 'bg-transparent border-transparent opacity-60 hover:opacity-100'
                )}
              >
                <div className={cn(
                  'p-1 rounded-md mb-0.5 transition-all duration-300',
                  activeIndex === index ? `${layer.bgColor} ${layer.color}` : 'text-aegrix-text/40'
                )}>
                  <layer.icon size={13} aria-hidden="true" />
                </div>
                <span className={cn(
                  'text-[7.5px] font-bold tracking-tighter truncate max-w-full text-center uppercase transition-colors',
                  activeIndex === index ? layer.color : 'text-aegrix-text/40'
                )}>
                  {layer.shortLabel}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="hidden md:block md:col-span-5 border-r border-aegrix-border p-6 bg-aegrix-bg-2/30">
          <div className="flex items-center justify-between mb-8 px-2">
            <span className="text-[10px] font-bold text-aegrix-text/70 uppercase tracking-widest">
              {isEnglish ? 'AEGRIX capabilities' : 'Capacidades AEGRIX'}
            </span>
            <span className="text-[9px] font-semibold text-aegrix-text/30 tracking-wide">AEGRIX 360</span>
          </div>

          <div className="space-y-2.5">
            {controlLayers.map((layer, index) => (
              <button
                type="button"
                key={layer.id}
                onClick={() => setActiveIndex(index)}
                aria-pressed={activeIndex === index}
                className={cn(
                  'w-full flex items-center gap-4 p-3.5 rounded-xl border transition-all duration-300 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60',
                  activeIndex === index
                    ? 'bg-aegrix-surface border-aegrix-border shadow-lg scale-[1.01]'
                    : 'bg-transparent border-transparent opacity-60 hover:opacity-100 hover:bg-aegrix-surface/50'
                )}
              >
                <div className={cn(
                  'p-2.5 rounded-lg transition-all duration-300',
                  activeIndex === index ? `${layer.bgColor} ${layer.color}` : 'bg-aegrix-surface text-aegrix-text/30'
                )}>
                  <layer.icon size={20} aria-hidden="true" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-[11px] font-bold text-aegrix-text uppercase tracking-tight truncate group-hover:text-aegrix-cyan transition-colors">
                    {layer.label}
                  </div>
                  <div className="text-[9px] text-aegrix-text/40 mt-1.5 uppercase tracking-wide truncate">
                    {layer.status}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-aegrix-border">
            <p className="text-[9px] text-aegrix-text/40 uppercase tracking-[0.16em] leading-relaxed">
              {isEnglish
                ? 'The exact combination is defined by the project scope and priorities.'
                : 'La combinación exacta se define según el alcance y las prioridades del proyecto.'}
            </p>
          </div>
        </div>

        <div className="md:col-span-7 p-4 sm:p-5 md:p-8 lg:p-10 min-h-[235px] md:min-h-[420px] flex flex-col relative overflow-hidden justify-between">
          <div className="absolute inset-0 grid-bg opacity-[0.025] pointer-events-none" aria-hidden="true" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 h-full flex flex-col justify-between"
            >
              <div>
                <div className="mb-3 md:mb-6 flex items-center justify-between gap-4">
                  <div className={cn(
                    'px-2.5 py-1 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-[0.15em] border backdrop-blur-sm',
                    activeLayer.color,
                    activeLayer.borderColor
                  )}>
                    {activeLayer.status}
                  </div>
                  <div className="text-[8px] md:text-[10px] font-semibold text-aegrix-text/25 uppercase tracking-[0.16em]">
                    {isEnglish ? 'Capability' : 'Capacidad'} {String(activeIndex + 1).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-sora font-bold text-aegrix-text mb-2 md:mb-6 leading-tight tracking-tight">
                  {activeLayer.label}
                </h3>

                <p className="text-aegrix-muted text-[11px] sm:text-sm md:text-lg leading-relaxed mb-5 md:mb-10 max-w-md opacity-90">
                  {activeLayer.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="text-[8px] md:text-[10px] font-bold text-aegrix-text/35 uppercase tracking-[0.25em] mb-3 md:mb-6 border-b border-aegrix-border pb-2">
                  {isEnglish ? 'Related capabilities' : 'Capacidades relacionadas'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-6">
                  {activeLayer.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} className={cn('md:w-[18px] md:h-[18px] shrink-0', activeLayer.color)} aria-hidden="true" />
                      <span className="text-[10px] sm:text-xs md:text-[13px] text-aegrix-text/80 font-medium tracking-tight">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-aegrix-bg-2" aria-hidden="true">
            <div className={cn('h-full w-full opacity-70', activeLayer.color.replace('text', 'bg'))} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroControlLayer;
