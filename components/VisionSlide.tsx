'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Share2, Rocket, Send, Cpu, Layout } from 'lucide-react';

const VisionSlide = () => {
  const [step, setStep] = useState(0);

  // Auto-advance internal steps
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 3500), // To Title
      setTimeout(() => setStep(2), 7000), // To Pillars
      setTimeout(() => setStep(3), 11000), // To Laptop
      setTimeout(() => setStep(4), 15000), // To Final
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div 
      className="relative w-full h-full min-h-[600px] flex items-center justify-center overflow-hidden rounded-[40px] z-20"
      style={{ backgroundColor: '#F5F5F0', opacity: 1 }}
    >
      <AnimatePresence mode="wait">
        
        {/* ESCENA 1: LA INTENCIÓN (ESTILO IA / BEIGE) */}
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
                <div className="font-sora font-bold text-black uppercase tracking-widest text-xs">AEGRIX Intelligence</div>
              </div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
                className="overflow-hidden whitespace-nowrap border-r-2 border-aegrix-cyan pr-1"
              >
                <p className="text-xl md:text-2xl font-manrope font-medium text-slate-800">
                  Configurando AEGRIX AI Connector para integración estratégica...
                </p>
              </motion.div>
              <div className="mt-8 flex gap-3">
                <div className="px-4 py-2 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">Razonamiento Extendido</div>
                <div className="px-4 py-2 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">Búsqueda Técnica</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ESCENA 2: LA PORTADA (MINIMALISTA / CÁLIDA) */}
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white flex items-center justify-center p-8 overflow-hidden"
          >
            {/* Formas abstractas cálidas */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-400/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />
            
            <div className="relative z-10 text-center">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-7xl font-sora font-extrabold text-slate-900 leading-tight"
              >
                AEGRIX <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-purple-500 to-blue-500">AI Connector Service</span>
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-xl text-slate-500 font-manrope tracking-widest uppercase font-bold"
              >
                Conecta tu Negocio con el Futuro
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* ESCENA 3: LOS PILARES (AZUL PETRÓLEO) */}
        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0A192F] flex flex-col items-center justify-center p-8"
          >
            <h2 className="text-3xl md:text-5xl font-sora font-bold text-white mb-16 text-center">
              Conecta tu propia IA <br />
              <span className="text-aegrix-cyan/60">con AEGRIX de forma...</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl">
              {[
                { icon: Shield, label: "Segura", color: "from-blue-400 to-cyan-400" },
                { icon: Share2, label: "Flexible", color: "from-cyan-400 to-teal-400" },
                { icon: Rocket, label: "Escalable", color: "from-teal-400 to-orange-400" }
              ].map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.4 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-24 h-24 rounded-full bg-linear-to-br ${pillar.color} p-px mb-6`}>
                    <div className="w-full h-full rounded-full bg-[#0A192F] flex items-center justify-center text-white shadow-2xl relative overflow-hidden group">
                      <pillar.icon size={32} />
                      {/* Chispas animadas */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-white/5 border-dashed rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-white tracking-widest uppercase">{pillar.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ESCENA 4: LA LAPTOP (DASHBOARD) */}
        {step >= 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#F8F9FA] flex flex-col items-center justify-center p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-sora font-bold text-slate-900 leading-tight">
                {step === 3 ? "Simplifica tus integraciones." : "Haz que la IA trabaje para ti."}
              </h2>
            </div>

            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative w-full max-w-4xl aspect-16/10 bg-slate-900 rounded-t-3xl border-12 border-slate-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Pantalla del Dashboard */}
              <div className="absolute inset-0 bg-white p-6">
                <div className="flex gap-4 mb-6">
                  <div className="w-1/4 h-32 rounded-xl bg-slate-100 animate-pulse" />
                  <div className="w-1/4 h-32 rounded-xl bg-slate-100 animate-pulse" />
                  <div className="w-1/2 h-32 rounded-xl bg-aegrix-cyan/10 animate-pulse" />
                </div>
                <div className="flex gap-4">
                  <div className="w-2/3 h-64 rounded-xl bg-slate-50 border border-slate-100 p-4">
                    <div className="w-full h-full flex items-end gap-2">
                      {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          className="flex-1 bg-linear-to-t from-aegrix-cyan/40 to-aegrix-cyan/10 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-1/3 h-64 rounded-xl bg-slate-900 flex items-center justify-center">
                    <Layout className="text-white/20" size={64} />
                  </div>
                </div>
              </div>
              
              {/* Base de la laptop (simulada) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-slate-700 rounded-full blur-[1px]" />
            </motion.div>

            {step === 4 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-12"
              >
                <button className="px-10 py-4 rounded-2xl bg-[#FF4D4D] text-white font-sora font-extrabold uppercase tracking-widest text-[13px] shadow-[0_20px_40px_-10px_rgba(255,77,77,0.5)] hover:bg-[#FF3333] transition-all transform hover:-translate-y-1">
                  Evaluar Infraestructura AEGRIX
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

      </AnimatePresence>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {[0, 1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-500 ${step === i ? "w-8 bg-aegrix-cyan" : "w-2 bg-slate-400/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VisionSlide;
