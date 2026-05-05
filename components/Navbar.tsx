'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const scrolled = useScrolled(40);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-aegrix-bg/80 backdrop-blur-xl border-b border-aegrix-border py-4" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container-width flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="relative z-50 flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-aegrix-cyan/20 blur-xl rounded-full scale-50 group-hover:scale-100 transition-transform duration-500" />
            <Image 
              src="/AEGRIX_hero_vector.svg" 
              alt="AEGRIX" 
              width={160} 
              height={44}
              priority
              className="h-12 w-auto object-contain relative z-10 brightness-110"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
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
          <Link 
            href="#diagnostico" 
            className={cn(
              "btn-secondary py-2.5 px-6 text-[12px] font-bold uppercase tracking-widest border-aegrix-cyan/20 bg-aegrix-cyan/5",
              scrolled && "border-aegrix-cyan text-white"
            )}
          >
            Solicitar diagnóstico
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-50 p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

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
              href="#diagnostico" 
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-lg py-5 mt-4"
            >
              Solicitar diagnóstico
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
