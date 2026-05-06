'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check, Settings } from 'lucide-react';
import Link from 'next/link';
import { setCookieConsent, CookiePreferences } from '@/lib/cookie-consent';
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

const CookieBanner = ({ lang, dict }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState<Omit<CookiePreferences, 'updatedAt'>>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allPrefs = { necessary: true, analytics: true, marketing: true, functional: true };
    setCookieConsent('accepted', allPrefs);
    setIsVisible(false);
  };

  const handleDeclineAll = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const minPrefs = { necessary: true, analytics: false, marketing: false, functional: false };
    setCookieConsent('declined', minPrefs);
    setIsVisible(false);
  };

  const handleSaveConfig = () => {
    setCookieConsent('custom', preferences);
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const categories = [
    { id: 'necessary' as const, title: lang === 'es' ? 'Necesarias' : 'Necessary', required: true },
    { id: 'analytics' as const, title: lang === 'es' ? 'Analítica' : 'Analytics', required: false },
    { id: 'functional' as const, title: lang === 'es' ? 'Funcionales' : 'Functional', required: false },
    { id: 'marketing' as const, title: lang === 'es' ? 'Marketing' : 'Marketing', required: false }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 z-[100] flex justify-center pointer-events-none"
        >
          <div className="w-full max-w-3xl bg-[#070B14]/95 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl pointer-events-auto relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center gap-4 relative z-10">
              <div className="flex-1 flex items-start gap-3">
                <Cookie className="text-aegrix-cyan shrink-0 mt-0.5" size={16} />
                <div className="flex flex-col">
                  <p className="text-[11px] text-slate-300 leading-normal max-w-xl">
                    {dict.message}
                    <Link href={`/${lang}/cookies`} className="text-aegrix-cyan ml-1 hover:underline font-bold uppercase text-[9px] tracking-tighter">
                      {lang === 'es' ? 'Ver Política' : 'Policy'}
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {!showConfig ? (
                  <>
                    <button onClick={(e) => handleDeclineAll(e)} className="px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-slate-500 hover:text-white transition-colors">
                      {dict.decline}
                    </button>
                    <button onClick={() => setShowConfig(true)} className="p-1.5 text-slate-400 hover:text-white border border-white/5 rounded-lg hover:bg-white/5 transition-all" title={dict.settings} aria-label={dict.settings}>
                      <Settings size={14} />
                    </button>
                    <button onClick={handleAcceptAll} className="px-4 py-1.5 bg-aegrix-cyan text-black text-[9px] font-black uppercase tracking-wider rounded-lg hover:bg-white transition-all shadow-lg">
                      {dict.accept}
                    </button>
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <button onClick={() => setShowConfig(false)} className="text-[9px] font-bold text-slate-500 hover:text-white uppercase px-2 tracking-widest">
                      {lang === 'es' ? 'Volver' : 'Back'}
                    </button>
                    <button onClick={handleSaveConfig} className="px-4 py-1.5 bg-white text-black text-[9px] font-black uppercase tracking-wider rounded-lg shadow-lg">
                      {lang === 'es' ? 'Guardar' : 'Save'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {showConfig && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-4 mt-4 border-t border-white/5">
                {categories.map((cat) => (
                  <button 
                    type="button"
                    key={cat.id} 
                    onClick={() => !cat.required && togglePreference(cat.id)}
                    disabled={cat.required}
                    aria-pressed={preferences[cat.id]}
                    className={cn(
                      "flex items-center justify-between p-2 rounded-lg border cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-aegrix-cyan/50",
                      preferences[cat.id] ? "bg-aegrix-cyan/10 border-aegrix-cyan/40" : "bg-white/2 border-white/5 opacity-50",
                      cat.required ? "cursor-not-allowed opacity-80" : ""
                    )}
                  >
                    <span className="text-[9px] font-bold uppercase tracking-tighter text-white">{cat.title}</span>
                    {preferences[cat.id] && <Check size={10} className="text-aegrix-cyan" />}
                  </button>
                ))}
              </motion.div>
            )}

            <button onClick={(e) => handleDeclineAll(e)} className="absolute top-2 right-2 text-slate-600 hover:text-white p-1" aria-label={lang === 'es' ? 'Cerrar y rechazar cookies no necesarias' : 'Close and reject non-essential cookies'}>
              <X size={12} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
