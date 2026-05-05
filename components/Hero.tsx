'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Globe, Cpu } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-aegrix-bg">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0,194,255,0.08) 0%, transparent 70%)'
        }}
      />

      {/* Floating Ambient Particles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-aegrix-cyan/5 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aegrix-blue/5 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="container-width relative z-10 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Main Visual Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-aegrix-cyan/20 rounded-full blur-[60px] scale-75" />
            <Image 
              src="/AEGRIX_hero_vector.svg" 
              alt="AEGRIX Digital Infrastructure" 
              width={500} 
              height={500}
              priority
              className="relative z-10 w-[280px] md:w-[420px] lg:w-[500px] h-auto drop-shadow-[0_0_30px_rgba(0,194,255,0.3)]"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 label-tag mb-8 bg-aegrix-surface/50 backdrop-blur-sm px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-aegrix-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-aegrix-cyan"></span>
              </span>
              Firma tecnológica · Medellín, Colombia
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-xl mb-8 text-white leading-[1.1] md:text-6xl lg:text-7xl">
              Infraestructura digital para <br className="hidden md:block" />
              proteger, <span className="text-aegrix-cyan">vender más</span> y decidir.
            </motion.h1>

            <motion.p variants={itemVariants} className="body-lg mb-12 max-w-2xl mx-auto text-aegrix-muted/90 text-lg md:text-xl">
              Protegemos tu información, optimizamos tu conversión web <br className="hidden md:block" />
              y automatizamos tu operación con inteligencia artificial.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a href="#diagnostico" className="btn-primary w-full sm:w-auto px-10 py-5 text-lg group">
                Solicitar Diagnóstico 360
                <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#servicios" className="btn-secondary w-full sm:w-auto px-10 py-5 text-lg">
                Explorar Soluciones
              </a>
            </motion.div>

            {/* Trust Badges / Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-aegrix-border/30"
            >
              {[
                { icon: Shield, label: "Seguridad Proactiva" },
                { icon: Globe, label: "Infraestructura Global" },
                { icon: Cpu, label: "IA Integrada" },
                { icon: ChevronRight, label: "Crecimiento de Datos" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="p-3 rounded-xl bg-aegrix-surface border border-aegrix-border/50 text-aegrix-cyan">
                    <item.icon size={24} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-aegrix-muted">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
