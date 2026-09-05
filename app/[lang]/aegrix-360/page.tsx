export const runtime = 'edge';

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Compass, Gauge, ShieldCheck } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';
import { siteConfig } from '@/lib/site-config';

const frameworkRoutes = [
  { slug: 'nist', name: 'NIST CSF 2.0' },
  { slug: 'iso-27001', name: 'ISO/IEC 27001 & 27002' },
  { slug: 'hipaa', name: 'HIPAA Security Rule' },
  { slug: 'gdpr', name: 'GDPR' },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: 'es' | 'en' }> }): Promise<Metadata> {
  const { lang } = await params;
  const isEnglish = lang === 'en';
  const title = isEnglish
    ? 'AEGRIX 360 | Security Assessment, Readiness & Assurance'
    : 'AEGRIX 360 | Assessment, Readiness y Assurance de Ciberseguridad';
  const description = isEnglish
    ? 'AEGRIX 360 evaluates security posture, evidence, gaps and remediation across NIST CSF 2.0, ISO/IEC 27001/27002, HIPAA and GDPR through Pulse, Compass and Assurance.'
    : 'AEGRIX 360 evalúa postura, evidencia, brechas y remediación sobre NIST CSF 2.0, ISO/IEC 27001/27002, HIPAA y GDPR mediante Pulse, Compass y Assurance.';
  const url = `${siteConfig.origin}/${lang}/aegrix-360`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        es: `${siteConfig.origin}/es/aegrix-360`,
        en: `${siteConfig.origin}/en/aegrix-360`,
        'x-default': `${siteConfig.origin}/es/aegrix-360`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'AEGRIX',
      type: 'website',
      locale: isEnglish ? 'en_US' : 'es_CO',
      images: [{ url: `${siteConfig.origin}/AEGRIX_preview.png`, width: 1200, height: 630, alt: 'AEGRIX 360' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteConfig.origin}/AEGRIX_preview.png`],
    },
  };
}

export default async function Aegrix360Page({ params }: { params: Promise<{ lang: 'es' | 'en' }> }) {
  const { lang } = await params;
  const isEnglish = lang === 'en';

  const layers = isEnglish
    ? [
        {
          icon: Gauge,
          name: 'Pulse',
          eyebrow: 'Baseline diagnostic',
          description: 'A fast view of organizational capabilities using clear response states, evidence where available and prioritized findings.',
          details: ['Baseline posture', '20–30 capability-oriented checks depending on scope', 'Priority findings', 'Recommended next steps'],
        },
        {
          icon: Compass,
          name: 'Compass',
          eyebrow: 'Guided readiness',
          description: 'A deeper preparation layer that structures requirements, evidence, gaps and remediation against the selected framework.',
          details: ['Requirement-by-requirement guidance', 'Evidence tracking', 'Gap ownership', 'Remediation planning'],
        },
        {
          icon: ShieldCheck,
          name: 'Assurance',
          eyebrow: 'Verification & assurance',
          description: 'A rigorous review layer for organizations that need stronger evidence, review workflows, traceability and an auditable assessment record.',
          details: ['Review and verification', 'Evidence quality', 'Decision traceability', 'Auditable assessment snapshot'],
        },
      ]
    : [
        {
          icon: Gauge,
          name: 'Pulse',
          eyebrow: 'Diagnóstico base',
          description: 'Una vista rápida de las capacidades de la organización mediante estados claros de respuesta, evidencia cuando existe y hallazgos priorizados.',
          details: ['Postura base', '20–30 capacidades según alcance', 'Hallazgos prioritarios', 'Siguientes pasos recomendados'],
        },
        {
          icon: Compass,
          name: 'Compass',
          eyebrow: 'Readiness guiado',
          description: 'Una capa de preparación más profunda que estructura requisitos, evidencia, brechas y remediación frente al marco seleccionado.',
          details: ['Guía requisito por requisito', 'Seguimiento de evidencia', 'Responsables de brechas', 'Plan de remediación'],
        },
        {
          icon: ShieldCheck,
          name: 'Assurance',
          eyebrow: 'Verificación y assurance',
          description: 'Una capa de revisión rigurosa para organizaciones que necesitan mayor evidencia, flujos de revisión, trazabilidad y un registro auditable de la evaluación.',
          details: ['Revisión y verificación', 'Calidad de evidencia', 'Trazabilidad de decisiones', 'Snapshot auditable de la evaluación'],
        },
      ];

  return (
    <main className="pt-24 md:pt-36 pb-24 overflow-hidden">
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,194,255,0.08),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(99,102,241,0.07),transparent_35%)] pointer-events-none" aria-hidden="true" />
        <div className="container-width relative z-10 py-8 sm:py-12 md:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-aegrix-cyan/20 bg-aegrix-cyan/5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-aegrix-cyan mb-5 sm:mb-7">
              Assessment · Readiness · Assurance
            </span>
            <h1 className="text-[2.35rem] sm:text-5xl md:text-7xl font-sora font-extrabold tracking-tight text-aegrix-text leading-[1.04] md:leading-[1.02] mb-6 md:mb-8">
              AEGRIX 360
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-aegrix-cyan via-blue-400 to-indigo-500 mt-1.5 md:mt-2">
                {isEnglish ? 'Security evaluations with evidence and traceability.' : 'Evaluaciones de seguridad con evidencia y trazabilidad.'}
              </span>
            </h1>
            <p className="text-base md:text-xl text-aegrix-muted leading-relaxed max-w-3xl mb-7 md:mb-9">
              {isEnglish
                ? 'AEGRIX 360 is the common assessment engine behind Pulse, Compass and Assurance. It brings organizational context, framework requirements, responses, evidence, findings, remediation and decisions into one auditable workflow.'
                : 'AEGRIX 360 es el motor común de evaluación detrás de Pulse, Compass y Assurance. Integra contexto organizacional, requisitos del marco, respuestas, evidencia, hallazgos, remediación y decisiones en un flujo auditable.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
                {isEnglish ? 'Start an AEGRIX 360 assessment' : 'Iniciar evaluación con AEGRIX 360'}
              </Link>
              <Link href={siteConfig.portalUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary justify-center">
                {isEnglish ? 'Open 360 Portal' : 'Abrir Portal 360'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-aegrix-bg-2 border-y border-aegrix-border/50">
        <div className="container-width grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
              {isEnglish ? 'Who it is for' : 'Para quién es'}
            </span>
            <h2 className="heading-lg mt-3 mb-6 text-aegrix-text">
              {isEnglish ? 'A practical starting point for security decisions.' : 'Un punto de partida práctico para decidir sobre seguridad.'}
            </h2>
            <ul className="space-y-3 text-aegrix-muted">
              {(isEnglish
                ? ['Organizations that need to understand their security posture.', 'Teams that need to organize evidence and ownership.', 'Companies preparing for a framework or customer review.', 'Leaders who need a prioritized remediation path.']
                : ['Organizaciones que necesitan entender su postura de seguridad.', 'Equipos que deben ordenar evidencia y responsables.', 'Empresas que preparan una revisión de marco o de un cliente.', 'Líderes que necesitan priorizar la remediación.']
              ).map((item) => <li key={item} className="flex gap-3"><CheckCircle2 size={18} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl border border-aegrix-border bg-aegrix-surface p-7 md:p-9">
            <h3 className="font-sora font-bold text-xl text-aegrix-text mb-5">
              {isEnglish ? 'What the three levels mean' : 'Qué significan los tres niveles'}
            </h3>
            <div className="space-y-5 text-aegrix-muted">
              <p><strong className="text-aegrix-text">Pulse:</strong> {isEnglish ? 'understand where the organization is.' : 'entender dónde está la organización.'}</p>
              <p><strong className="text-aegrix-text">Compass:</strong> {isEnglish ? 'organize how to prepare and close gaps.' : 'organizar cómo prepararse y cerrar brechas.'}</p>
              <p><strong className="text-aegrix-text">Assurance:</strong> {isEnglish ? 'review evidence, controls and decisions in greater depth.' : 'revisar con mayor profundidad evidencia, controles y decisiones.'}</p>
              <p className="text-sm border-t border-aegrix-border pt-5">{isEnglish ? 'Assurance is not a certification and does not replace an independent audit when one is required.' : 'Assurance no es una certificación ni reemplaza una auditoría independiente cuando esta sea necesaria.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-aegrix-bg-2 border-y border-aegrix-border/50">
        <div className="container-width">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
              {isEnglish ? 'One engine, three levels of depth' : 'Un motor, tres niveles de profundidad'}
            </span>
            <h2 className="heading-lg mt-3 text-aegrix-text">
              {isEnglish ? 'Start where your organization is.' : 'Empieza donde está tu organización.'}
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {layers.map((layer) => (
              <article key={layer.name} className="rounded-3xl border border-aegrix-border bg-aegrix-surface p-7 md:p-9 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-aegrix-cyan/10 border border-aegrix-cyan/15 text-aegrix-cyan flex items-center justify-center mb-6">
                  <layer.icon size={24} aria-hidden="true" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-aegrix-cyan mb-2">{layer.eyebrow}</div>
                <h3 className="text-2xl font-sora font-bold text-aegrix-text mb-4">AEGRIX 360 {layer.name}</h3>
                <p className="text-aegrix-muted leading-relaxed mb-6">{layer.description}</p>
                <ul className="space-y-3">
                  {layer.details.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-aegrix-text/80">
                      <CheckCircle2 size={16} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-aegrix-bg">
        <div className="container-width">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
              {isEnglish ? 'Frameworks' : 'Marcos'}
            </span>
            <h2 className="heading-lg mt-3 mb-6 text-aegrix-text">
              {isEnglish ? 'Framework-specific assessment paths.' : 'Rutas de evaluación específicas por marco.'}
            </h2>
            <p className="body-lg text-aegrix-muted">
              {isEnglish
                ? 'The same auditable engine adapts its evaluation content, evidence expectations and remediation logic to the selected framework and engagement scope.'
                : 'El mismo motor auditable adapta el contenido de evaluación, las expectativas de evidencia y la lógica de remediación al marco seleccionado y al alcance contratado.'}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {frameworkRoutes.map((framework) => (
              <Link
                key={framework.slug}
                href={`/${lang}/aegrix-360/${framework.slug}`}
                className="group rounded-2xl border border-aegrix-border bg-aegrix-surface p-6 hover:border-aegrix-cyan/30 hover:-translate-y-0.5 transition-all"
              >
                <h3 className="font-sora font-bold text-aegrix-text mb-3">{framework.name}</h3>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-aegrix-cyan">
                  {isEnglish ? 'Explore assessment path' : 'Ver ruta de evaluación'}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-aegrix-bg-2 border-y border-aegrix-border/50">
        <div className="container-width grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
              {isEnglish ? 'Common audited model' : 'Modelo común auditable'}
            </span>
            <h2 className="heading-lg mt-3 mb-6 text-aegrix-text">
              {isEnglish ? 'The framework changes. The evidence trail stays consistent.' : 'El marco cambia. La trazabilidad se mantiene.'}
            </h2>
            <p className="body-lg text-aegrix-muted">
              {isEnglish
                ? 'Every evaluation can preserve organization context, assessment version, responses, evidence, applicability, review state, findings, remediation and decisions. This makes the result reproducible and easier to review over time.'
                : 'Cada evaluación puede conservar contexto de la organización, versión de la evaluación, respuestas, evidencia, aplicabilidad, estado de revisión, hallazgos, remediaciones y decisiones. Esto hace el resultado reproducible y más fácil de revisar con el tiempo.'}
            </p>
          </div>
          <div className="rounded-3xl border border-aegrix-border bg-aegrix-surface p-7 md:p-9">
            <h3 className="font-sora font-bold text-xl text-aegrix-text mb-5">
              {isEnglish ? 'What AEGRIX 360 does not claim' : 'Lo que AEGRIX 360 no pretende afirmar'}
            </h3>
            <ul className="space-y-4 text-aegrix-muted">
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />{isEnglish ? 'Readiness is not presented as third-party certification.' : 'Readiness no se presenta como certificación de tercera parte.'}</li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />{isEnglish ? 'Using the platform does not by itself guarantee legal or regulatory compliance.' : 'Usar la plataforma no garantiza por sí solo cumplimiento legal o regulatorio.'}</li>
              <li className="flex gap-3"><CheckCircle2 size={18} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />{isEnglish ? 'Scope, evidence and conclusions remain tied to the actual organization and engagement.' : 'El alcance, la evidencia y las conclusiones dependen de la organización y del trabajo realmente realizado.'}</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}