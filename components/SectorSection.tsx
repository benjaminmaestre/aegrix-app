'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Activity, Briefcase } from 'lucide-react';

const industries = [
  {
    icon: Landmark,
    title: 'Finanzas & Fintech',
    problem: 'Vulnerabilidades críticas en transacciones.',
    solution: 'Infraestructura blindada y cumplimiento normativo absoluto.',
    color: 'text-blue-400'
  },
  {
    icon: Activity,
    title: 'Salud & Healthtech',
    problem: 'Caos en gestión de datos sensibles.',
    solution: 'Capa de control de datos protegida bajo estándares globales.',
    color: 'text-green-400'
  },
  {
    icon: Briefcase,
    title: 'Corporativo & Retail',
    problem: 'Baja conversión y fugas operativas.',
    solution: 'Ecosistemas web de alto rendimiento y analítica predictiva.',
    color: 'text-aegrix-cyan'
  }
];

const SectorSection = () => {
  return (
    <section id="sectores" className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="container-width">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-aegrix-text mb-6">
              Experticia aplicada a <br />
              <span className="text-aegrix-cyan">industrias de alto riesgo.</span>
            </h2>
            <p className="text-lg text-aegrix-muted">
              Entendemos que cada sector tiene retos únicos. No aplicamos soluciones genéricas; diseñamos la capa de control específica para tu vertical.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-10 rounded-[32px] bg-aegrix-surface border border-aegrix-border hover:bg-aegrix-surface/80 transition-all group relative overflow-hidden"
            >
              <div className={`w-16 h-16 rounded-2xl bg-aegrix-bg-2 border border-aegrix-border flex items-center justify-center mb-8 ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon size={32} />
              </div>
              
              <h3 className="text-2xl font-sora font-bold text-aegrix-text mb-6">{item.title}</h3>
              
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-2">Problema Crítico</span>
                  <p className="text-aegrix-muted text-sm">{item.problem}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-aegrix-green uppercase tracking-widest block mb-2">Impacto AEGRIX</span>
                  <p className="text-aegrix-text/80 text-sm">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorSection;
