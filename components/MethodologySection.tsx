'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { CheckCircle2, PenTool, Search, TrendingUp } from 'lucide-react';

const stepsEs = [
  {
    icon: Search,
    title: 'Diagnóstico inicial',
    description: 'Revisamos el contexto, los riesgos y los puntos de fricción relevantes para definir qué conviene atender primero.',
    benefit: 'Hallazgos priorizados',
  },
  {
    icon: PenTool,
    title: 'Diseño de solución',
    description: 'Definimos alcance, arquitectura, dependencias y criterios de aceptación antes de implementar.',
    benefit: 'Plan y alcance definidos',
  },
  {
    icon: CheckCircle2,
    title: 'Implementación controlada',
    description: 'Ejecutamos los cambios acordados y verificamos los entregables contra el alcance del proyecto.',
    benefit: 'Entregables verificables',
  },
  {
    icon: TrendingUp,
    title: 'Seguimiento y mejora',
    description: 'Cuando el servicio lo incluye, revisamos resultados, pendientes y nuevas prioridades con una cadencia acordada.',
    benefit: 'Próximos pasos claros',
  },
];

const stepsEn = [
  {
    icon: Search,
    title: 'Initial assessment',
    description: 'We review the context, risks, and relevant friction points to determine what should be addressed first.',
    benefit: 'Prioritized findings',
  },
  {
    icon: PenTool,
    title: 'Solution design',
    description: 'We define scope, architecture, dependencies, and acceptance criteria before implementation.',
    benefit: 'Defined plan and scope',
  },
  {
    icon: CheckCircle2,
    title: 'Controlled implementation',
    description: 'We execute the agreed changes and verify deliverables against the project scope.',
    benefit: 'Verifiable deliverables',
  },
  {
    icon: TrendingUp,
    title: 'Follow-up and improvement',
    description: 'When included in the service, we review results, pending items, and new priorities on an agreed cadence.',
    benefit: 'Clear next steps',
  },
];

const MethodologySection = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const steps = lang === 'en' ? stepsEn : stepsEs;

  return (
    <section id="metodologia" className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="container-width">
        <div className="max-w-3xl mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-aegrix-text mb-6 leading-tight">
            {lang === 'en' ? 'A clear process, from assessment' : 'Un proceso claro, desde el diagnóstico'}
            <br />
            <span className="text-aegrix-cyan">
              {lang === 'en' ? 'to defined deliverables.' : 'hasta los entregables.'}
            </span>
          </h2>
          <p className="text-lg text-aegrix-muted max-w-2xl">
            {lang === 'en'
              ? 'Every engagement starts with a defined scope. Recommendations, timing, and outcomes depend on the context and the conditions agreed with the client.'
              : 'Cada trabajo parte de un alcance definido. Las recomendaciones, tiempos y resultados dependen del contexto y de las condiciones acordadas con el cliente.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="p-6 md:p-7 rounded-2xl bg-aegrix-surface border border-aegrix-border h-full flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-aegrix-cyan/8 border border-aegrix-cyan/15 flex items-center justify-center text-aegrix-cyan mb-6">
                <step.icon size={22} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-sora font-bold text-aegrix-text mb-3">{step.title}</h3>
              <p className="text-sm text-aegrix-muted leading-relaxed mb-6 grow">{step.description}</p>
              <div className="pt-4 border-t border-aegrix-border mt-auto">
                <span className="text-xs font-semibold text-aegrix-cyan">{step.benefit}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;