'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Database, Clock, TrendingDown, RefreshCw } from 'lucide-react';

export default function IndustrialLogisticaPage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';

  const isEn = lang === 'en';

  const problems = [
    {
      code: '[WARN_CAOS_EXCEL]',
      title: isEn ? 'Excel & Spreadsheet Chaos' : 'Caos de hojas de cálculo (Excels)',
      description: isEn
        ? 'Operations, pricing, and stock updates depend on scattered files, causing human error and delays.'
        : 'La operación, control de precios y actualización de stock dependen de archivos dispersos, causando errores humanos y retrasos.',
      icon: TrendingDown,
      colorClass: 'text-red-500',
    },
    {
      code: '[WARN_SISTEMAS_AISLADOS]',
      title: isEn ? 'Isolated Systems & ERP' : 'Sistemas y ERPs aislados',
      description: isEn
        ? 'Your ERP or SAP does not sync with your website or sales portal, forcing manual data entry for orders.'
        : 'Tu ERP o SAP no se comunica con tu sitio web o portal de ventas, obligando a digitar pedidos de forma manual.',
      icon: RefreshCw,
      colorClass: 'text-orange-500',
    },
    {
      code: '[WARN_PORTAL_CLIENTES]',
      title: isEn ? 'Manual Order Processing' : 'Toma de pedidos manual',
      description: isEn
        ? 'B2B clients and distributors call or send emails to request products instead of placing orders in a self-service secure portal.'
        : 'Clientes B2B y distribuidores llaman o envían correos para solicitar stock en lugar de usar un portal seguro de autogestión.',
      icon: Database,
      colorClass: 'text-pink-500',
    },
    {
      code: '[WARN_VISIBILIDAD_OPERATIVA]',
      title: isEn ? 'Zero Real-Time Visibility' : 'Falta de visibilidad en tiempo real',
      description: isEn
        ? "Decisions are made based on yesterday's reports instead of real-time stock, transport, and fulfillment tracking."
        : 'Decisiones basadas en informes del día anterior en lugar de stock, transporte y despachos rastreados en tiempo real.',
      icon: Clock,
      colorClass: 'text-blue-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'B2B Self-Service Portals' : 'Portales de Clientes B2B',
      desc: isEn
        ? 'Custom web portals where distributors can place orders, view invoices, and check live stock 24/7.'
        : 'Desarrollo de portales web privados para que distribuidores realicen pedidos, descarguen facturas y vean stock en tiempo real.',
      features: isEn
        ? ['Real-time inventory lookup', 'Automated order dispatching', 'Dynamic pricing per client tier', 'Instant invoice generation']
        : ['Consulta de stock en tiempo real', 'Envío automatizado de pedidos', 'Precios dinámicos por tipo de cliente', 'Facturación automática integrada'],
    },
    {
      title: isEn ? 'ERP & SAP Integrations' : 'Integraciones de Sistemas y ERP',
      desc: isEn
        ? 'Robust middleware connecting your custom frontends directly with SAP, Microsoft Dynamics, or custom databases.'
        : 'Conexión segura y robusta de tu portal web con sistemas ERP (SAP, Microsoft Dynamics, SIIGO) sin duplicar bases de datos.',
      features: isEn
        ? ['Automated synchronization', 'Bi-directional data flow', 'Error log notifications', 'High-speed secure APIs']
        : ['Sincronización automatizada', 'Flujo de datos bidireccional', 'Notificaciones de errores', 'APIs de alta velocidad y seguras'],
    },
    {
      title: isEn ? 'Operational Dashboards & Analytics' : 'Dashboards Operativos e IA',
      desc: isEn
        ? 'Real-time interactive monitoring of logistics, sales conversion, and inventory alerts to predict shortages.'
        : 'Visualización interactiva en tiempo real del estado de despachos, rotación de inventario y alertas predictivas de desabastecimiento.',
      features: isEn
        ? ['Custom KPI charts', 'Exportable automated reports', 'Predictive demand planning', 'Multi-warehouse monitoring']
        : ['Gráficos de KPIs a medida', 'Reportes automatizados exportables', 'Modelos predictivos de demanda', 'Monitoreo de múltiples bodegas'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Industrial & Logística"
      heroTitlePart1={isEn ? "Operational efficiency, inventory control" : "Eficiencia operativa, control de inventario"}
      heroTitleHighlight={isEn ? "for distributors & logistics." : "para distribuidoras y logística."}
      heroDescription={isEn
        ? "Custom inventory portals connected to your ERP/SAP, real-time logistics dashboards, and software solutions to eliminate Excel chaos."
        : "Portales de autogestión para distribuidores integrados a tu ERP/SAP, control de stock y despachos en tiempo real para erradicar el caos de los Excels."}
      heroWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20de%20tecnolog%C3%ADa%20operativa%20para%20mi%20distribuidora%20o%20empresa%20de%20log%C3%ADstica."
      problemsSectionTitle={isEn ? "Does your distributor or logistics company face these hurdles?" : "¿Tu distribuidora o empresa de logística tiene alguno de estos problemas?"}
      problemsSectionDesc={isEn
        ? "Scale demands automation. Manual processing, isolated ERP databases, and dependency on files create expensive operational leaks."
        : "La escala exige automatización. Los procesos manuales, ERPs desconectados y la dependencia de Excels compartidos generan costosas ineficiencias operativas."}
      problems={problems}
      solutionsSectionTitle={isEn ? "Industrial Technology Solutions" : "Soluciones de Ingeniería Industrial"}
      solutionsSectionDesc={isEn
        ? "We design the software infrastructure that translates complex logistics into automated, clear operational processes."
        : "Diseñamos la infraestructura de software que traduce operaciones complejas en procesos sencillos, rápidos y completamente automatizados."}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? "If you check 2 or more, your logistics workflow needs an integration audit."
        : "Si marcaste 2 o más, tu operación logística necesita una auditoría de integración."}
      diagnosticBannerDesc={isEn
        ? "We evaluate free of charge your current inventory sync speeds, order tracking workflows, and ERP integration gaps. We deliver the report in 48 hours."
        : "Evaluamos gratis la velocidad de sincronización de tu inventario, el flujo de procesamiento de pedidos y el estado de integración con tu ERP. Te entregamos un informe en 48 horas."}
      diagnosticBannerCta={isEn ? "Request Free Operations Audit" : "Solicitar diagnóstico operativo gratuito"}
      diagnosticWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20de%20tecnolog%C3%ADa%20operativa%20para%20mi%20distribuidora%20o%20empresa%20de%20log%C3%ADstica."
    />
  );
}
