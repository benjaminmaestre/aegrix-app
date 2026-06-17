'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';
import ObfuscatedEmail from './ObfuscatedEmail';

const Footer = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-aegrix-bg border-t border-aegrix-border px-4 pt-10 pb-28 sm:px-6 lg:px-16 lg:pt-12 lg:pb-12">
      <div className="mx-auto max-w-7xl">
        {/* Top Section: Brand Info + Links */}
        <div className="flex flex-col lg:flex-row lg:justify-between mb-8 lg:mb-10">
          {/* Brand Info */}
          <div className="flex flex-col lg:block mb-8 lg:mb-0 lg:max-w-sm">
            <div className="flex items-center gap-4 lg:block">
              <Link href="/" className="inline-block relative group shrink-0">
                {/* Logo for Dark Theme */}
                <Image 
                  src="/AEGRIX_hero_vector.svg" 
                  alt="AEGRIX" 
                  width={112} 
                  height={30}
                  className="w-28 h-auto object-contain hidden dark:block brightness-110 transition-all duration-500 group-hover:scale-105 lg:w-[130px] lg:mb-5"
                />
                {/* Logo for Light Theme */}
                <Image 
                  src="/AEGRIX_vector.svg" 
                  alt="AEGRIX" 
                  width={112} 
                  height={30}
                  className="w-28 h-auto object-contain dark:hidden transition-all duration-500 group-hover:scale-105 lg:w-[130px] lg:mb-5"
                />
              </Link>
              <p className="text-xs sm:text-sm leading-relaxed text-aegrix-muted lg:hidden max-w-xs">
                Seguridad, Web, Data & AI para empresas más inteligentes.
              </p>
            </div>
            
            <p className="hidden lg:block text-sm text-aegrix-muted leading-relaxed mb-5 max-w-xs">
              Diseñamos la capa de control digital que protege tu empresa, convierte tu web en un canal comercial y transforma tus datos en decisiones.
            </p>

            <div className="flex items-center gap-3 mt-5 lg:mt-0 lg:gap-4">
              <a href="https://www.linkedin.com/company/aegrix" target="_blank" rel="noopener noreferrer" className="footer-social-link w-8 h-8 lg:w-10 lg:h-10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="lg:w-5 lg:h-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://x.com/aegrix" target="_blank" rel="noopener noreferrer" className="footer-social-link w-8 h-8 lg:w-10 lg:h-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="lg:w-[18px] lg:h-[18px]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://instagram.com/aegrix" target="_blank" rel="noopener noreferrer" className="footer-social-link w-8 h-8 lg:w-10 lg:h-10">
                <Instagram size={18} className="lg:w-[22px] lg:h-[22px]" />
              </a>
            </div>

            {/* Status Badge only for Desktop */}
            <div className="hidden lg:flex mt-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-aegrix-green/10 px-4 py-2 text-[10px] lg:text-[11px] font-bold tracking-[0.16em] text-aegrix-green uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-aegrix-green animate-pulse" />
                Sistemas Monitoreados 24/7
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-8">
            {/* Links 1: Plataforma */}
            <div>
              <h4 className="text-[10px] sm:text-xs font-bold text-aegrix-text uppercase tracking-[0.2em] mb-4 lg:mb-5">Plataforma</h4>
              <ul className="space-y-3 lg:space-y-3">
                {[
                  { name: 'AEGRIX Shield', href: `/${lang}#servicios` },
                  { name: 'AEGRIX Web', href: `/${lang}#servicios` },
                  { name: 'AEGRIX Data & AI', href: `/${lang}#servicios` },
                  { name: 'AEGRIX Care', href: `/${lang}#servicios` }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] sm:text-sm text-aegrix-muted hover:text-aegrix-cyan transition-colors flex items-center gap-1 group">
                      {link.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links 2: Industrias */}
            <div>
              <h4 className="text-[10px] sm:text-xs font-bold text-aegrix-text uppercase tracking-[0.2em] mb-4 lg:mb-5">
                {lang === 'en' ? 'Industries' : 'Industrias'}
              </h4>
              <ul className="space-y-3 lg:space-y-3">
                {[
                  { name: lang === 'en' ? 'Health Premium' : 'Salud Premium', href: `/${lang}/health-premium` },
                  { name: lang === 'en' ? 'Real Estate' : 'Real Estate & Proyectos', href: `/${lang}/real-estate` },
                  { name: lang === 'en' ? 'Construction & Services' : 'Constructoras & Servicios', href: `/${lang}/construction-tech` },
                  { name: lang === 'en' ? 'Legal & Professional' : 'Legal & Professional', href: `/${lang}/legal-tech` },
                  { name: lang === 'en' ? 'Logistics & Wholesale' : 'Distribución & Logística', href: `/${lang}/industrial-logistica` },
                  { name: lang === 'en' ? 'Corporate Training' : 'Capacitación Corporativa', href: `/${lang}/education-corporate` }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] sm:text-sm text-aegrix-muted hover:text-aegrix-cyan transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links 3: Empresa */}
            <div>
              <h4 className="text-[10px] sm:text-xs font-bold text-aegrix-text uppercase tracking-[0.2em] mb-4 lg:mb-5">Empresa</h4>
              <ul className="space-y-3 lg:space-y-3">
                {[
                  { name: 'Diagnóstico 360', href: `/${lang}#diagnostico` },
                  { name: 'Casos de Uso', href: `/${lang}#casos` },
                  { name: 'Metodología', href: `/${lang}#metodologia` },
                  { name: 'Contacto', href: `/${lang}#contacto` }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] sm:text-sm text-aegrix-muted hover:text-aegrix-cyan transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto Desktop (Oculto en móvil) */}
            <div className="hidden lg:block col-span-1">
              <h4 className="text-xs font-bold text-aegrix-text uppercase tracking-[0.2em] mb-5">Contacto</h4>
              <div className="space-y-2 text-sm text-aegrix-muted">
                <p className="text-aegrix-text font-semibold">Colombia</p>
                <p className="text-[11px] leading-relaxed text-aegrix-muted/60 mb-2">Bogotá • Medellín • Cali • Barranquilla • Cartagena</p>
                <ObfuscatedEmail email="info@aegrix.com.co" className="block hover:text-aegrix-cyan transition-colors" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-aegrix-cyan transition-colors">+57 310 737 9163</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contacto Mobile (Card style) */}
        <div className="mt-8 rounded-2xl border border-aegrix-border bg-white/2 p-5 lg:hidden">
          <h4 className="text-[10px] font-bold text-aegrix-text uppercase tracking-[0.2em] mb-4">Contacto</h4>
          <div className="space-y-2 text-[13px] text-aegrix-muted">
            <p className="text-aegrix-text font-semibold">Colombia</p>
            <p className="text-[10px] leading-relaxed text-aegrix-muted/60 mb-1">Bogotá • Medellín • Cali • Barranquilla • Cartagena</p>
            <ObfuscatedEmail email="info@aegrix.com.co" className="block hover:text-aegrix-cyan transition-colors" />
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-aegrix-cyan transition-colors">+57 310 737 9163</a>
          </div>
        </div>

        {/* Badge Status (Mobile only) */}
        <div className="mt-8 flex justify-center lg:hidden">
          <div className="inline-flex items-center gap-2 rounded-full bg-aegrix-green/10 px-4 py-2 text-[10px] lg:text-[11px] font-bold tracking-[0.16em] text-aegrix-green uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-aegrix-green animate-pulse" />
            Sistemas Monitoreados 24/7
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-aegrix-border flex flex-col lg:flex-row items-center justify-between gap-6 lg:mt-10">
          <div className="text-[11px] lg:text-xs text-aegrix-text/30 font-medium text-center lg:text-left">
            © {currentYear} AEGRIX Technology Firm. Todos los derechos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[10px] font-bold text-aegrix-text/30 uppercase tracking-widest lg:justify-end lg:pr-24">
            <Link href={`/${lang}/privacidad`} className="hover:text-aegrix-text transition-colors">Privacidad</Link>
            <Link href={`/${lang}/terminos`} className="hover:text-aegrix-text transition-colors">Términos</Link>
            <Link href={`/${lang}/cookies`} className="hover:text-aegrix-text transition-colors">Cookies</Link>
            <Link href={`/${lang}/seguridad`} className="hover:text-aegrix-text transition-colors">Seguridad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
