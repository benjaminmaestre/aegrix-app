import { MetadataRoute } from 'next';

const DOMAIN = 'https://aegrix.com.co';
const LOCALES = ['es', 'en'];

// Define all the top-level routes
const routes = [
  '',
  '/nosotros',
  '/terminos',
  '/privacidad',
  '/seguridad',
  '/cookies'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate an entry for each locale and route combination
  for (const locale of LOCALES) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${DOMAIN}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            'es': `${DOMAIN}/es${route}`,
            'en': `${DOMAIN}/en${route}`,
          },
        },
      });
    }
  }

  return sitemapEntries;
}
