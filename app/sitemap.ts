import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

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
  { es: '/real-estate', en: '/real-estate' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const pair of routePairs) {
    const esUrl = `${siteConfig.origin}/es${pair.es}`;
    const enUrl = `${siteConfig.origin}/en${pair.en}`;
    const languages = {
      es: esUrl,
      en: enUrl,
      'x-default': esUrl,
    };

    sitemapEntries.push({
      url: esUrl,
      alternates: { languages },
    });

    sitemapEntries.push({
      url: enUrl,
      alternates: { languages },
    });
  }

  return sitemapEntries;
}
