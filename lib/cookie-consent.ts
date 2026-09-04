export type CookieConsent = 'accepted' | 'declined' | 'custom';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
  updatedAt: string;
}

export const COOKIE_CONSENT_KEY = 'cookie-consent';
export const COOKIE_PREFERENCES_KEY = 'cookie-preferences';
export const COOKIE_CONSENT_EVENT = 'aegrix:cookie-consent-updated';
export const COOKIE_SETTINGS_EVENT = 'aegrix:open-cookie-settings';

export const getCookiePreferences = (): CookiePreferences | null => {
  if (typeof window === 'undefined') return null;
  const prefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!prefs) return null;

  try {
    const parsed = JSON.parse(prefs) as Partial<CookiePreferences>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      functional: Boolean(parsed.functional),
      updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : new Date(0).toISOString(),
    };
  } catch (error) {
    console.error('Failed to parse cookie preferences:', error);
    return null;
  }
};

export const hasCookieConsent = (category: keyof Omit<CookiePreferences, 'updatedAt'>): boolean => {
  const prefs = getCookiePreferences();
  if (!prefs) return false;
  return prefs[category];
};

export const setCookieConsent = (
  consent: CookieConsent,
  preferences: Omit<CookiePreferences, 'updatedAt'>
) => {
  if (typeof window === 'undefined') return;

  const fullPreferences: CookiePreferences = {
    ...preferences,
    necessary: true,
    updatedAt: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, consent);
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(fullPreferences));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: fullPreferences }));
};

export const openCookieSettings = () => {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
};
