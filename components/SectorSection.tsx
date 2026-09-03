'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Activity, Briefcase, Landmark } from 'lucide-react';

const industriesEs = [
  {
    icon: Landmark,
    title: 'Finanzas & Fintech',
    challenge: 'Controles de acceso, trazabilidad, seguridad de aplicaciones, gestión de riesgo y requisitos regulatorios según el contexto.',
    approach: 'Evaluamos riesgos y controles y, cuando aplica, usamos NIST e ISO/IEC 27001/27002 como marcos de referencia para readiness y priorización de mejoras.',
  },
  {
    icon: Activity,
    title: 'Salud & Healthtech',
    challenge: 'Tratamiento de información sensible, accesos, disponibilidad, trazabilidad y requisitos de privacidad.',
    approach: 'Revisamos riesgos, flujos de información y controles de seguridad, incluyendo readiness frente a HIPAA Security Rule cuando forma parte del alcance.',
  },
  {
    icon: Briefcase,
    title: 'Corporativo & Retail',
    challenge: 'Procesos fragmentados, sitios sin medición, tareas manuales y controles digitales que dificultan la operación.',
    approach: 'Combinamos software, analítica, automatización y ciberseguridad alrededor de necesidades concretas y objetivos medibles.',
  },
];

const industriesEn = [
  {
    icon: Landmark,
    title: 'Finance & Fintech',
    challenge: 'Access controls, traceability, application security, risk management and regulatory requirements according to context.',
    approach: 'We assess risks and controls and, when applicable, use NIST and ISO/IEC 27001/27002 as reference frameworks for readiness and improvement prioritization.',
  },
  {
    icon: Activity,
    title: 'Healthcare & Healthtech',
    challenge: 'Sensitive information handling, access, availability, traceability and privacy requirements.',
    approach: 'We review risks, information flows and security controls, including HIPAA Security Rule readiness when it is part of the engagement scope.',
  },
  {
    icon: Briefcase,
    title: 'Corporate & Retail',
    challenge: 'Fragmented processes, websites without measurement, manual tasks and digital controls that make operations harder.',
    approach: 'We combine software, analytics, automation and cybersecurity around specific needs and measurable objectives.',
  },
];

const SectorSection = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const isEnglish = lang === 'en';
  const industries = isEnglish ? industriesEn : industriesEs;

  return (
    <section id="sectores" className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(0,194,255,0.035),transparent_42%)] pointer-events-none" aria-hidden="true" />

      <div className="container-width relative z-10">
        <div className="max-w-3xl mb-12 md:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
            {isEnglish ? 'Industry context' : 'Contexto sectorial'}
          </span>
          <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-aegrix-text mt-3 mb-6">
            {isEnglish ? 'Experience applied to' : 'Experiencia aplicada a'}
            <br />
            <span className="text-aegrix-cyan">
              {isEnglish ? 'different operating contexts.' : 'contextos con necesidades distintas.'}
            </span>
          </h2>
          <p className="text-lg text-aegrix-muted">
            {isEnglish
              ? 'Scope changes according to the industry, the information involved, the existing infrastructure and client requirements. We apply the engineering and frameworks that make sense for that context.'
              : 'El alcance cambia según el sector, la información involucrada, la infraestructura existente y los requisitos del cliente. Aplicamos la ingeniería y los marcos que tienen sentido para ese contexto.'}
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
              className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-aegrix-surface border border-aegrix-border overflow-hidden shadow-sm hover:shadow-xl hover:border-aegrix-cyan/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="absolute inset-0 grid-bg opacity-[0.018] pointer-events-none" aria-hidden="true" />
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-aegrix-cyan/30 to-transparent opacity-70" aria-hidden="true" />

              <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-aegrix-bg-2 border border-aegrix-border flex items-center justify-center text-aegrix-cyan shadow-sm">
                  <item.icon size={23} aria-hidden="true" />
                </div>
                <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-aegrix-text/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="relative z-10 text-xl font-sora font-bold text-aegrix-text mb-6">{item.title}</h3>

              <div className="relative z-10 space-y-6">
                <div className="rounded-xl border border-aegrix-border bg-aegrix-bg-2/45 p-4">
                  <span className="text-xs font-semibold text-aegrix-muted block mb-2">
                    {isEnglish ? 'Common needs' : 'Necesidades frecuentes'}
                  </span>
                  <p className="text-aegrix-muted text-sm leading-relaxed">{item.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-aegrix-cyan block mb-2">
                    {isEnglish ? 'How we approach it' : 'Cómo lo abordamos'}
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
