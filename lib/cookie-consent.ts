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

export const getCookiePreferences = (): CookiePreferences | null => {
  if (typeof window === 'undefined') return null;
  const prefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!prefs) return null;
  
  try {
    return JSON.parse(prefs);
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
  const fullPreferences: CookiePreferences = {
    ...preferences,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(COOKIE_CONSENT_KEY, consent);
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(fullPreferences));
};
