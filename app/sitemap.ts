import { MetadataRoute } from 'next';

const DOMAIN = 'https://aegrix.com.co';

const routePairs = [
  { es: '', en: '' },
  { es: '/nosotros', en: '/about' },
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
    const changeFreq = pair.es === '' ? 'weekly' as const : 'monthly' as const;
    const priority = pair.es === '' ? 1.0 : 0.8;

    // Spanish entry
    sitemapEntries.push({
      url: `${DOMAIN}/es${pair.es}`,
      lastModified: today,
      changeFrequency: changeFreq,
      priority: priority,
      alternates: {
        languages: {
          'es': `${DOMAIN}/es${pair.es}`,
          'en': `${DOMAIN}/en${pair.en}`,
        },
      },
    });

    // English entry
    sitemapEntries.push({
      url: `${DOMAIN}/en${pair.en}`,
      lastModified: today,
      changeFrequency: changeFreq,
      priority: priority,
      alternates: {
        languages: {
          'es': `${DOMAIN}/es${pair.es}`,
          'en': `${DOMAIN}/en${pair.en}`,
        },
      },
    });
  }

  return sitemapEntries;
}
