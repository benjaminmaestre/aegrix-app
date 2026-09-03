'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart3, Code2, ShieldCheck } from 'lucide-react';
import heroBg from '@/public/images/aegrix-hero-command-center.avif';

interface HeroBackground {
  videoMp4: string;
  poster: string;
}

interface HeroProps {
  lang: 'en' | 'es';
  dict: {
    title_part1: string;
    title_highlight: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
  };
  activeBackground: HeroBackground;
}

const Hero = ({ lang, dict }: HeroProps) => {
  const isEnglish = lang === 'en';

  const capabilities = [
    {
      icon: ShieldCheck,
      title: isEnglish ? 'Cybersecurity' : 'Ciberseguridad',
      text: isEnglish ? 'Risks, access and technical controls.' : 'Riesgos, accesos y controles técnicos.',
    },
    {
      icon: Code2,
      title: isEnglish ? 'Software & Web' : 'Software & Web',
      text: isEnglish ? 'Business software and measurable web experiences.' : 'Software empresarial y experiencias web medibles.',
    },
    {
      icon: BarChart3,
      title: isEnglish ? 'Data & AI' : 'Datos e IA',
      text: isEnglish ? 'Automation, analytics and applied AI.' : 'Automatización, analítica e IA aplicada.',
    },
  ];

  return (
    <section className="relative min-h-[82vh] lg:min-h-screen overflow-hidden flex items-center pt-28 pb-20 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 dark:opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-r from-aegrix-bg via-aegrix-bg/92 to-aegrix-bg/60" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-aegrix-bg" />
        <div className="absolute inset-0 grid-bg opacity-[0.035]" />
      </div>

      <div className="container-width relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 max-w-3xl">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-aegrix-cyan/7 border border-aegrix-cyan/15 mb-6">
              <span className="text-[10px] sm:text-xs font-bold text-aegrix-cyan tracking-[0.15em] uppercase">
                {isEnglish ? 'Technology consulting for companies' : 'Consultoría tecnológica para empresas'}
              </span>
            </div>

            <h1 className="font-sora font-extrabold text-4xl sm:text-5xl lg:text-6xl text-aegrix-text mb-7 leading-[1.06] tracking-tight">
              {dict.title_part1}{' '}
              <span className="text-aegrix-cyan">{dict.title_highlight}</span>
            </h1>

            <p className="font-manrope text-base sm:text-lg md:text-xl text-aegrix-muted max-w-2xl mb-9 leading-relaxed">
              {dict.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={`/${lang}#diagnostico`}
                className="btn-primary min-h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-text"
              >
                {dict.cta_primary}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                href={`/${lang}#servicios`}
                className="btn-secondary min-h-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
              >
                {dict.cta_secondary}
              </Link>
            </div>

            <p className="mt-5 text-xs sm:text-sm text-aegrix-muted/80 max-w-xl">
              {isEnglish
                ? 'The scope, schedule and deliverables are defined before the project starts.'
                : 'El alcance, los tiempos y los entregables se definen antes de iniciar cada proyecto.'}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-aegrix-border bg-aegrix-surface/85 backdrop-blur-md p-5 sm:p-6 shadow-xl">
              <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-aegrix-cyan mb-2">
                  {isEnglish ? 'What we can evaluate' : 'Qué podemos evaluar'}
                </p>
                <p className="text-sm text-aegrix-muted leading-relaxed">
                  {isEnglish
                    ? 'The exact review depends on the objective and information available.'
                    : 'La revisión exacta depende del objetivo y de la información disponible.'}
                </p>
              </div>

              <div className="space-y-3">
                {capabilities.map((capability) => (
                  <div key={capability.title} className="flex items-start gap-4 rounded-xl border border-aegrix-border bg-aegrix-bg-2/70 p-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-aegrix-cyan/8 border border-aegrix-cyan/15 text-aegrix-cyan flex items-center justify-center">
                      <capability.icon size={19} aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-sm font-sora font-bold text-aegrix-text mb-1">{capability.title}</h2>
                      <p className="text-xs sm:text-sm text-aegrix-muted leading-relaxed">{capability.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-aegrix-border text-[11px] sm:text-xs text-aegrix-muted">
                {isEnglish ? 'No simulated live metrics or guaranteed outcomes.' : 'Sin métricas simuladas en vivo ni resultados garantizados.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
