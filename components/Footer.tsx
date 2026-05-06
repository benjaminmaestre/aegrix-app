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
              <a href="#" className="footer-social-link">
                {/* Modern LinkedIn Logo SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link">
                {/* Custom X Logo SVG - Larger */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="footer-social-link">
                <Instagram size={22} />
              </a>
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
