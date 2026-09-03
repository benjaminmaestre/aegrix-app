export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

declare global {
  interface Window {
    gtag?: (command: string, target: string, params?: AnalyticsParams) => void;
  }
}
