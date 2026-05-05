'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { navItems } from '@/lib/data';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const scrolled = useScrolled(80);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-aegrix-bg/95 backdrop-blur-md border-b border-aegrix-border py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-width flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="relative z-50">
          <div className="flex items-center">
            <Image 
              src="/AEGRIX_hero_vector.svg" 
              alt="AEGRIX Logo" 
              width={140} 
              height={38}
              priority
              className="h-10 w-auto object-contain brightness-110"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="font-manrope text-sm text-aegrix-muted hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="#diagnostico" 
            className={cn(
              "btn-secondary py-2 text-sm",
              scrolled && "bg-aegrix-cyan text-aegrix-bg border-transparent hover:shadow-cyan-md"
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
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-aegrix-bg z-40 lg:hidden flex flex-col pt-32 px-6 transition-transform duration-500 ease-in-out",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-manrope font-medium text-white py-4 border-b border-aegrix-border"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="#diagnostico" 
              onClick={() => setMenuOpen(false)}
              className="btn-primary w-full text-lg py-4 mt-4"
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
