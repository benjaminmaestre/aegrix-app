'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Globe, Lock, Clock, MessageSquare } from 'lucide-react';

export default function HealthPremiumPage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';

  const isEn = lang === 'en';

  const problems = [
    {
      code: '[WARN_WHATSAPP_FUGA]',
      title: isEn ? 'Patient Leakage on WhatsApp' : 'Fuga de prospectos en WhatsApp',
      description: isEn
        ? 'High-value patients write via WhatsApp but there is no response tracking or agile assignment to patient coordinators.'
        : 'Pacientes de alto valor escriben por WhatsApp pero no hay trazabilidad de respuesta ni asignación ágil a coordinadores.',
      icon: MessageSquare,
      colorClass: 'text-green-500',
    },
    {
      code: '[WARN_DATOS_EXPUESTOS]',
      title: isEn ? 'Legal & Compliance Risks' : 'Riesgo de cumplimiento legal',
      description: isEn
        ? 'Clinical records or consents shared through insecure channels, risking heavy fines from local regulatory bodies.'
        : 'Historias clínicas o consentimientos compartidos por canales inseguros, con riesgo de multas de Habeas Data.',
      icon: Lock,
      colorClass: 'text-red-500',
    },
    {
      code: '[WARN_WEB_PASIVA]',
      title: isEn ? 'Static Medical Website' : 'Web médica pasiva',
      description: isEn
        ? 'A website that looks like a static business card instead of an automated high-ticket patient acquisition funnel.'
        : 'Sitio web que parece una tarjeta de presentación estática en lugar de un embudo automatizado de pacientes de alto valor.',
      icon: Globe,
      colorClass: 'text-pink-500',
    },
    {
      code: '[WARN_AGENDA_MANUAL]',
      title: isEn ? 'Manual Appointment Booking' : 'Coordinación manual de citas',
      description: isEn
        ? 'Administrative staff spending hours coordinating appointments by phone or chat without real-time calendar sync.'
        : 'Secretarias dedicando horas a coordinar citas por teléfono o chat sin sincronización en tiempo real de calendarios.',
      icon: Clock,
      colorClass: 'text-orange-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'High-Conversion Medical Web' : 'Web Médica de Alta Conversión',
      desc: isEn
        ? 'Custom web development with specialized medical SEO and premium UX to attract high-ticket patients.'
        : 'Desarrollo web a medida con SEO médico especializado y UX premium para captar pacientes de alto ticket.',
      features: isEn
        ? ['Specialized Local SEO', 'Instant load times', 'Interactive booking flows', 'Enterprise design']
        : ['SEO Local especializado', 'Velocidad de carga instantánea', 'Formularios y agendamiento interactivo', 'Diseño de primer nivel'],
    },
    {
      title: isEn ? 'WhatsApp & AI Automation' : 'Automatización por WhatsApp e IA',
      desc: isEn
        ? 'Intelligent automated responses that pre-qualify patients, coordinate agendas, and notify reminders.'
        : 'Respuestas automáticas inteligentes que pre-califican pacientes, coordinan agendas y envían recordatorios.',
      features: isEn
        ? ['Pre-qualification AI Agent', 'Automated reminders', 'Medical CRM integration', 'Response speed tracking']
        : ['Agente IA de pre-calificación', 'Recordatorios automatizados de citas', 'Integración con CRM médico', 'Estadísticas de velocidad de respuesta'],
    },
    {
      title: isEn ? 'Habeas Data & Security Compliance' : 'Cumplimiento Habeas Data y Seguridad',
      desc: isEn
        ? 'Comprehensive protection and encryption of sensitive patient data to comply with government regulations.'
        : 'Protección integral y encriptación de datos de pacientes para cumplir con las regulaciones de la Superintendencia.',
      features: isEn
        ? ['Encrypted medical histories', 'Vulnerability audits', 'Password & access control', 'Automated daily backups']
        : ['Encriptación de historias clínicas', 'Auditoría de vulnerabilidades en red', 'Políticas de contraseñas y accesos', 'Backups diarios automatizados'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Health Premium"
      heroTitlePart1={isEn ? "Acquisition, automation and digital security" : "Captación, automatización y seguridad digital"}
      heroTitleHighlight={isEn ? "for premium clinics." : "para clínicas premium."}
      heroDescription={isEn
        ? "Premium medical web, patient funnels, WhatsApp automation, commercial analytics, and sensitive data protection."
        : "Web médica premium, embudos de pacientes, automatización por WhatsApp, analítica comercial y protección de datos sensibles."}
      heroWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20de%20salud%20digital%20para%20mi%20cl%C3%ADnica%20premium."
      problemsSectionTitle={isEn ? "Does your clinic face any of these challenges?" : "¿Tu clínica tiene alguno de estos problemas?"}
      problemsSectionDesc={isEn
        ? "High-end medical centers handle high-value patients and extremely sensitive data, but often experience information leaks and slow processes."
        : "Los centros médicos de alta gama manejan pacientes de alto valor y datos extremadamente sensibles, pero suelen tener fugas de información y procesos lentos."}
      problems={problems}
      solutionsSectionTitle={isEn ? "Medical Technology Solutions" : "Soluciones de Ingeniería Médica"}
      solutionsSectionDesc={isEn
        ? "We build the digital control layer that your high-end clinic needs to operate with absolute trust and scalability."
        : "Estructuramos la capa de control tecnológico que tu clínica de alta gama necesita para operar con confianza y escala."}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? "If you check 2 or more, your clinic needs a digital health check."
        : "Si marcaste 2 o más, tu clínica necesita un diagnóstico digital de salud."}
      diagnosticBannerDesc={isEn
        ? "We evaluate the security of patient data, your web speed, and the efficiency of your medical WhatsApp channel completely free of charge."
        : "Evaluamos gratis la seguridad de datos de pacientes, la velocidad de tu web y la eficiencia de tu canal de WhatsApp médico. Te entregamos un informe en 48 horas."}
      diagnosticBannerCta={isEn ? "Request Free Medical Diagnosis" : "Solicitar diagnóstico médico gratuito"}
      diagnosticWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20de%20salud%20digital%20para%20mi%20cl%C3%ADnica%20premium."
    />
  );
}
