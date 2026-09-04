'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_PREFERENCES_KEY,
  getCookiePreferences,
} from '@/lib/cookie-consent';
import { setAnalyticsConsent, trackEvent } from '@/lib/analytics';

interface ConsentAwareAnalyticsProps {
  gaId?: string;
  nonce?: string;
}

export default function ConsentAwareAnalytics({ gaId, nonce }: ConsentAwareAnalyticsProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setEnabled(Boolean(getCookiePreferences()?.analytics));
    };

    syncConsent();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === COOKIE_PREFERENCES_KEY) syncConsent();
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, syncConsent);
    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, syncConsent);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  useEffect(() => {
    setAnalyticsConsent(enabled, gaId);
  }, [enabled, gaId]);

  useEffect(() => {
    if (!enabled) return;

    const handleClick = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target.closest('a') : null;
      if (!element) return;

      const href = element.getAttribute('href') || '';
      if (href.includes('wa.me')) trackEvent('whatsapp_click', { location: 'website' });
      if (href.includes('360.aegrix.com.co')) trackEvent('portal_click', { location: 'website' });
      if (href.includes('#diagnostico')) trackEvent('diagnostic_cta_click', { location: 'website' });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [enabled]);

  if (!gaId || !enabled) return null;

  return <GoogleAnalytics gaId={gaId} nonce={nonce} />;
}
