'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Cpu, Layout, Globe, type LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';

const CYAN = '#00D4D4';

const VisionSlide = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3500),
      setTimeout(() => setStep(2), 7000),
      setTimeout(() => setStep(3), 11000),
      setTimeout(() => setStep(4), 18000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div
      className="relative w-full h-full min-h-[600px] flex items-center justify-center overflow-hidden rounded-[40px] z-20"
      style={{ backgroundColor: '#F5F5F0', opacity: 1 }}
    >
      <AnimatePresence mode="wait">

        {/* ESCENA 1: LA INTENCIÓN */}
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#F5F5F0] flex flex-col items-center justify-center p-8 md:p-12"
          >
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-black/5">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-black/5">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                  <Cpu size={20} />
                </div>
                <div className="font-sora font-bold text-black uppercase tracking-widest text-xs">
                  AEGRIX Intelligence
                </div>
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3, ease: 'linear' }}
                className="overflow-hidden whitespace-nowrap"
                style={{ borderRight: `2px solid ${CYAN}`, paddingRight: 4 }}
              >
                <p className="text-xl md:text-2xl font-manrope font-medium text-slate-800">
                  Orquestando ecosistema: Inteligencia Artificial, Ciberseguridad y Desarrollo Web...
                </p>
              </motion.div>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Threat Intelligence
                </div>
                <div className="px-4 py-2 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Web Performance
                </div>
                <div className="px-4 py-2 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  Machine Learning
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ESCENA 2: LA PORTADA */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white flex items-center justify-center p-8 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 text-center">
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-7xl font-sora font-extrabold text-slate-900 leading-tight"
              >
                AEGRIX <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-purple-500 to-blue-500">
                  360 Ecosystem
                </span>
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-xl text-slate-500 font-manrope tracking-widest uppercase font-bold"
              >
                La convergencia entre Inteligencia, Seguridad y Código
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* ESCENA 3: LOS PILARES */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0A192F] flex flex-col items-center justify-center p-8"
          >
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-white mb-16 text-center">
              Domina tu industria con <br />
              <span style={{ color: `${CYAN}99` }}>nuestros tres pilares estratégicos...</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
              {[
                { icon: Shield, label: 'Ciberseguridad', from: '#1E3A8A', to: '#3B82F6' },
                { icon: Globe, label: 'Desarrollo Web', from: '#00D4D4', to: '#2DD4BF' },
                { icon: Cpu, label: 'Soluciones IA', from: '#9333EA', to: '#F97316' },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.4 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className="w-24 h-24 rounded-full p-px mb-6"
                    style={{ background: `linear-gradient(135deg, ${pillar.from}, ${pillar.to})` }}
                  >
                    <div className="w-full h-full rounded-full bg-[#0A192F] flex items-center justify-center text-white shadow-2xl relative overflow-hidden">
                      <pillar.icon size={32} />
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 border border-white/5 border-dashed rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white tracking-widest uppercase">
                    {pillar.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ESCENA 4 y 5: LA LAPTOP y CTA */}
        {step >= 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#F8F9FA] flex flex-col items-center justify-center p-8 md:p-12"
          >
            <div className="text-center mb-8 md:mb-12 relative h-20 md:h-24 w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {step === 3 ? (
                  <motion.h2
                    key="title3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute text-3xl md:text-5xl font-sora font-bold text-slate-900 leading-tight w-full"
                  >
                    Integramos las 3 capas <br /> en un solo entorno de control.
                  </motion.h2>
                ) : (
                  <motion.h2
                    key="title4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute text-3xl md:text-5xl font-sora font-bold text-slate-900 leading-tight w-full"
                  >
                    Lleva tu infraestructura al siguiente nivel.
                  </motion.h2>
                )}
              </AnimatePresence>
            </div>
            
            <AegrixCoreEngine />
            
            <div className="h-20 mt-8 flex items-center justify-center">
              <AnimatePresence>
                {step === 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="flex justify-center w-full"
                  >
                    <Link
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-block px-10 py-4 font-sora font-extrabold uppercase tracking-widest text-[13px] transition-all transform hover:-translate-y-1"
                      style={{
                        boxShadow: `0 20px 40px -10px ${CYAN}80`,
                      }}
                    >
                      Evaluar Infraestructura AEGRIX
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {[0, 1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="h-1 rounded-full transition-all duration-500"
            style={{
              width: step === i ? 32 : 8,
              backgroundColor: step === i ? CYAN : 'rgba(100,116,139,0.3)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

type NodeCardProps = {
  icon: LucideIcon;
  title: string;
  status: string;
  color: string;
};

const NodeCard = ({ icon: Icon, title, status, color }: NodeCardProps) => (
  <div className="bg-white/3 border border-white/10 rounded-xl p-3 md:p-4 flex items-center gap-4 hover:bg-white/5 transition-colors relative overflow-hidden group">
    <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shadow-lg relative z-10" style={{ backgroundColor: `${color}15`, color }}>
      <Icon size={20} className="md:w-6 md:h-6" />
    </div>
    <div className="relative z-10">
      <div className="text-[9px] md:text-[10px] font-mono text-slate-400 uppercase tracking-wider">{title}</div>
      <div className="text-xs md:text-sm font-bold text-white tracking-wide flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
        {status}
      </div>
    </div>
  </div>
);

/** Sub-componente premium para la central operativa */
const AegrixCoreEngine = () => (
  <motion.div
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="relative w-full max-w-4xl aspect-16/11 md:aspect-16/10 bg-[#0A0F1A] rounded-t-3xl border-x-[6px] border-t-[6px] border-slate-800 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,212,212,0.25)] flex flex-col"
  >
    {/* Mac-style Window Header */}
    <div className="h-8 md:h-10 bg-slate-900 flex items-center px-4 md:px-6 gap-2 border-b border-white/5 relative shrink-0">
      <div className="flex gap-2">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] text-slate-500 font-mono tracking-widest uppercase">
        AEGRIX // CORE_ENGINE
      </div>
    </div>
    
    {/* Main content */}
    <div className="flex-1 p-4 md:p-8 flex flex-col gap-4 md:gap-6 relative">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-cyan-500/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />
      
      {/* Top 3 Nodes (The Triad) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 relative z-10 shrink-0">
        <NodeCard icon={Shield} title="Cybersecurity" status="Active" color="#3B82F6" />
        <NodeCard icon={Globe} title="Web Dev" status="Optimized" color="#00D4D4" />
        <NodeCard icon={Cpu} title="AI Engine" status="Learning" color="#A855F7" />
      </div>

      {/* Bottom section: Logs and Chart */}
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 flex-1 relative z-10 min-h-0">
        {/* Terminal logs */}
        <div className="w-full sm:w-1/3 bg-black/60 rounded-xl border border-white/10 p-4 md:p-5 font-mono text-[9px] md:text-[11px] text-slate-300 overflow-hidden flex flex-col justify-end relative shadow-inner">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-500/30 to-transparent opacity-50" />
          <div className="space-y-1 md:space-y-2 opacity-90">
             <p className="text-slate-500">&gt; sys.init(aegrix_core)</p>
             <p>&gt; load_modules: [AI, WEB, SEC]</p>
             <motion.p 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 0.5 }}
               className="text-aegrix-green"
             >&gt; modules loaded successfully.</motion.p>
             <motion.p 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 1 }}
             >&gt; routing global traffic...</motion.p>
             <motion.p 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 1.5 }}
               className="text-white font-bold"
             >&gt; SYSTEM OPERATIONAL.</motion.p>
          </div>
        </div>
        
        {/* Central Visualization */}
        <div className="flex-1 bg-black/40 rounded-xl border border-white/5 p-4 md:p-6 flex items-center justify-center relative overflow-hidden group">
           {/* Grid background */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[20px_20px] md:bg-size-[30px_30px] opacity-30" />
           
           {/* Radar / Pulsing core */}
           <div className="relative flex items-center justify-center">
             <motion.div 
               animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border border-cyan-500/30" 
             />
             <motion.div 
               animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
               className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full border border-purple-500/40" 
             />
             <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-cyan-500/20 blur-xl absolute animate-pulse" />
             <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-cyan-500/50 flex items-center justify-center relative z-10 bg-[#0A0F1A] shadow-[0_0_30px_rgba(0,212,212,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Layout className="text-cyan-400 w-5 h-5 md:w-6 md:h-6" />
             </div>
           </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default VisionSlide;
