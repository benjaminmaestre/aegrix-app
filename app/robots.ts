import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Keep private application paths out of the public site's crawl surface.
      // The 360 portal is hosted on its own subdomain and must define its own
      // robots policy there as well.
      disallow: [
        '/api/',
        '/login',
        '/administration',
        '/assessments',
        '/discovery',
        '/reports',
        '/risks',
        '/remediation',
      ],
    },
    sitemap: 'https://aegrix.com.co/sitemap.xml',
  };
}
