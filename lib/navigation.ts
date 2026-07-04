export const ROUTE_MAPPINGS: Record<string, string> = {
  'about': 'nosotros',
  'privacy': 'privacidad',
  'terms': 'terminos',
  'security': 'seguridad',
  'industrial-logistics': 'industrial-logistica',
};

export const REVERSE_MAPPINGS: Record<string, string> = {
  'nosotros': 'about',
  'privacidad': 'privacy',
  'terminos': 'terms',
  'seguridad': 'security',
  'industrial-logistica': 'industrial-logistics',
};

export const pathTranslations: Record<string, string> = {
  '/es/nosotros': '/en/about',
  '/es/privacidad': '/en/privacy',
  '/es/terminos': '/en/terms',
  '/es/seguridad': '/en/security',
  '/es/industrial-logistica': '/en/industrial-logistics',
  '/en/about': '/es/nosotros',
  '/en/privacy': '/es/privacidad',
  '/en/terms': '/es/terminos',
  '/en/security': '/es/seguridad',
  '/en/industrial-logistics': '/es/industrial-logistica',
};

export function getLocalizedPath(pathname: string, targetLang: 'es' | 'en'): string {
  // Normalize pathname: ensure it has leading slash, strip trailing slash unless root
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  if (cleanPath === '/' || cleanPath === '/es' || cleanPath === '/en') {
    return targetLang === 'es' ? '/es' : '/en';
  }

  // Parse path: /locale/slug
  const segments = cleanPath.split('/').filter(Boolean);
  if (segments.length < 2) {
    return cleanPath;
  }

  const currentLocale = segments[0];
  const slug = segments[1];
  const rest = segments.slice(2).join('/');

  if (targetLang === currentLocale) {
    return cleanPath;
  }

  // Translate slug
  let targetSlug = slug;
  if (targetLang === 'en') {
    if (REVERSE_MAPPINGS[slug]) {
      targetSlug = REVERSE_MAPPINGS[slug];
    }
  } else {
    if (ROUTE_MAPPINGS[slug]) {
      targetSlug = ROUTE_MAPPINGS[slug];
    }
  }

  return `/${targetLang}/${targetSlug}${rest ? '/' + rest : ''}`;
}
