'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import HeroControlLayer from './HeroControlLayer';
import VisionSlide from './VisionSlide';
import { cn } from '@/lib/utils';

interface HeroProps {
  lang: 'en' | 'es';
  dict: {
    title_part1: string;
    title_highlight: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
  };
}

const Hero = ({ lang, dict }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-switch main slides with dynamic timing
  useEffect(() => {
    const duration = currentSlide === 0 ? 25000 : 30000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, duration);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
      <AnimatePresence mode="wait">
        {currentSlide === 0 ? (
          /* SLIDE 0: ENGINEERING DOMINANCE */
          <motion.div
            key="engineering"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full min-h-screen flex flex-col relative pt-28 md:pt-32 pb-32"
          >
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,255,0.03),transparent_50%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.03),transparent_50%)]" />
              <div className="absolute inset-0 grid-bg opacity-[0.06]" />
            </div>

            <div className="container-width relative z-10 mt-8 md:my-auto">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col text-left z-20 lg:col-span-5 xl:col-span-5"
                >
                  <div className="max-w-[720px]">
                    <h1 className="font-sora font-bold text-3xl md:text-5xl lg:text-5xl xl:text-6xl text-aegrix-text mb-6 leading-tight tracking-tight">
                      {dict.title_part1} <br />
                      <span className="text-aegrix-cyan">{dict.title_highlight}</span>
                    </h1>

                    <p className="body-lg mb-12 text-aegrix-muted max-w-xl opacity-80">
                      {dict.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-5">
                      <Link href={`/${lang}#diagnostico`} className="btn-primary w-full sm:w-auto">
                        {dict.cta_primary}
                      </Link>
                      <Link href="#arquitectura" className="btn-secondary w-full sm:w-auto">
                        {dict.cta_secondary}
                      </Link>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full relative flex justify-center lg:justify-end lg:col-span-7 xl:col-span-7"
                >
                  <div className="w-full max-w-[720px]">
                    <HeroControlLayer />
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-aegrix-cyan/2 blur-[100px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* SLIDE 1: VISION NARRATIVE */
          <motion.div
            key="vision"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full min-h-screen flex flex-col relative pt-28 md:pt-36 pb-32"
          >
            <div className="container-width w-full mt-8 md:my-auto h-full flex flex-col">
              <div className="w-full flex-1 min-h-[500px] md:min-h-[600px] rounded-[40px] overflow-hidden border border-aegrix-border relative bg-aegrix-surface/20">
                <VisionSlide />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-12 z-40">
        <button 
          onClick={() => setCurrentSlide(0)}
          className="group flex flex-col items-start gap-3"
        >
          <span className={cn(
            "text-[10px] font-bold uppercase tracking-[0.25em] transition-colors",
            currentSlide === 0 ? "text-aegrix-cyan" : "text-aegrix-text/20 group-hover:text-aegrix-text/40"
          )}>
            {lang === 'es' ? 'Control Digital' : 'Digital Control'}
          </span>
          <div className={cn(
            "h-[1.5px] rounded-full transition-all duration-700",
            currentSlide === 0 ? "w-12 bg-aegrix-cyan" : "w-0 bg-aegrix-text/10 group-hover:w-6"
          )} />
        </button>

        <button 
          onClick={() => setCurrentSlide(1)}
          className="group flex flex-col items-start gap-3"
        >
          <span className={cn(
            "text-[10px] font-bold uppercase tracking-[0.25em] transition-colors",
            currentSlide === 1 ? "text-aegrix-cyan" : "text-aegrix-text/20 group-hover:text-aegrix-text/40"
          )}>
            {lang === 'es' ? 'Visión Estratégica' : 'Strategic Vision'}
          </span>
          <div className={cn(
            "h-[1.5px] rounded-full transition-all duration-700",
            currentSlide === 1 ? "w-12 bg-aegrix-cyan" : "w-0 bg-aegrix-text/10 group-hover:w-6"
          )} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
