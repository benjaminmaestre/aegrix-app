'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Globe, BarChart3, Cpu, CheckCircle2, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';

const controlLayers = [
  {
    id: 'cybersecurity',
    label: 'Sistema de Ciberseguridad',
    description: 'Riesgos, accesos y superficie de ataque bajo control operativo total.',
    icon: Shield,
    tags: ['Hardening', 'Access Control', 'Threat Review'],
    status: 'Protección activa',
    color: 'text-aegrix-cyan',
    bgColor: 'bg-aegrix-cyan/10',
    borderColor: 'border-aegrix-cyan/30'
  },
  {
    id: 'web-growth',
    label: 'Infraestructura Web',
    description: 'Infraestructura web de alto rendimiento diseñada para la conversión.',
    icon: Globe,
    tags: ['SEO Técnico', 'Performance', 'Conversion Tracking'],
    status: 'Performance optimizada',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30'
  },
  {
    id: 'data-intelligence',
    label: 'Inteligencia de Datos',
    description: 'Dashboards y reportes ejecutivos para decisiones basadas en evidencia.',
    icon: BarChart3,
    tags: ['KPIs', 'Power BI', 'Executive Reports'],
    status: 'Datos conectados',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30'
  },
  {
    id: 'ai-automation',
    label: 'Automatización Inteligente',
    description: 'Inteligencia artificial aplicada para automatizar procesos críticos.',
    icon: Cpu,
    tags: ['Workflows', 'AI Reports', 'Smart Operations'],
    status: 'Automatización lista',
    color: 'text-aegrix-green',
    bgColor: 'bg-aegrix-green/10',
    borderColor: 'border-aegrix-green/30'
  }
];

const HeroControlLayer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % controlLayers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeLayer = controlLayers[activeIndex];

  return (
    <div className="relative w-full">
      {/* Dynamic Glow that follows active layer theme (subtle) */}
      <div className="absolute -inset-10 bg-aegrix-cyan/2 blur-[80px] rounded-full opacity-20 pointer-events-none" />
      
      <div className="relative grid grid-cols-1 md:grid-cols-12 bg-aegrix-surface/80 border border-aegrix-border rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        {/* Mobile Header and Tabs */}
        <div className="md:hidden flex flex-col border-b border-aegrix-border bg-aegrix-bg-2/30">
          <div className="flex items-center justify-between px-4 py-3 border-b border-aegrix-border/50">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-aegrix-cyan animate-pulse" />
              <span className="text-[9px] font-bold text-aegrix-text/70 uppercase tracking-widest">Centro de Control</span>
            </div>
            <div className="text-[8px] font-mono text-aegrix-text/20 tracking-tighter">NODE_X-01</div>
          </div>
          <div className="grid grid-cols-4 gap-1 p-2">
            {controlLayers.map((layer, idx) => (
              <button
                key={layer.id}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "flex flex-col items-center justify-center p-2 rounded-lg border transition-all duration-300",
                  activeIndex === idx 
                    ? cn("bg-aegrix-surface border-aegrix-border shadow-md", layer.borderColor.replace('/30', '/15'))
                    : "bg-transparent border-transparent opacity-40 hover:opacity-100"
                )}
              >
                <div className={cn(
                  "p-1.5 rounded-md mb-1 transition-all duration-300",
                  activeIndex === idx ? layer.bgColor + " " + layer.color : "text-aegrix-text/40"
                )}>
                  <layer.icon size={16} />
                </div>
                <span className={cn(
                  "text-[8px] font-bold tracking-tighter truncate max-w-full text-center uppercase transition-colors",
                  activeIndex === idx ? layer.color : "text-aegrix-text/40"
                )}>
                  {layer.id === 'cybersecurity' ? 'Seguridad' : 
                   layer.id === 'web-growth' ? 'Web' : 
                   layer.id === 'data-intelligence' ? 'Datos' : 'IA'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Left Panel: Layer List (Desktop only) */}
        <div className="hidden md:block md:col-span-5 border-r border-aegrix-border p-6 bg-aegrix-bg-2/30">
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-aegrix-cyan animate-pulse" />
              <span className="text-[10px] font-bold text-aegrix-text/70 uppercase tracking-widest">Centro de Control</span>
            </div>
            <div className="text-[9px] font-mono text-aegrix-text/20 tracking-tighter">NODE_X-01</div>
          </div>

          <div className="space-y-2.5">
            {controlLayers.map((layer, idx) => (
              <button
                key={layer.id}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-full flex items-center gap-4 p-3.5 rounded-xl border transition-all duration-500 text-left group",
                  activeIndex === idx 
                    ? cn("bg-aegrix-surface border-aegrix-border shadow-lg scale-[1.02]", layer.borderColor.replace('/30', '/10'))
                    : "bg-transparent border-transparent opacity-40 hover:opacity-100 hover:bg-aegrix-surface/50"
                )}
              >
                <div className={cn(
                  "p-2.5 rounded-lg transition-all duration-500",
                  activeIndex === idx ? layer.bgColor + " " + layer.color : "bg-aegrix-surface text-aegrix-text/20"
                )}>
                  <layer.icon size={20} />
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="text-[11px] font-bold text-aegrix-text uppercase tracking-tight truncate group-hover:text-aegrix-cyan transition-colors">
                    {layer.label}
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <div className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-500",
                      activeIndex === idx ? "bg-aegrix-green" : "bg-aegrix-text/10"
                    )} />
                    <span className="text-[9px] text-aegrix-text/30 font-mono uppercase tracking-tighter">
                      {activeIndex === idx ? 'Operational' : 'Standby'}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom System Stats */}
          <div className="mt-8 pt-6 border-t border-aegrix-border">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[9px] text-aegrix-text/30 uppercase tracking-widest">System Load</span>
              <span className="text-[9px] font-mono text-aegrix-cyan">0.02ms</span>
            </div>
            <div className="h-1 w-full bg-aegrix-bg-2 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-aegrix-cyan"
                animate={{ width: ['20%', '60%', '45%', '80%', '30%'] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>
        </div>

        {/* Right Panel: Active Layer Detail */}
        <div className="md:col-span-7 p-5 md:p-12 min-h-[280px] md:min-h-[420px] flex flex-col relative overflow-hidden">
          {/* Animated Background Technical Marks */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none scale-150">
            <Activity size="100%" strokeWidth={0.5} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 h-full flex flex-col"
            >
              <div className="mb-4 md:mb-8 flex items-center justify-between">
                <div className={cn(
                  "px-3 py-1 rounded-sm text-[9px] font-bold uppercase tracking-[0.2em] border",
                  activeLayer.color,
                  activeLayer.borderColor.replace('/30', '/10')
                )}>
                  {activeLayer.status}
                </div>
                <div className="text-[10px] font-mono text-aegrix-text/10 uppercase tracking-[0.4em]">Node_{activeIndex + 1}</div>
              </div>

              <h3 className="text-xl md:text-4xl font-sora font-bold text-aegrix-text mb-3 md:mb-6 leading-tight tracking-tight">
                {activeLayer.label}
              </h3>
              
              <p className="text-aegrix-muted text-sm md:text-lg leading-relaxed mb-5 md:mb-10 max-w-sm opacity-80">
                {activeLayer.description}
              </p>

              <div className="mt-auto">
                <div className="text-[9px] md:text-[10px] font-bold text-aegrix-text/30 uppercase tracking-[0.3em] mb-3 md:mb-6 border-b border-aegrix-border pb-2">Technical Indicators</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-6">
                  {activeLayer.tags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-3.5 group/tag">
                      <div className={cn("transition-transform duration-300 group-hover/tag:scale-110", activeLayer.color)}>
                        <CheckCircle2 size={16} className="md:w-[18px] md:h-[18px]" />
                      </div>
                      <span className="text-xs md:text-[13px] text-aegrix-text/80 font-medium tracking-tight">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Progress Bar (Sequential) */}
          <div className="absolute bottom-0 left-0 w-full h-1.5 bg-aegrix-bg-2">
            <motion.div 
              key={activeIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              className={cn("h-full", activeLayer.color.replace('text', 'bg'))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroControlLayer;
