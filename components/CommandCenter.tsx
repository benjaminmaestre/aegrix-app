'use client';

import React from 'react';
import Image from 'next/image';
import { commandMetrics } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Shield, Activity, Zap, BarChart3, Lock, Cpu, Globe, ArrowUpRight } from 'lucide-react';

const CommandCenter = () => {
  return (
    <div className="bg-[#0A0F1A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Bar - Operating System Feel */}
      <div className="bg-[#121926] border-b border-white/5 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          <div className="h-4 w-px bg-white/10 mx-2" />
          <div className="flex items-center gap-2">
            <Image 
              src="/AEGRIX_hero_vector.svg" 
              alt="AEGRIX" 
              width={60} 
              height={16} 
              className="h-3 w-auto opacity-80"
            />
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Control Center v4.0</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-aegrix-green/10 border border-aegrix-green/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aegrix-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-aegrix-green"></span>
            </span>
            <span className="text-[9px] font-bold text-aegrix-green uppercase tracking-[0.2em]">Sistema activo</span>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commandMetrics.map((metric, idx) => {
            const Icon = idx === 0 ? Lock : idx === 1 ? Zap : idx === 2 ? Activity : Cpu;
            const iconColor = idx === 0 ? 'text-aegrix-cyan' : idx === 1 ? 'text-yellow-500' : idx === 2 ? 'text-purple-500' : 'text-aegrix-green';
            const bgColor = idx === 0 ? 'bg-aegrix-cyan/10' : idx === 1 ? 'bg-yellow-500/10' : idx === 2 ? 'bg-purple-500/10' : 'bg-aegrix-green/10';
            const borderColor = idx === 0 ? 'border-aegrix-cyan/20' : idx === 1 ? 'border-yellow-500/20' : idx === 2 ? 'border-purple-500/20' : 'border-aegrix-green/20';

            return (
              <div key={idx} className="bg-white/2 border border-white/5 rounded-xl p-5 hover:bg-white/4 transition-colors group">
                <div className="flex items-center justify-between mb-6">
                  <div className={cn("p-2 rounded-lg border", bgColor, borderColor, iconColor)}>
                    <Icon size={16} />
                  </div>
                  <span className={cn("text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded", bgColor, iconColor)}>
                    {metric.label}
                  </span>
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{metric.layer}</div>
                <div className="text-3xl font-sora font-bold text-white mb-2">{metric.value}</div>
                {idx === 0 && (
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-aegrix-cyan shadow-[0_0_10px_rgba(0,194,255,0.5)]" />
                  </div>
                )}
                {idx === 1 && (
                  <div className="flex items-center gap-1 text-[10px] text-aegrix-green font-bold">
                    <ArrowUpRight size={12} />
                    +14% Performance
                  </div>
                )}
                {idx === 2 && <div className="text-[10px] text-white/60">Fuentes conectadas y activas</div>}
                {idx === 3 && <div className="text-[10px] text-white/60">Reportes generados: 12 hoy</div>}
              </div>
            );
          })}
        </div>

        {/* System Graph and Status */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/1 border border-white/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-white/60">
                  <BarChart3 size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-widest">Rendimiento Operativo</div>
                  <div className="text-[10px] text-white/40">Comparativa: Seguridad vs Velocidad vs Datos</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-aegrix-cyan" />
                  <span className="text-[10px] text-white/60">Crecimiento</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-[10px] text-white/60">Riesgo</span>
                </div>
              </div>
            </div>
            
            <div className="h-48 w-full relative">
              <svg viewBox="0 0 800 200" className="w-full h-full">
                <path 
                  d="M0,180 Q100,170 200,120 T400,80 T600,40 T800,10" 
                  fill="none" 
                  stroke="#00C2FF" 
                  strokeWidth="3" 
                  className="drop-shadow-[0_0_10px_rgba(0,194,255,0.5)]"
                />
                <path 
                  d="M0,190 Q150,185 300,160 T500,140 T800,120" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="2" 
                />
                <line x1="0" y1="200" x2="800" y2="200" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
                <line x1="0" y1="100" x2="800" y2="100" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
                <line x1="0" y1="50" x2="800" y2="50" stroke="white" strokeWidth="1" strokeOpacity="0.05" />
              </svg>
            </div>
          </div>

          <div className="bg-white/1 border border-white/5 rounded-xl p-6">
            <div className="text-xs font-bold text-white uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Claridad Operativa</div>
            <div className="space-y-5">
              {[
                { label: 'Control Posture', value: 94, color: 'bg-aegrix-cyan' },
                { label: 'Decision Score', value: 88, color: 'bg-aegrix-cyan/60' },
                { label: 'System Integrity', value: 100, color: 'bg-aegrix-green' },
              ].map((kpi, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-white/60 uppercase tracking-widest">{kpi.label}</span>
                    <span className="text-[10px] font-bold text-white">{kpi.value}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className={cn("h-full", kpi.color)} style={{ width: `${kpi.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-4 rounded-lg bg-white/3 border border-white/5">
              <div className="text-[9px] text-white/40 uppercase tracking-widest mb-2 italic">Reflexión estratégica:</div>
              <div className="text-[11px] text-white/80 leading-relaxed font-medium italic">
                &quot;Tu web no debe existir: debe trabajar.&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandCenter;
