'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

const stepsEs = [
  {
    title: 'Diagnóstico inicial',
    description: 'Revisamos el contexto, los riesgos y los puntos de fricción relevantes para definir qué conviene atender primero.',
    benefit: 'Hallazgos priorizados',
  },
  {
    title: 'Diseño de solución',
    description: 'Definimos alcance, arquitectura, dependencias y criterios de aceptación antes de implementar.',
    benefit: 'Plan y alcance definidos',
  },
  {
    title: 'Implementación controlada',
    description: 'Ejecutamos los cambios acordados y verificamos los entregables contra el alcance del proyecto.',
    benefit: 'Entregables verificables',
  },
  {
    title: 'Seguimiento y mejora',
    description: 'Cuando el servicio lo incluye, revisamos resultados, pendientes y nuevas prioridades con una cadencia acordada.',
    benefit: 'Próximos pasos claros',
  },
];

const stepsEn = [
  {
    title: 'Initial assessment',
    description: 'We review the context, risks, and relevant friction points to determine what should be addressed first.',
    benefit: 'Prioritized findings',
  },
  {
    title: 'Solution design',
    description: 'We define scope, architecture, dependencies, and acceptance criteria before implementation.',
    benefit: 'Defined plan and scope',
  },
  {
    title: 'Controlled implementation',
    description: 'We execute the agreed changes and verify deliverables against the project scope.',
    benefit: 'Verifiable deliverables',
  },
  {
    title: 'Follow-up and improvement',
    description: 'When included in the service, we review results, pending items, and new priorities on an agreed cadence.',
    benefit: 'Clear next steps',
  },
];

const MethodologySection = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const isEnglish = lang === 'en';
  const steps = isEnglish ? stepsEn : stepsEs;

  return (
    <section id="metodologia" className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,194,255,0.035),transparent_45%)] pointer-events-none" aria-hidden="true" />

      <div className="container-width relative z-10">
        <div className="max-w-3xl mb-12 md:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
            {isEnglish ? 'How we work' : 'Cómo trabajamos'}
          </span>
          <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-aegrix-text mt-3 mb-6 leading-tight">
            {isEnglish ? 'A clear process, from assessment' : 'Un proceso claro, desde el diagnóstico'}
            <br />
            <span className="text-aegrix-cyan">
              {isEnglish ? 'to defined deliverables.' : 'hasta los entregables.'}
            </span>
          </h2>
          <p className="text-lg text-aegrix-muted max-w-2xl">
            {isEnglish
              ? 'Every engagement starts with a defined scope. Recommendations, timing, and outcomes depend on the context and the conditions agreed with the client.'
              : 'Cada trabajo parte de un alcance definido. Las recomendaciones, tiempos y resultados dependen del contexto y de las condiciones acordadas con el cliente.'}
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-aegrix-cyan/25 to-transparent" aria-hidden="true" />

          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative p-6 md:p-7 rounded-2xl md:rounded-3xl bg-aegrix-surface border border-aegrix-border h-full flex flex-col shadow-sm hover:shadow-xl hover:border-aegrix-cyan/20 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-aegrix-cyan/45 via-aegrix-cyan/15 to-transparent opacity-70" aria-hidden="true" />
              <div className="flex items-center justify-between mb-8 relative z-10">
                <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan/80">
                  {isEnglish ? 'Phase' : 'Fase'}
                </span>
                <span className="font-mono text-2xl font-semibold tracking-[-0.04em] text-aegrix-text/20 group-hover:text-aegrix-cyan/55 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-lg font-sora font-bold text-aegrix-text mb-3">{step.title}</h3>
              <p className="text-sm text-aegrix-muted leading-relaxed mb-6 grow">{step.description}</p>
              <div className="pt-4 border-t border-aegrix-border mt-auto">
                <span className="text-xs font-semibold text-aegrix-cyan">{step.benefit}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
