'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aegrix-bg border-t border-aegrix-border pt-24 pb-12">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <Image 
                src="/AEGRIX_hero_vector.svg" 
                alt="AEGRIX" 
                width={140} 
                height={38}
                className="h-12 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-sm text-aegrix-muted leading-relaxed mb-8 max-w-xs">
              Diseñamos la capa de control digital que protege tu empresa, convierte tu web en un canal comercial y transforma tus datos en decisiones.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-lg bg-white/2 border border-white/5 text-aegrix-muted hover:text-aegrix-cyan hover:border-aegrix-cyan/20 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1: Plataforma */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">Plataforma</h4>
            <ul className="space-y-4">
              {['AEGRIX Shield', 'AEGRIX Web', 'AEGRIX Data & AI', 'AEGRIX Care'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-aegrix-muted hover:text-aegrix-cyan transition-colors flex items-center gap-1 group">
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2: Empresa */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">Empresa</h4>
            <ul className="space-y-4">
              {['Diagnóstico 360', 'Casos de Uso', 'Metodología', 'Contacto'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-aegrix-muted hover:text-aegrix-cyan transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-8">Contacto</h4>
            <div className="space-y-4 text-sm text-aegrix-muted">
              <p>Medellín, Colombia</p>
              <a href="mailto:info@aegrix.com" className="block hover:text-aegrix-cyan transition-colors">info@aegrix.com</a>
              <div className="pt-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-aegrix-green uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-aegrix-green animate-pulse" />
                  Sistemas Monitoreados 24/7
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-white/30 font-medium">
            © {currentYear} AEGRIX Technology Firm. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-8 text-[10px] font-bold text-white/30 uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
            <Link href="#" className="hover:text-white transition-colors">Seguridad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
