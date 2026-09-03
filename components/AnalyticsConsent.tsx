'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { getCookiePreferences } from '@/lib/cookie-consent';
import { GA_MEASUREMENT_ID, trackEvent } from '@/lib/analytics';

export default function AnalyticsConsent() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const update = () => setEnabled(Boolean(getCookiePreferences()?.analytics));
    update();
    window.addEventListener('cookie-consent-updated', update);

    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('a');
      if (!target || !enabled) return;
      const href = target.getAttribute('href') || '';
      if (href.includes('wa.me')) trackEvent('whatsapp_click', { location: 'website' });
      if (href.includes('360.aegrix.com.co')) trackEvent('portal_click', { location: 'website' });
      if (href.includes('#diagnostico')) trackEvent('diagnostic_cta_click', { location: 'website' });
    };
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('cookie-consent-updated', update);
      document.removeEventListener('click', handleClick);
    };
  }, [enabled]);

  if (!enabled || !GA_MEASUREMENT_ID) return null;
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
