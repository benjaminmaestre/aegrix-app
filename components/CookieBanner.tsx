'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, Cookie, Settings, X } from 'lucide-react';
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
    if (!consent) {
      const timer = window.setTimeout(() => setIsVisible(true), 600);
      return () => window.clearTimeout(timer);
    }
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

  const handleDeclineAll = (event?: React.MouseEvent) => {
    event?.stopPropagation();
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
          initial={shouldReduceMotion ? false : { y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { y: 50, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-100 flex justify-center pointer-events-none"
          role="dialog"
          aria-modal="false"
          aria-label={lang === 'es' ? 'Preferencias de cookies' : 'Cookie preferences'}
        >
          <div className="w-full max-w-3xl bg-aegrix-surface/95 backdrop-blur-md border border-aegrix-border p-4 sm:p-5 rounded-2xl shadow-2xl pointer-events-auto relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 relative z-10 pr-8">
              <div className="flex-1 flex items-start gap-3">
                <Cookie className="text-aegrix-cyan shrink-0 mt-0.5" size={18} aria-hidden="true" />
                <p className="text-xs sm:text-sm text-aegrix-muted leading-relaxed max-w-xl">
                  {dict.message}
                  <Link href={`/${lang}/cookies`} className="text-aegrix-cyan ml-1 hover:underline font-semibold">
                    {lang === 'es' ? 'Ver política de cookies' : 'View cookie policy'}
                  </Link>
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                {!showConfig ? (
                  <>
                    <button
                      type="button"
                      onClick={handleDeclineAll}
                      className="min-h-11 px-4 py-2 text-xs font-semibold text-aegrix-muted hover:text-aegrix-text transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                    >
                      {dict.decline}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowConfig(true)}
                      className="min-w-11 min-h-11 p-2 text-aegrix-muted hover:text-aegrix-text border border-aegrix-border rounded-lg hover:bg-aegrix-bg-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                      title={dict.settings}
                      aria-label={dict.settings}
                    >
                      <Settings size={17} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={handleAcceptAll}
                      className="min-h-11 px-4 py-2 bg-aegrix-cyan text-aegrix-bg text-xs font-bold rounded-lg hover:brightness-110 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-text"
                    >
                      {dict.accept}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setShowConfig(false)}
                      className="min-h-11 px-3 text-xs font-semibold text-aegrix-muted hover:text-aegrix-text rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
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
                  </>
                )}
              </div>
            </div>

            {showConfig && (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-4 mt-4 border-t border-aegrix-border"
              >
                {categories.map((category) => (
                  <button
                    type="button"
                    key={category.id}
                    onClick={() => !category.required && togglePreference(category.id)}
                    disabled={category.required}
                    aria-pressed={preferences[category.id]}
                    className={cn(
                      'min-h-16 flex items-start justify-between gap-3 p-3 rounded-lg border text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60',
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

            <button
              type="button"
              onClick={handleDeclineAll}
              className="absolute top-2 right-2 min-w-11 min-h-11 flex items-center justify-center text-aegrix-muted hover:text-aegrix-text rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
              aria-label={lang === 'es' ? 'Cerrar y rechazar cookies no necesarias' : 'Close and reject non-essential cookies'}
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
