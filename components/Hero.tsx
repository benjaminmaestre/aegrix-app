'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CommandCenter from './CommandCenter';
import { productDivisions } from '@/lib/data';
import { Shield, Globe, Cpu, Heart, ArrowRight } from 'lucide-react';

const icons: Record<string, any> = {
  shield: Shield,
  web: Globe,
  'data-ai': Cpu,
  care: Heart,
};

const Hero = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,194,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      <div className="container-width relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-aegrix-cyan animate-pulse shadow-[0_0_8px_#00C2FF]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">AEGRIX Control Layer • v2.4</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="heading-xl mb-8 text-white">
            Diseñamos la capa de <br />
            <span className="text-aegrix-cyan">control digital enterprise.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="body-lg mb-12 text-aegrix-muted max-w-2xl mx-auto">
            Infraestructura digital para proteger tu empresa, convertir tu web en un canal comercial y transformar tus datos en decisiones estratégicas.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <button className="btn-primary px-10">Solicitar Diagnóstico 360</button>
            <button className="btn-secondary px-10">Ver arquitectura</button>
          </motion.div>
        </motion.div>

        {/* SERVICES SLIDER (Hero Gallery) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full mb-24"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30 mb-8">Nuestras Divisiones de Control</div>
          <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-4 snap-x">
            {productDivisions.map((service, idx) => {
              const Icon = icons[service.id];
              return (
                <div 
                  key={service.id}
                  className="min-w-[280px] snap-center bg-white/2 border border-white/5 rounded-2xl p-6 text-left group hover:border-aegrix-cyan/30 transition-all duration-500"
                >
                  <div className="text-aegrix-cyan mb-4 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-sm font-sora font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-[11px] text-aegrix-muted leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Console / Command Center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-aegrix-cyan/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <CommandCenter />
        </motion.div>

        {/* Visual Connector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center mt-24 mb-12 opacity-40"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-aegrix-muted mb-4">
            Security <span className="mx-2 text-aegrix-cyan">→</span> Web <span className="mx-2 text-aegrix-cyan">→</span> Data <span className="mx-2 text-aegrix-cyan">→</span> AI <span className="mx-2 text-aegrix-cyan">→</span> Growth
          </div>
          <div className="w-px h-20 bg-linear-to-b from-aegrix-cyan to-transparent" />
        </motion.div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;
