'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import CommandCenter from './CommandCenter';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    },
  };

  const serviceBadges = [
    "Security", "Web Infrastructure", "Data Intelligence", "AI Automation", "Business Systems"
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 overflow-hidden grid-bg">
      {/* Radial Gradient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 600px 400px at 70% 50%, rgba(0,194,255,0.04), transparent)'
        }}
      />

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="label-tag mb-6">
              Firma tecnológica · Medellín, Colombia
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-xl mb-6">
              Infraestructura digital para proteger tu empresa, <br />
              <span className="text-aegrix-cyan">vender más</span> y decidir con datos.
            </motion.h1>

            <motion.p variants={itemVariants} className="body-lg mb-4 max-w-xl">
              AEGRIX ayuda a empresas a fortalecer su presencia digital profesional y convertir datos en decisiones estratégicas.
            </motion.p>

            <motion.p variants={itemVariants} className="body-md mb-8 max-w-xl opacity-80">
              Diseñamos sistemas que protegen tu información, mejoran tu conversión web y automatizan tu operación con inteligencia artificial.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <a href="#diagnostico" className="btn-primary group">
                Solicitar Diagnóstico AEGRIX 360
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#proceso" className="btn-ghost py-3.5">
                Ver cómo funciona
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {serviceBadges.map((badge) => (
                <span 
                  key={badge}
                  className="bg-aegrix-surface border border-aegrix-cyan/20 text-aegrix-cyan/80 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Command Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <CommandCenter />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
