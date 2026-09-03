import { MetadataRoute } from 'next';

const DOMAIN = 'https://aegrix.com.co';

const routePairs = [
  { es: '', en: '' },
  { es: '/nosotros', en: '/about' },
  { es: '/aegrix-360', en: '/aegrix-360' },
  { es: '/aegrix-360/nist', en: '/aegrix-360/nist' },
  { es: '/aegrix-360/iso-27001', en: '/aegrix-360/iso-27001' },
  { es: '/aegrix-360/hipaa', en: '/aegrix-360/hipaa' },
  { es: '/aegrix-360/gdpr', en: '/aegrix-360/gdpr' },
  { es: '/terminos', en: '/terms' },
  { es: '/privacidad', en: '/privacy' },
  { es: '/seguridad', en: '/security' },
  { es: '/cookies', en: '/cookies' },
  { es: '/industrial-logistica', en: '/industrial-logistics' },
  { es: '/construction-tech', en: '/construction-tech' },
  { es: '/education-corporate', en: '/education-corporate' },
  { es: '/health-premium', en: '/health-premium' },
  { es: '/legal-tech', en: '/legal-tech' },
  { es: '/real-estate', en: '/real-estate' }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const pair of routePairs) {
    const today = new Date().toISOString().split('T')[0];
    const isHome = pair.es === '';
    const is360 = pair.es.startsWith('/aegrix-360');
    const changeFreq = isHome || is360 ? 'weekly' as const : 'monthly' as const;
    const priority = isHome ? 1.0 : is360 ? 0.9 : 0.8;

    sitemapEntries.push({
      url: `${DOMAIN}/es${pair.es}`,
      lastModified: today,
      changeFrequency: changeFreq,
      priority,
      alternates: {
        languages: {
          es: `${DOMAIN}/es${pair.es}`,
          en: `${DOMAIN}/en${pair.en}`,
        },
      },
    });

    sitemapEntries.push({
      url: `${DOMAIN}/en${pair.en}`,
      lastModified: today,
      changeFrequency: changeFreq,
      priority,
      alternates: {
        languages: {
          es: `${DOMAIN}/es${pair.es}`,
          en: `${DOMAIN}/en${pair.en}`,
        },
      },
    });
  }

  return sitemapEntries;
}
