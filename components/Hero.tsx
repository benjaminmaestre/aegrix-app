'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Globe, Cpu, Database } from 'lucide-react';
import CommandCenter from './CommandCenter';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 lg:pt-48 overflow-hidden bg-aegrix-bg">
      {/* Dynamic Background */}
      <div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(0,194,255,0.05) 0%, transparent 60%)'
        }}
      />

      <div className="container-width relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            {/* Enterprise Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
              {['Security', 'Web Infrastructure', 'Data Intelligence', 'AI Automation'].map((tag) => (
                <span key={tag} className="label-tag bg-aegrix-surface/30 backdrop-blur-sm border-aegrix-cyan/20">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-xl mb-10 text-white">
              Infraestructura digital para <br className="hidden md:block" />
              proteger tu empresa, <span className="text-aegrix-cyan">vender más</span> <br className="hidden lg:block" />
              y decidir con datos.
            </motion.h1>

            <motion.p variants={itemVariants} className="body-lg mb-12 max-w-3xl mx-auto">
              AEGRIX une ciberseguridad, desarrollo web de alto rendimiento, analítica e inteligencia artificial para que tu empresa opere con más control, convierta mejor y crezca con información real.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#diagnostico" className="btn-primary group w-full sm:w-auto px-10">
                Solicitar Diagnóstico AEGRIX 360
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#proceso" className="btn-secondary w-full sm:w-auto px-10">
                Ver cómo funciona
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Command Center Console - Visual Representation of the "Control Layer" */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-6xl mx-auto mt-8 px-4"
        >
          <div className="absolute inset-0 bg-aegrix-cyan/10 blur-[100px] rounded-full scale-y-50 translate-y-20 opacity-50 pointer-events-none" />
          <CommandCenter />
        </motion.div>

        {/* Visual Flow Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col items-center mt-24 mb-12 opacity-40"
        >
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-aegrix-muted mb-4">
            Security <span className="mx-2 text-aegrix-cyan">→</span> Web <span className="mx-2 text-aegrix-cyan">→</span> Data <span className="mx-2 text-aegrix-cyan">→</span> AI <span className="mx-2 text-aegrix-cyan">→</span> Growth
          </div>
          <div className="w-px h-20 bg-linear-to-b from-aegrix-cyan to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
