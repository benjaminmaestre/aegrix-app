'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const FAQSection = () => {
  const { ref, inView } = useInView();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg-2 overflow-hidden">
      <div className="container-width">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className={cn(
            "lg:col-span-4 transition-all duration-700",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <span className="label-tag mb-6">FAQ</span>
            <h2 className="heading-lg mb-6">Preguntas frecuentes</h2>
            <p className="body-lg">
              Resolvemos tus dudas sobre cómo AEGRIX puede ayudar a tu empresa a operar con más seguridad y claridad.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className={cn(
            "lg:col-span-8 space-y-4 transition-all duration-700 delay-300",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            {faqItems.map((item) => (
              <div 
                key={item.id}
                className="border-b border-aegrix-border"
              >
                <button 
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex justify-between items-center py-6 text-left group"
                >
                  <span className={cn(
                    "font-manrope font-semibold text-lg transition-colors duration-300",
                    openId === item.id ? "text-aegrix-cyan" : "text-white group-hover:text-aegrix-cyan/70"
                  )}>
                    {item.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={cn(
                      "text-aegrix-cyan transition-transform duration-300",
                      openId === item.id ? "rotate-180" : ""
                    )} 
                  />
                </button>
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="body-md text-sm pb-8 pr-12 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
