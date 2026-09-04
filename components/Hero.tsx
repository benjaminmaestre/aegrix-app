'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import HeroControlLayer from './HeroControlLayer';
import VisionSlide from './VisionSlide';
import { cn } from '@/lib/utils';

interface HeroBackground {
  videoMp4: string;
  poster: string;
}

interface HeroProps {
  lang: 'en' | 'es';
  dict: {
    title_part1: string;
    title_highlight: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
  };
  activeBackground: HeroBackground;
}

const Hero = ({ lang, dict, activeBackground }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative w-full min-h-auto lg:min-h-screen overflow-hidden flex flex-col">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <video
          key={activeBackground.videoMp4}
          autoPlay
          muted
          loop
          playsInline
          poster={activeBackground.poster}
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.04] origin-center opacity-90 lg:opacity-80 transition-opacity duration-500"
        >
          <source src={activeBackground.videoMp4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-aegrix-bg/10" />
        <div className="absolute inset-0 bg-linear-to-r from-aegrix-bg via-aegrix-bg/50 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-linear-to-b from-aegrix-bg/60 via-aegrix-bg/10 to-aegrix-bg/95 lg:hidden" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,255,0.03),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.03),transparent_50%)]" />
        <div className="absolute inset-0 grid-bg opacity-[0.06]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] lg:opacity-[0.04] dark:opacity-[0.01] dark:lg:opacity-[0.03] pointer-events-none scale-[1.2] lg:scale-[2] transition-all duration-1000">
          <svg width="700" height="700" viewBox="300 230 650 560" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fillRule="evenodd">
              <path
                d="M 775 526 L 740 564 L 736 570 L 736 576 L 832 743 L 904 744 L 777 527 Z M 628 275 L 350 743 L 351 744 L 421 744 L 627 398 L 629 399 L 696 512 L 698 512 L 746 477 Z"
                className="fill-black dark:fill-white"
              />
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
          <motion.div
            key="engineering"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
            className="w-full min-h-[85vh] lg:min-h-screen flex flex-col justify-center relative pt-24 pb-28 lg:pt-32 lg:pb-32"
          >
            <div className="container-width relative z-10">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col text-center lg:text-left z-20 lg:col-span-6 xl:col-span-6"
                >
                  <div className="max-w-180 mx-auto lg:mx-0">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-aegrix-cyan/5 border border-aegrix-cyan/15 backdrop-blur-md mb-5 md:mb-6 hover:bg-aegrix-cyan/10 transition-colors duration-300 mx-auto lg:mx-0">
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-aegrix-cyan" aria-hidden="true" />
                      <span className="text-[9px] sm:text-[10px] font-bold text-aegrix-cyan tracking-[0.25em] uppercase font-manrope">
                        {lang === 'es' ? 'Infraestructura Tecnológica de Élite' : 'Elite Technological Infrastructure'}
                      </span>
                    </div>

                    <h1 className="font-sora font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl text-aegrix-text mb-6 leading-tight tracking-tight">
                      {dict.title_part1} <br />
                      <span className="text-transparent bg-clip-text bg-linear-to-r from-aegrix-cyan via-blue-400 to-indigo-500">
                        {dict.title_highlight}
                      </span>
                    </h1>

                    <p className="font-manrope text-sm sm:text-base md:text-lg mb-6 md:mb-12 text-aegrix-muted max-w-xl mx-auto lg:mx-0 opacity-90 leading-relaxed">
                      {dict.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-5 w-full sm:w-auto">
                      <Link
                        href={`/${lang}#diagnostico`}
                        className="btn-primary w-full sm:w-auto text-center justify-center max-w-70 sm:max-w-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-text"
                      >
                        {dict.cta_primary}
                      </Link>
                      <Link
                        href={`/${lang}#servicios`}
                        className="btn-secondary w-full sm:w-auto text-center justify-center max-w-70 sm:max-w-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                      >
                        {dict.cta_secondary}
                      </Link>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.97, x: 24 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full relative hidden lg:flex justify-end lg:col-span-6 xl:col-span-6"
                >
                  <div className="w-full max-w-180">
                    <HeroControlLayer lang={lang} />
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-aegrix-cyan/2 blur-[100px] rounded-full pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="vision"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
            className="w-full min-h-auto lg:min-h-screen flex flex-col relative pt-28 sm:pt-32 md:pt-36 pb-28 md:pb-32"
          >
            <div className="container-width w-full mt-4 md:my-auto h-full flex flex-col">
              <div className="w-full flex-1 min-h-125 md:min-h-150 rounded-3xl md:rounded-[40px] overflow-hidden border border-aegrix-border relative bg-aegrix-surface/20">
                <VisionSlide lang={lang} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-12 z-40" aria-label={lang === 'es' ? 'Vistas del hero' : 'Hero views'}>
        <button
          type="button"
          onClick={() => setCurrentSlide(0)}
          aria-pressed={currentSlide === 0}
          className="group flex flex-col items-start gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60 rounded-sm"
        >
          <span className={cn(
            'text-[10px] font-bold uppercase tracking-[0.25em] transition-colors',
            currentSlide === 0 ? 'text-aegrix-cyan' : 'text-aegrix-text/30 group-hover:text-aegrix-text/60'
          )}>
            {lang === 'es' ? 'Control Digital' : 'Digital Control'}
          </span>
          <div className={cn(
            'h-[1.5px] rounded-full transition-all duration-500',
            currentSlide === 0 ? 'w-12 bg-aegrix-cyan' : 'w-6 bg-aegrix-text/10'
          )} />
        </button>

        <button
          type="button"
          onClick={() => setCurrentSlide(1)}
          aria-pressed={currentSlide === 1}
          className="group flex flex-col items-start gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60 rounded-sm"
        >
          <span className={cn(
            'text-[10px] font-bold uppercase tracking-[0.25em] transition-colors',
            currentSlide === 1 ? 'text-aegrix-cyan' : 'text-aegrix-text/30 group-hover:text-aegrix-text/60'
          )}>
            {lang === 'es' ? 'Visión Estratégica' : 'Strategic Vision'}
          </span>
          <div className={cn(
            'h-[1.5px] rounded-full transition-all duration-500',
            currentSlide === 1 ? 'w-12 bg-aegrix-cyan' : 'w-6 bg-aegrix-text/10'
          )} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
