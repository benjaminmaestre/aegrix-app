'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { AlertTriangle, Gauge, Search } from 'lucide-react';

const scenariosEs = [
  {
    title: '¿Tu empresa aún no tiene una presencia digital sólida?',
    label: 'Oportunidad: visibilidad y confianza',
    description: 'Una presencia digital clara ayuda a que clientes potenciales entiendan qué haces, encuentren información relevante y tengan un camino directo para contactarte.',
    icon: Search,
    note: 'Revisamos estructura, contenido, SEO técnico y recorridos de contacto antes de recomendar una solución.',
  },
  {
    title: '¿Tu web se siente lenta, antigua o difícil de usar?',
    label: 'Oportunidad: rendimiento y conversión',
    description: 'La velocidad, la experiencia móvil y la claridad del contenido influyen en cómo una persona navega, confía y decide continuar en un sitio.',
    icon: Gauge,
    note: 'Medimos rendimiento, experiencia y puntos de fricción para priorizar cambios que tengan sentido para el negocio.',
  },
];

const scenariosEn = [
  {
    title: 'Does your company still lack a strong digital presence?',
    label: 'Opportunity: visibility and trust',
    description: 'A clear digital presence helps potential customers understand what you do, find relevant information, and reach you through a direct contact path.',
    icon: Search,
    note: 'We review structure, content, technical SEO, and contact journeys before recommending a solution.',
  },
  {
    title: 'Does your website feel slow, outdated, or hard to use?',
    label: 'Opportunity: performance and conversion',
    description: 'Speed, mobile experience, and content clarity influence how people navigate, build trust, and decide whether to continue on a website.',
    icon: Gauge,
    note: 'We measure performance, experience, and friction points to prioritize changes that make sense for the business.',
  },
];

const DigitalEvolution = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const isEnglish = lang === 'en';
  const scenarios = isEnglish ? scenariosEn : scenariosEs;

  return (
    <section className="section-padding bg-aegrix-bg-2 border-y border-aegrix-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,194,255,0.035),transparent_55%)] pointer-events-none" aria-hidden="true" />

      <div className="container-width relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
            {isEnglish ? 'Digital evolution' : 'Evolución digital'}
          </span>
          <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-aegrix-text mt-3 mb-6">
            {isEnglish ? 'From having a website to making it' : 'De tener presencia digital a hacerla'} <br />
            <span className="text-aegrix-cyan">{isEnglish ? 'work better for the business.' : 'trabajar mejor para el negocio.'}</span>
          </h2>
          <p className="text-lg text-aegrix-muted">
            {isEnglish
              ? 'We do not assume the problem or promise a result before measuring. We review the current state, identify friction, and define the next useful step.'
              : 'No asumimos el problema ni prometemos resultados antes de medir. Revisamos el estado actual, identificamos fricción y definimos el siguiente paso útil.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {scenarios.map((scenario, index) => (
            <motion.article
              key={scenario.title}
              initial={{ opacity: 0, x: index === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="group relative bg-aegrix-surface border border-aegrix-border p-6 sm:p-8 md:p-10 flex flex-col h-full rounded-2xl md:rounded-[32px] shadow-sm hover:shadow-xl hover:border-aegrix-cyan/20 transition-all duration-500"
            >
              <div className="absolute inset-0 grid-bg opacity-[0.025] rounded-2xl md:rounded-[32px] pointer-events-none" aria-hidden="true" />

              <div className="relative z-10 flex items-start gap-4 mb-7">
                <div className="w-12 h-12 rounded-xl bg-aegrix-cyan/8 border border-aegrix-cyan/15 text-aegrix-cyan flex items-center justify-center shrink-0">
                  <scenario.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-xl sm:text-2xl font-sora font-bold text-aegrix-text leading-tight">{scenario.title}</h3>
              </div>

              <div className="relative z-10 bg-aegrix-bg-2/70 border border-aegrix-border p-5 sm:p-6 rounded-2xl mb-8">
                <div className="flex items-center gap-2 text-aegrix-cyan font-bold mb-3 uppercase tracking-[0.16em] text-[10px]">
                  <AlertTriangle size={13} aria-hidden="true" />
                  {scenario.label}
                </div>
                <p className="text-sm text-aegrix-muted leading-relaxed">{scenario.description}</p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-aegrix-border text-sm text-aegrix-text/75 leading-relaxed">
                {scenario.note}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <div className="inline-block h-px bg-linear-to-r from-transparent via-aegrix-cyan/60 to-transparent mb-8 md:mb-12 w-full max-w-lg" />
          <h3 className="text-2xl font-sora font-bold text-aegrix-text mb-5">
            {isEnglish ? 'Want to know what should be improved first?' : '¿Quieres saber qué conviene mejorar primero?'}
          </h3>
          <p className="text-aegrix-muted mb-8 md:mb-10 max-w-xl mx-auto">
            {isEnglish
              ? 'The initial diagnostic helps prioritize website, security, data, or automation needs before committing to a larger project.'
              : 'El diagnóstico inicial ayuda a priorizar necesidades de web, seguridad, datos o automatización antes de comprometerse con un proyecto mayor.'}
          </p>
          <a href="#diagnostico" className="btn-primary inline-flex items-center gap-2">
            {isEnglish ? 'Request diagnostic' : 'Solicitar diagnóstico'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalEvolution;
