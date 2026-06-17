'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import NicheLandingTemplate from '@/components/NicheLandingTemplate';
import { Globe, Database, TrendingDown, MessageSquare } from 'lucide-react';

export default function RealEstatePremiumPage() {
  const params = useParams();
  const lang = (params?.lang as 'es' | 'en') || 'es';

  const isEn = lang === 'en';

  const problems = [
    {
      code: '[WARN_LEADS_PERDIDOS]',
      title: isEn ? 'Unassigned High-Value Leads' : 'Leads de alto valor sin atender',
      description: isEn
        ? 'High-ticket prospective buyers wait hours or days to be contacted by sales agents, cooling their purchase intent.'
        : 'Prospectos de alto valor pasan horas o días sin ser atendidos por asesores comerciales, perdiendo interés de compra.',
      icon: MessageSquare,
      colorClass: 'text-green-500',
    },
    {
      code: '[WARN_DATOS_DESCONECTADOS]',
      title: isEn ? 'Scattered Lead Channels' : 'Desconexión de canales de captura',
      description: isEn
        ? 'Leads scattered across multiple platforms (real estate portals, social ads) without a single database.'
        : 'Prospectos dispersos en múltiples plataformas (portales inmobiliarios, anuncios) sin una base de datos centralizada.',
      icon: Database,
      colorClass: 'text-orange-500',
    },
    {
      code: '[WARN_WEB_LENTA_RENDERS]',
      title: isEn ? 'Slow Project Showcases' : 'Presentaciones de proyectos lentas',
      description: isEn
        ? 'Slow websites failing to load heavy high-quality renders, hurting the premium brand experience.'
        : 'Sitios web lentos o pesados al cargar renders de proyectos, lo cual daña la experiencia de compra de lujo.',
      icon: Globe,
      colorClass: 'text-pink-500',
    },
    {
      code: '[WARN_SIN_ANALITICA_PAUTA]',
      title: isEn ? 'Blind Ad Spend' : 'Inversión publicitaria a ciegas',
      description: isEn
        ? 'Investing in Facebook or Google ads without real tracking of which campaigns generate actual property sales.'
        : 'Inversión en pauta publicitaria en Meta o Google sin saber qué campañas generan ventas reales de inmuebles.',
      icon: TrendingDown,
      colorClass: 'text-blue-500',
    },
  ];

  const solutions = [
    {
      title: isEn ? 'Interactive Premium Web' : 'Experiencias Web Inmobiliarias',
      desc: isEn
        ? 'High-performance landings optimized for luxury projects, designed to render files and interactives instantly.'
        : 'Desarrollo de landings optimizadas para proyectos de lujo, preparadas para cargar renders e información interactiva al instante.',
      features: isEn
        ? ['Optimized render loading', 'Interactive property filtering', 'Specialized real estate SEO', 'Qualified lead capture']
        : ['Carga de renders optimizada', 'Filtrado interactivo de inmuebles', 'SEO inmobiliario especializado', 'Captación de leads cualificados'],
    },
    {
      title: isEn ? 'Sales CRM & Automation' : 'Automatización y CRM de Ventas',
      desc: isEn
        ? 'Direct automated routing of property leads from all portals and social networks directly to your active sales team.'
        : 'Conexión automática de portales inmobiliarios y campañas de redes directamente con tus asesores y herramientas de seguimiento.',
      features: isEn
        ? ['Automated lead distribution', 'Instant agent notifications', 'Customized sales funnels', 'WhatsApp automated alerts']
        : ['Distribución automática de leads', 'Notificaciones inmediatas a asesores', 'Embudo de ventas personalizado', 'Recordatorios por WhatsApp'],
    },
    {
      title: isEn ? 'Commercial Dashboards' : 'Dashboards de Control Comercial',
      desc: isEn
        ? 'Centralized visualization of your key marketing and sales metrics to make data-driven decisions.'
        : 'Visualización centralizada de tus métricas clave de ventas y pauta publicitaria para tomar decisiones basadas en datos.',
      features: isEn
        ? ['Ad spend ROI tracking', 'Sales team productivity analytics', 'Live real estate inventory', 'Revenue projections']
        : ['Retorno de Inversión (ROI) de pauta', 'Productividad del equipo comercial', 'Estado del inventario en vivo', 'Proyecciones de ventas en tiempo real'],
    },
  ];

  return (
    <NicheLandingTemplate
      lang={lang}
      heroTagline="AEGRIX Real Estate Premium"
      heroTitlePart1={isEn ? "Sales platforms and commercial automation" : "Plataformas de venta y automatización comercial"}
      heroTitleHighlight={isEn ? "for luxury developers." : "para constructoras de alta gama."}
      heroDescription={isEn
        ? "Interactive landing pages for luxury projects, high-ticket lead funnel automation, and real-time sales dashboard analytics."
        : "Landings interactivas de proyectos inmobiliarios, automatización del embudo de leads de alto ticket y dashboards de analítica de ventas en tiempo real."}
      heroWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20digital%20para%20mi%20constructora%20o%20inmobiliaria."
      heroImageBaseName="hero-realestate-cartagena"
      heroImageAlt={isEn ? "Luxury apartment in Cartagena with ocean view and real estate agent." : "Apartamento de lujo en Cartagena con vista al mar y asesor inmobiliario."}
      problemsSectionTitle={isEn ? "Does your real estate company face any of these challenges?" : "¿Tu inmobiliaria o constructora tiene alguno de estos problemas?"}
      problemsSectionDesc={isEn
        ? "Selling premium properties demands a frictionless experience. However, software inefficiencies and lead clutter cool down prospective buyers."
        : "La venta de inmuebles de alta gama exige una experiencia fluida. Sin embargo, las ineficiencias de software y el desorden de prospectos enfrían a los compradores."}
      problems={problems}
      solutionsSectionTitle={isEn ? "Real Estate Tech Solutions" : "Soluciones de Ingeniería Inmobiliaria"}
      solutionsSectionDesc={isEn
        ? "We build the digital control layer to scale up property sales and automate lead response times."
        : "Estructuramos la capa de control tecnológico que tu constructora de alta gama necesita para acelerar ventas y automatizar la atención."}
      solutions={solutions}
      diagnosticBannerTitle={isEn
        ? "If you check 2 or more, you need to evaluate your sales infrastructure."
        : "Si marcaste 2 o más, necesitas evaluar tu infraestructura comercial."}
      diagnosticBannerDesc={isEn
        ? "We evaluate the load speed of your web showcase, the response times of your agents on WhatsApp, and the analytics tracking of your active ad spend."
        : "Evaluamos gratis la velocidad de carga de tus proyectos web, el tiempo de respuesta de tus asesores en WhatsApp y la analítica de tus campañas de pauta. Te entregamos el informe en 48 horas."}
      diagnosticBannerCta={isEn ? "Request Free Real Estate Diagnosis" : "Solicitar diagnóstico inmobiliario gratuito"}
      diagnosticWhatsAppUrl="https://wa.me/573107379163?text=Hola,%20quiero%20solicitar%20un%20diagn%C3%B3stico%20digital%20para%20mi%20constructora%20o%20inmobiliaria."
    />
  );
}
