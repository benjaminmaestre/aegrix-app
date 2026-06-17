'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Database, Lock, Clock, Shield } from 'lucide-react';

export default function LegalFinancePage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';

  const isEn = lang === 'en';

  const problems = [
    {
      code: '[WARN_FUGA_DOCUMENTAL]',
      title: isEn ? 'Sensitive Data Leaks' : 'Fuga de información confidencial',
      description: isEn
        ? 'Documents, contracts, and private client data exposed or shared through insecure public channels.'
        : 'Documentos, contratos y datos privados de clientes expuestos o transferidos por canales públicos inseguros.',
      icon: Lock,
      colorClass: 'text-red-500',
    },
    {
      code: '[WARN_ONBOARDING_LENTO]',
      title: isEn ? 'Slow Client Onboarding' : 'Registro de clientes lento',
      description: isEn
        ? 'The onboarding of new clients and contract signatures is handled manually via mail or physical paper.'
        : 'El proceso de registro de nuevos clientes y firmas de contratos se realiza de forma manual por correo o papel.',
      icon: Clock,
      colorClass: 'text-orange-500',
    },
    {
      code: '[WARN_SISTEMA_VULNERABLE]',
      title: isEn ? 'Lack of Security Audits' : 'Sistemas vulnerables',
      description: isEn
        ? 'No vulnerability testing is conducted on internal systems or cloud servers, leaving entry points unmonitored.'
        : 'No se realizan pruebas de vulnerabilidad en los sistemas ni servidores, ignorando accesos de empleados vulnerables.',
      icon: Shield,
      colorClass: 'text-blue-500',
    },
    {
      code: '[WARN_DESORDEN_DATOS]',
      title: isEn ? 'No Audit Trail' : 'Pérdida de trazabilidad de cambios',
      description: isEn
        ? 'Sensitive financial reports or contracts modified without a clear audit trail or verified user log.'
        : 'Contratos e informes financieros modificados sin un historial claro de auditoría o de verificación de usuarios.',
      icon: Database,
      colorClass: 'text-orange-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'Security & Compliance Audits' : 'Seguridad Digital & Cumplimiento',
      desc: isEn
        ? 'Implement advanced protocols to encrypt confidential information and ensure local bank-grade compliance.'
        : 'Implementamos protocolos avanzados para encriptar información confidencial y asegurar el cumplimiento de regulaciones de privacidad.',
      features: isEn
        ? ['Point-to-point encryption', 'Advanced access controls', 'Vulnerability testing (Pentesting)', 'Data loss prevention (DLP)']
        : ['Encriptación punto a punto', 'Políticas avanzadas de accesos', 'Auditoría de vulnerabilidades (Pentesting)', 'Prevención contra fugas de datos'],
    },
    {
      title: isEn ? 'Automated Onboarding (KYC)' : 'Automatización de Onboarding (KYC)',
      desc: isEn
        ? 'Secure digital systems for client registration, secure document uploading, and integrated cloud signatures.'
        : 'Sistemas digitales seguros para el registro de clientes, carga de documentos de identidad y firmas digitales integradas en la nube.',
      features: isEn
        ? ['Automated onboarding workflows', 'Integrated e-signatures', 'Document validation engine', 'Digital approval gates']
        : ['Onboarding automatizado', 'Integración de firma electrónica segura', 'Validación automática de documentos', 'Flujos de aprobación digital'],
    },
    {
      title: isEn ? 'Secure Client Portals' : 'Portales de Clientes Seguros',
      desc: isEn
        ? 'Custom web development with hardened architectures for corporate clients to upload and view sensitive documents.'
        : 'Desarrollo web a medida con arquitectura protegida para que tus clientes corporativos carguen e inspeccionen documentos sensibles.',
      features: isEn
        ? ['Isolated cloud infrastructure', 'Instant load times', 'Detailed activity audit logs', 'Premium custom interface']
        : ['Infraestructura en la nube aislada', 'Velocidad de carga inmediata', 'Auditoría de actividad de usuarios', 'Diseño e interfaz premium'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Legal & Finance"
      heroTitlePart1={isEn ? "Cybersecurity, data shielding and digital infrastructure" : "Ciberseguridad, blindaje de datos e infraestructura"}
      heroTitleHighlight={isEn ? "for legal and financial firms." : "para firmas legales y financieras."}
      heroDescription={isEn
        ? "Penetration testing, encryption of confidential records, and secure workflow automation for high-value client onboarding and document management."
        : "Auditorías de penetración, encriptación de datos confidenciales y flujos de automatización seguros para el registro y gestión de clientes de alto valor."}
      heroWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20de%20seguridad%20digital%20para%20mi%20firma%20o%20empresa%20financiera."
      problemsSectionTitle={isEn ? "Does your corporate firm face any of these challenges?" : "¿Tu firma corporativa o financiera tiene alguno de estos problemas?"}
      problemsSectionDesc={isEn
        ? "Your clients trust is your most valuable asset. However, poor security practices and legacy software expose sensitive details."
        : "La confianza de tus clientes es tu activo más valioso. No obstante, las malas prácticas de seguridad e infraestructura obsoleta exponen información sensible."}
      problems={problems}
      solutionsSectionTitle={isEn ? "Security & Data Solutions" : "Soluciones de Ciberseguridad y Datos"}
      solutionsSectionDesc={isEn
        ? "We build the digital control layer that corporate and financial firms require to operate with total confidentiality and compliance."
        : "Estructuramos la capa de control tecnológico que tu firma corporativa o financiera necesita para operar con confidencialidad y cumplimiento."}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? "If you identify 2 or more, your firm needs an express security audit."
        : "Si identificas 2 o más problemas, tu firma necesita una auditoría de seguridad express."}
      diagnosticBannerDesc={isEn
        ? "We evaluate free of charge the vulnerability of your servers, the security of employee passwords and access points, and client data protection compliance. We deliver the report in 48 hours."
        : "Evaluamos gratis la vulnerabilidad de tus servidores, el estado de tus contraseñas y accesos de empleados, y el cumplimiento de protección de datos de tus clientes. Te entregamos el informe en 48 horas."}
      diagnosticBannerCta={isEn ? "Request Free Security Audit" : "Solicitar diagnóstico de seguridad gratuito"}
      diagnosticWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20de%20seguridad%20digital%20para%20mi%20firma%20o%20empresa%20financiera."
    />
  );
}
