'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe2, Server, Database, Smartphone } from 'lucide-react';

const capabilities = [
  {
    icon: Globe2,
    title: 'Landings de Alto Impacto',
    desc: 'Diseñadas para convertir el tráfico en negocio mediante SEO técnico y UX de primer nivel.'
  },
  {
    icon: Database,
    title: 'Sistemas Robustos',
    desc: 'Arquitecturas escalables para gestionar operaciones críticas con disponibilidad del 99.9%.'
  },
  {
    icon: Cpu,
    title: 'Software a Medida',
    desc: 'Desarrollo de herramientas personalizadas que se integran perfectamente con tu stack actual.'
  },
  {
    icon: Server,
    title: 'Infraestructura Cloud',
    desc: 'Despliegues en AWS y Azure con configuraciones de seguridad de grado bancario.'
  },
  {
    icon: Smartphone,
    title: 'Web Apps (PWA)',
    desc: 'Experiencias móviles fluidas sin necesidad de descarga, optimizadas para cualquier dispositivo.'
  },
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Desarrollamos bajo estándares internacionales, garantizando software mantenible y fácil de escalar.'
  }
];

const SoftwareExcellence = () => {
  return (
    <section className="section-padding bg-aegrix-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,194,255,0.03),transparent_70%)] pointer-events-none" />
      
      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl font-sora font-extrabold text-aegrix-text mb-8 tracking-tight">
            Ingeniería de Software <br />
            <span className="text-aegrix-cyan">sin compromisos.</span>
          </h2>
          <p className="text-lg text-aegrix-muted leading-relaxed">
            No somos una agencia de marketing; somos una firma de ingeniería. Construimos soluciones digitales sólidas, seguras y preparadas para el futuro.
          </p>
        </div>

        <div className="flex md:grid overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none gap-8 md:grid-cols-2 lg:grid-cols-3 pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-none">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-aegrix-surface border border-aegrix-border hover:border-aegrix-cyan/20 transition-all group w-[85%] sm:w-[50%] md:w-auto shrink-0 snap-align-start"
            >
              <div className="w-12 h-12 rounded-xl bg-aegrix-cyan/5 flex items-center justify-center text-aegrix-cyan mb-6 group-hover:bg-aegrix-cyan group-hover:text-aegrix-bg transition-all duration-500">
                <cap.icon size={24} />
              </div>
              <h3 className="text-xl font-sora font-bold text-aegrix-text mb-3">{cap.title}</h3>
              <p className="text-sm text-aegrix-muted leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-1 bg-linear-to-r from-transparent via-aegrix-cyan/20 to-transparent" />
      </div>
    </section>
  );
};

export default SoftwareExcellence;
