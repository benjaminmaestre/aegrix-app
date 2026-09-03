import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  TriangleAlert,
  Wrench,
} from 'lucide-react';
import Footer from '@/components/Footer';

const PORTAL_URL = 'https://360.aegrix.com.co';

const copy = {
  es: {
    eyebrow: 'Riesgo · Seguridad · Cumplimiento',
    title: 'Plataforma de evaluación de riesgo, seguridad y cumplimiento.',
    intro: 'AEGRIX 360 permite evaluar controles tecnológicos y de seguridad, documentar evidencia, identificar brechas, analizar riesgos y priorizar planes de remediación dentro de un entorno centralizado.',
    primary: 'Acceder a AEGRIX 360',
    secondary: 'Explorar capacidades',
    assurance: 'Acceso privado · Autenticación segura · Entorno centralizado',
    platformEyebrow: 'Motor de evaluación modular',
    platformTitle: 'Una vista operativa para convertir controles en decisiones.',
    platformBody: 'La plataforma conecta marcos, controles, evidencia, hallazgos y acciones correctivas en un flujo trazable que puede adaptarse a múltiples sectores y referencias.',
    capabilitiesTitle: 'Capacidades principales',
    capabilities: [
      ['Riesgo tecnológico', 'Evalúa exposición tecnológica y prioriza riesgos según impacto, evidencia y contexto.'],
      ['Ciberseguridad', 'Revisa controles de identidad, datos, resiliencia, monitoreo, terceros y respuesta.'],
      ['Cumplimiento', 'Ejecuta evaluaciones multi-framework sin duplicar preguntas ni perder trazabilidad.'],
      ['Gestión de evidencia', 'Documenta el estado y la suficiencia de la evidencia sin almacenar PHI/ePHI en el MVP.'],
      ['Hallazgos', 'Convierte brechas verificadas en hallazgos claros, priorizados y accionables.'],
      ['Remediación', 'Asigna responsables, esfuerzo y próximos pasos para dar seguimiento al tratamiento.'],
    ],
    workflowTitle: 'Del alcance a la remediación',
    workflow: ['Definir organización y alcance', 'Seleccionar marcos aplicables', 'Evaluar controles y evidencia', 'Identificar hallazgos y riesgos', 'Priorizar planes de remediación'],
    boundaryTitle: 'Diseñado para evaluación y preparación',
    boundaryBody: 'AEGRIX 360 apoya decisiones de riesgo, seguridad, resiliencia y cumplimiento. No constituye certificación, garantía de cumplimiento ni asesoría legal. El MVP no debe almacenar PHI/ePHI.',
    finalTitle: 'Convierte evaluaciones dispersas en un programa operativo.',
    finalBody: 'Accede al espacio privado de AEGRIX 360 para iniciar una evaluación con controles, evidencia, hallazgos y remediación en una sola plataforma.',
  },
  en: {
    eyebrow: 'Risk · Security · Compliance',
    title: 'Risk, Security & Compliance Platform.',
    intro: 'AEGRIX 360 helps teams assess technology and security controls, document evidence, identify gaps, analyze risk, and prioritize remediation plans in one centralized environment.',
    primary: 'Access AEGRIX 360',
    secondary: 'Explore capabilities',
    assurance: 'Private access · Secure authentication · Centralized environment',
    platformEyebrow: 'Modular assessment engine',
    platformTitle: 'One operational view that turns controls into decisions.',
    platformBody: 'The platform connects frameworks, controls, evidence, findings, and corrective actions in a traceable workflow adaptable to multiple sectors and reference frameworks.',
    capabilitiesTitle: 'Core capabilities',
    capabilities: [
      ['Technology Risk', 'Assess technology exposure and prioritize risk using impact, evidence, and context.'],
      ['Cybersecurity', 'Review identity, data, resilience, monitoring, third-party, and response controls.'],
      ['Compliance', 'Run multi-framework assessments without duplicating questions or losing traceability.'],
      ['Evidence Management', 'Document evidence status and sufficiency without storing PHI/ePHI in the MVP.'],
      ['Findings', 'Turn verified gaps into clear, prioritized, and actionable findings.'],
      ['Remediation', 'Assign ownership, effort, and next steps to track risk treatment.'],
    ],
    workflowTitle: 'From scope to remediation',
    workflow: ['Define the organization and scope', 'Select applicable frameworks', 'Assess controls and evidence', 'Identify findings and risk', 'Prioritize remediation plans'],
    boundaryTitle: 'Built for assessment and readiness',
    boundaryBody: 'AEGRIX 360 supports risk, security, resilience, and compliance decisions. It is not a certification, compliance guarantee, or legal advice. The MVP must not store PHI/ePHI.',
    finalTitle: 'Turn fragmented assessments into an operational program.',
    finalBody: 'Enter the private AEGRIX 360 workspace to start an assessment with controls, evidence, findings, and remediation in one platform.',
  },
} as const;

const capabilityIcons = [TriangleAlert, ShieldCheck, Layers3, FileCheck2, ClipboardCheck, Wrench];

function validLocale(lang: string): lang is keyof typeof copy {
  return lang === 'es' || lang === 'en';
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!validLocale(lang)) return {};
  const isEn = lang === 'en';
  const title = isEn ? 'AEGRIX 360 | Risk, Security & Compliance Platform' : 'AEGRIX 360 | Plataforma de riesgo, seguridad y cumplimiento';
  const description = isEn
    ? 'Assess controls, document evidence, identify findings, and prioritize remediation with AEGRIX 360.'
    : 'Evalúa controles, documenta evidencia, identifica hallazgos y prioriza la remediación con AEGRIX 360.';
  return {
    title,
    description,
    alternates: {
      canonical: `https://aegrix.com.co/${lang}/aegrix-360`,
      languages: {
        es: 'https://aegrix.com.co/es/aegrix-360',
        en: 'https://aegrix.com.co/en/aegrix-360',
      },
    },
  };
}

export default async function Aegrix360Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!validLocale(lang)) notFound();
  const t = copy[lang];

  return (
    <>
      <main className="bg-aegrix-bg text-aegrix-text">
        <section className="grid-bg relative overflow-hidden border-b border-aegrix-border pt-36 pb-24 md:pt-44 md:pb-32">
          <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-aegrix-cyan/10 blur-[120px]" />
          <div className="container-width relative grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <span className="label-tag"><ShieldCheck size={14} /> AEGRIX 360</span>
              <p className="mt-8 font-manrope text-[11px] font-extrabold uppercase tracking-[0.24em] text-aegrix-cyan">{t.eyebrow}</p>
              <h1 className="heading-xl mt-5 max-w-4xl text-aegrix-text">{t.title}</h1>
              <p className="body-lg mt-7 max-w-3xl">{t.intro}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a className="btn-primary" href={PORTAL_URL}>{t.primary}<ArrowRight size={17} /></a>
                <Link className="btn-secondary" href="#capacidades">{t.secondary}</Link>
              </div>
              <p className="mt-7 flex items-center gap-2 text-xs font-semibold text-aegrix-muted"><LockKeyhole size={15} className="text-aegrix-cyan" />{t.assurance}</p>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-8 rounded-full bg-aegrix-blue/15 blur-[90px]" />
              <div className="relative overflow-hidden rounded-3xl border border-aegrix-border bg-aegrix-surface/90 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
                <div className="mb-7 flex items-center justify-between border-b border-aegrix-border pb-5">
                  <div><p className="font-sora text-sm font-extrabold">AEGRIX 360</p><p className="mt-1 text-[10px] uppercase tracking-[.18em] text-aegrix-muted">{lang === 'en' ? 'Assessment Workspace' : 'Espacio de evaluación'}</p></div>
                  <span className="rounded-full border border-aegrix-cyan/20 bg-aegrix-cyan/8 px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-aegrix-cyan">{lang === 'en' ? 'Private' : 'Privado'}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    [lang === 'en' ? 'Controls' : 'Controles', '22'],
                    [lang === 'en' ? 'Frameworks' : 'Marcos', '02'],
                    [lang === 'en' ? 'Evidence' : 'Evidencia', lang === 'en' ? 'Tracked' : 'Trazada'],
                    [lang === 'en' ? 'Remediation' : 'Remediación', lang === 'en' ? 'Prioritized' : 'Priorizada'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-aegrix-border bg-aegrix-bg-2/70 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[.16em] text-aegrix-muted">{label}</p>
                      <p className="mt-3 font-sora text-xl font-bold text-aegrix-text">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-xl border border-aegrix-border bg-aegrix-bg-2/70 p-5">
                  <div className="flex items-center justify-between text-xs font-bold"><span>{lang === 'en' ? 'Assessment readiness' : 'Preparación de la evaluación'}</span><span className="text-aegrix-cyan">68%</span></div>
                  <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-aegrix-charcoal"><div className="h-full w-2/3 rounded-full bg-aegrix-cyan" /></div>
                  <div className="mt-5 space-y-3">
                    {[78, 56, 42].map((width, index) => <div key={width} className="flex items-center gap-3"><CheckCircle2 size={14} className={index === 0 ? 'text-aegrix-green' : 'text-aegrix-muted'} /><div className="h-2 rounded-full bg-aegrix-charcoal" style={{ width: `${width}%` }} /></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="capacidades" className="section-padding bg-aegrix-bg">
          <div className="container-width">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-extrabold uppercase tracking-[.22em] text-aegrix-cyan">{t.platformEyebrow}</p>
              <h2 className="heading-lg mt-5">{t.platformTitle}</h2>
              <p className="body-lg mt-6">{t.platformBody}</p>
            </div>
            <h3 className="mt-20 font-sora text-2xl font-bold md:text-3xl">{t.capabilitiesTitle}</h3>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {t.capabilities.map(([title, description], index) => {
                const Icon = capabilityIcons[index];
                return <article key={title} className="card-base card-hover"><span className="grid h-11 w-11 place-items-center rounded-xl bg-aegrix-cyan/8 text-aegrix-cyan"><Icon size={21} /></span><h4 className="mt-6 font-sora text-lg font-bold">{title}</h4><p className="mt-3 text-sm leading-7 text-aegrix-muted">{description}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-aegrix-border bg-aegrix-bg-2 py-24 md:py-32">
          <div className="container-width grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div><span className="label-tag"><ClipboardCheck size={14} /> AEGRIX 360</span><h2 className="heading-lg mt-6">{t.workflowTitle}</h2></div>
            <ol className="grid gap-3">
              {t.workflow.map((step, index) => <li key={step} className="flex items-center gap-5 rounded-xl border border-aegrix-border bg-aegrix-surface p-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-aegrix-cyan text-[11px] font-black text-aegrix-bg">0{index + 1}</span><span className="font-sora text-sm font-bold md:text-base">{step}</span></li>)}
            </ol>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-width">
            <div className="rounded-3xl border border-aegrix-cyan/15 bg-aegrix-surface p-8 md:p-12">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-aegrix-cyan/8 text-aegrix-cyan"><ShieldCheck size={27} /></span><div><h2 className="font-sora text-2xl font-bold md:text-3xl">{t.boundaryTitle}</h2><p className="mt-4 max-w-4xl leading-8 text-aegrix-muted">{t.boundaryBody}</p></div></div>
            </div>
          </div>
        </section>

        <section className="grid-bg border-t border-aegrix-border py-24 text-center md:py-32">
          <div className="container-width"><h2 className="heading-lg mx-auto max-w-4xl">{t.finalTitle}</h2><p className="body-lg mx-auto mt-6 max-w-3xl">{t.finalBody}</p><a className="btn-primary mt-10" href={PORTAL_URL}>{t.primary}<ArrowRight size={17} /></a></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
