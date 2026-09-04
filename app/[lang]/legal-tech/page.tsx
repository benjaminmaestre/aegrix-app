'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Database, Lock, Clock, Shield } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/site-config';

const LEGAL_WHATSAPP_URL_ES = buildWhatsAppUrl('Hola, quiero evaluar la seguridad digital de mi firma u organización financiera con AEGRIX.');
const LEGAL_WHATSAPP_URL_EN = buildWhatsAppUrl('Hello, I want to assess the digital security of my law firm or financial organization with AEGRIX.');
const LEGAL_360_WHATSAPP_URL_ES = buildWhatsAppUrl('Hola, quiero iniciar una evaluación AEGRIX 360 para mi firma u organización financiera.');
const LEGAL_360_WHATSAPP_URL_EN = buildWhatsAppUrl('Hello, I want to start an AEGRIX 360 assessment for my law firm or financial organization.');

export default function LegalFinancePage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';
  const isEn = lang === 'en';
  const legalWhatsAppUrl = isEn ? LEGAL_WHATSAPP_URL_EN : LEGAL_WHATSAPP_URL_ES;
  const legal360WhatsAppUrl = isEn ? LEGAL_360_WHATSAPP_URL_EN : LEGAL_360_WHATSAPP_URL_ES;

  const problems = [
    {
      label: isEn ? 'CONFIDENTIAL DATA' : 'DATOS CONFIDENCIALES',
      title: isEn ? 'Sensitive information exposure' : 'Exposición de información sensible',
      description: isEn
        ? 'Contracts, financial records and private client information may move through channels without enough access control, encryption or traceability.'
        : 'Contratos, registros financieros e información privada de clientes pueden circular por canales sin suficiente control de acceso, cifrado o trazabilidad.',
      icon: Lock,
      colorClass: 'text-red-500',
    },
    {
      label: 'ONBOARDING',
      title: isEn ? 'Manual client onboarding' : 'Onboarding manual de clientes',
      description: isEn
        ? 'Registration, document collection, approvals and signatures depend on manual email or paper-based steps.'
        : 'El registro, la recolección de documentos, las aprobaciones y las firmas dependen de pasos manuales por correo o papel.',
      icon: Clock,
      colorClass: 'text-orange-500',
    },
    {
      label: isEn ? 'SECURITY POSTURE' : 'POSTURA DE SEGURIDAD',
      title: isEn ? 'Security controls without regular review' : 'Controles de seguridad sin revisión periódica',
      description: isEn
        ? 'Internal systems, cloud services and access paths may accumulate weaknesses when controls are not assessed and prioritized.'
        : 'Los sistemas internos, servicios cloud y rutas de acceso pueden acumular debilidades cuando los controles no se evalúan y priorizan.',
      icon: Shield,
      colorClass: 'text-blue-500',
    },
    {
      label: isEn ? 'TRACEABILITY' : 'TRAZABILIDAD',
      title: isEn ? 'Weak audit trail' : 'Trazabilidad insuficiente',
      description: isEn
        ? 'Sensitive reports or contracts are modified without a consistent record of who changed what, when and under which authorization.'
        : 'Informes o contratos sensibles se modifican sin un registro consistente de quién cambió qué, cuándo y bajo qué autorización.',
      icon: Database,
      colorClass: 'text-orange-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'Security, risk & framework readiness' : 'Seguridad, riesgo y readiness de marcos',
      desc: isEn
        ? 'Security assessments that combine risk, access, configuration, evidence and remediation, using NIST or ISO/IEC 27001/27002 when they fit the engagement.'
        : 'Evaluaciones de seguridad que combinan riesgo, accesos, configuración, evidencia y remediación, usando NIST o ISO/IEC 27001/27002 cuando aplican al alcance.',
      features: isEn
        ? ['Risk and control assessment', 'Identity and access review', 'Vulnerability testing according to scope', 'NIST and ISO/IEC 27001/27002 readiness']
        : ['Evaluación de riesgos y controles', 'Revisión de identidades y accesos', 'Pruebas de vulnerabilidad según alcance', 'Readiness NIST e ISO/IEC 27001/27002'],
    },
    {
      title: isEn ? 'Secure onboarding automation' : 'Automatización segura de onboarding',
      desc: isEn
        ? 'Digital workflows for registration, document collection, approvals and signatures with clear access and audit requirements.'
        : 'Flujos digitales para registro, recolección de documentos, aprobaciones y firmas con requisitos claros de acceso y auditoría.',
      features: isEn
        ? ['Onboarding workflows', 'Electronic signature integrations', 'Document validation', 'Approval and audit trails']
        : ['Flujos de onboarding', 'Integración de firma electrónica', 'Validación de documentos', 'Aprobaciones y trazabilidad'],
    },
    {
      title: isEn ? 'Secure client portals' : 'Portales seguros para clientes',
      desc: isEn
        ? 'Custom software and web portals designed around access control, auditability, performance and secure handling of sensitive documents.'
        : 'Software y portales web a medida diseñados alrededor de control de acceso, auditabilidad, rendimiento y manejo seguro de documentos sensibles.',
      features: isEn
        ? ['Isolated cloud environments when required', 'Performance optimization', 'Detailed activity logs', 'Secure document workflows']
        : ['Entornos cloud aislados cuando aplica', 'Optimización de rendimiento', 'Registros detallados de actividad', 'Flujos seguros de documentos'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Legal & Finance"
      heroTitlePart1={isEn ? 'Cybersecurity, data protection and digital engineering' : 'Ciberseguridad, protección de datos e ingeniería digital'}
      heroTitleHighlight={isEn ? 'for legal and financial organizations.' : 'para organizaciones legales y financieras.'}
      heroDescription={isEn
        ? 'Security assessment, secure software, data protection, traceability and workflow automation for organizations that handle confidential information.'
        : 'Evaluación de seguridad, software seguro, protección de datos, trazabilidad y automatización de flujos para organizaciones que manejan información confidencial.'}
      heroPrimaryCta={isEn ? 'Request an assessment' : 'Solicitar evaluación'}
      heroWhatsAppUrl={legalWhatsAppUrl}
      heroImageBaseName="hero-legal-medellin"
      heroImageAlt={isEn ? 'Legal executive meeting with view of downtown Medellin and the Coltejer building.' : 'Reunión ejecutiva legal con vista al centro de Medellín y el edificio Coltejer.'}
      problemsSectionTitle={isEn ? 'Common security and operational gaps' : 'Brechas frecuentes de seguridad y operación'}
      problemsSectionDesc={isEn
        ? 'Legal and financial organizations combine confidential information, regulated processes and access paths that require stronger control and evidence.'
        : 'Las organizaciones legales y financieras combinan información confidencial, procesos regulados y rutas de acceso que requieren mayor control y evidencia.'}
      problems={problems}
      solutionsSectionTitle={isEn ? 'Security and digital engineering' : 'Ciberseguridad e ingeniería digital'}
      solutionsSectionDesc={isEn
        ? 'We combine cybersecurity, software, data and automation with assessment and readiness work according to the organization’s real context.'
        : 'Combinamos ciberseguridad, software, datos y automatización con procesos de assessment y readiness según el contexto real de la organización.'}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? 'Assess risk, evidence and security priorities with AEGRIX 360.'
        : 'Evalúa riesgos, evidencia y prioridades de seguridad con AEGRIX 360.'}
      diagnosticBannerDesc={isEn
        ? 'The assessment can include NIST or ISO/IEC 27001/27002 readiness and GDPR-related privacy and security controls when they are relevant to the contracted scope.'
        : 'La evaluación puede incluir readiness NIST o ISO/IEC 27001/27002 y controles de privacidad y seguridad relacionados con GDPR cuando sean relevantes para el alcance contratado.'}
      diagnosticBannerCta={isEn ? 'Start security assessment' : 'Iniciar evaluación de seguridad'}
      diagnosticWhatsAppUrl={legal360WhatsAppUrl}
      contextualLinks={[
        { href: `/${lang}/aegrix-360/nist`, label: isEn ? 'NIST CSF 2.0 assessment' : 'Evaluación NIST CSF 2.0' },
        { href: `/${lang}/aegrix-360/iso-27001`, label: isEn ? 'ISO 27001 readiness' : 'Readiness ISO 27001' },
        { href: `/${lang}/aegrix-360`, label: isEn ? 'Explore AEGRIX 360' : 'Explorar AEGRIX 360' },
      ]}
    />
  );
}
