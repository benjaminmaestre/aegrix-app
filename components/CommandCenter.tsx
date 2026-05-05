import React from 'react';
import Image from 'next/image';
import { commandMetrics } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Shield, Activity, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';

const CommandCenter = () => {
  return (
    <div className="bg-aegrix-surface border border-aegrix-cyan/15 rounded-2xl p-6 shadow-cyan-lg relative overflow-hidden">
      {/* ZONA 1 — Header */}
      <div className="flex justify-between items-center mb-8 pb-4 border-b border-aegrix-border">
        <div className="flex items-center gap-2">
          <Image 
            src="/AEGRIX_hero_vector.svg" 
            alt="AEGRIX" 
            width={60} 
            height={16} 
            className="h-4 w-auto object-contain brightness-150"
          />
          <span className="text-[10px] font-bold text-aegrix-muted uppercase tracking-widest">Control Center</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aegrix-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-aegrix-green"></span>
          </span>
          <span className="text-[10px] font-bold text-aegrix-green uppercase tracking-widest">Sistema activo</span>
        </div>
      </div>

      {/* ZONA 2 — Metrics Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {commandMetrics.slice(0, 4).map((metric, idx) => (
          <div key={idx} className="bg-aegrix-bg rounded-xl p-4 border border-aegrix-border/50">
            <div className="text-[10px] text-aegrix-muted uppercase tracking-wider mb-1">{metric.layer}</div>
            <div className="flex items-end justify-between">
              <div className="font-sora font-bold text-lg text-white">{metric.value}</div>
              <div className={cn(
                "text-[9px] px-1.5 py-0.5 rounded uppercase font-bold",
                metric.status === 'active' ? "bg-aegrix-green/10 text-aegrix-green" : "bg-aegrix-cyan/10 text-aegrix-cyan"
              )}>
                {metric.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ZONA 3 — SVG Graph */}
      <div className="bg-aegrix-bg rounded-xl p-5 mb-8 border border-aegrix-border/50">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">Rendimiento operativo</span>
          <span className="text-[9px] text-aegrix-muted">Últimos 6 meses</span>
        </div>
        <div className="relative h-20 w-full">
          <svg viewBox="0 0 300 80" className="w-full h-full">
            {/* Sales Line */}
            <path 
              d="M0,60 Q50,55 100,45 T200,25 T300,10" 
              fill="none" 
              stroke="#00C2FF" 
              strokeWidth="2"
              className="opacity-80"
            />
            {/* Efficiency Line */}
            <path 
              d="M0,70 Q75,65 150,55 T300,40" 
              fill="none" 
              stroke="#2563EB" 
              strokeWidth="2"
              className="opacity-50"
            />
            {/* Grid lines */}
            {[0, 20, 40, 60, 80].map((y) => (
              <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
            ))}
          </svg>
        </div>
      </div>

      {/* ZONA 4 — Two Columns */}
      <div className="grid grid-cols-2 gap-8 mb-8 border-t border-aegrix-border pt-6">
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-aegrix-muted uppercase tracking-widest block mb-2">Estado del sistema</span>
          <div className="flex items-center gap-2 text-[11px] text-white/90">
            <CheckCircle2 size={12} className="text-aegrix-green" />
            <span>Backups completados</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-white/90">
            <CheckCircle2 size={12} className="text-aegrix-green" />
            <span>SSL activo</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-white/90">
            <CheckCircle2 size={12} className="text-aegrix-green" />
            <span>Accesos revisados</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-white/90">
            <AlertCircle size={12} className="text-aegrix-cyan" />
            <span>1 actualización pendiente</span>
          </div>
        </div>
        <div className="space-y-3">
          <span className="text-[10px] font-bold text-aegrix-muted uppercase tracking-widest block mb-2">KPIs del mes</span>
          <div className="flex justify-between text-[11px]">
            <span className="text-aegrix-muted">Nuevos leads:</span>
            <span className="text-aegrix-green font-bold">+18%</span>
          </div>
          <div className="flex justify-between text-[11px]">
            <span className="text-aegrix-muted">Velocidad web:</span>
            <span className="text-white font-bold">1.2s</span>
          </div>
          <div className="flex justify-between text-[11px]">
            <span className="text-aegrix-muted">Reportes:</span>
            <span className="text-white font-bold">24</span>
          </div>
          <div className="flex justify-between text-[11px]">
            <span className="text-aegrix-muted">Vulnerabilidades:</span>
            <span className="text-aegrix-green font-bold">0</span>
          </div>
        </div>
      </div>

      {/* ZONA 5 — Visual Flow */}
      <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-widest text-aegrix-muted/60">
        <span>Security</span>
        <span className="text-aegrix-cyan/40">→</span>
        <span>Web</span>
        <span className="text-aegrix-cyan/40">→</span>
        <span>Data</span>
        <span className="text-aegrix-cyan/40">→</span>
        <span>AI</span>
        <span className="text-aegrix-cyan/40">→</span>
        <span className="text-aegrix-cyan">Growth</span>
      </div>

      <div className="mt-6 text-center">
        <p className="font-manrope text-[11px] text-aegrix-muted italic">
          "Tu web no debe existir: debe trabajar."
        </p>
      </div>
    </div>
  );
};

export default CommandCenter;
