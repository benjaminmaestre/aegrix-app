'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Activity, Briefcase, Landmark } from 'lucide-react';

const industriesEs = [
  {
    icon: Landmark,
    title: 'Finanzas & Fintech',
    challenge: 'Controles de acceso, trazabilidad, seguridad de aplicaciones y requisitos regulatorios según el contexto.',
    approach: 'Evaluación del alcance y priorización de controles técnicos y operativos relevantes.',
  },
  {
    icon: Activity,
    title: 'Salud & Healthtech',
    challenge: 'Tratamiento de información sensible, accesos, disponibilidad y requisitos de privacidad.',
    approach: 'Revisión de riesgos, flujos de información y controles aplicables al servicio contratado.',
  },
  {
    icon: Briefcase,
    title: 'Corporativo & Retail',
    challenge: 'Procesos fragmentados, sitios sin medición y tareas manuales que dificultan la operación.',
    approach: 'Software, analítica y automatización definidos alrededor de necesidades y métricas concretas.',
  },
];

const industriesEn = [
  {
    icon: Landmark,
    title: 'Finance & Fintech',
    challenge: 'Access controls, traceability, application security, and regulatory requirements according to context.',
    approach: 'Scope assessment and prioritization of the relevant technical and operational controls.',
  },
  {
    icon: Activity,
    title: 'Healthcare & Healthtech',
    challenge: 'Sensitive information handling, access, availability, and privacy requirements.',
    approach: 'Review of risks, information flows, and controls applicable to the contracted service.',
  },
  {
    icon: Briefcase,
    title: 'Corporate & Retail',
    challenge: 'Fragmented processes, websites without measurement, and manual tasks that make operations harder.',
    approach: 'Software, analytics, and automation defined around specific needs and measurable objectives.',
  },
];

const SectorSection = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const industries = lang === 'en' ? industriesEn : industriesEs;

  return (
    <section id="sectores" className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="container-width">
        <div className="max-w-3xl mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-aegrix-text mb-6">
            {lang === 'en' ? 'Experience applied to' : 'Experiencia aplicada a'}
            <br />
            <span className="text-aegrix-cyan">
              {lang === 'en' ? 'different operating contexts.' : 'contextos con necesidades distintas.'}
            </span>
          </h2>
          <p className="text-lg text-aegrix-muted">
            {lang === 'en'
              ? 'Scope changes according to the industry, the information involved, the existing infrastructure, and client requirements. That is why we start with context before recommending a solution.'
              : 'El alcance cambia según el sector, la información involucrada, la infraestructura existente y los requisitos del cliente. Por eso partimos del contexto antes de recomendar una solución.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {industries.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="p-6 md:p-8 rounded-2xl bg-aegrix-surface border border-aegrix-border"
            >
              <div className="w-12 h-12 rounded-xl bg-aegrix-bg-2 border border-aegrix-border flex items-center justify-center mb-6 text-aegrix-cyan">
                <item.icon size={23} aria-hidden="true" />
              </div>

              <h3 className="text-xl font-sora font-bold text-aegrix-text mb-6">{item.title}</h3>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold text-aegrix-muted block mb-2">
                    {lang === 'en' ? 'Common needs' : 'Necesidades frecuentes'}
                  </span>
                  <p className="text-aegrix-muted text-sm leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-aegrix-cyan block mb-2">
                    {lang === 'en' ? 'How we approach it' : 'Cómo lo abordamos'}
                  </span>
                  <p className="text-aegrix-text/80 text-sm leading-relaxed">{item.approach}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorSection;