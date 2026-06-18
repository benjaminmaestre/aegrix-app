'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import Footer from './Footer';

export interface NicheCard {
  code: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  colorClass: string;
  hoverBgClass?: string;
  radarColor?: string;
}

export interface NicheSolution {
  title: string;
  desc: string;
  features: string[];
}

interface NicheLandingTemplateProps {
  lang: 'es' | 'en';
  // Hero Copy
  heroTagline: string;
  heroTitlePart1: string;
  heroTitleHighlight: string;
  heroDescription: string;
  heroWhatsAppUrl: string;
  heroImageBaseName?: string;
  heroImageAlt?: string;
  
  // Problems Section
  problemsSectionTitle: string;
  problemsSectionDesc: string;
  problems: NicheCard[];
  
  // Solutions Section
  solutionsSectionTitle: string;
  solutionsSectionDesc: string;
  solutions: NicheSolution[];
  
  // Diagnostic CTA Banner
  diagnosticBannerTitle: string;
  diagnosticBannerDesc: string;
  diagnosticBannerCta: string;
  diagnosticWhatsAppUrl: string;
}

const NicheLandingTemplate = ({
  lang,
  heroTagline,
  heroTitlePart1,
  heroTitleHighlight,
  heroDescription,
  heroWhatsAppUrl,
  heroImageBaseName,
  heroImageAlt,
  problemsSectionTitle,
  problemsSectionDesc,
  problems,
  solutionsSectionTitle,
  solutionsSectionDesc,
  solutions,
  diagnosticBannerTitle,
  diagnosticBannerDesc,
  diagnosticBannerCta,
  diagnosticWhatsAppUrl,
}: NicheLandingTemplateProps) => {
  return (
    <div className="relative min-h-screen bg-aegrix-bg overflow-x-hidden">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center pt-32 pb-20">
        {/* Background Image Overlay */}
        {heroImageBaseName && (
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
            <picture className="w-full h-full">
              {/* Mobile size */}
              <source media="(max-width: 640px)" srcSet={`/images/landings/${heroImageBaseName}-mobile.avif`} type="image/avif" />
              
              {/* Tablet size */}
              <source media="(max-width: 1024px)" srcSet={`/images/landings/${heroImageBaseName}-tablet.avif`} type="image/avif" />
              
              {/* Desktop fallback */}
              <img 
                src={`/images/landings/${heroImageBaseName}.avif`} 
                alt={heroImageAlt || "AEGRIX"}
                className="w-full h-full object-cover object-center lg:object-right opacity-[0.65] transition-opacity duration-700" 
              />
            </picture>
            
            {/* Custom dark gradient overlay (horizontal on desktop, vertical on mobile) to ensure text contrast */}
            <div className="absolute inset-0 bg-linear-to-r from-aegrix-bg/95 via-aegrix-bg/50 to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-linear-to-b from-aegrix-bg/35 via-aegrix-bg/70 to-aegrix-bg lg:hidden" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-aegrix-bg" />
          </div>
        )}

        {/* Background ambience */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,255,0.02),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.02),transparent_50%)]" />
          <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        </div>

        <div className="container-width relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 xl:col-span-6 text-center lg:text-left">
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="label-tag mb-6 border-aegrix-cyan/20 text-aegrix-cyan w-fit mx-auto lg:mx-0"
              >
                {heroTagline}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-aegrix-text mb-8 leading-[1.15] tracking-tight"
              >
                {heroTitlePart1} <br />
                <span className="text-aegrix-cyan">{heroTitleHighlight}</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-manrope text-base sm:text-lg md:text-xl text-aegrix-muted max-w-2xl mx-auto lg:mx-0 mb-10 md:mb-12 leading-relaxed opacity-90"
              >
                {heroDescription}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6"
              >
                <Link 
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto text-center"
                >
                  Solicitar diagnóstico 360
                </Link>
                <Link 
                  href="#soluciones" 
                  className="btn-secondary w-full sm:w-auto text-center"
                >
                  Ver soluciones para mi empresa
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEMS SECTION (CHECKLIST) ── */}
      <section className="section-padding bg-aegrix-bg relative overflow-hidden border-t border-aegrix-border/40">
        <div className="container-width relative z-10">
          <div className="max-w-3xl mb-12 md:mb-20">
            <div className="label-tag mb-6 text-red-500 bg-red-500/5 border-red-500/20">
              {lang === 'en' ? 'EVALUATION: COMMON RISKS' : 'EVALUACIÓN: RIESGOS COMUNES'}
            </div>
            <h2 className="heading-lg mb-6 text-aegrix-text">
              {problemsSectionTitle}
            </h2>
            <p className="body-lg text-aegrix-muted">
              {problemsSectionDesc}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {problems.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={cn(
                    "relative group p-6 sm:p-8 rounded-[24px] md:rounded-[32px] bg-aegrix-surface border border-aegrix-border hover:border-aegrix-cyan/20 flex flex-col justify-between transition-all duration-500",
                    card.hoverBgClass || "hover:bg-white/1"
                  )}
                >
                  {/* Tech grid texture in hover */}
                  {card.radarColor && (
                    <div className={cn(
                      "absolute inset-0 bg-size-[15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[24px] md:rounded-[32px]",
                      card.radarColor
                    )} />
                  )}

                  <div>
                    {/* Icon */}
                    <div className="relative mb-6 p-3 w-fit rounded-xl bg-aegrix-bg-2 border border-aegrix-border text-aegrix-muted transition-all duration-500 group-hover:text-aegrix-cyan group-hover:border-aegrix-cyan/20">
                      <Icon size={22} />
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. SOLUTIONS SECTION ── */}
      <section id="soluciones" className="section-padding bg-aegrix-bg-2 relative overflow-hidden border-t border-aegrix-border/40">
        <div className="container-width relative z-10">
          <div className="max-w-3xl mb-12 md:mb-20">
            <div className="label-tag mb-6 text-aegrix-cyan border-aegrix-cyan/20">
              {lang === 'en' ? 'SERVICES & SOLUTIONS' : 'SERVICIOS Y SOLUCIONES'}
            </div>
            <h2 className="heading-lg mb-6 text-aegrix-text">
              {solutionsSectionTitle}
            </h2>
            <p className="body-lg text-aegrix-muted">
              {solutionsSectionDesc}
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-[24px] md:rounded-[32px] bg-aegrix-surface border border-aegrix-border flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-sora font-bold text-aegrix-text mb-4 border-b border-aegrix-border pb-3">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-aegrix-muted leading-relaxed mb-6">
                    {sol.desc}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {sol.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-aegrix-text/80">
                      <CheckCircle2 size={14} className="text-aegrix-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DIAGNOSTIC CTA BANNER ── */}
      <section className="section-padding bg-aegrix-bg relative overflow-hidden border-t border-aegrix-border/40">
        <div className="container-width relative z-10">
          <div className="p-px rounded-[24px] bg-[linear-gradient(to_right,#EF4444,#F97316,#22C55E,#3B82F6)] relative overflow-hidden">
            <div className="p-6 sm:p-8 md:p-10 rounded-[23px] bg-aegrix-surface flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.01)_1px,transparent_1px)] bg-size-[20px_20px] opacity-30 pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 flex-1">
                <div className="relative flex items-center justify-center shrink-0">
                  <div className="absolute w-16 h-16 rounded-full border border-red-500/15 animate-ping opacity-40" />
                  <div className="absolute w-12 h-12 rounded-full border border-red-500/20" />
                  <div className="relative p-4 rounded-full bg-red-500/10 text-red-500 border border-red-500/15">
                    <AlertCircle size={28} />
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-transparent bg-clip-text bg-linear-to-r from-red-500 via-orange-500 to-green-500 uppercase">
                      {lang === 'en' ? 'RECOMMENDED ACTION: AUDIT' : 'ACCIÓN RECOMENDADA: AUDITORÍA'}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-sora font-extrabold text-aegrix-text mb-3">
                    {diagnosticBannerTitle}
                  </h3>
                  <p className="text-sm text-aegrix-muted max-w-2xl leading-relaxed">
                    {diagnosticBannerDesc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 shrink-0 w-full lg:w-auto text-center">
                <Link 
                  href={diagnosticWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block w-full sm:w-auto text-center"
                >
                  {diagnosticBannerCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FOOTER ── */}
      <Footer />
    </div>
  );
};

// Simple helper class helper for conditional Tailwind classes
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default NicheLandingTemplate;
