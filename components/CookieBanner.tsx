'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

interface CookieBannerProps {
  lang: 'en' | 'es';
  dict: {
    message: string;
    accept: string;
    decline: string;
    settings: string;
  };
}

const CookieBanner = ({ dict }: CookieBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 z-100 flex justify-center pointer-events-none"
        >
          <div className="w-full max-w-4xl bg-[#0A0F1A]/95 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[32px] shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-8 pointer-events-auto relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-aegrix-cyan/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <div className="w-12 h-12 rounded-2xl bg-aegrix-cyan/10 flex items-center justify-center shrink-0">
              <Cookie className="text-aegrix-cyan" size={24} />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm md:text-base text-slate-300 leading-relaxed font-medium">
                {dict.message}
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                {dict.decline}
              </button>
              <button
                onClick={handleAccept}
                className="px-8 py-3 rounded-full bg-aegrix-cyan text-black text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-[0_10px_20px_-5px_rgba(0,212,212,0.3)]"
              >
                {dict.accept}
              </button>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors p-2"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
