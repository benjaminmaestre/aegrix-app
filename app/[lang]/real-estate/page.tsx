'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Globe, Database, TrendingDown, MessageSquare } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/site-config';

const REAL_ESTATE_WHATSAPP_URL_ES = buildWhatsAppUrl('Hola, quiero evaluar la web, CRM, seguimiento de leads y analítica comercial de mi inmobiliaria o constructora con AEGRIX.');
const REAL_ESTATE_WHATSAPP_URL_EN = buildWhatsAppUrl('Hello, I want to assess the website, CRM, lead follow-up and sales analytics of my real estate company or developer with AEGRIX.');

export default function RealEstatePremiumPage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';
  const isEn = lang === 'en';
  const realEstateWhatsAppUrl = isEn ? REAL_ESTATE_WHATSAPP_URL_EN : REAL_ESTATE_WHATSAPP_URL_ES;

  const problems = [
    {
      label: 'LEADS',
      title: isEn ? 'High-value leads wait too long for follow-up' : 'Leads de alto valor esperan demasiado seguimiento',
      description: isEn
        ? 'Prospects may arrive with strong purchase intent, but assignment and follow-up are inconsistent across advisors and channels.'
        : 'Los prospectos pueden llegar con alta intención de compra, pero la asignación y el seguimiento son inconsistentes entre asesores y canales.',
      icon: MessageSquare,
      colorClass: 'text-green-500',
    },
    {
      label: isEn ? 'CHANNELS' : 'CANALES',
      title: isEn ? 'Lead sources are disconnected' : 'Fuentes de leads desconectadas',
      description: isEn
        ? 'Real estate portals, advertising campaigns, web forms and messaging channels feed separate lists instead of a unified commercial flow.'
        : 'Portales inmobiliarios, campañas, formularios web y mensajería alimentan listas separadas en lugar de un flujo comercial unificado.',
      icon: Database,
      colorClass: 'text-orange-500',
    },
    {
      label: isEn ? 'WEB EXPERIENCE' : 'EXPERIENCIA WEB',
      title: isEn ? 'Project showcases are heavy or difficult to navigate' : 'Presentaciones de proyectos pesadas o difíciles de navegar',
      description: isEn
        ? 'Large renders, galleries and property data need performance optimization and a clear journey from discovery to qualified contact.'
        : 'Renders, galerías y datos de inmuebles necesitan optimización de rendimiento y un recorrido claro desde descubrimiento hasta contacto calificado.',
      icon: Globe,
      colorClass: 'text-pink-500',
    },
    {
      label: isEn ? 'ANALYTICS' : 'ANALÍTICA',
      title: isEn ? 'Marketing attribution is incomplete' : 'Atribución de marketing incompleta',
      description: isEn
        ? 'Campaigns generate clicks and inquiries, but the connection between source, advisor activity, opportunity and sale is not consistently measured.'
        : 'Las campañas generan clics y consultas, pero la relación entre origen, actividad del asesor, oportunidad y venta no siempre queda medida.',
      icon: TrendingDown,
      colorClass: 'text-blue-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'High-Performance Real Estate Web' : 'Experiencias Web Inmobiliarias de Alto Rendimiento',
      desc: isEn
        ? 'Interactive project pages designed for optimized media delivery, property discovery, technical SEO and measurable contact journeys.'
        : 'Páginas interactivas de proyectos diseñadas para carga optimizada de medios, búsqueda de inmuebles, SEO técnico y recorridos de contacto medibles.',
      features: isEn
        ? ['Optimized render and gallery loading', 'Interactive property filtering', 'Real estate SEO', 'Qualified lead capture flows']
        : ['Carga optimizada de renders y galerías', 'Filtrado interactivo de inmuebles', 'SEO inmobiliario', 'Flujos de captura de leads calificados'],
    },
    {
      title: isEn ? 'CRM & Sales Automation' : 'CRM y Automatización Comercial',
      desc: isEn
        ? 'Connect portals, campaigns and messaging channels to structured routing, follow-up and advisor workflows.'
        : 'Conectamos portales, campañas y canales de mensajería con flujos estructurados de asignación, seguimiento y trabajo de asesores.',
      features: isEn
        ? ['Automated lead routing', 'Advisor notifications', 'Custom sales stages', 'WhatsApp follow-up workflows']
        : ['Asignación automatizada de leads', 'Notificaciones a asesores', 'Etapas comerciales personalizadas', 'Flujos de seguimiento por WhatsApp'],
    },
    {
      title: isEn ? 'Commercial Analytics' : 'Analítica de Control Comercial',
      desc: isEn
        ? 'Connect advertising, lead, advisor and inventory data to improve visibility into commercial performance and attribution.'
        : 'Conectamos datos de pauta, leads, asesores e inventario para mejorar la visibilidad sobre rendimiento comercial y atribución.',
      features: isEn
        ? ['Advertising attribution and ROI analysis', 'Sales team activity analytics', 'Inventory synchronization according to source data', 'Pipeline and scenario projections when data supports them']
        : ['Atribución y análisis de ROI publicitario', 'Analítica de actividad comercial', 'Sincronización de inventario según datos fuente', 'Proyecciones de pipeline y escenarios cuando los datos lo soportan'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Real Estate"
      heroTitlePart1={isEn ? 'Web platforms, CRM and sales automation' : 'Plataformas web, CRM y automatización comercial'}
      heroTitleHighlight={isEn ? 'for real estate companies and developers.' : 'para inmobiliarias y constructoras.'}
      heroDescription={isEn
        ? 'High-performance project websites, lead routing, CRM integrations and analytics for real estate sales journeys that need stronger traceability.'
        : 'Webs de proyectos de alto rendimiento, asignación de leads, integraciones CRM y analítica para recorridos comerciales inmobiliarios que necesitan mayor trazabilidad.'}
      heroWhatsAppUrl={realEstateWhatsAppUrl}
      heroImageBaseName="hero-realestate-cartagena"
      heroImageAlt={isEn ? 'Luxury apartment in Cartagena with ocean view and real estate agent.' : 'Apartamento de lujo en Cartagena con vista al mar y asesor inmobiliario.'}
      problemsSectionTitle={isEn ? 'Common commercial and digital gaps in real estate' : 'Brechas comerciales y digitales frecuentes en real estate'}
      problemsSectionDesc={isEn
        ? 'Premium property sales depend on fast experiences, disciplined lead follow-up and measurements that connect marketing activity with commercial outcomes.'
        : 'La venta de inmuebles de alto valor depende de experiencias rápidas, seguimiento disciplinado de leads y mediciones que conecten la actividad de marketing con resultados comerciales.'}
      problems={problems}
      solutionsSectionTitle={isEn ? 'Real estate technology engineering' : 'Ingeniería tecnológica inmobiliaria'}
      solutionsSectionDesc={isEn
        ? 'We connect web, CRM, automation and analytics to improve lead traceability, advisor workflows and commercial visibility.'
        : 'Conectamos web, CRM, automatización y analítica para mejorar trazabilidad de leads, flujos de asesores y visibilidad comercial.'}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? 'Assess your web, lead flow, CRM and commercial analytics with AEGRIX.'
        : 'Evalúa tu web, flujo de leads, CRM y analítica comercial con AEGRIX.'}
      diagnosticBannerDesc={isEn
        ? 'We can review web performance, lead routing, follow-up, integrations and measurement to define the priorities with the greatest technical and commercial impact.'
        : 'Podemos revisar rendimiento web, asignación de leads, seguimiento, integraciones y medición para definir las prioridades con mayor impacto técnico y comercial.'}
      diagnosticBannerCta={isEn ? 'Start real estate assessment' : 'Iniciar evaluación inmobiliaria'}
      diagnosticWhatsAppUrl={realEstateWhatsAppUrl}
    />
  );
}
