'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { BarChart3, Cpu, Globe, Layout, Shield } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';
import { cn } from '@/lib/utils';

const CYAN = '#00D4D4';

type VisionSlideProps = {
  lang: 'es' | 'en';
};

const capabilitiesEs = [
  { icon: Shield, label: 'Ciberseguridad', detail: 'Riesgos y controles', className: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  { icon: Globe, label: 'Software & Web', detail: 'Arquitectura, SEO y rendimiento', className: 'text-aegrix-cyan bg-aegrix-cyan/10 border-aegrix-cyan/20' },
  { icon: BarChart3, label: 'Datos', detail: 'Analítica y trazabilidad', className: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
  { icon: Cpu, label: 'IA & Automatización', detail: 'Casos de uso aplicados', className: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
];

const capabilitiesEn = [
  { icon: Shield, label: 'Cybersecurity', detail: 'Risks and controls', className: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  { icon: Globe, label: 'Software & Web', detail: 'Architecture, SEO and performance', className: 'text-aegrix-cyan bg-aegrix-cyan/10 border-aegrix-cyan/20' },
  { icon: BarChart3, label: 'Data', detail: 'Analytics and traceability', className: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
  { icon: Cpu, label: 'AI & Automation', detail: 'Applied use cases', className: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
];

const VisionSlide = ({ lang }: VisionSlideProps) => {
  const [step, setStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const isEnglish = lang === 'en';
  const capabilities = isEnglish ? capabilitiesEn : capabilitiesEs;

  return (
    <div className="relative w-full h-full min-h-110 md:min-h-150 flex items-center justify-center overflow-hidden rounded-3xl md:rounded-[40px] z-20 border border-aegrix-border shadow-xl bg-aegrix-surface">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="vision"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            className="absolute inset-0 bg-aegrix-surface flex items-center justify-center p-5 sm:p-8 overflow-hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-[0.05]" aria-hidden="true" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 dark:bg-orange-400/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-400/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" aria-hidden="true" />

            <div className="relative z-10 text-center max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-aegrix-cyan/20 bg-aegrix-cyan/5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.24em] text-aegrix-cyan mb-6">
                {isEnglish ? 'AEGRIX 360 · Integrated view' : 'AEGRIX 360 · Visión integral'}
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-sora font-extrabold text-aegrix-text leading-tight">
                {isEnglish ? 'One strategy.' : 'Una estrategia.'} <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-purple-500 to-blue-500">
                  {isEnglish ? 'Four connected capabilities.' : 'Cuatro capacidades conectadas.'}
                </span>
              </h2>
              <p className="mt-5 md:mt-8 text-sm sm:text-lg md:text-xl text-aegrix-muted font-manrope max-w-3xl mx-auto leading-relaxed">
                {isEnglish
                  ? 'Cybersecurity, software, data and artificial intelligence working around business objectives, technical scope and defined deliverables.'
                  : 'Ciberseguridad, software, datos e inteligencia artificial trabajando sobre objetivos de negocio, alcance técnico y entregables definidos.'}
              </p>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="capabilities"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12 }}
            className="absolute inset-0 bg-aegrix-bg flex flex-col items-center justify-center p-5 sm:p-8"
          >
            <div className="text-center mb-8 md:mb-14">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
                {isEnglish ? 'AEGRIX architecture' : 'Arquitectura AEGRIX'}
              </span>
              <h2 className="mt-3 text-xl sm:text-3xl md:text-5xl font-sora font-bold text-aegrix-text">
                {isEnglish ? 'Technology creates more value when' : 'La tecnología tiene más valor cuando'} <br className="hidden sm:block" />
                {isEnglish ? 'every capability moves in the same direction.' : 'cada capacidad trabaja en la misma dirección.'}
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 w-full max-w-5xl">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.label}
                  initial={shouldReduceMotion ? false : { scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl bg-aegrix-surface border border-aegrix-border p-4 sm:p-6 text-center shadow-sm"
                >
                  <div className={cn('w-11 h-11 sm:w-14 sm:h-14 mx-auto rounded-xl border flex items-center justify-center mb-4', capability.className)}>
                    <capability.icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="text-xs sm:text-base font-sora font-bold text-aegrix-text mb-2">{capability.label}</h3>
                  <p className="text-[10px] sm:text-xs text-aegrix-muted leading-relaxed">{capability.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="architecture"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            className="absolute inset-0 bg-aegrix-bg-2 flex flex-col items-center justify-center p-5 sm:p-8 md:p-12"
          >
            <div className="text-center mb-6 md:mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
                {isEnglish ? 'Coordinated design' : 'Diseño coordinado'}
              </span>
              <h2 className="mt-3 text-xl sm:text-3xl md:text-5xl font-sora font-bold text-aegrix-text leading-tight">
                {isEnglish ? 'From assessment to an architecture' : 'Del diagnóstico a una arquitectura'} <br className="hidden sm:block" />
                {isEnglish ? 'that can be implemented and measured.' : 'que se pueda implementar y medir.'}
              </h2>
            </div>

            <div className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl border border-aegrix-border bg-aegrix-bg overflow-hidden shadow-xl">
              <div className="h-9 sm:h-11 bg-aegrix-surface border-b border-aegrix-border flex items-center justify-between px-4 sm:px-6">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-aegrix-text/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-aegrix-text/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-aegrix-text/15" />
                </div>
                <span className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.14em] text-aegrix-muted">
                  {isEnglish ? 'AEGRIX architecture map' : 'Mapa de arquitectura AEGRIX'}
                </span>
              </div>

              <div className="relative p-4 sm:p-7 md:p-9 grid sm:grid-cols-2 gap-3 sm:gap-5">
                <div className="absolute inset-0 grid-bg opacity-[0.025]" aria-hidden="true" />
                {capabilities.map((capability) => (
                  <div key={capability.label} className="relative z-10 flex items-center gap-4 rounded-xl border border-aegrix-border bg-aegrix-surface/70 p-4 sm:p-5">
                    <div className={cn('w-10 h-10 rounded-lg border flex items-center justify-center shrink-0', capability.className)}>
                      <capability.icon size={19} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-aegrix-text">{capability.label}</h3>
                      <p className="text-[10px] sm:text-xs text-aegrix-muted mt-1">{capability.detail}</p>
                    </div>
                  </div>
                ))}
                <div className="sm:col-span-2 relative z-10 mt-1 rounded-xl border border-aegrix-cyan/15 bg-aegrix-cyan/5 p-4 flex items-start gap-3">
                  <Layout className="text-aegrix-cyan shrink-0 mt-0.5" size={18} aria-hidden="true" />
                  <p className="text-xs sm:text-sm text-aegrix-muted leading-relaxed">
                    {isEnglish
                      ? 'The final architecture changes with the client context. Metrics are incorporated when they come from real project measurements and data.'
                      : 'La arquitectura final cambia según el contexto del cliente. Las métricas se incorporan cuando provienen de mediciones y datos reales del proyecto.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="cta"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            className="absolute inset-0 bg-aegrix-bg flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="absolute inset-0 grid-bg opacity-[0.04]" aria-hidden="true" />
            <div className="relative z-10 max-w-3xl">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-aegrix-cyan/10 border border-aegrix-cyan/20 flex items-center justify-center text-aegrix-cyan mb-6">
                <Layout size={26} aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-sora font-extrabold text-aegrix-text leading-tight">
                {isEnglish ? 'Define the next step' : 'Define el próximo paso'} <br />
                {isEnglish ? 'for your digital infrastructure.' : 'de tu infraestructura digital.'}
              </h2>
              <p className="mt-5 text-sm sm:text-lg text-aegrix-muted leading-relaxed max-w-2xl mx-auto">
                {isEnglish
                  ? 'We start from your current context to prioritize risks, opportunities and projects with a clear scope.'
                  : 'Partimos de tu contexto actual para priorizar riesgos, oportunidades y proyectos con un alcance claro.'}
              </p>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex mt-8 sm:mt-10"
              >
                {isEnglish ? 'Request AEGRIX diagnostic' : 'Solicitar diagnóstico AEGRIX'}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-50" aria-label={isEnglish ? 'Strategic view navigation' : 'Navegación de visión estratégica'}>
        {[0, 1, 2, 3].map((index) => (
          <button
            type="button"
            key={index}
            onClick={() => setStep(index)}
            aria-label={isEnglish ? `View panel ${index + 1}` : `Ver panel ${index + 1}`}
            aria-pressed={step === index}
            className="h-6 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60 rounded-full"
          >
            <span
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: step === index ? 32 : 8,
                backgroundColor: step === index ? CYAN : 'rgba(100,116,139,0.35)',
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default VisionSlide;
