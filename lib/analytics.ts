import { getCookiePreferences } from '@/lib/cookie-consent';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

type Gtag = (...args: unknown[]) => void;

export function setAnalyticsConsent(enabled: boolean, gaId?: string) {
  if (typeof window === 'undefined') return;

  if (gaId) {
    (window as unknown as Record<string, unknown>)[`ga-disable-${gaId}`] = !enabled;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: enabled ? 'granted' : 'denied',
    });
  }
}

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return;
  if (!getCookiePreferences()?.analytics) return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', name, params);
}

declare global {
  interface Window {
    gtag?: Gtag;
  }
}
