'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PlatformSection = () => {
  const { ref: inViewRef, inView } = useInView();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Calculate slide-in offsets for each layer card
  const x0 = useTransform(scrollYProgress, [0.15, 0.35], [-60, 0]);
  const opacity0 = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  const x1 = useTransform(scrollYProgress, [0.22, 0.42], [60, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.22, 0.42], [0, 1]);

  const x2 = useTransform(scrollYProgress, [0.29, 0.49], [-60, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.29, 0.49], [0, 1]);

  const x3 = useTransform(scrollYProgress, [0.36, 0.56], [60, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.36, 0.56], [0, 1]);

  const xTransforms = [x0, x1, x2, x3];
  const opacityTransforms = [opacity0, opacity1, opacity2, opacity3];

  return (
    <section id="arquitectura" ref={sectionRef} className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="container-width" ref={inViewRef}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className={cn(
            "transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <h2 className="heading-lg mb-8 text-aegrix-text">
              Una sola capa para proteger, <br />
              <span className="text-aegrix-cyan">medir y acelerar tu operación.</span>
            </h2>
            <p className="body-lg mb-8 md:mb-10 text-aegrix-muted">
              AEGRIX conecta ciberseguridad, infraestructura web, analítica e inteligencia artificial en una estrategia coherente para que tu empresa opere con más control, confianza y velocidad.
            </p>
            
            <div className="space-y-6 mb-8 md:mb-12">
              {[
                { icon: ShieldCheck, text: "Seguridad integrada en cada nivel del sistema." },
                { icon: Zap, text: "Infraestructura web optimizada para alta conversión." },
                { icon: BarChart3, text: "Analítica inteligente para decisiones basadas en datos." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-aegrix-text/80 font-medium">
                  <div className="text-aegrix-cyan">
                    <item.icon size={20} />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>

            <Link href="#servicios" className="btn-primary">
              Explorar la Capa de Control
            </Link>
          </div>

          <div className="relative">
            {/* Visual representation of "Layers" */}
            <div className="relative aspect-square w-full max-w-125 mx-auto">
              <div className="absolute inset-0 bg-aegrix-cyan/10 blur-[100px] rounded-full" />
              
              <div className="relative h-full flex flex-col justify-center gap-6">
                {[
                  { name: 'AI Automation Layer', color: 'bg-aegrix-green', icon: Zap },
                  { name: 'Data Intelligence Layer', color: 'bg-purple-500', icon: BarChart3 },
                  { name: 'Web Infrastructure Layer', color: 'bg-aegrix-cyan', icon: Globe },
                  { name: 'Security Shield Layer', color: 'bg-blue-600', icon: ShieldCheck },
                ].map((layer, i) => {
                  const x = xTransforms[i];
                  const opacity = opacityTransforms[i];
                  return (
                    <motion.div 
                      key={i}
                      style={{ 
                        x,
                        opacity,
                        zIndex: 4 - i
                      }}
                      className={cn(
                        "group relative bg-aegrix-surface border border-aegrix-border p-5 md:p-6 rounded-xl shadow-2xl transition-colors duration-500 hover:border-aegrix-cyan/50 hover:-translate-y-1",
                        i === 0 ? "ml-0 mr-6 md:mr-15" : "",
                        i === 1 ? "ml-2 md:ml-5 mr-4 md:mr-10" : "",
                        i === 2 ? "ml-4 md:ml-10 mr-2 md:mr-5" : "",
                        i === 3 ? "ml-6 md:ml-15 mr-0" : ""
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={cn("p-2 rounded-lg text-white", layer.color)}>
                            <layer.icon size={18} />
                          </div>
                          <span className="font-sora font-bold text-aegrix-text text-sm md:text-base">{layer.name}</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-aegrix-green shadow-[0_0_8px_#22C55E]" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Globe = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default PlatformSection;
