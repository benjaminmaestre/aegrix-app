export const runtime = 'edge';

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';

const configs = {
  nist: {
    name: 'NIST CSF 2.0',
    es: {
      title: 'AEGRIX 360 para NIST CSF 2.0',
      description: 'Evalúa postura, evidencia, brechas y remediación frente a las funciones y resultados de NIST CSF 2.0 con Pulse, Compass y Assurance.',
      intro: 'AEGRIX 360 estructura la evaluación de capacidades de ciberseguridad alrededor de NIST CSF 2.0 para que la organización pueda entender su postura, reunir evidencia, priorizar brechas y dar seguimiento a la remediación.',
      focus: ['Gobierno y contexto de riesgo', 'Identificación y protección de capacidades críticas', 'Detección, respuesta y recuperación', 'Evidencia, responsables y trazabilidad de decisiones'],
      note: 'AEGRIX 360 usa NIST CSF 2.0 como marco de evaluación y readiness según alcance; no representa una certificación emitida por NIST.',
    },
    en: {
      title: 'AEGRIX 360 for NIST CSF 2.0',
      description: 'Assess posture, evidence, gaps and remediation against NIST CSF 2.0 functions and outcomes with Pulse, Compass and Assurance.',
      intro: 'AEGRIX 360 structures cybersecurity capability assessment around NIST CSF 2.0 so an organization can understand posture, gather evidence, prioritize gaps and track remediation.',
      focus: ['Governance and risk context', 'Identification and protection of critical capabilities', 'Detection, response and recovery', 'Evidence, ownership and decision traceability'],
      note: 'AEGRIX 360 uses NIST CSF 2.0 as an assessment and readiness framework according to scope; it does not represent a certification issued by NIST.',
    },
  },
  'iso-27001': {
    name: 'ISO/IEC 27001 & 27002',
    es: {
      title: 'AEGRIX 360 para ISO/IEC 27001 e ISO/IEC 27002',
      description: 'Organiza readiness, evidencia, brechas y remediación frente a un SGSI basado en ISO/IEC 27001 y controles de ISO/IEC 27002.',
      intro: 'AEGRIX 360 ayuda a estructurar la preparación de un sistema de gestión de seguridad de la información mediante requisitos, evidencia, aplicabilidad, hallazgos y remediación vinculados al alcance real de la organización.',
      focus: ['Contexto, alcance y responsabilidades del SGSI', 'Riesgos, tratamiento y evidencia', 'Controles y orientación de ISO/IEC 27002', 'Hallazgos, remediación y registro auditable de revisión'],
      note: 'AEGRIX 360 apoya readiness y assurance. La certificación ISO/IEC 27001, cuando se busca, debe ser emitida por un organismo de certificación competente e independiente.',
    },
    en: {
      title: 'AEGRIX 360 for ISO/IEC 27001 and ISO/IEC 27002',
      description: 'Structure readiness, evidence, gaps and remediation for an ISMS based on ISO/IEC 27001 and ISO/IEC 27002 controls.',
      intro: 'AEGRIX 360 helps structure information security management system readiness through requirements, evidence, applicability, findings and remediation tied to the organization’s actual scope.',
      focus: ['ISMS context, scope and responsibilities', 'Risk, treatment and evidence', 'ISO/IEC 27002 control guidance', 'Findings, remediation and an auditable review record'],
      note: 'AEGRIX 360 supports readiness and assurance. ISO/IEC 27001 certification, when pursued, must be issued by a competent independent certification body.',
    },
  },
  hipaa: {
    name: 'HIPAA Security Rule',
    es: {
      title: 'AEGRIX 360 para HIPAA Security Rule',
      description: 'Evalúa preparación técnica y administrativa frente a HIPAA Security Rule, con evidencia, hallazgos y remediación trazable.',
      intro: 'AEGRIX 360 permite revisar de forma estructurada salvaguardas administrativas, físicas y técnicas relevantes para HIPAA Security Rule, vinculando cada evaluación con evidencia, aplicabilidad, hallazgos y acciones de remediación.',
      focus: ['Análisis y gestión de riesgos de seguridad', 'Accesos, autenticación y salvaguardas técnicas', 'Procesos, responsabilidades y evidencia', 'Hallazgos priorizados y plan de remediación'],
      note: 'AEGRIX 360 apoya evaluación y readiness de HIPAA Security Rule. No sustituye asesoría legal ni constituye por sí solo una declaración de cumplimiento HIPAA.',
    },
    en: {
      title: 'AEGRIX 360 for the HIPAA Security Rule',
      description: 'Assess technical and administrative readiness against the HIPAA Security Rule with evidence, findings and traceable remediation.',
      intro: 'AEGRIX 360 provides a structured way to review administrative, physical and technical safeguards relevant to the HIPAA Security Rule, linking each assessment to evidence, applicability, findings and remediation actions.',
      focus: ['Security risk analysis and management', 'Access, authentication and technical safeguards', 'Processes, responsibilities and evidence', 'Prioritized findings and remediation planning'],
      note: 'AEGRIX 360 supports HIPAA Security Rule assessment and readiness. It does not replace legal advice or by itself constitute a statement of HIPAA compliance.',
    },
  },
  gdpr: {
    name: 'GDPR',
    es: {
      title: 'AEGRIX 360 para GDPR',
      description: 'Estructura evaluaciones de privacidad y seguridad relacionadas con GDPR, con evidencia, brechas, responsables y remediación.',
      intro: 'AEGRIX 360 puede organizar evaluaciones de controles de privacidad, seguridad y gobierno relacionados con GDPR según el alcance del servicio, manteniendo trazabilidad de evidencia, hallazgos, decisiones y remediaciones.',
      focus: ['Gobierno de datos y responsabilidades', 'Seguridad del tratamiento y controles técnicos', 'Evidencia, registros y trazabilidad', 'Brechas y acciones de remediación priorizadas'],
      note: 'GDPR incluye obligaciones jurídicas y organizativas que exceden una evaluación técnica. AEGRIX 360 apoya readiness y evidencia dentro del alcance contratado y no sustituye asesoría legal especializada.',
    },
    en: {
      title: 'AEGRIX 360 for GDPR',
      description: 'Structure GDPR-related privacy and security assessments with evidence, gaps, ownership and remediation.',
      intro: 'AEGRIX 360 can organize assessments of privacy, security and governance controls related to GDPR according to engagement scope while preserving traceability across evidence, findings, decisions and remediation.',
      focus: ['Data governance and responsibilities', 'Security of processing and technical controls', 'Evidence, records and traceability', 'Prioritized gaps and remediation actions'],
      note: 'GDPR includes legal and organizational obligations beyond a technical assessment. AEGRIX 360 supports readiness and evidence within the contracted scope and does not replace specialist legal advice.',
    },
  },
} as const;

type FrameworkKey = keyof typeof configs;

function getConfig(framework: string) {
  return configs[framework as FrameworkKey];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: 'es' | 'en'; framework: string }> }): Promise<Metadata> {
  const { lang, framework } = await params;
  const config = getConfig(framework);
  if (!config) return {};
  const copy = config[lang];
  const url = `https://aegrix.com.co/${lang}/aegrix-360/${framework}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: url,
      languages: {
        es: `https://aegrix.com.co/es/aegrix-360/${framework}`,
        en: `https://aegrix.com.co/en/aegrix-360/${framework}`,
        'x-default': `https://aegrix.com.co/es/aegrix-360/${framework}`,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url,
      siteName: 'AEGRIX',
      type: 'website',
      locale: lang === 'en' ? 'en_US' : 'es_CO',
      images: [{ url: 'https://aegrix.com.co/AEGRIX_preview.png', width: 1200, height: 630, alt: `${copy.title} · AEGRIX 360` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: ['https://aegrix.com.co/AEGRIX_preview.png'],
    },
  };
}

export default async function FrameworkPage({ params }: { params: Promise<{ lang: 'es' | 'en'; framework: string }> }) {
  const { lang, framework } = await params;
  const config = getConfig(framework);
  if (!config) notFound();
  const copy = config[lang];
  const isEnglish = lang === 'en';

  const stages = isEnglish
    ? [
        { name: 'Pulse', text: 'Establish a baseline view of relevant capabilities, unknowns and immediate priorities.' },
        { name: 'Compass', text: 'Work requirement by requirement, gather evidence, identify gaps and assign remediation.' },
        { name: 'Assurance', text: 'Increase review depth, verify evidence and preserve an auditable assessment record.' },
      ]
    : [
        { name: 'Pulse', text: 'Establece una línea base de capacidades relevantes, desconocidos y prioridades inmediatas.' },
        { name: 'Compass', text: 'Trabaja requisito por requisito, reúne evidencia, identifica brechas y asigna remediación.' },
        { name: 'Assurance', text: 'Aumenta la profundidad de revisión, verifica evidencia y conserva un registro auditable de la evaluación.' },
      ];

  return (
    <main className="pt-24 md:pt-36 pb-24">
      <section className="container-width py-8 sm:py-12 md:py-20">
        <Link href={`/${lang}/aegrix-360`} className="inline-flex items-center gap-2 text-sm font-semibold text-aegrix-muted hover:text-aegrix-cyan transition-colors mb-6 sm:mb-10">
          <ArrowLeft size={16} aria-hidden="true" />
          {isEnglish ? 'Back to AEGRIX 360' : 'Volver a AEGRIX 360'}
        </Link>
        <div className="max-w-4xl">
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.22em] text-aegrix-cyan">AEGRIX 360 · {config.name}</span>
          <h1 className="text-[2.25rem] sm:text-4xl md:text-6xl font-sora font-extrabold tracking-tight text-aegrix-text mt-3 sm:mt-4 mb-5 sm:mb-7 leading-[1.08]">{copy.title}</h1>
          <p className="text-base sm:text-lg md:text-xl text-aegrix-muted leading-relaxed max-w-3xl">{copy.intro}</p>
        </div>
      </section>

      <section className="section-padding bg-aegrix-bg-2 border-y border-aegrix-border/50">
        <div className="container-width grid lg:grid-cols-3 gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">{isEnglish ? 'Scope' : 'Alcance'}</span>
            <h2 className="heading-lg mt-3 mb-4 text-aegrix-text">{isEnglish ? 'What we can review' : 'Qué podemos evaluar'}</h2>
            <p className="text-aegrix-muted leading-relaxed">{isEnglish ? 'The review is defined around your organization, systems, evidence and contracted scope.' : 'La revisión se define alrededor de la organización, los sistemas, la evidencia y el alcance contratado.'}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">{isEnglish ? 'Client input' : 'Información del cliente'}</span>
            <h2 className="heading-lg mt-3 mb-4 text-aegrix-text">{isEnglish ? 'What we may need' : 'Qué podemos necesitar'}</h2>
            <p className="text-aegrix-muted leading-relaxed">{isEnglish ? 'Relevant owners, documentation, inventories, existing evidence and controlled access when applicable.' : 'Responsables, documentación, inventarios, evidencia disponible y accesos controlados cuando aplique.'}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">{isEnglish ? 'Outcome' : 'Resultado'}</span>
            <h2 className="heading-lg mt-3 mb-4 text-aegrix-text">{isEnglish ? 'What you may receive' : 'Qué puede recibir'}</h2>
            <p className="text-aegrix-muted leading-relaxed">{isEnglish ? 'Findings, gaps, reviewed evidence, ownership and a remediation roadmap when included in the engagement.' : 'Hallazgos, brechas, evidencia revisada, responsables y un roadmap de remediación cuando formen parte del servicio.'}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-aegrix-bg-2 border-y border-aegrix-border/50">
        <div className="container-width grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
              {isEnglish ? 'Assessment focus' : 'Enfoque de evaluación'}
            </span>
            <h2 className="heading-lg mt-3 mb-7 text-aegrix-text">
              {isEnglish ? 'Evidence before conclusions.' : 'Evidencia antes que conclusiones.'}
            </h2>
            <ul className="space-y-4">
              {copy.focus.map((item) => (
                <li key={item} className="flex items-start gap-3 text-aegrix-muted">
                  <CheckCircle2 size={18} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-aegrix-border bg-aegrix-surface p-7 md:p-9">
            <h3 className="font-sora font-bold text-xl text-aegrix-text mb-5">
              {isEnglish ? 'Scope and assurance note' : 'Nota de alcance y assurance'}
            </h3>
            <p className="text-aegrix-muted leading-relaxed">{copy.note}</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-aegrix-bg">
        <div className="container-width">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">Pulse · Compass · Assurance</span>
            <h2 className="heading-lg mt-3 text-aegrix-text">
              {isEnglish ? 'Choose the depth your organization needs.' : 'Elige la profundidad que necesita tu organización.'}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stages.map((stage) => (
              <article key={stage.name} className="rounded-2xl border border-aegrix-border bg-aegrix-surface p-7">
                <div className="text-aegrix-cyan font-sora font-bold text-xl mb-3">AEGRIX 360 {stage.name}</div>
                <p className="text-aegrix-muted leading-relaxed">{stage.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex justify-center">
              {isEnglish ? `Discuss a ${config.name} assessment` : `Hablar sobre una evaluación ${config.name}`}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}