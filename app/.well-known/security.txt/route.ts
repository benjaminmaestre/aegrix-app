import { legalIdentity } from '@/lib/legal-identity';

export const runtime = 'edge';

export function GET() {
  const body = [
    `Contact: mailto:${legalIdentity.email}`,
    'Expires: 2027-09-03T23:59:59Z',
    'Preferred-Languages: es, en',
    'Canonical: https://aegrix.com.co/.well-known/security.txt',
    'Policy: https://aegrix.com.co/es/seguridad',
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
