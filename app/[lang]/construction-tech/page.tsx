'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Database, Clock, TrendingDown, Shield } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/site-config';

const CONSTRUCTION_WHATSAPP_URL_ES = buildWhatsAppUrl('Hola, quiero evaluar el control de obra, integraciones y operación digital de mi constructora o empresa de servicios técnicos con AEGRIX.');
const CONSTRUCTION_WHATSAPP_URL_EN = buildWhatsAppUrl('Hello, I want to assess project controls, integrations and digital operations for my construction or technical services company with AEGRIX.');

export default function ConstructionTechPage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';
  const isEn = lang === 'en';
  const constructionWhatsAppUrl = isEn ? CONSTRUCTION_WHATSAPP_URL_EN : CONSTRUCTION_WHATSAPP_URL_ES;

  const problems = [
    {
      label: isEn ? 'COSTS & BUDGET' : 'COSTOS Y PRESUPUESTO',
      title: isEn ? 'Budget deviations are difficult to detect early' : 'Desviaciones presupuestales difíciles de detectar a tiempo',
      description: isEn
        ? 'Material purchases, contractor progress and unexpected site costs are distributed across files or systems without a unified view.'
        : 'Compras de materiales, avance de contratistas y costos imprevistos se distribuyen entre archivos o sistemas sin una vista unificada.',
      icon: TrendingDown,
      colorClass: 'text-red-500',
    },
    {
      label: isEn ? 'OFFICE & SITE' : 'OFICINA Y OBRA',
      title: isEn ? 'Office and site information is disconnected' : 'Información desconectada entre oficina y obra',
      description: isEn
        ? 'Daily logs, progress, documents and approvals move through separate channels, making coordination and traceability harder.'
        : 'Bitácoras, avances, documentos y aprobaciones circulan por canales separados, dificultando coordinación y trazabilidad.',
      icon: Clock,
      colorClass: 'text-orange-500',
    },
    {
      label: isEn ? 'ACCESS' : 'ACCESOS',
      title: isEn ? 'Project documents need stronger access control' : 'Documentos de proyecto con controles de acceso insuficientes',
      description: isEn
        ? 'Blueprints, client files and budgets may be shared without consistent permissions, review or audit trails.'
        : 'Planos, archivos de clientes y presupuestos pueden compartirse sin permisos, revisión o trazabilidad consistentes.',
      icon: Shield,
      colorClass: 'text-pink-500',
    },
    {
      label: isEn ? 'TRACEABILITY' : 'TRAZABILIDAD',
      title: isEn ? 'Supplier and delivery records are fragmented' : 'Registros fragmentados de proveedores y entregas',
      description: isEn
        ? 'Material deliveries, invoices and supplier activity are harder to reconcile when records are spread across different tools.'
        : 'Entregas de materiales, facturas y actividad de proveedores son más difíciles de conciliar cuando los registros están dispersos.',
      icon: Database,
      colorClass: 'text-blue-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'Site Progress Portals' : 'Portales de Obra y Avance',
      desc: isEn
        ? 'Mobile-first portals for daily logs, materials receipts, photos, documents and project updates with controlled access.'
        : 'Portales móviles para bitácoras, recibos de materiales, fotos, documentos y actualizaciones de proyecto con acceso controlado.',
      features: isEn
        ? ['Mobile project logs', 'Centralized office-site updates', 'Photo and document archive', 'Low-connectivity or offline flows when required']
        : ['Bitácoras desde móvil', 'Actualizaciones centralizadas entre oficina y obra', 'Archivo de fotos y documentos', 'Flujos para baja conectividad u offline cuando aplica'],
    },
    {
      title: isEn ? 'Budget & ERP Integrations' : 'Integraciones Presupuestales y ERP',
      desc: isEn
        ? 'Connect purchases, contractor progress and accounting or ERP systems according to available APIs, data sources and project requirements.'
        : 'Conectamos compras, avance de contratistas y sistemas contables o ERP según las APIs, fuentes de datos y requisitos disponibles.',
      features: isEn
        ? ['Automated cost allocation', 'Bi-directional integrations when supported', 'Invoice matching workflows', 'Budget deviation alerts']
        : ['Asignación automatizada de costos', 'Integraciones bidireccionales cuando son compatibles', 'Flujos de conciliación de facturas', 'Alertas de desviación presupuestal'],
    },
    {
      title: isEn ? 'Project Control Dashboards' : 'Dashboards de Control de Proyectos',
      desc: isEn
        ? 'Centralize project indicators for budgets, schedules, contractors and materials using the data sources available in the operation.'
        : 'Centralizamos indicadores de presupuesto, cronograma, contratistas y materiales usando las fuentes de datos disponibles en la operación.',
      features: isEn
        ? ['Gantt and KPI visualization', 'Cost and margin analysis', 'Contractor payment tracking', 'Exportable project reports']
        : ['Visualización Gantt y KPI', 'Análisis de costos y márgenes', 'Seguimiento de pagos a contratistas', 'Reportes de proyecto exportables'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Construction & Tech Services"
      heroTitlePart1={isEn ? 'Project control, traceability and integration' : 'Control de obra, trazabilidad e integración'}
      heroTitleHighlight={isEn ? 'for construction and technical services.' : 'para construcción y servicios técnicos.'}
      heroDescription={isEn
        ? 'Software, project portals, ERP integrations and analytics to connect site execution with administrative and financial control.'
        : 'Software, portales de obra, integraciones ERP y analítica para conectar la ejecución en campo con el control administrativo y financiero.'}
      heroWhatsAppUrl={constructionWhatsAppUrl}
      heroImageBaseName="hero-construction-bogota"
      heroImageAlt={isEn ? 'Construction professionals reviewing a modern project in Bogota.' : 'Profesionales de construcción revisando un proyecto moderno en Bogotá.'}
      problemsSectionTitle={isEn ? 'Common operational gaps in construction and technical services' : 'Brechas operativas frecuentes en construcción y servicios técnicos'}
      problemsSectionDesc={isEn
        ? 'Complex projects depend on timely information, controlled access and reliable traceability between the field, administration and suppliers.'
        : 'Los proyectos complejos dependen de información oportuna, accesos controlados y trazabilidad confiable entre campo, administración y proveedores.'}
      problems={problems}
      solutionsSectionTitle={isEn ? 'Construction technology engineering' : 'Ingeniería tecnológica para construcción'}
      solutionsSectionDesc={isEn
        ? 'We design the software and data layer that connects administration with field execution to improve control, traceability and decision-making.'
        : 'Diseñamos la capa de software y datos que conecta administración y ejecución en campo para mejorar control, trazabilidad y capacidad de decisión.'}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? 'Assess project control, integrations and information security with AEGRIX.'
        : 'Evalúa control de obra, integraciones y seguridad de la información con AEGRIX.'}
      diagnosticBannerDesc={isEn
        ? 'We can review data sources, project workflows, integrations, access controls and reporting to prioritize improvements with a defined scope.'
        : 'Podemos revisar fuentes de datos, flujos de obra, integraciones, controles de acceso y reportes para priorizar mejoras con un alcance definido.'}
      diagnosticBannerCta={isEn ? 'Start operations assessment' : 'Iniciar evaluación de operación'}
      diagnosticWhatsAppUrl={constructionWhatsAppUrl}
    />
  );
}
