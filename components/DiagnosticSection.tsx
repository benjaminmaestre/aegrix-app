'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { diagnosticChecklist, WHATSAPP_URL } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { CheckCircle2, ClipboardCheck } from 'lucide-react';

const diagnosticChecklistEn = [
  { category: 'Security', items: ['Access, email and authentication', 'Risks, controls and evidence'] },
  { category: 'Frameworks', items: ['NIST and ISO/IEC 27001/27002', 'HIPAA and GDPR according to scope'] },
  { category: 'Web & Conversion', items: ['Performance and user experience', 'Forms, measurement and contact journeys'] },
  { category: 'Data & AI', items: ['Reporting and information sources', 'Automation and AI opportunities'] },
];

const DiagnosticSection = () => {
  const { ref, inView } = useInView();
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const checklist = lang === 'en' ? diagnosticChecklistEn : diagnosticChecklist;
  const evaluationItems = lang === 'en'
    ? ['Security posture and access', 'Framework readiness', 'Web performance and conversion', 'Analytics, automation and AI']
    : ['Postura de seguridad y accesos', 'Readiness frente a marcos', 'Rendimiento y conversión web', 'Analítica, automatización e IA'];

  return (
    <section id="diagnostico" ref={ref} className="section-padding bg-aegrix-bg-2 relative">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className={cn(
            'transition-all duration-1000',
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          )}>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan block mb-4">
              {lang === 'en' ? 'Assessment · Readiness · Assurance' : 'Assessment · Readiness · Assurance'}
            </span>
            <h2 className="heading-lg mb-8 text-aegrix-text">
              <span className="text-aegrix-cyan">AEGRIX 360</span>
            </h2>
            <h3 className="text-2xl font-sora font-semibold text-aegrix-text/90 mb-6">
              {lang === 'en'
                ? 'A structured way to understand posture, evidence, gaps and priorities.'
                : 'Una forma estructurada de entender postura, evidencia, brechas y prioridades.'}
            </h3>
            <p className="body-lg mb-8 text-aegrix-muted">
              {lang === 'en'
                ? 'AEGRIX 360 is our assessment, readiness and assurance platform. It combines organizational context, evidence, findings, remediation and auditability to evaluate capabilities and recognized frameworks such as NIST CSF 2.0, ISO/IEC 27001/27002, HIPAA and GDPR according to the engagement scope.'
                : 'AEGRIX 360 es nuestra plataforma de assessment, readiness y assurance. Integra contexto organizacional, evidencia, hallazgos, remediación y trazabilidad para evaluar capacidades y marcos reconocidos como NIST CSF 2.0, ISO/IEC 27001/27002, HIPAA y GDPR según el alcance contratado.'}
            </p>
            <p className="text-sm text-aegrix-muted mb-8 md:mb-10">
              {lang === 'en'
                ? 'AEGRIX 360 supports assessment and readiness work; it does not present readiness as third-party certification or guarantee compliance by itself.'
                : 'AEGRIX 360 soporta procesos de evaluación y readiness; no presenta readiness como certificación de tercera parte ni garantiza por sí solo el cumplimiento.'}
            </p>

            <div className="card-base bg-aegrix-surface border-aegrix-border p-5 sm:p-8 mb-8 md:mb-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-aegrix-cyan/10 text-aegrix-cyan">
                  <ClipboardCheck size={24} aria-hidden="true" />
                </div>
                <div className="font-sora font-bold text-aegrix-text">
                  {lang === 'en' ? 'What AEGRIX 360 can evaluate:' : 'Qué puede evaluar AEGRIX 360:'}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {evaluationItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-aegrix-muted">
                    <CheckCircle2 size={16} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={`/${lang}/aegrix-360`} className="btn-primary w-full sm:w-auto text-center justify-center">
                {lang === 'en' ? 'Explore AEGRIX 360' : 'Conocer AEGRIX 360'}
              </Link>
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto text-center justify-center">
                {lang === 'en' ? 'Start an assessment' : 'Iniciar evaluación'}
              </Link>
            </div>
          </div>

          <div className={cn(
            'relative transition-all duration-1000 delay-300',
            inView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          )}>
            <div className="card-base bg-aegrix-surface border-aegrix-border p-0 overflow-hidden shadow-xl">
              <div className="bg-aegrix-bg-2/50 px-8 py-6 border-b border-aegrix-border">
                <div className="text-[10px] font-bold text-aegrix-muted uppercase tracking-[0.3em]">AEGRIX 360 · Evaluation Scope</div>
              </div>
              <div className="p-5 sm:p-8 space-y-6 md:space-y-8">
                {checklist.map((group, idx) => (
                  <div key={group.category} className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-8 rounded-full bg-aegrix-cyan/10 border border-aegrix-cyan/20 flex items-center justify-center text-aegrix-cyan text-[10px] font-bold">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div className="font-sora font-bold text-aegrix-text text-sm uppercase tracking-widest">{group.category}</div>
                    </div>
                    <div className="ml-12 space-y-3">
                      {group.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-xs text-aegrix-muted group cursor-default">
                          <div className="w-1.5 h-1.5 rounded-full bg-aegrix-text/10 group-hover:bg-aegrix-cyan transition-colors" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-aegrix-cyan/5 p-5 sm:p-8 border-t border-aegrix-cyan/10">
                <div className="text-xs text-aegrix-text/60 text-center font-medium">
                  {lang === 'en'
                    ? 'Outputs can include findings, evidence, remediation priorities and an auditable assessment snapshot.'
                    : 'Los resultados pueden incluir hallazgos, evidencia, prioridades de remediación y un snapshot auditable de la evaluación.'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
