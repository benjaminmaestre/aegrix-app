'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import HeroControlLayer from './HeroControlLayer';
import VisionSlide from './VisionSlide';
import { cn } from '@/lib/utils';
import heroBg from '@/public/images/aegrix-hero-command-center.avif';

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
    <section className="relative w-full min-h-auto lg:min-h-screen overflow-hidden flex flex-col">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={heroBg}
          alt={lang === 'es' ? "Fondo del centro de mando digital de AEGRIX" : "AEGRIX Digital Command Center Background"}
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-aegrix-bg/30" />
        <div className="absolute inset-0 bg-linear-to-r from-aegrix-bg via-aegrix-bg/80 to-aegrix-bg/40" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,255,0.03),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.03),transparent_50%)]" />
        <div className="absolute inset-0 grid-bg opacity-[0.06]" />
        
        {/* Large Isotype Watermark for Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] dark:opacity-[0.03] pointer-events-none scale-[2] transition-all duration-1000">
          <svg width="700" height="700" viewBox="300 230 650 560" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              {/* Base Isotype */}
              <path 
                d="M 775 526 L 740 564 L 736 570 L 736 576 L 832 743 L 904 744 L 777 527 Z M 628 275 L 350 743 L 351 744 L 421 744 L 627 398 L 629 399 L 696 512 L 698 512 L 746 477 Z" 
                className="fill-black dark:fill-white"
              />
              {/* Orange Slash Accent */}
              <path 
                d="M 863 408 L 817 443 L 585 629 L 545 660 L 499 763 L 513 752 L 579 692 L 688 588 L 801 475 Z" 
                fill="#FF4D00"
              />
            </g>
          </svg>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentSlide === 0 ? (
          /* SLIDE 0: ENGINEERING DOMINANCE */
          <motion.div
            key="engineering"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full min-h-auto lg:min-h-screen flex flex-col relative pt-28 sm:pt-32 pb-28 md:pb-32"
          >

            <div className="container-width relative z-10 mt-4 md:my-auto">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col text-left z-20 lg:col-span-6 xl:col-span-6"
                >
                  <div className="max-w-[720px]">
                    <h1 className="font-sora font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-aegrix-text mb-6 leading-tight tracking-tight">
                      {dict.title_part1} <br />
                      <span className="text-aegrix-cyan">{dict.title_highlight}</span>
                    </h1>

                    <p className="font-manrope text-sm sm:text-base md:text-lg mb-6 md:mb-12 text-aegrix-muted max-w-xl opacity-80 leading-relaxed">
                      <span>{dict.description.split('. ')[0]}.</span>
                      {dict.description.split('. ').length > 1 && (
                        <span className="hidden md:inline"> {dict.description.split('. ').slice(1).join('. ')}</span>
                      )}
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-5">
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
                  className="w-full relative flex justify-center lg:justify-end lg:col-span-6 xl:col-span-6"
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
            className="w-full min-h-auto lg:min-h-screen flex flex-col relative pt-28 sm:pt-32 md:pt-36 pb-28 md:pb-32"
          >
            <div className="container-width w-full mt-4 md:my-auto h-full flex flex-col">
              <div className="w-full flex-1 min-h-[500px] md:min-h-[600px] rounded-3xl md:rounded-[40px] overflow-hidden border border-aegrix-border relative bg-aegrix-surface/20">
                <VisionSlide />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-12 z-40">
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
