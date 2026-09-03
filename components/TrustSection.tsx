'use client';

import { useParams } from 'next/navigation';
import { Award, ClipboardCheck, ShieldCheck } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

export default function TrustSection() {
  const { ref, inView } = useInView();
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const isEnglish = lang === 'en';

  const items = isEnglish
    ? [
        {
          icon: ShieldCheck,
          title: 'Security by design',
          desc: 'We incorporate access control, authentication, traceability, and secure configuration practices according to the scope of each solution.',
        },
        {
          icon: Award,
          title: 'Traceable reference frameworks',
          desc: 'When the engagement requires it, we work with references such as NIST CSF 2.0, the HIPAA Security Rule, and ISO/IEC 27001:2022 readiness without presenting readiness as certification.',
        },
        {
          icon: ClipboardCheck,
          title: 'Evidence and follow-up',
          desc: 'Findings, decisions, remediation actions, and deliverables are documented so the work can be reviewed and explained later.',
        },
      ]
    : [
        {
          icon: ShieldCheck,
          title: 'Seguridad por diseño',
          desc: 'Incorporamos control de acceso, autenticación, trazabilidad y prácticas de configuración segura según el alcance de cada solución.',
        },
        {
          icon: Award,
          title: 'Marcos de referencia trazables',
          desc: 'Cuando el trabajo lo requiere, usamos referencias como NIST CSF 2.0, HIPAA Security Rule e ISO/IEC 27001:2022 Readiness sin presentar readiness como certificación.',
        },
        {
          icon: ClipboardCheck,
          title: 'Evidencia y seguimiento',
          desc: 'Documentamos hallazgos, decisiones, acciones de remediación y entregables para que el trabajo pueda revisarse y explicarse posteriormente.',
        },
      ];

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg border-y border-aegrix-border/50">
      <div className="container-width">
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-10 md:mb-16 transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
            {isEnglish ? 'How we build trust' : 'Cómo construimos confianza'}
          </span>
          <h2 className="heading-lg mt-3 mb-6 text-aegrix-text">
            {isEnglish ? 'Engineering that can be' : 'Ingeniería que se puede'}{' '}
            <span className="text-aegrix-cyan">{isEnglish ? 'explained and reviewed.' : 'explicar y revisar.'}</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            {isEnglish
              ? 'The goal is not to decorate a proposal with standards or technical language. It is to leave clear criteria, evidence, and traceability behind the work.'
              : 'El objetivo no es decorar una propuesta con estándares o lenguaje técnico. Es dejar criterios claros, evidencia y trazabilidad detrás del trabajo.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={cn(
                'p-6 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl bg-aegrix-surface border border-aegrix-border text-center flex flex-col items-center transition-all duration-700 shadow-sm',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-aegrix-cyan/10 border border-aegrix-cyan/15 flex items-center justify-center text-aegrix-cyan mb-6">
                <item.icon size={27} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-aegrix-text mb-4">{item.title}</h3>
              <p className="text-aegrix-muted leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
