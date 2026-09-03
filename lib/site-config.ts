export const siteConfig = {
  brand: 'AEGRIX',
  origin: 'https://aegrix.com.co',
  wwwOrigin: 'https://www.aegrix.com.co',
  portalUrl: 'https://360.aegrix.com.co/login',
  contactEmail: 'contacto@aegrix.com.co',
  defaultSenderEmail: 'website@aegrix.com.co',
  whatsappNumber: '573107379163',
} as const;

export const allowedRequestOrigins = [siteConfig.origin, siteConfig.wwwOrigin] as const;

export function buildWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
