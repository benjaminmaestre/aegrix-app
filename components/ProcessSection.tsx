'use client';

import React from 'react';
import { processSteps } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg" id="proceso">
      <div className="container-width">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-24 transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <span className="label-tag mb-6">Metodología</span>
          <h2 className="heading-lg mb-6">
            Un proceso claro, <br />
            <span className="text-aegrix-cyan">sin tecnicismos innecesarios.</span>
          </h2>
        </div>

        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="absolute top-12 left-0 w-full h-[1px] border-t border-dashed border-aegrix-cyan/20 hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className={cn(
                  "flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="relative mb-8">
                  <span className="font-sora font-black text-7xl text-aegrix-cyan/10 absolute -top-10 -left-4 lg:-left-2 select-none">
                    {step.number}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-aegrix-surface border border-aegrix-cyan/30 flex items-center justify-center text-aegrix-cyan shadow-cyan-sm relative z-10">
                    <span className="font-sora font-bold text-xl">{step.number}</span>
                  </div>
                  
                  {/* Arrow Connector (Desktop) */}
                  {idx < processSteps.length - 1 && (
                    <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden lg:block text-aegrix-cyan/20">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>

                <h3 className="font-sora font-bold text-xl text-white mb-4">{step.title}</h3>
                <p className="body-md text-sm leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
