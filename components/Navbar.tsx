'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

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
    { label: dict.nosotros, href: `/${lang}/nosotros` },
    { label: dict.services, href: `/${lang}#servicios` },
    { label: dict.sectors, href: `/${lang}#sectores` },
    { label: dict.methodology, href: `/${lang}#metodologia` },
    { label: dict.contact, href: `/${lang}#contacto` },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-aegrix-bg/80 backdrop-blur-xl border-b border-aegrix-border py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className={cn(
        "container-width flex items-center justify-between transition-all duration-500",
        scrolled ? "h-12" : "h-16"
      )}>
        {/* LOGO AREA */}
        <Link href={`/${lang}`} className="relative z-50 flex items-center group">
          <div className={cn(
            "relative flex items-center justify-center transition-all duration-500",
            scrolled ? "h-8 w-24 md:h-10 md:w-28" : "h-10 w-28 md:h-16 md:w-36"
          )}>
            {/* Logo for Dark Theme */}
            <Image 
              src="/AEGRIX_hero_vector.svg" 
              alt="AEGRIX" 
              width={160} 
              height={44}
              priority
              className={cn(
                "w-full h-auto object-contain transition-all duration-500 group-hover:scale-105 origin-center logo-dark-theme"
              )}
            />
            {/* Logo for Light Theme */}
            <Image 
              src="/AEGRIX_vector.svg" 
              alt="AEGRIX" 
              width={160} 
              height={44}
              priority
              className={cn(
                "w-full h-auto object-contain transition-all duration-500 group-hover:scale-105 origin-center logo-light-theme"
              )}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8 ml-16">
          <div className="flex items-center gap-6 mr-4">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className="font-manrope text-[12px] font-bold uppercase tracking-[0.2em] text-aegrix-muted hover:text-aegrix-text transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-aegrix-cyan transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {/* Integrated Controls Group */}
            <div className="flex items-center p-1 h-10 rounded-full bg-aegrix-bg/50 backdrop-blur-md border border-aegrix-border shadow-sm">
              <Link
                href={lang === 'es' ? '/en' : '/es'}
                className="flex items-center gap-2 px-3 h-full rounded-full hover:bg-aegrix-cyan/5 transition-all group"
              >
                <div className="w-4 h-4 rounded-full overflow-hidden relative border border-white/10 shadow-sm transition-transform group-hover:scale-110">
                  <Image 
                    src={lang === 'es' ? "/Flag_of_the_United_States.svg" : "/Flag_of_Spain.svg"} 
                    alt={lang === 'es' ? "Switch to English" : "Cambiar a Español"} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-aegrix-muted group-hover:text-aegrix-cyan transition-colors">
                  {lang === 'es' ? 'EN' : 'ES'}
                </span>
              </Link>

              <div className="w-px h-4 bg-aegrix-border/40 mx-0.5" />

              <ThemeToggle />
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
        <div className="xl:hidden flex items-center gap-3 relative z-50">
          {/* Language Switcher Mobile */}
          <Link
            href={lang === 'es' ? '/en' : '/es'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-aegrix-bg/50 backdrop-blur-md border border-aegrix-border"
          >
            <div className="w-4 h-4 rounded-full overflow-hidden relative">
              <Image 
                src={lang === 'es' ? "/Flag_of_the_United_States.svg" : "/Flag_of_Spain.svg"} 
                alt={lang === 'es' ? "Switch to English" : "Cambiar a Español"} 
                fill 
                className="object-cover" 
              />
            </div>
            <span className="text-[9px] font-black uppercase text-aegrix-muted">
              {lang === 'es' ? 'EN' : 'ES'}
            </span>
          </Link>

          <ThemeToggle />
          
          <button 
            className="p-2 text-aegrix-text"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div 
          className={cn(
            "fixed inset-0 bg-aegrix-bg z-40 xl:hidden flex flex-col pt-24 sm:pt-32 px-6 sm:px-8 transition-all duration-500 ease-in-out",
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="flex flex-col gap-4 sm:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-sora font-bold text-aegrix-text py-2 border-b border-aegrix-border/50"
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
