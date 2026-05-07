'use client';

import React from 'react';
import { webBenefits } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { Target, CheckCircle2 } from 'lucide-react';

const WebGrowthSection = () => {
  const { ref, inView } = useInView();

  return (
    <section className="section-padding bg-aegrix-bg overflow-hidden">
      <div className="container-width">
        <div ref={ref} className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={cn(
            "order-2 lg:order-1 transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-aegrix-border shadow-lg group">
              <div className="absolute inset-0 bg-linear-to-br from-aegrix-cyan/20 to-transparent mix-blend-overlay opacity-50" />
              <div className="absolute inset-0 grid-bg opacity-10" />
              
              {/* Floating Performance Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="text-[120px] font-sora font-bold text-aegrix-text/5 tracking-tighter">100</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full border-4 border-aegrix-cyan border-t-transparent animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center text-aegrix-cyan font-sora font-bold text-xl">
                    99+
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 p-6 bg-aegrix-surface/80 backdrop-blur-md border border-aegrix-border rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[10px] font-bold text-aegrix-cyan uppercase tracking-widest">Performance Score</div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-aegrix-cyan" />)}
                  </div>
                </div>
                <div className="h-2 w-full bg-aegrix-bg-2 rounded-full overflow-hidden">
                  <div className="h-full bg-aegrix-cyan w-[98%]" />
                </div>
              </div>
            </div>
          </div>

          <div className={cn(
            "order-1 lg:order-2 transition-all duration-1000 delay-300",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="label-tag mb-8">AEGRIX Web</div>
            <h2 className="heading-lg mb-8 text-aegrix-text">
              Tu web no debe existir: <br />
              <span className="text-aegrix-cyan">debe trabajar.</span>
            </h2>
            <p className="body-lg mb-10 text-aegrix-muted">
              No hacemos simples páginas web. Diseñamos infraestructura digital premium optimizada para generar confianza, cargar a máxima velocidad y convertir visitantes en oportunidades comerciales reales.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {webBenefits.map((benefit, i) => (
                <div key={i} className="p-6 rounded-xl bg-aegrix-surface border border-aegrix-border hover:border-aegrix-cyan/20 transition-all">
                  <div className="text-aegrix-cyan mb-4 font-sora font-bold text-sm tracking-widest uppercase">{benefit.title}</div>
                  <p className="text-xs text-aegrix-muted leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-aegrix-cyan/5 border border-aegrix-cyan/20">
              <div className="flex items-center gap-4 text-aegrix-text font-sora font-bold text-lg mb-4">
                <Target size={24} className="text-aegrix-cyan" />
                Enfoque en Conversión
              </div>
              <ul className="space-y-3">
                {[
                  'Sitios corporativos en Next.js / React',
                  'Performance técnico impecable (100 Core Web Vitals)',
                  'Tracking de conversiones avanzado',
                  'SEO técnico inicial y escalabilidad'
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-aegrix-muted">
                    <CheckCircle2 size={16} className="text-aegrix-cyan shrink-0 mt-0.5" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebGrowthSection;
