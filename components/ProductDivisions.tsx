'use client';

import React from 'react';
import Link from 'next/link';
import { productDivisions, WHATSAPP_URL } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { Shield, Globe, Cpu, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

const icons: Record<string, any> = {
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
          <h2 className="heading-lg mb-8 text-white">
            Diseñamos sistemas digitales <br />
            <span className="text-aegrix-cyan">seguros, medibles e inteligentes.</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            No vendemos herramientas sueltas. Construimos la infraestructura digital que tu empresa necesita para operar con control absoluto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productDivisions.map((division, idx) => {
            const Icon = icons[division.id];
            return (
              <div 
                key={division.id}
                className={cn(
                  "card-base bg-[#0C121E] border-white/3 hover:border-aegrix-cyan/20 transition-all duration-700 flex flex-col",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="p-4 rounded-xl bg-white/2 border border-white/5 text-aegrix-cyan">
                    <Icon size={32} />
                  </div>
                  <div className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
                    AEGRIX Division
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="heading-md text-white mb-3">{division.title}</h3>
                  <div className="text-sm font-bold text-aegrix-cyan uppercase tracking-widest mb-4">
                    {division.tagline}
                  </div>
                  <p className="body-md text-aegrix-muted leading-relaxed">
                    {division.description}
                  </p>
                </div>

                <div className="grow mb-10">
                  {division.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/70">
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

        <div className="mt-20 text-center">
          <p className="text-aegrix-muted italic font-medium mb-8">
            "Menos caos operativo. Más control digital."
          </p>
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-white/2 border border-white/5 grayscale opacity-50">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Next.js</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">React</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Tailwind</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">AWS</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Azure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDivisions;
