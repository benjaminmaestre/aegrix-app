import { legalIdentity } from '@/lib/legal-identity';
import { siteConfig } from '@/lib/site-config';

export const runtime = 'edge';

export function GET() {
  const body = [
    `Contact: mailto:${legalIdentity.email}`,
    'Expires: 2027-03-03T23:59:59Z',
    'Preferred-Languages: es, en',
    `Canonical: ${siteConfig.origin}/.well-known/security.txt`,
    `Policy: ${siteConfig.origin}/es/seguridad`,
    '',
  ].join('\n');

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
