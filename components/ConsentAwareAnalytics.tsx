'use client';

import { useEffect, useState } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_PREFERENCES_KEY,
  getCookiePreferences,
} from '@/lib/cookie-consent';

interface ConsentAwareAnalyticsProps {
  gaId?: string;
}

export default function ConsentAwareAnalytics({ gaId }: ConsentAwareAnalyticsProps) {
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

  if (!gaId || !enabled) return null;

  return <GoogleAnalytics gaId={gaId} />;
}
