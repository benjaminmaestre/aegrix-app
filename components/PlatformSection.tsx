'use client';

import React from 'react';
import Link from 'next/link';
import { platformBlocks } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { ArrowRight, Layers, ShieldCheck, Zap, BarChart3 } from 'lucide-react';

const PlatformSection = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg relative">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={cn(
            "transition-all duration-1000",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          )}>
            <div className="label-tag mb-8 bg-aegrix-cyan/10 text-aegrix-cyan border-aegrix-cyan/20">
              The Architecture
            </div>
            <h2 className="heading-lg mb-8 text-white">
              Una sola capa para proteger, <br />
              <span className="text-aegrix-cyan">medir y acelerar tu operación.</span>
            </h2>
            <p className="body-lg mb-10 text-aegrix-muted">
              AEGRIX conecta ciberseguridad, infraestructura web, analítica e inteligencia artificial en una estrategia coherente para que tu empresa opere con más control, confianza y velocidad.
            </p>
            
            <div className="space-y-6 mb-12">
              {[
                { icon: ShieldCheck, text: "Seguridad integrada en cada nivel del sistema." },
                { icon: Zap, text: "Infraestructura web optimizada para alta conversión." },
                { icon: BarChart3, text: "Analítica inteligente para decisiones basadas en datos." },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80 font-medium">
                  <div className="text-aegrix-cyan">
                    <item.icon size={20} />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>

            <Link href="/servicios" className="btn-primary px-10 group inline-flex items-center justify-center">
              Explorar la Capa de Control
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform ml-2" />
            </Link>
          </div>

          <div className={cn(
            "relative transition-all duration-1000 delay-300",
            inView ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-95"
          )}>
            {/* Visual representation of "Layers" */}
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-aegrix-cyan/10 blur-[100px] rounded-full" />
              
              <div className="relative h-full flex flex-col justify-center gap-6">
                {[
                  { name: 'AI Automation Layer', color: 'bg-aegrix-green', icon: Zap },
                  { name: 'Data Intelligence Layer', color: 'bg-purple-500', icon: BarChart3 },
                  { name: 'Web Infrastructure Layer', color: 'bg-aegrix-cyan', icon: Globe },
                  { name: 'Security Shield Layer', color: 'bg-blue-600', icon: ShieldCheck },
                ].map((layer, i) => (
                  <div 
                    key={i}
                    className="group relative bg-aegrix-surface border border-white/10 p-6 rounded-xl shadow-2xl transition-all duration-500 hover:border-aegrix-cyan/50 hover:-translate-y-1"
                    style={{ 
                      zIndex: 4 - i,
                      marginLeft: `${i * 20}px`,
                      marginRight: `${(3-i) * 20}px`
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={cn("p-2 rounded-lg text-white", layer.color)}>
                          <layer.icon size={18} />
                        </div>
                        <span className="font-sora font-bold text-white text-sm md:text-base">{layer.name}</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-aegrix-green shadow-[0_0_8px_#22C55E]" />
                    </div>
                  </div>
                ))}
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
