'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Globe, Database, Clock, TrendingDown } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/site-config';

const EDUCATION_WHATSAPP_URL_ES = buildWhatsAppUrl('Hola, quiero evaluar mi LMS, checkout, automatización de matrículas y analítica educativa con AEGRIX.');
const EDUCATION_WHATSAPP_URL_EN = buildWhatsAppUrl('Hello, I want to assess my LMS, checkout, enrollment automation and learning analytics with AEGRIX.');

export default function EducationCorporatePage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';
  const isEn = lang === 'en';
  const educationWhatsAppUrl = isEn ? EDUCATION_WHATSAPP_URL_EN : EDUCATION_WHATSAPP_URL_ES;

  const problems = [
    {
      label: 'CHECKOUT',
      title: isEn ? 'Payment and checkout friction' : 'Fricción en pagos y checkout',
      description: isEn
        ? 'Slow steps, limited payment methods or complex forms can make enrollment harder and reduce visibility into where users abandon the process.'
        : 'Pasos lentos, métodos de pago limitados o formularios complejos pueden dificultar la matrícula y reducir la visibilidad sobre dónde se abandona el proceso.',
      icon: TrendingDown,
      colorClass: 'text-red-500',
    },
    {
      label: isEn ? 'ENROLLMENT' : 'MATRÍCULAS',
      title: isEn ? 'Enrollment and certificates depend on manual work' : 'Matrículas y certificados dependen de trabajo manual',
      description: isEn
        ? 'Staff may spend significant time enrolling students, sending confirmations and producing certificates without integrated workflows.'
        : 'El personal puede dedicar mucho tiempo a matricular alumnos, enviar confirmaciones y generar certificados sin flujos integrados.',
      icon: Clock,
      colorClass: 'text-orange-500',
    },
    {
      label: isEn ? 'PLATFORM' : 'PLATAFORMA',
      title: isEn ? 'The LMS does not match expected demand' : 'El LMS no responde al nivel de demanda esperado',
      description: isEn
        ? 'Video delivery, exams and concurrent access require an architecture sized for expected load, observability and recovery needs.'
        : 'Video, exámenes y accesos concurrentes requieren una arquitectura dimensionada para la carga esperada, observabilidad y necesidades de recuperación.',
      icon: Globe,
      colorClass: 'text-pink-500',
    },
    {
      label: isEn ? 'ANALYTICS' : 'ANALÍTICA',
      title: isEn ? 'Limited visibility into learning and retention' : 'Poca visibilidad sobre aprendizaje y retención',
      description: isEn
        ? 'Without consistent data on completion, engagement and dropout, it is harder to improve content, operations and the enrollment journey.'
        : 'Sin datos consistentes de finalización, participación y deserción, es más difícil mejorar contenido, operación y recorrido de matrícula.',
      icon: Database,
      colorClass: 'text-blue-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'Checkout & Payment Integrations' : 'Checkout e Integraciones de Pago',
      desc: isEn
        ? 'Localized checkout flows with payment methods, currencies and tax logic selected according to the operating model and provider capabilities.'
        : 'Flujos de checkout adaptados con métodos de pago, monedas y lógica tributaria seleccionados según el modelo de operación y capacidades del proveedor.',
      features: isEn
        ? ['Localized payment flows', 'Payment-provider integrations', 'Abandonment measurement and recovery workflows', 'Transaction security controls']
        : ['Flujos de pago adaptados', 'Integraciones con proveedores de pago', 'Medición de abandono y flujos de recuperación', 'Controles de seguridad transaccional'],
    },
    {
      title: isEn ? 'Enrollment Automation & Custom LMS' : 'Automatización de Matrículas y LMS a Medida',
      desc: isEn
        ? 'Automate enrollment, controlled content access, notifications and certificate generation with workflows tied to the actual platform and business rules.'
        : 'Automatizamos matrículas, acceso controlado a contenido, notificaciones y generación de certificados con flujos conectados a la plataforma y reglas reales del negocio.',
      features: isEn
        ? ['Enrollment workflows after confirmed payment', 'Dynamic certificate generation', 'Video platform integrations', 'Automated onboarding communications']
        : ['Flujos de matrícula después del pago confirmado', 'Generación dinámica de certificados', 'Integraciones con plataforma de video', 'Comunicaciones automatizadas de onboarding'],
    },
    {
      title: isEn ? 'Learning & Business Analytics' : 'Analítica Académica y de Negocio',
      desc: isEn
        ? 'Dashboards that connect enrollment, completion, engagement and sales data using defined sources and measurement rules.'
        : 'Dashboards que conectan matrícula, finalización, participación y ventas usando fuentes y reglas de medición definidas.',
      features: isEn
        ? ['Corporate cohort tracking', 'Enrollment and conversion analytics', 'Engagement indicators', 'Exportable operational reports']
        : ['Seguimiento de cohortes corporativas', 'Analítica de matrícula y conversión', 'Indicadores de participación', 'Reportes operativos exportables'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Corporate Training & Education"
      heroTitlePart1={isEn ? 'Scalable LMS, integrated payments and automation' : 'LMS escalable, pagos integrados y automatización'}
      heroTitleHighlight={isEn ? 'for academies and corporate training.' : 'para academias y capacitación corporativa.'}
      heroDescription={isEn
        ? 'Educational platforms, enrollment automation, payment integrations and analytics designed around the organization’s operating model and expected demand.'
        : 'Plataformas educativas, automatización de matrículas, integraciones de pago y analítica diseñadas alrededor del modelo de operación y la demanda esperada.'}
      heroWhatsAppUrl={educationWhatsAppUrl}
      problemsSectionTitle={isEn ? 'Common platform and enrollment gaps' : 'Brechas frecuentes de plataforma y matrícula'}
      problemsSectionDesc={isEn
        ? 'Digital education needs reliable payments, scalable delivery, integrated administration and measurements that explain student and business behavior.'
        : 'La educación digital necesita pagos confiables, entrega escalable, administración integrada y mediciones que expliquen el comportamiento académico y comercial.'}
      problems={problems}
      solutionsSectionTitle={isEn ? 'Education technology engineering' : 'Ingeniería tecnológica para educación'}
      solutionsSectionDesc={isEn
        ? 'We design software and automation that reduce manual work, connect educational workflows and make performance easier to measure and improve.'
        : 'Diseñamos software y automatización que reducen trabajo manual, conectan flujos educativos y facilitan medir y mejorar el rendimiento.'}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? 'Assess checkout, LMS performance, enrollment automation and analytics with AEGRIX.'
        : 'Evalúa checkout, rendimiento del LMS, automatización de matrículas y analítica con AEGRIX.'}
      diagnosticBannerDesc={isEn
        ? 'We can review payment flows, platform architecture, enrollment processes and measurement to prioritize improvements with a defined scope.'
        : 'Podemos revisar flujos de pago, arquitectura de plataforma, procesos de matrícula y medición para priorizar mejoras con un alcance definido.'}
      diagnosticBannerCta={isEn ? 'Start education assessment' : 'Iniciar evaluación educativa'}
      diagnosticWhatsAppUrl={educationWhatsAppUrl}
    />
  );
}
