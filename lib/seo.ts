import { getLocalizedPath } from './navigation';
import { legalIdentity } from './legal-identity';
import { siteConfig } from './site-config';

export type SeoLocale = 'es' | 'en';

type LocalizedSeo = {
  title: string;
  description: string;
  breadcrumb: string;
};

type SeoRoute = {
  esPath: string;
  enPath: string;
  es: LocalizedSeo;
  en: LocalizedSeo;
};

const SEO_ROUTES: SeoRoute[] = [
  {
    esPath: '',
    enPath: '',
    es: {
      title: 'AEGRIX | Ingeniería de Software, Ciberseguridad e IA',
      description: 'AEGRIX diseña y fortalece soluciones de software, ciberseguridad, datos, automatización e IA para organizaciones.',
      breadcrumb: 'Inicio',
    },
    en: {
      title: 'AEGRIX | Software Engineering, Cybersecurity & AI',
      description: 'AEGRIX designs and strengthens software, cybersecurity, data, automation and AI solutions for organizations.',
      breadcrumb: 'Home',
    },
  },
  {
    esPath: '/nosotros',
    enPath: '/about',
    es: {
      title: 'Nosotros | Ingeniería, Ciberseguridad, Software e IA | AEGRIX',
      description: 'Conoce AEGRIX, nuestros principios de ingeniería y el enfoque con el que abordamos software, ciberseguridad, datos e IA.',
      breadcrumb: 'Nosotros',
    },
    en: {
      title: 'About AEGRIX | Software Engineering, Cybersecurity & AI',
      description: 'Learn about AEGRIX, our engineering principles and how we approach software, cybersecurity, data and AI engagements.',
      breadcrumb: 'About',
    },
  },
  {
    esPath: '/aegrix-360',
    enPath: '/aegrix-360',
    es: {
      title: 'AEGRIX 360 | Assessment, Readiness y Assurance de Ciberseguridad',
      description: 'AEGRIX 360 evalúa postura, evidencia, brechas y remediación frente a NIST, ISO 27001/27002, HIPAA y GDPR.',
      breadcrumb: 'AEGRIX 360',
    },
    en: {
      title: 'AEGRIX 360 | Security Assessment, Readiness & Assurance',
      description: 'AEGRIX 360 evaluates security posture, evidence, gaps and remediation across NIST, ISO 27001/27002, HIPAA and GDPR.',
      breadcrumb: 'AEGRIX 360',
    },
  },
  {
    esPath: '/aegrix-360/nist',
    enPath: '/aegrix-360/nist',
    es: {
      title: 'Evaluación NIST CSF 2.0 con AEGRIX 360 | AEGRIX',
      description: 'Assessment y readiness frente a NIST CSF 2.0 con evidencia, hallazgos, brechas, responsables y remediación trazable.',
      breadcrumb: 'NIST CSF 2.0',
    },
    en: {
      title: 'NIST CSF 2.0 Assessment with AEGRIX 360 | AEGRIX',
      description: 'NIST CSF 2.0 assessment and readiness with evidence, findings, gaps, ownership and traceable remediation.',
      breadcrumb: 'NIST CSF 2.0',
    },
  },
  {
    esPath: '/aegrix-360/iso-27001',
    enPath: '/aegrix-360/iso-27001',
    es: {
      title: 'Readiness ISO/IEC 27001 y 27002 con AEGRIX 360 | AEGRIX',
      description: 'Evaluación de preparación frente a ISO/IEC 27001 y 27002 con seguimiento de evidencia, brechas y remediación.',
      breadcrumb: 'ISO 27001/27002',
    },
    en: {
      title: 'ISO/IEC 27001 & 27002 Readiness with AEGRIX 360 | AEGRIX',
      description: 'ISO/IEC 27001 and 27002 readiness assessment with evidence tracking, gap ownership and remediation planning.',
      breadcrumb: 'ISO 27001/27002',
    },
  },
  {
    esPath: '/aegrix-360/hipaa',
    enPath: '/aegrix-360/hipaa',
    es: {
      title: 'HIPAA Security Rule Readiness con AEGRIX 360 | AEGRIX',
      description: 'Evaluación de readiness frente a HIPAA Security Rule con riesgos, controles, evidencia, hallazgos y remediación.',
      breadcrumb: 'HIPAA Security Rule',
    },
    en: {
      title: 'HIPAA Security Rule Readiness with AEGRIX 360 | AEGRIX',
      description: 'HIPAA Security Rule readiness assessment covering risk, controls, evidence, findings and remediation.',
      breadcrumb: 'HIPAA Security Rule',
    },
  },
  {
    esPath: '/aegrix-360/gdpr',
    enPath: '/aegrix-360/gdpr',
    es: {
      title: 'GDPR Readiness y Evaluación con AEGRIX 360 | AEGRIX',
      description: 'Evaluación de preparación frente a GDPR con gobierno de datos, seguridad, evidencia, brechas y remediación según alcance.',
      breadcrumb: 'GDPR',
    },
    en: {
      title: 'GDPR Readiness & Assessment with AEGRIX 360 | AEGRIX',
      description: 'GDPR readiness assessment covering data governance, security, evidence, gaps and remediation according to scope.',
      breadcrumb: 'GDPR',
    },
  },
  {
    esPath: '/industrial-logistica',
    enPath: '/industrial-logistics',
    es: {
      title: 'Software para Logística, Inventario e Integración ERP | AEGRIX',
      description: 'Portales B2B, integración ERP, automatización y analítica para operaciones industriales, distribución e inventario.',
      breadcrumb: 'Industrial y Logística',
    },
    en: {
      title: 'Logistics Software, Inventory & ERP Integration | AEGRIX',
      description: 'B2B portals, ERP integration, automation and analytics for industrial, distribution and inventory operations.',
      breadcrumb: 'Industrial & Logistics',
    },
  },
  {
    esPath: '/construction-tech',
    enPath: '/construction-tech',
    es: {
      title: 'Software para Construcción, Control de Obra e Integración ERP | AEGRIX',
      description: 'Software para control de obra, presupuestos, trazabilidad, portales de proyecto e integración con sistemas empresariales.',
      breadcrumb: 'Construction Tech',
    },
    en: {
      title: 'Construction Software, Project Control & ERP Integration | AEGRIX',
      description: 'Software for project control, budgets, traceability, construction portals and integration with enterprise systems.',
      breadcrumb: 'Construction Tech',
    },
  },
  {
    esPath: '/education-corporate',
    enPath: '/education-corporate',
    es: {
      title: 'LMS, Automatización y Software para Educación Corporativa | AEGRIX',
      description: 'Plataformas LMS, automatización de matrículas, pagos, analítica y software a medida para educación y capacitación corporativa.',
      breadcrumb: 'Educación Corporativa',
    },
    en: {
      title: 'LMS, Automation & Corporate Education Software | AEGRIX',
      description: 'LMS platforms, enrollment automation, payments, analytics and custom software for education and corporate training.',
      breadcrumb: 'Corporate Education',
    },
  },
  {
    esPath: '/health-premium',
    enPath: '/health-premium',
    es: {
      title: 'Ciberseguridad para Salud, Readiness HIPAA e Ingeniería Digital | AEGRIX',
      description: 'Evaluación de ciberseguridad, readiness HIPAA, web, automatización y analítica para organizaciones de salud.',
      breadcrumb: 'Salud',
    },
    en: {
      title: 'Healthcare Cybersecurity, HIPAA Readiness & Digital Engineering | AEGRIX',
      description: 'Cybersecurity assessment, HIPAA readiness, web engineering, automation and analytics for healthcare organizations.',
      breadcrumb: 'Healthcare',
    },
  },
  {
    esPath: '/legal-tech',
    enPath: '/legal-tech',
    es: {
      title: 'Ciberseguridad, NIST e ISO para Legal y Finanzas | AEGRIX',
      description: 'Ciberseguridad, evaluación de riesgos, readiness NIST e ISO y software seguro para organizaciones legales y financieras.',
      breadcrumb: 'Legal y Finanzas',
    },
    en: {
      title: 'Cybersecurity, NIST & ISO for Legal and Finance | AEGRIX',
      description: 'Cybersecurity, risk assessment, NIST and ISO readiness, and secure software for legal and financial organizations.',
      breadcrumb: 'Legal & Finance',
    },
  },
  {
    esPath: '/real-estate',
    enPath: '/real-estate',
    es: {
      title: 'Software Inmobiliario, CRM y Automatización Comercial | AEGRIX',
      description: 'Ingeniería web, CRM, automatización comercial y analítica para inmobiliarias, constructoras y proyectos de alta gama.',
      breadcrumb: 'Real Estate',
    },
    en: {
      title: 'Real Estate Software, CRM & Sales Automation | AEGRIX',
      description: 'Web engineering, CRM, sales automation and analytics for real estate companies, developers and premium projects.',
      breadcrumb: 'Real Estate',
    },
  },
  {
    esPath: '/privacidad',
    enPath: '/privacy',
    es: {
      title: 'Política de Privacidad | AEGRIX',
      description: 'Política de tratamiento de datos personales, derechos de los titulares, finalidades, proveedores y canales de atención de AEGRIX.',
      breadcrumb: 'Privacidad',
    },
    en: {
      title: 'Privacy Policy | AEGRIX',
      description: 'AEGRIX privacy policy covering personal data processing, data subject rights, purposes, providers and contact channels.',
      breadcrumb: 'Privacy',
    },
  },
  {
    esPath: '/terminos',
    enPath: '/terms',
    es: {
      title: 'Términos y Condiciones | AEGRIX',
      description: 'Términos de uso, contratación, alcance, propiedad intelectual, garantías, PQR y condiciones comerciales de AEGRIX.',
      breadcrumb: 'Términos',
    },
    en: {
      title: 'Terms and Conditions | AEGRIX',
      description: 'AEGRIX terms covering website use, contracting, scope, intellectual property, warranties, complaints and commercial conditions.',
      breadcrumb: 'Terms',
    },
  },
  {
    esPath: '/seguridad',
    enPath: '/security',
    es: {
      title: 'Política de Seguridad y Reporte de Vulnerabilidades | AEGRIX',
      description: 'Controles de seguridad del sitio AEGRIX y canal de divulgación responsable para reportar vulnerabilidades.',
      breadcrumb: 'Seguridad',
    },
    en: {
      title: 'Security Policy & Vulnerability Disclosure | AEGRIX',
      description: 'AEGRIX website security controls and responsible disclosure channel for reporting vulnerabilities.',
      breadcrumb: 'Security',
    },
  },
  {
    esPath: '/cookies',
    enPath: '/cookies',
    es: {
      title: 'Política de Cookies | AEGRIX',
      description: 'Política de cookies y preferencias de analítica, funcionales y marketing del sitio web de AEGRIX.',
      breadcrumb: 'Cookies',
    },
    en: {
      title: 'Cookie Policy | AEGRIX',
      description: 'AEGRIX cookie policy and preferences for analytics, functional and marketing technologies.',
      breadcrumb: 'Cookies',
    },
  },
];

function normalizePathname(pathname: string) {
  const withoutQuery = pathname.split('?')[0].split('#')[0];
  const normalized = withoutQuery.replace(/\/+$/, '');
  return normalized || '/';
}

function localizedPath(route: SeoRoute, lang: SeoLocale) {
  return `/${lang}${lang === 'es' ? route.esPath : route.enPath}`;
}

function findRoute(pathname: string, lang: SeoLocale) {
  const normalized = normalizePathname(pathname);
  return SEO_ROUTES.find((route) => normalized === localizedPath(route, lang));
}

export function getRouteSeo(pathname: string, lang: SeoLocale): LocalizedSeo {
  const route = findRoute(pathname, lang);
  const home = SEO_ROUTES[0];
  return route?.[lang] ?? home[lang];
}

export function getCanonicalUrl(pathname: string) {
  return `${siteConfig.origin}${normalizePathname(pathname)}`;
}

export function getLanguageUrls(pathname: string) {
  const normalized = normalizePathname(pathname);
  return {
    es: `${siteConfig.origin}${getLocalizedPath(normalized, 'es')}`,
    en: `${siteConfig.origin}${getLocalizedPath(normalized, 'en')}`,
    'x-default': `${siteConfig.origin}${getLocalizedPath(normalized, 'es')}`,
  };
}

function getBreadcrumbLabel(pathname: string, lang: SeoLocale) {
  return findRoute(pathname, lang)?.[lang].breadcrumb;
}

function buildBreadcrumbList(pathname: string, lang: SeoLocale) {
  const normalized = normalizePathname(pathname);
  if (normalized === `/${lang}`) return null;

  const segments = normalized.split('/').filter(Boolean);
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: lang === 'es' ? 'Inicio' : 'Home',
      item: `${siteConfig.origin}/${lang}`,
    },
  ];

  let currentPath = `/${lang}`;
  for (let index = 1; index < segments.length; index += 1) {
    currentPath += `/${segments[index]}`;
    const fallbackLabel = segments[index]
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

    items.push({
      '@type': 'ListItem',
      position: items.length + 1,
      name: getBreadcrumbLabel(currentPath, lang) ?? fallbackLabel,
      item: `${siteConfig.origin}${currentPath}`,
    });
  }

  return {
    '@type': 'BreadcrumbList',
    '@id': `${getCanonicalUrl(normalized)}#breadcrumb`,
    itemListElement: items,
  };
}

export function buildSiteStructuredData(pathname: string, lang: SeoLocale) {
  const organizationId = `${siteConfig.origin}/#organization`;
  const websiteId = `${siteConfig.origin}/#website`;
  const breadcrumb = buildBreadcrumbList(pathname, lang);

  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteConfig.brand,
      url: siteConfig.origin,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.origin}/AEGRIX_right_logo_icon.svg`,
      },
      email: siteConfig.contactEmail,
      taxID: legalIdentity.taxId,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle 30 88B',
        addressLocality: 'Medellín',
        addressRegion: 'Antioquia',
        addressCountry: 'CO',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: lang === 'es' ? 'atención comercial' : 'sales',
        email: siteConfig.contactEmail,
        availableLanguage: ['Spanish', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: siteConfig.brand,
      url: siteConfig.origin,
      publisher: { '@id': organizationId },
      inLanguage: ['es', 'en'],
    },
  ];

  if (breadcrumb) graph.push(breadcrumb);

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
