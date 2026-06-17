'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Database, Clock, TrendingDown, Shield } from 'lucide-react';

export default function ConstructionTechPage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';

  const isEn = lang === 'en';

  const problems = [
    {
      code: '[WARN_DESVIO_PRESUPUESTO]',
      title: isEn ? 'Budget Deviation & Overruns' : 'Desviación presupuestal y sobrecostos',
      description: isEn
        ? 'Material purchases, contractor metrics, and unexpected site costs logged in scattered sheets, hiding financial leaks.'
        : 'Compras de materiales, avance de subcontratistas y costos imprevistos registrados en planillas dispersas, ocultando fugas financieras.',
      icon: TrendingDown,
      colorClass: 'text-red-500',
    },
    {
      code: '[WARN_DATOS_DESCONECTADOS]',
      title: isEn ? 'Disconnected Office & Site' : 'Desconexión entre oficina y obra',
      description: isEn
        ? 'Daily logs and project progress are sent via chat or emails, slowing down administrative approvals.'
        : 'Los reportes diarios de obra y avance de proyectos se envían por chat o correos, retrasando aprobaciones administrativas.',
      icon: Clock,
      colorClass: 'text-orange-500',
    },
    {
      code: '[WARN_ACCESOS_INSEGUROS]',
      title: isEn ? 'Unsecured Blueprint Sharing' : 'Accesos inseguros de planos',
      description: isEn
        ? 'Sharing sensitive project blueprints, client files, or financial details through public tools without access audits.'
        : 'Compartir planos confidenciales, datos de clientes o presupuestos a través de herramientas públicas sin control de accesos.',
      icon: Shield,
      colorClass: 'text-pink-500',
    },
    {
      code: '[WARN_FALTA_TRAZABILIDAD]',
      title: isEn ? 'No Supplier Tracking' : 'Falta de trazabilidad con proveedores',
      description: isEn
        ? 'No central log of material deliveries, leading to double billing, stock discrepancies, and delayed timelines.'
        : 'Sin historial central de entregas de materiales, resultando en doble facturación, inconsistencias en stock y retrasos en cronograma.',
      icon: Database,
      colorClass: 'text-blue-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'Real-Time Site Portals' : 'Portales de Obra y Avance',
      desc: isEn
        ? 'Custom web portals where site managers and contractors can upload daily logs, materials receipts, and photos instantly.'
        : 'Desarrollo de portales web móviles para que directores de obra y contratistas reporten avances diarios y recibos de material al instante.',
      features: isEn
        ? ['Mobile-first log uploads', 'Instant office-site sync', 'Photo & document archive', 'Offline support cache']
        : ['Subida de bitácoras desde móvil', 'Sincronización instantánea con oficina', 'Archivo digital de planos y fotos', 'Soporte de carga sin internet'],
    },
    {
      title: isEn ? 'Budget & ERP Middleware' : 'Middleware Presupuestal y ERP',
      desc: isEn
        ? 'Direct sync between site purchases, subcontractor progress logs, and accounting ERP (SAP, Microsoft Dynamics, SIIGO).'
        : 'Sincronización automatizada entre compras de obra, avances de subcontratistas y tu ERP contable sin re-digitaciones manuales.',
      features: isEn
        ? ['Automated cost allocation', 'Bi-directional ERP sync', 'Voucher & invoice auto-matching', 'Real-time alert engine']
        : ['Asignación automática de costos', 'Sincronización bidireccional con ERP', 'Cruce automático de facturas', 'Alertas de desvío presupuestal'],
    },
    {
      title: isEn ? 'Project Dashboards' : 'Dashboards de Control de Proyectos',
      desc: isEn
        ? 'Centralized visualization of construction margins, timelines deviation, contractor efficiency, and material costs.'
        : 'Visualización centralizada de márgenes de construcción, desviación de cronogramas, rendimiento de contratistas e insumos.',
      features: isEn
        ? ['Interactive Gantt & KPI charts', 'Automated margin projections', 'Contractor payment tracking', 'Exportable compliance audits']
        : ['Gráficos Gantt y KPI interactivos', 'Proyecciones automáticas de margen', 'Control de pagos a contratistas', 'Exportación de reportes de obra'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Construction & Tech Services"
      heroTitlePart1={isEn ? "Operational visibility, cost control" : "Control de costos, visibilidad de obra"}
      heroTitleHighlight={isEn ? "for developer & tech services." : "para constructoras y servicios técnicos."}
      heroDescription={isEn
        ? "Integrated software solutions to track project budgets, eliminate Excel cost chaos, and automate contractor communications in real time."
        : "Sistemas de software integrados para el control presupuestal de obras, eliminación del caos de Excels de costos y automatización de reportes de contratistas."}
      heroWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20digital%20para%20mi%20constructora%20o%20empresa%20de%20servicios%20t%C3%A9cnicos."
      problemsSectionTitle={isEn ? "Does your construction or technical service company face these bottlenecks?" : "¿Tu constructora o empresa de servicios técnicos tiene alguno de estos problemas?"}
      problemsSectionDesc={isEn
        ? "Construction and technical operations require absolute coordination. Scattered logs, manual expense entry, and disconnected software lead to critical project delays."
        : "La operación de obras y servicios técnicos requiere coordinación absoluta. Los reportes dispersos, digitación manual de gastos y software desconectado causan costosos retrasos."}
      problems={problems}
      solutionsSectionTitle={isEn ? "Construction Tech Solutions" : "Soluciones de Ingeniería de Obra"}
      solutionsSectionDesc={isEn
        ? "We build the digital control layer that links office management with site execution, securing margins and budgets."
        : "Estructuramos la capa de control tecnológico que une la administración con la ejecución en campo para blindar tus márgenes y presupuestos."}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? "If you identify 2 or more, your project workflows need a technological health check."
        : "Si identificas 2 o más problemas, tu operación necesita un diagnóstico tecnológico."}
      diagnosticBannerDesc={isEn
        ? "We evaluate free of charge your project cost tracking speed, system integrations, and site-to-office information security. We deliver the report in 48 hours."
        : "Evaluamos gratis la velocidad de reporte de costos, el estado de tus integraciones de sistemas y la seguridad de información entre obra y oficina. Te entregamos un informe en 48 horas."}
      diagnosticBannerCta={isEn ? "Request Free Operations Audit" : "Solicitar diagnóstico operativo gratuito"}
      diagnosticWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20digital%20para%20mi%20constructora%20o%20empresa%20de%20servicios%20t%C3%A9cnicos."
    />
  );
}
