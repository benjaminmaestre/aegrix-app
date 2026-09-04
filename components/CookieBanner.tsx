'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, Cookie, Settings } from 'lucide-react';
import Link from 'next/link';
import {
  COOKIE_CONSENT_KEY,
  COOKIE_SETTINGS_EVENT,
  CookiePreferences,
  getCookiePreferences,
  setCookieConsent,
} from '@/lib/cookie-consent';
import { cn } from '@/lib/utils';

interface CookieBannerProps {
  lang: 'en' | 'es';
  dict: {
    message: string;
    accept: string;
    decline: string;
    settings: string;
  };
}

const defaultPreferences: Omit<CookiePreferences, 'updatedAt'> = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

const CookieBanner = ({ lang, dict }: CookieBannerProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = getCookiePreferences();
      if (saved) {
        setPreferences({
          necessary: true,
          analytics: saved.analytics,
          marketing: saved.marketing,
          functional: saved.functional,
        });
      }

      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) setIsVisible(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const openSettings = () => {
      const saved = getCookiePreferences();
      if (saved) {
        setPreferences({
          necessary: true,
          analytics: saved.analytics,
          marketing: saved.marketing,
          functional: saved.functional,
        });
      }
      setShowConfig(true);
      setIsVisible(true);
    };

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const handleAcceptAll = () => {
    const allPrefs = { necessary: true, analytics: true, marketing: true, functional: true };
    setPreferences(allPrefs);
    setCookieConsent('accepted', allPrefs);
    setShowConfig(false);
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    setPreferences(defaultPreferences);
    setCookieConsent('declined', defaultPreferences);
    setShowConfig(false);
    setIsVisible(false);
  };

  const handleSaveConfig = () => {
    setCookieConsent('custom', preferences);
    setShowConfig(false);
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return;
    setPreferences((current) => ({ ...current, [key]: !current[key] }));
  };

  const categories = [
    {
      id: 'necessary' as const,
      title: lang === 'es' ? 'Necesarias' : 'Necessary',
      description: lang === 'es' ? 'Esenciales para que el sitio funcione.' : 'Required for the site to work.',
      required: true,
    },
    {
      id: 'analytics' as const,
      title: lang === 'es' ? 'Analítica' : 'Analytics',
      description: lang === 'es' ? 'Medición de uso y rendimiento.' : 'Usage and performance measurement.',
      required: false,
    },
    {
      id: 'functional' as const,
      title: lang === 'es' ? 'Funcionales' : 'Functional',
      description: lang === 'es' ? 'Preferencias adicionales del sitio.' : 'Additional site preferences.',
      required: false,
    },
    {
      id: 'marketing' as const,
      title: lang === 'es' ? 'Marketing' : 'Marketing',
      description: lang === 'es' ? 'Medición de campañas cuando se configure.' : 'Campaign measurement when configured.',
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={shouldReduceMotion ? false : { y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { y: 36, opacity: 0 }}
          className="fixed bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 z-100 flex justify-center pointer-events-none"
          role="dialog"
          aria-modal="false"
          aria-label={lang === 'es' ? 'Preferencias de cookies' : 'Cookie preferences'}
        >
          <div className="w-full max-w-5xl bg-aegrix-surface/95 backdrop-blur-md border border-aegrix-border p-4 sm:p-5 md:p-6 rounded-2xl shadow-2xl pointer-events-auto overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-start md:items-center gap-4 md:gap-6">
              <div className="flex items-start gap-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-aegrix-cyan/8 border border-aegrix-cyan/15 text-aegrix-cyan flex items-center justify-center shrink-0">
                  <Cookie size={17} aria-hidden="true" />
                </div>
                <p className="text-xs sm:text-sm text-aegrix-muted leading-relaxed min-w-0">
                  {dict.message}
                  <Link href={`/${lang}/cookies`} className="text-aegrix-cyan ml-1 hover:underline font-semibold">
                    {lang === 'es' ? 'Ver política de cookies' : 'View cookie policy'}
                  </Link>
                </p>
              </div>

              {!showConfig ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full md:w-auto md:min-w-105">
                  <button
                    type="button"
                    onClick={handleDeclineAll}
                    className="min-h-11 px-4 py-2 text-xs font-semibold text-aegrix-muted hover:text-aegrix-text border border-aegrix-border rounded-lg hover:bg-aegrix-bg-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                  >
                    {dict.decline}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowConfig(true)}
                    className="min-h-11 px-4 py-2 inline-flex items-center justify-center gap-2 text-xs font-semibold text-aegrix-muted hover:text-aegrix-text border border-aegrix-border rounded-lg hover:bg-aegrix-bg-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                  >
                    <Settings size={15} aria-hidden="true" />
                    {dict.settings}
                  </button>
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="min-h-11 px-4 py-2 bg-aegrix-cyan text-aegrix-on-accent text-xs font-bold rounded-lg hover:brightness-110 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-text"
                  >
                    {dict.accept}
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 w-full md:w-auto md:min-w-72">
                  <button
                    type="button"
                    onClick={() => setShowConfig(false)}
                    className="min-h-11 px-4 text-xs font-semibold text-aegrix-muted hover:text-aegrix-text border border-aegrix-border rounded-lg hover:bg-aegrix-bg-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                  >
                    {lang === 'es' ? 'Volver' : 'Back'}
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveConfig}
                    className="min-h-11 px-4 py-2 bg-aegrix-text text-aegrix-bg text-xs font-bold rounded-lg shadow-lg hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                  >
                    {lang === 'es' ? 'Guardar preferencias' : 'Save preferences'}
                  </button>
                </div>
              )}
            </div>

            {showConfig && (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-4 mt-4 border-t border-aegrix-border"
              >
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category.id}
                    onClick={() => !category.required && togglePreference(category.id)}
                    disabled={category.required}
                    aria-pressed={preferences[category.id]}
                    className={cn(
                      'min-h-18 flex items-start justify-between gap-3 p-3.5 rounded-xl border text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60',
                      preferences[category.id]
                        ? 'bg-aegrix-cyan/10 border-aegrix-cyan/40'
                        : 'bg-aegrix-bg-2 border-aegrix-border',
                      category.required ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
                    )}
                  >
                    <span>
                      <span className="block text-xs font-bold text-aegrix-text">{category.title}</span>
                      <span className="block mt-1 text-[11px] leading-snug text-aegrix-muted">{category.description}</span>
                    </span>
                    {preferences[category.id] && <Check size={14} className="text-aegrix-cyan shrink-0" aria-hidden="true" />}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
