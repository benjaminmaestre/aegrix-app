'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Database, Clock, TrendingDown, RefreshCw } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/site-config';

const INDUSTRIAL_WHATSAPP_URL = buildWhatsAppUrl('Hola, quiero evaluar integraciones, inventario y operación digital de mi empresa industrial, distribuidora o logística con AEGRIX.');

export default function IndustrialLogisticaPage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';
  const isEn = lang === 'en';

  const problems = [
    {
      label: isEn ? 'OPERATIONAL DATA' : 'DATOS OPERATIVOS',
      title: isEn ? 'Critical information is spread across files' : 'Información crítica dispersa entre archivos',
      description: isEn
        ? 'Pricing, inventory and operational updates depend on separate spreadsheets or manual records, increasing re-entry and reconciliation work.'
        : 'Precios, inventario y actualizaciones operativas dependen de hojas de cálculo o registros manuales separados, aumentando redigitación y conciliación.',
      icon: TrendingDown,
      colorClass: 'text-red-500',
    },
    {
      label: isEn ? 'INTEGRATIONS' : 'INTEGRACIONES',
      title: isEn ? 'ERP and commercial systems are disconnected' : 'ERP y sistemas comerciales desconectados',
      description: isEn
        ? 'Orders, stock and customer data may require manual transfer when ERP, web and sales systems do not share reliable integrations.'
        : 'Pedidos, stock y datos de clientes pueden requerir traslado manual cuando ERP, web y ventas no comparten integraciones confiables.',
      icon: RefreshCw,
      colorClass: 'text-orange-500',
    },
    {
      label: isEn ? 'B2B ORDERS' : 'PEDIDOS B2B',
      title: isEn ? 'Order processing depends on manual channels' : 'Procesamiento de pedidos dependiente de canales manuales',
      description: isEn
        ? 'Distributors and business clients rely on calls, chats or email instead of structured self-service and approval workflows.'
        : 'Distribuidores y clientes empresariales dependen de llamadas, chats o correo en lugar de flujos estructurados de autogestión y aprobación.',
      icon: Database,
      colorClass: 'text-pink-500',
    },
    {
      label: isEn ? 'VISIBILITY' : 'VISIBILIDAD',
      title: isEn ? 'Operational decisions use delayed information' : 'Decisiones operativas con información retrasada',
      description: isEn
        ? 'Inventory, transport and fulfillment indicators may arrive after the decision window instead of being updated from integrated sources.'
        : 'Indicadores de inventario, transporte y despachos pueden llegar después de la ventana de decisión en vez de actualizarse desde fuentes integradas.',
      icon: Clock,
      colorClass: 'text-blue-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'B2B Self-Service Portals' : 'Portales de Autogestión B2B',
      desc: isEn
        ? 'Private portals for orders, invoices, customer-specific pricing and inventory visibility according to the connected source systems.'
        : 'Portales privados para pedidos, facturas, precios por cliente y visibilidad de inventario según los sistemas fuente conectados.',
      features: isEn
        ? ['Inventory visibility from integrated sources', 'Structured order workflows', 'Customer-specific pricing rules', 'Integrated billing or document flows']
        : ['Visibilidad de inventario desde fuentes integradas', 'Flujos estructurados de pedidos', 'Reglas de precio por cliente', 'Flujos integrados de facturación o documentos'],
    },
    {
      title: isEn ? 'ERP & System Integrations' : 'Integraciones de Sistemas y ERP',
      desc: isEn
        ? 'Robust integration layers connecting portals, ERP platforms and databases according to available APIs, security requirements and data ownership.'
        : 'Capas de integración robustas que conectan portales, ERP y bases de datos según APIs disponibles, requisitos de seguridad y propiedad de los datos.',
      features: isEn
        ? ['Automated synchronization', 'Bi-directional flows when supported', 'Integration error monitoring', 'Secure APIs and access controls']
        : ['Sincronización automatizada', 'Flujos bidireccionales cuando son compatibles', 'Monitoreo de errores de integración', 'APIs seguras y controles de acceso'],
    },
    {
      title: isEn ? 'Operational Dashboards & Analytics' : 'Dashboards Operativos y Analítica',
      desc: isEn
        ? 'Connect logistics, sales and inventory indicators to support operational decisions, forecasting and exception management.'
        : 'Conectamos indicadores de logística, ventas e inventario para apoyar decisiones operativas, proyecciones y gestión de excepciones.',
      features: isEn
        ? ['Custom KPI dashboards', 'Automated reports', 'Demand analysis and forecasting when data supports it', 'Multi-warehouse visibility']
        : ['Dashboards de KPI a medida', 'Reportes automatizados', 'Análisis y pronóstico de demanda cuando los datos lo soportan', 'Visibilidad de múltiples bodegas'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Industrial & Logística"
      heroTitlePart1={isEn ? 'Integration, inventory visibility and automation' : 'Integración, visibilidad de inventario y automatización'}
      heroTitleHighlight={isEn ? 'for industrial and logistics operations.' : 'para operaciones industriales y logísticas.'}
      heroDescription={isEn
        ? 'B2B portals, ERP integrations, operational dashboards and automation to connect orders, inventory, logistics and business data.'
        : 'Portales B2B, integraciones ERP, dashboards operativos y automatización para conectar pedidos, inventario, logística y datos de negocio.'}
      heroWhatsAppUrl={INDUSTRIAL_WHATSAPP_URL}
      problemsSectionTitle={isEn ? 'Common integration and visibility gaps' : 'Brechas frecuentes de integración y visibilidad'}
      problemsSectionDesc={isEn
        ? 'Growing operations need reliable data flows, controlled integrations and visibility that matches the speed of operational decisions.'
        : 'Las operaciones en crecimiento necesitan flujos de datos confiables, integraciones controladas y visibilidad acorde con la velocidad de las decisiones.'}
      problems={problems}
      solutionsSectionTitle={isEn ? 'Industrial and logistics technology engineering' : 'Ingeniería tecnológica industrial y logística'}
      solutionsSectionDesc={isEn
        ? 'We design software, integration and data architecture to reduce re-entry, improve traceability and connect the systems that support the operation.'
        : 'Diseñamos arquitectura de software, integración y datos para reducir redigitación, mejorar trazabilidad y conectar los sistemas que soportan la operación.'}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? 'Assess integrations, inventory flows and operational visibility with AEGRIX.'
        : 'Evalúa integraciones, flujos de inventario y visibilidad operativa con AEGRIX.'}
      diagnosticBannerDesc={isEn
        ? 'We can review systems, APIs, data flows, order processes and reporting to identify integration gaps and prioritize a realistic improvement plan.'
        : 'Podemos revisar sistemas, APIs, flujos de datos, procesos de pedidos y reportes para identificar brechas de integración y priorizar un plan realista de mejora.'}
      diagnosticBannerCta={isEn ? 'Start operations assessment' : 'Iniciar evaluación de operación'}
      diagnosticWhatsAppUrl={INDUSTRIAL_WHATSAPP_URL}
    />
  );
}
