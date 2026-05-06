'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/utils';

interface NavbarProps {
  lang: 'en' | 'es';
  dict: {
    services: string;
    nosotros: string;
    sectors: string;
    methodology: string;
    contact: string;
    cta: string;
  };
}

const Navbar = ({ lang, dict }: NavbarProps) => {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: dict.services, href: `/${lang}#servicios` },
    { label: dict.nosotros, href: `/${lang}/nosotros` },
    { label: dict.sectors, href: `/${lang}#sectores` },
    { label: dict.methodology, href: `/${lang}#metodologia` },
    { label: dict.contact, href: `/${lang}#contacto` },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-aegrix-bg/80 backdrop-blur-xl border-b border-aegrix-border py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className={cn(
        "container-width flex items-center justify-between transition-all duration-500",
        scrolled ? "h-16" : "h-20"
      )}>
        {/* LOGO OVERFLOW */}
        <Link href={`/${lang}`} className="relative z-50 flex items-center group">
          <div className={cn(
            "relative flex items-center transition-all duration-500",
            scrolled ? "h-16" : "h-20"
          )}>

            
            <Image 
              src="/AEGRIX_hero_vector.svg" 
              alt="AEGRIX" 
              width={160} 
              height={44}
              priority
              className={cn(
                "w-auto object-contain relative z-10 brightness-110 transition-all duration-500 group-hover:scale-105 origin-center",
                scrolled ? "h-18" : "h-28"
              )}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 mr-4">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="font-manrope text-[13px] font-semibold uppercase tracking-widest text-aegrix-muted hover:text-white transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-aegrix-cyan transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Compact Ultra-Premium Language Switcher */}
            <div className="flex items-center gap-3">
              <Link
                href={lang === 'es' ? '/en' : '/es'}
                className="relative w-12 h-7 rounded-full bg-[#031018] border border-white/5 flex items-center transition-all duration-300 hover:border-aegrix-cyan/30 group overflow-hidden"
                style={{
                  boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(0, 194, 255, 0.05)'
                }}
              >
                {/* Unified Background Flag - Max Brightness */}
                <div className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={lang}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={lang === 'es' ? "/Flag_of_Spain.svg" : "/Flag_of_the_United_States.svg"} 
                        alt="" 
                        fill 
                        className="object-cover" 
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <motion.div
                  initial={false}
                  animate={{ x: lang === 'es' ? 2 : 22 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ 
                    duration: 0.48,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="w-6 h-6 rounded-full bg-white border-2 border-slate-400/40 flex items-center justify-center relative z-10 cursor-pointer will-change-transform"
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 1)'
                  }}
                >
                  <motion.span 
                    animate={{ color: '#031018' }}
                    transition={{ duration: 0.48 }}
                    className="text-[10px] font-black uppercase tracking-tighter"
                  >
                    {lang === 'es' ? 'ES' : 'EN'}
                  </motion.span>
                </motion.div>
              </Link>
            </div>

            <Link 
              href={`/${lang}#diagnostico`}
              className="btn-nav"
            >
              {dict.cta}
            </Link>
          </div>
        </div>

        {/* Compact Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4 relative z-50">
          <Link
            href={lang === 'es' ? '/en' : '/es'}
            className="relative w-10 h-6 rounded-full bg-[#031018] border border-white/5 flex items-center transition-all duration-300 group overflow-hidden"
            style={{
              boxShadow: 'inset 0 1px 4px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(0, 194, 255, 0.05)'
            }}
          >
            {/* Unified Background Flag - Mobile */}
            <div className="absolute inset-0 w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={lang === 'es' ? "/Flag_of_Spain.svg" : "/Flag_of_the_United_States.svg"} 
                    alt="" 
                    fill 
                    className="object-cover" 
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={false}
              animate={{ x: lang === 'es' ? 2 : 18 }}
              whileTap={{ scale: 0.96 }}
              transition={{ 
                duration: 0.48,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="w-5 h-5 rounded-full bg-white border-2 border-slate-400/40 flex items-center justify-center relative z-10 shadow-lg cursor-pointer will-change-transform"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 1)'
              }}
            >
              <motion.span 
                animate={{ color: '#031018' }}
                transition={{ duration: 0.48 }}
                className="text-[8px] font-black"
              >
                {lang === 'es' ? 'ES' : 'EN'}
              </motion.span>
            </motion.div>
          </Link>
          <button 
            className="p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-aegrix-bg z-40 lg:hidden flex flex-col pt-32 px-8 transition-all duration-500 ease-in-out",
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-sora font-bold text-white py-2 border-b border-aegrix-border/50"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href={`/${lang}#diagnostico`}
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              {dict.cta}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
