'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Code2, Cpu, Database, Globe2, Server, Smartphone } from 'lucide-react';

const capabilitiesEs = [
  {
    icon: Globe2,
    title: 'Landings de alto impacto',
    desc: 'Diseñadas con SEO técnico, rendimiento y UX orientados a objetivos de conversión medibles.',
  },
  {
    icon: Database,
    title: 'Sistemas robustos',
    desc: 'Arquitecturas escalables para procesos empresariales, integraciones y crecimiento progresivo según el alcance del proyecto.',
  },
  {
    icon: Cpu,
    title: 'Software a medida',
    desc: 'Herramientas personalizadas que se integran con procesos, datos y plataformas existentes cuando el proyecto lo requiere.',
  },
  {
    icon: Server,
    title: 'Infraestructura cloud',
    desc: 'Despliegues con prácticas de seguridad, observabilidad, respaldo y operación acordes con la necesidad de cada solución.',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones web y PWA',
    desc: 'Experiencias rápidas y adaptables a distintos dispositivos, sin obligar al usuario a instalar una aplicación nativa.',
  },
  {
    icon: Code2,
    title: 'Código mantenible',
    desc: 'Prácticas de ingeniería orientadas a legibilidad, pruebas, mantenimiento, documentación y evolución del producto.',
  },
];

const capabilitiesEn = [
  {
    icon: Globe2,
    title: 'High-impact landing pages',
    desc: 'Built with technical SEO, performance, and UX aligned with measurable conversion goals.',
  },
  {
    icon: Database,
    title: 'Robust systems',
    desc: 'Scalable architectures for business processes, integrations, and progressive growth according to project scope.',
  },
  {
    icon: Cpu,
    title: 'Custom software',
    desc: 'Purpose-built tools that integrate with existing processes, data, and platforms when the project requires it.',
  },
  {
    icon: Server,
    title: 'Cloud infrastructure',
    desc: 'Deployments with security, observability, backup, and operational practices appropriate to each solution.',
  },
  {
    icon: Smartphone,
    title: 'Web apps and PWA',
    desc: 'Fast, adaptable experiences across devices without requiring users to install a native application.',
  },
  {
    icon: Code2,
    title: 'Maintainable code',
    desc: 'Engineering practices focused on readability, testing, maintenance, documentation, and product evolution.',
  },
];

const SoftwareExcellence = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const isEnglish = lang === 'en';
  const capabilities = isEnglish ? capabilitiesEn : capabilitiesEs;

  return (
    <section className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,194,255,0.03),transparent_70%)] pointer-events-none" aria-hidden="true" />

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
            {isEnglish ? 'Software engineering' : 'Ingeniería de software'}
          </span>
          <h2 className="text-4xl md:text-6xl font-sora font-extrabold text-aegrix-text mt-3 mb-8 tracking-tighter leading-none">
            {isEnglish ? 'Engineering quality,' : 'Calidad de ingeniería,'} <br />
            <span className="text-aegrix-cyan">{isEnglish ? 'not template assembly.' : 'no ensamblaje de plantillas.'}</span>
          </h2>
          <p className="text-lg text-aegrix-muted leading-relaxed">
            {isEnglish
              ? 'AEGRIX approaches software as engineering: architecture, performance, security, maintainability, measurement, and a clear delivery scope.'
              : 'En AEGRIX abordamos el software como ingeniería: arquitectura, rendimiento, seguridad, mantenibilidad, medición y un alcance de entrega claro.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              className="p-6 sm:p-8 rounded-2xl bg-aegrix-surface border border-aegrix-border hover:border-aegrix-cyan/20 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-aegrix-cyan/5 border border-aegrix-cyan/10 flex items-center justify-center text-aegrix-cyan mb-6 group-hover:bg-aegrix-cyan/10 transition-all duration-300">
                <capability.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-sora font-bold text-aegrix-text mb-3 tracking-tight">{capability.title}</h3>
              <p className="text-sm text-aegrix-muted leading-relaxed">{capability.desc}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 md:mt-20 h-px bg-linear-to-r from-transparent via-aegrix-cyan/25 to-transparent" />
      </div>
    </section>
  );
};

export default SoftwareExcellence;
