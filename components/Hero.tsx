'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroControlLayer from './HeroControlLayer';
import { WHATSAPP_URL } from '@/lib/data';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 md:pt-40 lg:pt-48 pb-16 overflow-hidden flex flex-col justify-center">
      {/* Background Ambience - Contained */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,255,0.05),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 grid-bg opacity-[0.08]" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          
          {/* LEFT COLUMN: TEXT & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col text-left z-20 min-w-0"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-aegrix-cyan animate-pulse shadow-[0_0_10px_#00C2FF]" />
              <span className="text-[10px] font-bold text-white/90 uppercase tracking-[0.25em]">AEGRIX CONTROL LAYER</span>
            </div>

            <div className="max-w-[720px]">
              <h1 className="font-sora font-bold text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white mb-8 leading-[1.05] tracking-tight">
                Convierte tu operación digital en una capa de control <br />
                <span className="text-aegrix-cyan">segura, medible e inteligente.</span>
              </h1>

              <p className="body-lg mb-12 text-aegrix-muted max-w-xl leading-relaxed opacity-80">
                AEGRIX integra ciberseguridad, desarrollo web, datos e inteligencia artificial para que tu empresa opere con más visibilidad, protección y capacidad de crecimiento.
              </p>

              {/* TRUST CHIPS */}
              <div className="flex flex-wrap gap-3 mb-16">
                {['Protección', 'Visibilidad', 'Automatización'].map((label, i) => (
                  <div key={i} className="px-4 py-2 rounded-lg bg-white/[0.02] border border-white/10 text-[11px] font-bold text-white/60 uppercase tracking-[0.15em] flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-aegrix-cyan/40" />
                    {label}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary px-10 h-16 w-full sm:w-auto text-base"
                >
                  Solicitar Diagnóstico 360
                </Link>
                <Link href="/servicios" className="btn-secondary px-10 h-16 w-full sm:w-auto text-base">
                  Ver arquitectura
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: VISUAL CONTROL LAYER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full relative flex justify-center lg:justify-end min-w-0"
          >
            <div className="w-full max-w-[640px] xl:max-w-[720px] transform transition-transform duration-700">
              <HeroControlLayer />
            </div>
            
            {/* Visual Decorative elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-aegrix-cyan/5 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
