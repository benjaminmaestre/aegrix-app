'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Globe, Database, Clock, TrendingDown } from 'lucide-react';

export default function EducationCorporatePage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';

  const isEn = lang === 'en';

  const problems = [
    {
      code: '[WARN_FUGA_CHECKOUT]',
      title: isEn ? 'Checkout Purchase Leakage' : 'Fuga de compras en el checkout',
      description: isEn
        ? 'Students abandon the purchase process due to slow payment gateways, lack of local methods (PSE), or complex forms.'
        : 'Estudiantes abandonan la compra debido a pasarelas lentas, falta de métodos de pago locales (PSE) o formularios complejos.',
      icon: TrendingDown,
      colorClass: 'text-red-500',
    },
    {
      code: '[WARN_GESTION_MANUAL]',
      title: isEn ? 'Manual Enrollment & Certificates' : 'Matriculación y certificados manuales',
      description: isEn
        ? 'Staff spends hours manually enrolling students, sending PDF invoices, and generating completion certificates.'
        : 'El personal dedica horas a matricular estudiantes a mano, enviar facturas PDF y generar certificados de finalización de cursos.',
      icon: Clock,
      colorClass: 'text-orange-500',
    },
    {
      code: '[WARN_PLATAFORMA_LENTA]',
      title: isEn ? 'Slow Educational Platform' : 'Plataforma educativa inestable o lenta',
      description: isEn
        ? 'LMS crashes when multiple students access videos or take exams simultaneously, leading to bad reviews.'
        : 'La plataforma se cae cuando múltiples alumnos acceden a videos o exámenes en simultáneo, generando quejas y mala reputación.',
      icon: Globe,
      colorClass: 'text-pink-500',
    },
    {
      code: '[WARN_SIN_RETENCION_DATOS]',
      title: isEn ? 'No Student Progress Tracking' : 'Falta de analítica y retención',
      description: isEn
        ? 'No data on course completion rates or student dropouts, preventing optimization of the content and sales funnel.'
        : 'Sin datos de tasa de finalización de cursos ni deserción, impidiendo optimizar el contenido y el embudo de ventas.',
      icon: Database,
      colorClass: 'text-blue-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'Custom High-Converting Checkout' : 'Pasarelas de Pago & Checkout',
      desc: isEn
        ? 'Integrate high-speed, localized, and multi-currency checkouts (PSE, credit card, Stripe, ePayco) that minimize buyer friction.'
        : 'Desarrollo de checkouts ultra rápidos con soporte para múltiples divisas y pasarelas integradas (PSE, Stripe, Wompi, ePayco) para reducir la tasa de abandono.',
      features: isEn
        ? ['Localized fast checkout flows', 'Automated tax calculations', 'Abandonment recovery flows', 'Robust transaction security']
        : ['Flujos rápidos adaptados a Colombia', 'Cálculo automatizado de impuestos', 'Recuperación de carritos abandonados', 'Cumplimiento y seguridad transaccional'],
    },
    {
      title: isEn ? 'Automated Administration & LMS' : 'Automatización y LMS a Medida',
      desc: isEn
        ? 'Scale up your academy operations with automated student onboarding, video content delivery, and dynamic PDF certificate generation.'
        : 'Sistemas de automatización de matrículas inmediatas, entrega controlada de contenido de video y generación automatizada de certificados.',
      features: isEn
        ? ['Instant automated enrollments', 'Dynamic PDF certificate engines', 'Enterprise video hosting sync', 'Automated email onboarding sequences']
        : ['Matrícula inmediata tras pago', 'Generador dinámico de certificados PDF', 'Sincronización con hosting de video', 'Campañas automáticas de bienvenida'],
    },
    {
      title: isEn ? 'Corporate Analytics Dashboard' : 'Dashboards de Rendimiento Académico',
      desc: isEn
        ? 'Custom dashboard to track sales metrics, course completion statistics, student engagement, and business accounts progress.'
        : 'Panel centralizado para analizar ventas, tiempos de finalización de cursos, avance de alumnos corporativos y tasas de retención.',
      features: isEn
        ? ['Corporate student tracking dashboards', 'Real-time sales conversion logs', 'Custom engagement indicators', 'Exportable compliance reports']
        : ['Monitoreo de grupos corporativos', 'Tasa de conversión de ventas en vivo', 'Métricas de retención y engagement', 'Exportación de reportes de cumplimiento'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Corporate Training & Education"
      heroTitlePart1={isEn ? "Scalable LMS, automated checkouts" : "LMS escalable, pasarelas de pago"}
      heroTitleHighlight={isEn ? "for business academies." : "para academias y capacitación corporativa."}
      heroDescription={isEn
        ? "High-converting checkout systems, automated student administration, and custom educational platforms designed for scaling professional education."
        : "Portales de formación profesional con automatización de matrículas, pasarelas de pago integradas sin fricciones y dashboards de analítica de alumnos corporativos."}
      heroWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20de%20plataforma%20educativa%20o%20LMS%20para%20mi%20academia."
      problemsSectionTitle={isEn ? "Does your academy face any of these digital bottlenecks?" : "¿Tu academia o corporación tiene alguno de estos problemas?"}
      problemsSectionDesc={isEn
        ? "Selling education online requires reliability. When checkout steps fail, or enrollment is manual, scaling your student base becomes impossible."
        : "Vender educación online exige confiabilidad técnica. Cuando el checkout falla o la matrícula es manual, escalar tu base de alumnos se vuelve imposible."}
      problems={problems}
      solutionsSectionTitle={isEn ? "Educational Tech Solutions" : "Soluciones de Ingeniería Educativa"}
      solutionsSectionDesc={isEn
        ? "We build the software architecture that turns administrative tasks into silent, automatic, and error-free background processes."
        : "Estructuramos la capa de control tecnológico para que las tareas administrativas se ejecuten de fondo de manera silenciosa, veloz y sin errores."}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? "If you identify 2 or more, your academy needs an LMS audit."
        : "Si identificas 2 o más problemas, tu academia necesita una auditoría de LMS."}
      diagnosticBannerDesc={isEn
        ? "We evaluate free of charge your checkout conversion speed, video streaming loading times, and student registration automation gaps. We deliver the report in 48 hours."
        : "Evaluamos gratis la velocidad y fricción de tu checkout, los tiempos de carga de tus videos de clases y el flujo de matrículas automatizadas. Te entregamos un informe en 48 horas."}
      diagnosticBannerCta={isEn ? "Request Free LMS & Checkout Audit" : "Solicitar diagnóstico educativo gratuito"}
      diagnosticWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20de%20plataforma%20educativa%20o%20LMS%20para%20mi%20academia."
    />
  );
}
