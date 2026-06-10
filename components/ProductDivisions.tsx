'use client';

import React from 'react';
import Link from 'next/link';
import { productDivisions, WHATSAPP_URL } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { Shield, Globe, Cpu, Heart, CheckCircle2, type LucideIcon } from 'lucide-react';
import BrandMarquee from './BrandMarquee';

const icons: Record<string, LucideIcon> = {
  shield: Shield,
  web: Globe,
  'data-ai': Cpu,
  care: Heart,
};

const ProductDivisions = () => {
  const { ref, inView } = useInView();

  return (
    <section id="servicios" ref={ref} className="section-padding bg-aegrix-bg-2">
      <div className="container-width">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="heading-lg mb-8 text-aegrix-text">
            Diseñamos sistemas digitales <br />
            <span className="text-aegrix-cyan">seguros, medibles e inteligentes.</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            No vendemos herramientas sueltas. Construimos la infraestructura digital que tu empresa necesita para operar con control absoluto.
          </p>
        </div>

        <div className="flex lg:grid overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-8 lg:grid-cols-2 pb-6 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-none">
          {productDivisions.map((division, idx) => {
            const Icon = icons[division.id];
            return (
              <div 
                key={division.id}
                className={cn(
                  "relative p-10 rounded-[32px] bg-aegrix-surface border border-aegrix-border hover:border-aegrix-cyan/20 transition-all duration-700 flex flex-col shadow-sm hover:shadow-xl overflow-hidden",
                  "w-[85%] sm:w-[50%] lg:w-auto shrink-0 snap-align-start",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-xl bg-aegrix-bg-2 border border-aegrix-border text-aegrix-cyan">
                    <Icon size={32} />
                  </div>
                  <div className="text-[10px] font-bold text-aegrix-text/20 uppercase tracking-[0.3em]">
                    AEGRIX Division
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="heading-md text-aegrix-text mb-3">{division.title}</h3>
                  <div className="text-sm font-bold text-aegrix-cyan uppercase tracking-widest mb-4">
                    {division.tagline}
                  </div>
                  <p className="body-md text-aegrix-muted leading-relaxed">
                    {division.description}
                  </p>
                </div>

                <div className="grow mb-10 space-y-3">
                  {division.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-aegrix-text/70">
                      <CheckCircle2 size={16} className="text-aegrix-cyan" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link 
                  href={WHATSAPP_URL} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                >
                  Saber más sobre {division.id === 'web' ? 'Infraestructura Web' : division.title.split(' ')[1]}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <p className="text-center text-aegrix-muted italic font-medium mb-12">
            &quot;Menos caos operativo. Más control digital.&quot;
          </p>
          <BrandMarquee />
        </div>
      </div>
    </section>
  );
};

export default ProductDivisions;
