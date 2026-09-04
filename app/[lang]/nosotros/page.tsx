export const runtime = 'edge';

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { getDictionary } from '@/lib/get-dictionary';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/AboutAnimations';

export default async function NosotrosPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { about } = dict;

  const principles = [
    {
      number: '01',
      title: about.values.security,
      description:
        lang === 'es'
          ? 'La seguridad se incorpora desde la arquitectura, los accesos y las decisiones técnicas, no como una capa final.'
          : 'Security is built into architecture, access and technical decisions rather than added as a final layer.',
    },
    {
      number: '02',
      title: about.values.precision,
      description:
        lang === 'es'
          ? 'Las recomendaciones deben poder explicarse, verificarse y sostenerse con criterios técnicos y evidencia.'
          : 'Recommendations should be explainable, verifiable and supported by technical criteria and evidence.',
    },
    {
      number: '03',
      title: about.values.innovation,
      description:
        lang === 'es'
          ? 'La tecnología evoluciona; nuestras soluciones también, sin perseguir novedades que no aporten valor real.'
          : 'Technology evolves, and so do our solutions, without chasing novelty that adds no real value.',
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aegrix-cyan/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-aegrix-blue/5 blur-[100px] rounded-full -z-10" />

      <div className="container-width">
        <div className="max-w-4xl mb-24">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-aegrix-cyan/10 border border-aegrix-cyan/20 text-aegrix-cyan text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              {about.subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl font-sora font-extrabold text-aegrix-text mb-8 leading-[1.1] tracking-tight">
              {about.title}
            </h1>
            <p className="text-xl text-aegrix-muted leading-relaxed max-w-2xl">
              {about.description}
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-y border-aegrix-border mb-24">
          <FadeIn x={-20} y={0} delay={0.2}>
            <article className="h-full py-10 md:py-14 md:pr-12 border-b md:border-b-0 md:border-r border-aegrix-border">
              <div className="flex items-center gap-4 mb-7">
                <span className="font-mono text-[10px] font-bold tracking-[0.22em] text-aegrix-cyan">01</span>
                <span className="h-px w-10 bg-aegrix-cyan/40" aria-hidden="true" />
                <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-aegrix-text/70">
                  {about.mission_title}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-aegrix-text/90 leading-relaxed max-w-xl">
                {about.mission_text}
              </p>
            </article>
          </FadeIn>

          <FadeIn x={20} y={0} delay={0.3}>
            <article className="h-full py-10 md:py-14 md:pl-12">
              <div className="flex items-center gap-4 mb-7">
                <span className="font-mono text-[10px] font-bold tracking-[0.22em] text-aegrix-blue">02</span>
                <span className="h-px w-10 bg-aegrix-blue/40" aria-hidden="true" />
                <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-aegrix-text/70">
                  {about.vision_title}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-aegrix-text/90 leading-relaxed max-w-xl">
                {about.vision_text}
              </p>
            </article>
          </FadeIn>
        </div>

        <div className="mb-24">
          <FadeIn delay={0.4}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
              <h2 className="text-3xl md:text-4xl font-sora font-bold text-aegrix-text">
                {lang === 'es' ? 'Principios de ingeniería' : 'Engineering principles'}
              </h2>
              <p className="text-sm text-aegrix-muted max-w-md md:text-right leading-relaxed">
                {lang === 'es'
                  ? 'Tres criterios que usamos para tomar decisiones técnicas y evaluar nuestro propio trabajo.'
                  : 'Three criteria we use to make technical decisions and evaluate our own work.'}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-aegrix-border">
            {principles.map((principle, idx) => (
              <FadeIn key={principle.number} delay={0.1 * idx + 0.5}>
                <article className={`h-full py-9 md:py-11 ${idx > 0 ? 'border-t md:border-t-0 md:border-l border-aegrix-border md:pl-8' : ''} ${idx < principles.length - 1 ? 'md:pr-8' : ''}`}>
                  <div className="font-mono text-[10px] font-bold tracking-[0.24em] text-aegrix-cyan/70 mb-8">
                    {principle.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-sora font-semibold text-aegrix-text mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-sm md:text-base text-aegrix-muted leading-relaxed max-w-sm">
                    {principle.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>

        <ScaleIn delay={0.6}>
          <div className="relative p-6 sm:p-12 md:p-20 rounded-[40px] overflow-hidden text-center">
            <div className="absolute inset-0 bg-linear-to-br from-aegrix-cyan/20 to-aegrix-blue/20 -z-10" />
            <h2 className="text-3xl md:text-5xl font-sora font-extrabold text-aegrix-text mb-8">
              {lang === 'es' ? '¿Necesitas evaluar o fortalecer una operación crítica?' : 'Need to assess or strengthen a critical operation?'}
            </h2>
            <Link href={`/${lang}/aegrix-360`} className="btn-primary inline-flex items-center gap-3">
              {lang === 'es' ? 'Conocer AEGRIX 360' : 'Explore AEGRIX 360'}
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </ScaleIn>
      </div>
    </div>
  );
}
