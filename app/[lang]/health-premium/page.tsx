'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Globe, Lock, Clock, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/site-config';

const HEALTH_WHATSAPP_URL = buildWhatsAppUrl('Hola, quiero evaluar la seguridad y la operación digital de mi organización de salud con AEGRIX.');
const HEALTH_360_WHATSAPP_URL = buildWhatsAppUrl('Hola, quiero iniciar una evaluación AEGRIX 360 para mi organización de salud.');

export default function HealthPremiumPage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';
  const isEn = lang === 'en';

  const problems = [
    {
      label: isEn ? 'PATIENT JOURNEY' : 'RECORRIDO DEL PACIENTE',
      title: isEn ? 'Untracked WhatsApp conversations' : 'Conversaciones de WhatsApp sin trazabilidad',
      description: isEn
        ? 'Patient inquiries arrive through WhatsApp but response ownership, follow-up and conversion are not consistently measured.'
        : 'Las consultas de pacientes llegan por WhatsApp, pero la asignación, el seguimiento y la conversión no siempre quedan medidos.',
      icon: MessageSquare,
      colorClass: 'text-green-500',
    },
    {
      label: isEn ? 'SENSITIVE DATA' : 'DATOS SENSIBLES',
      title: isEn ? 'Privacy and security gaps' : 'Brechas de privacidad y seguridad',
      description: isEn
        ? 'Clinical records, consents or other sensitive information may move through channels without sufficient access controls, evidence or traceability.'
        : 'Historias clínicas, consentimientos u otra información sensible pueden circular por canales sin suficientes controles de acceso, evidencia o trazabilidad.',
      icon: Lock,
      colorClass: 'text-red-500',
    },
    {
      label: 'WEB',
      title: isEn ? 'Medical website without a clear journey' : 'Web médica sin un recorrido claro',
      description: isEn
        ? 'The site provides information but does not clearly connect discovery, trust, contact, booking and measurement.'
        : 'El sitio informa, pero no conecta con claridad descubrimiento, confianza, contacto, agendamiento y medición.',
      icon: Globe,
      colorClass: 'text-pink-500',
    },
    {
      label: isEn ? 'OPERATIONS' : 'OPERACIÓN',
      title: isEn ? 'Manual appointment coordination' : 'Coordinación manual de citas',
      description: isEn
        ? 'Administrative teams spend time coordinating appointments through calls and chats without integrated workflows.'
        : 'Los equipos administrativos dedican tiempo a coordinar citas por llamadas y chats sin flujos integrados.',
      icon: Clock,
      colorClass: 'text-orange-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'High-performance medical web' : 'Web médica de alto rendimiento',
      desc: isEn
        ? 'Custom web engineering with technical SEO, performance, accessibility and patient journeys designed around measurable goals.'
        : 'Ingeniería web a medida con SEO técnico, rendimiento, accesibilidad y recorridos de pacientes diseñados alrededor de objetivos medibles.',
      features: isEn
        ? ['Technical and local SEO', 'Performance optimization', 'Contact and booking journeys', 'Analytics with consent']
        : ['SEO técnico y local', 'Optimización de rendimiento', 'Recorridos de contacto y agendamiento', 'Analítica con consentimiento'],
    },
    {
      title: isEn ? 'WhatsApp & AI automation' : 'Automatización por WhatsApp e IA',
      desc: isEn
        ? 'Automation for qualification, routing, reminders and operational follow-up when the workflow and data involved make it appropriate.'
        : 'Automatización para clasificación, asignación, recordatorios y seguimiento operativo cuando el flujo y los datos involucrados lo permiten.',
      features: isEn
        ? ['AI assistants according to use case', 'Automated reminders', 'CRM or agenda integrations', 'Response and conversion measurement']
        : ['Asistentes de IA según caso de uso', 'Recordatorios automatizados', 'Integraciones con CRM o agenda', 'Medición de respuesta y conversión'],
    },
    {
      title: isEn ? 'Privacy, security & HIPAA readiness' : 'Privacidad, seguridad y readiness HIPAA',
      desc: isEn
        ? 'Security assessment and remediation for sensitive health information, including HIPAA Security Rule readiness when it is part of the engagement scope.'
        : 'Evaluación de seguridad y remediación para información sensible de salud, incluyendo readiness frente a HIPAA Security Rule cuando forma parte del alcance.',
      features: isEn
        ? ['Risk and control assessment', 'Identity and access controls', 'HIPAA Security Rule readiness', 'Evidence and remediation tracking']
        : ['Evaluación de riesgos y controles', 'Identidades y controles de acceso', 'Readiness HIPAA Security Rule', 'Seguimiento de evidencia y remediación'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Health"
      heroTitlePart1={isEn ? 'Digital engineering, automation and security' : 'Ingeniería digital, automatización y seguridad'}
      heroTitleHighlight={isEn ? 'for healthcare organizations.' : 'para organizaciones de salud.'}
      heroDescription={isEn
        ? 'High-performance medical web, patient journeys, automation, analytics and security assessment for sensitive health information.'
        : 'Web médica de alto rendimiento, recorridos de pacientes, automatización, analítica y evaluación de seguridad para información sensible de salud.'}
      heroWhatsAppUrl={HEALTH_WHATSAPP_URL}
      heroImageBaseName="hero-health-medellin"
      heroImageAlt={isEn ? 'Healthcare organization in Medellin with panoramic view of the city.' : 'Organización de salud en Medellín con vista panorámica de la ciudad.'}
      problemsSectionTitle={isEn ? 'Common digital challenges in healthcare' : 'Retos digitales frecuentes en salud'}
      problemsSectionDesc={isEn
        ? 'Healthcare combines sensitive information, demanding patient journeys and operational processes that require stronger security, traceability and measurement.'
        : 'Salud combina información sensible, recorridos exigentes de pacientes y procesos operativos que requieren mayor seguridad, trazabilidad y medición.'}
      problems={problems}
      solutionsSectionTitle={isEn ? 'Healthcare technology engineering' : 'Ingeniería tecnológica para salud'}
      solutionsSectionDesc={isEn
        ? 'We combine software, cybersecurity, analytics and automation according to the organization’s real scope and risk context.'
        : 'Combinamos software, ciberseguridad, analítica y automatización según el alcance real y el contexto de riesgo de la organización.'}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? 'Assess security, digital journeys and operational gaps with AEGRIX.'
        : 'Evalúa seguridad, recorridos digitales y brechas operativas con AEGRIX.'}
      diagnosticBannerDesc={isEn
        ? 'We can structure the assessment with AEGRIX 360 and include HIPAA Security Rule readiness when it is relevant to the contracted scope.'
        : 'Podemos estructurar la evaluación con AEGRIX 360 e incluir readiness frente a HIPAA Security Rule cuando sea relevante para el alcance contratado.'}
      diagnosticBannerCta={isEn ? 'Start healthcare assessment' : 'Iniciar evaluación de salud'}
      diagnosticWhatsAppUrl={HEALTH_360_WHATSAPP_URL}
    />
  );
}
