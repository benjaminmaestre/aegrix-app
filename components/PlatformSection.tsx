'use client';

import React from 'react';
import { platformBlocks } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const PlatformSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg">
      <div className="container-width">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-20 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="heading-lg mb-6">
            Una sola capa para proteger, <br />
            <span className="text-aegrix-cyan">medir y acelerar tu operación.</span>
          </h2>
          <p className="body-lg">
            AEGRIX diseña soluciones que conectan la protección de datos, el desarrollo web y la analítica inteligente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platformBlocks.map((block, idx) => (
            <div 
              key={block.id}
              className={cn(
                "card-base card-hover border-l-2 border-l-aegrix-cyan transition-all duration-700 h-full flex flex-col",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              )}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="mb-6">
                <span className="label-tag bg-aegrix-bg text-[10px]">{block.label}</span>
              </div>
              <h3 className="heading-md mb-4">{block.title}</h3>
              <p className="body-md mb-8 flex-grow">{block.description}</p>
              <button className="btn-ghost group flex items-center gap-2 text-sm justify-start w-fit">
                {block.cta}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
