'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Zap, UserX } from 'lucide-react';

const scenarios = [
  {
    type: 'no-page',
    title: '¿Aún no tienes presencia digital?',
    riskTitle: 'El Riesgo: Invisibilidad Total',
    riskDesc: 'Tus competidores están captando clientes mientras tú no figuras en el mapa. Sin web, no hay autoridad ni confianza.',
    impactIcon: UserX,
    impactText: 'Estás perdiendo el 80% de tus prospectos potenciales.'
  },
  {
    type: 'old-page',
    title: '¿Tu web se siente lenta o antigua?',
    riskTitle: 'El Riesgo: Fuga de Dinero',
    riskDesc: 'Una web lenta o que no se ve bien en móvil destruye tu reputación. El cliente asume que tu servicio es igual que tu página.',
    impactIcon: AlertTriangle,
    impactText: 'Cada segundo de carga extra reduce tus ventas un 7%.'
  }
];

const DigitalEvolution = () => {
  return (
    <section className="section-padding bg-aegrix-bg-2 border-y border-aegrix-border relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-aegrix-text mb-6">
            La diferencia entre <br />
            <span className="text-aegrix-cyan">existir y dominar.</span>
          </h2>
          <p className="text-lg text-aegrix-muted">
            En la era digital, tu plataforma es tu activo más valioso. No permitas que una mala infraestructura detenga el crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {scenarios.map((scenario, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative bg-aegrix-surface border border-aegrix-border p-10 flex flex-col h-full rounded-[32px] shadow-sm hover:shadow-xl hover:border-aegrix-cyan/20 transition-all duration-500"
            >
              {/* Subtle Grid Background */}
              <div className="absolute inset-0 grid-bg opacity-[0.03] rounded-[32px] pointer-events-none" />
              
              <h3 className="text-2xl font-sora font-bold text-aegrix-text mb-8 relative z-10">{scenario.title}</h3>
              
              <div className="relative z-10 bg-linear-to-br from-red-500/3 to-red-500/8 border border-red-500/10 p-6 rounded-2xl mb-8 group-hover:border-red-500/20 transition-colors">
                <div className="flex items-center gap-3 text-red-500/80 font-bold mb-3 uppercase tracking-[0.2em] text-[10px]">
                  <scenario.impactIcon size={14} />
                  {scenario.riskTitle}
                </div>
                <p className="text-sm text-aegrix-muted leading-relaxed">
                  {scenario.riskDesc}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-8 border-t border-aegrix-border flex items-center gap-4">
                <div className="p-3 rounded-xl bg-aegrix-cyan/5 text-aegrix-cyan border border-aegrix-cyan/10">
                  <Zap size={18} />
                </div>
                <div className="text-sm font-medium text-aegrix-text italic opacity-80">
                  &quot;{scenario.impactText}&quot;
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-px rounded-full bg-linear-to-r from-transparent via-aegrix-cyan to-transparent mb-12 w-full max-w-lg" />
          <h3 className="text-2xl font-sora font-bold text-aegrix-text mb-8">
            ¿Quieres saber cuánto está perdiendo tu negocio hoy?
          </h3>
          <p className="text-aegrix-muted mb-10 max-w-xl mx-auto">
            Realizamos una auditoría técnica de 360° para evaluar tu velocidad, seguridad y potencial de conversión sin costo inicial.
          </p>
          <a 
            href="#diagnostico" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Solicitar Auditoría Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalEvolution;
