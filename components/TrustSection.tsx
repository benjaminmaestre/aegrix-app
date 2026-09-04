'use client';

import { useParams } from 'next/navigation';
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
          title: 'Security by design',
          desc: 'We incorporate access control, authentication, traceability, and secure configuration practices according to the scope of each solution.',
        },
        {
          title: 'Frameworks assessed with AEGRIX 360',
          desc: 'AEGRIX 360 can assess readiness and maturity against NIST CSF 2.0, the HIPAA Security Rule, GDPR, ISO/IEC 27001 and ISO/IEC 27002 according to the engagement scope, without presenting readiness as certification.',
        },
        {
          title: 'Evidence and follow-up',
          desc: 'Findings, decisions, remediation actions, and deliverables are documented so the work can be reviewed and explained later.',
        },
      ]
    : [
        {
          title: 'Seguridad por diseño',
          desc: 'Incorporamos control de acceso, autenticación, trazabilidad y prácticas de configuración segura según el alcance de cada solución.',
        },
        {
          title: 'Marcos evaluados con AEGRIX 360',
          desc: 'AEGRIX 360 puede evaluar preparación y madurez frente a NIST CSF 2.0, HIPAA Security Rule, GDPR, ISO/IEC 27001 e ISO/IEC 27002 según el alcance contratado, sin presentar readiness como certificación.',
        },
        {
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
              ? 'We work with clear technical criteria, evidence and traceability so each decision can be understood, reviewed and sustained over time.'
              : 'Trabajamos con criterios técnicos claros, evidencia y trazabilidad para que cada decisión pueda entenderse, revisarse y sostenerse en el tiempo.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={cn(
                'relative p-6 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl bg-aegrix-surface border border-aegrix-border text-left transition-all duration-700 shadow-sm overflow-hidden',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-aegrix-cyan/60 via-aegrix-cyan/20 to-transparent" aria-hidden="true" />
              <div className="flex items-center justify-between gap-4 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
                  {isEnglish ? 'Principle' : 'Principio'}
                </span>
                <span className="font-mono text-sm font-semibold tracking-[0.18em] text-aegrix-text/25">
                  {String(index + 1).padStart(2, '0')}
                </span>
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
