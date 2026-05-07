'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, ShieldCheck, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Diagnóstico de Fuga',
    description: 'Identificamos las brechas de seguridad y las ineficiencias digitales que están costando dinero a tu operación.',
    benefit: 'Elimina el gasto innecesario'
  },
  {
    icon: PenTool,
    title: 'Arquitectura Líquida',
    description: 'Diseñamos una infraestructura que no interrumpe tu negocio, sino que lo potencia con tecnología de punta.',
    benefit: 'Diseño a medida'
  },
  {
    icon: ShieldCheck,
    title: 'Blindaje y Ejecución',
    description: 'Implementamos la capa de control: ciberseguridad avanzada y desarrollo web de alto rendimiento.',
    benefit: 'Operación sin riesgos'
  },
  {
    icon: TrendingUp,
    title: 'Evolución Inteligente',
    description: 'Monitoreamos y optimizamos tus sistemas 24/7 para que tu empresa nunca deje de escalar.',
    benefit: 'Crecimiento continuo'
  }
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="container-width">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-aegrix-text mb-6 leading-tight">
            Un método diseñado para el <br />
            <span className="text-aegrix-cyan">control total de tu empresa.</span>
          </h2>
          <p className="text-lg text-aegrix-muted max-w-2xl">
            No improvisamos. Aplicamos un proceso de ingeniería de precisión para asegurar que cada dólar invertido en tecnología se traduzca en seguridad y rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-[32px] bg-aegrix-surface border border-aegrix-border hover:border-aegrix-cyan/20 transition-all duration-500 group h-full flex flex-col shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-aegrix-cyan/5 border border-aegrix-cyan/10 flex items-center justify-center text-aegrix-cyan mb-8 group-hover:scale-110 group-hover:bg-aegrix-cyan/10 transition-all duration-500">
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-sora font-bold text-aegrix-text mb-4">{step.title}</h3>
              <p className="text-sm text-aegrix-muted leading-relaxed mb-6 grow">
                {step.description}
              </p>
              <div className="pt-4 border-t border-aegrix-border mt-auto">
                <span className="text-[10px] font-bold text-aegrix-cyan uppercase tracking-widest">
                  Resultado: {step.benefit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
