'use client';

import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import Footer from './Footer';

export interface NicheCard {
  label: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; 'aria-hidden'?: boolean | 'true' | 'false' }>;
  colorClass: string;
  hoverBgClass?: string;
  radarColor?: string;
}

export interface NicheSolution {
  title: string;
  desc: string;
  features: string[];
}

export interface NicheContextLink {
  label: string;
  href: string;
}

interface NicheLandingTemplateProps {
  lang: 'es' | 'en';
  heroTagline: string;
  heroTitlePart1: string;
  heroTitleHighlight: string;
  heroDescription: string;
  heroWhatsAppUrl: string;
  heroPrimaryCta?: string;
  heroImageBaseName?: string;
  heroImageAlt?: string;
  problemsSectionTitle: string;
  problemsSectionDesc: string;
  problems: NicheCard[];
  solutionsSectionTitle: string;
  solutionsSectionDesc: string;
  solutions: NicheSolution[];
  diagnosticBannerTitle: string;
  diagnosticBannerDesc: string;
  diagnosticBannerCta: string;
  diagnosticWhatsAppUrl: string;
  contextualLinks?: NicheContextLink[];
}

const NicheLandingTemplate = ({
  lang,
  heroTagline,
  heroTitlePart1,
  heroTitleHighlight,
  heroDescription,
  heroWhatsAppUrl,
  heroPrimaryCta,
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
  contextualLinks = [],
}: NicheLandingTemplateProps) => {
  const isEnglish = lang === 'en';

  return (
    <div className="relative min-h-screen bg-aegrix-bg overflow-x-hidden">
      <section className="relative min-h-[72vh] flex items-center pt-32 pb-20 border-b border-aegrix-border">
        {heroImageBaseName && (
          <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <Image
              src={`/images/landings/${heroImageBaseName}.avif`}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-linear-to-r from-aegrix-bg via-aegrix-bg/92 to-aegrix-bg/65" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-aegrix-bg" />
          </div>
        )}

        <div className="container-width relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="label-tag mb-6">{heroTagline}</div>
            <h1 className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-aegrix-text leading-[1.08] tracking-tight mb-7">
              {heroTitlePart1}{' '}
              <span className="text-aegrix-cyan">{heroTitleHighlight}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-aegrix-muted leading-relaxed max-w-2xl mb-9">
              {heroDescription}
            </p>
            {heroImageAlt && <span className="sr-only">{heroImageAlt}</span>}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href={heroWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-12">
                {heroPrimaryCta ?? (isEnglish ? 'Request a diagnostic' : 'Solicitar diagnóstico')}
              </Link>
              <Link href="#soluciones" className="btn-secondary min-h-12">
                {isEnglish ? 'View services' : 'Ver servicios'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {contextualLinks.length > 0 && (
        <section className="section-padding bg-aegrix-bg-2 border-b border-aegrix-border">
          <div className="container-width">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-aegrix-cyan mb-4">
              {isEnglish ? 'Related assessment paths' : 'Rutas de evaluación relacionadas'}
            </p>
            <div className="flex flex-wrap gap-3">
              {contextualLinks.map((link) => (
                <Link key={link.href} href={link.href} className="btn-secondary min-h-11">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-aegrix-bg">
        <div className="container-width">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-aegrix-cyan mb-4">
              {isEnglish ? 'Common considerations' : 'Aspectos frecuentes'}
            </p>
            <h2 className="heading-lg mb-6 text-aegrix-text">{problemsSectionTitle}</h2>
            <p className="body-lg text-aegrix-muted">{problemsSectionDesc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
            {problems.map((card) => {
              const Icon = card.icon;
              return (
                <article key={`${card.label}-${card.title}`} className="rounded-2xl bg-aegrix-surface border border-aegrix-border p-6">
                  <div className="w-11 h-11 rounded-xl bg-aegrix-bg-2 border border-aegrix-border text-aegrix-cyan flex items-center justify-center mb-5">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-aegrix-muted mb-2">{card.label}</p>
                  <h3 className="text-lg font-sora font-bold text-aegrix-text mb-3">{card.title}</h3>
                  <p className="text-sm text-aegrix-muted leading-relaxed">{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="soluciones" className="section-padding bg-aegrix-bg-2 border-y border-aegrix-border">
        <div className="container-width">
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-aegrix-cyan mb-4">
              {isEnglish ? 'Services and scope' : 'Servicios y alcance'}
            </p>
            <h2 className="heading-lg mb-6 text-aegrix-text">{solutionsSectionTitle}</h2>
            <p className="body-lg text-aegrix-muted">{solutionsSectionDesc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {solutions.map((solution) => (
              <article key={solution.title} className="rounded-2xl bg-aegrix-surface border border-aegrix-border p-6 sm:p-8">
                <h3 className="text-xl font-sora font-bold text-aegrix-text mb-4">{solution.title}</h3>
                <p className="text-sm text-aegrix-muted leading-relaxed mb-6">{solution.desc}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-aegrix-text/80">
                      <CheckCircle2 size={16} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-aegrix-bg">
        <div className="container-width">
          <div className="rounded-2xl border border-aegrix-border bg-aegrix-surface p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-aegrix-cyan mb-3">
                {isEnglish ? 'Next step' : 'Siguiente paso'}
              </p>
              <h2 className="text-2xl md:text-3xl font-sora font-bold text-aegrix-text mb-3">{diagnosticBannerTitle}</h2>
              <p className="text-sm md:text-base text-aegrix-muted leading-relaxed">{diagnosticBannerDesc}</p>
            </div>
            <Link href={diagnosticWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0 min-h-12">
              {diagnosticBannerCta}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NicheLandingTemplate;
