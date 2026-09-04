'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  ChevronRight,
  LockKeyhole,
  Mail,
  Menu,
  Target,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { getLocalizedPath } from '@/lib/navigation';
import { siteConfig } from '@/lib/site-config';

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
  const pathname = usePathname();
  const languageSwitchLabel = lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish';

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navItems = [
    {
      label: dict.nosotros,
      href: lang === 'es' ? '/es/nosotros' : '/en/about',
      description: lang === 'es' ? 'Quiénes somos' : 'Who we are',
      icon: Users,
    },
    {
      label: dict.services,
      href: `/${lang}#servicios`,
      description: lang === 'es' ? 'Cómo te ayudamos' : 'How we help',
      icon: Wrench,
    },
    {
      label: 'AEGRIX 360',
      href: `/${lang}/aegrix-360`,
      description: lang === 'es' ? 'Evaluación y gestión de ciberseguridad' : 'Cybersecurity assessment and management',
      icon: BarChart3,
      featured: true,
    },
    {
      label: dict.sectors,
      href: `/${lang}#sectores`,
      description: lang === 'es' ? 'Soluciones por industria' : 'Solutions by industry',
      icon: Building2,
    },
    {
      label: dict.methodology,
      href: `/${lang}#metodologia`,
      description: lang === 'es' ? 'Nuestro enfoque' : 'Our approach',
      icon: Target,
    },
    {
      label: dict.contact,
      href: `/${lang}#contacto`,
      description: lang === 'es' ? 'Hablemos' : 'Let’s talk',
      icon: Mail,
    },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[70] transition-all duration-500',
        scrolled
          ? 'bg-aegrix-bg/60 backdrop-blur-md border-b border-aegrix-border/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
          : 'bg-transparent py-5'
      )}
    >
      <div
        className={cn(
          'container-width flex items-center justify-between transition-all duration-500',
          scrolled ? 'h-12' : 'h-16'
        )}
      >
        <Link href={`/${lang}`} className="relative z-[80] flex items-center group" onClick={() => setMenuOpen(false)}>
          <div
            className={cn(
              'relative flex items-center justify-center transition-all duration-500',
              scrolled ? 'h-8 w-24 md:h-10 md:w-28' : 'h-10 w-28 md:h-16 md:w-36'
            )}
          >
            <Image
              src="/AEGRIX_hero_vector.svg"
              alt="AEGRIX"
              width={160}
              height={44}
              priority
              className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105 origin-center logo-dark-theme"
            />
            <Image
              src="/AEGRIX_vector.svg"
              alt="AEGRIX"
              width={160}
              height={44}
              priority
              className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-105 origin-center logo-light-theme"
            />
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-7 ml-10">
          <div className="flex items-center gap-5 mr-2">
            {navItems.map((item) => (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="font-manrope text-[11px] font-bold uppercase tracking-[0.16em] text-aegrix-muted hover:text-aegrix-text transition-all duration-300 relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-aegrix-cyan transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center p-1 h-10 rounded-full bg-aegrix-bg/50 backdrop-blur-md border border-aegrix-border shadow-sm">
              <Link
                href={pathname ? getLocalizedPath(pathname, lang === 'es' ? 'en' : 'es') : lang === 'es' ? '/en' : '/es'}
                className="flex items-center gap-2 px-3 h-full rounded-full hover:bg-aegrix-cyan/5 transition-all group"
                aria-label={languageSwitchLabel}
              >
                <div className="w-4 h-4 rounded-full overflow-hidden relative border border-white/10 shadow-sm transition-transform group-hover:scale-110">
                  <Image
                    src={lang === 'es' ? '/Flag_of_the_United_States.svg' : '/Flag_of_Spain.svg'}
                    alt={languageSwitchLabel}
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
              href={siteConfig.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-manrope text-[10px] font-extrabold uppercase tracking-[0.14em] text-aegrix-muted hover:text-aegrix-cyan transition-colors whitespace-nowrap"
              aria-label={lang === 'es' ? 'Abrir portal AEGRIX 360' : 'Open AEGRIX 360 portal'}
            >
              {lang === 'es' ? 'Portal 360' : '360 Portal'}
            </Link>

            <Link href={`/${lang}#diagnostico`} className="btn-nav">
              {dict.cta}
            </Link>
          </div>
        </div>

        <div className="xl:hidden flex items-center gap-2 sm:gap-3 relative z-[80]">
          <Link
            href={pathname ? getLocalizedPath(pathname, lang === 'es' ? 'en' : 'es') : lang === 'es' ? '/en' : '/es'}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-aegrix-bg/50 backdrop-blur-md border border-aegrix-border"
            aria-label={languageSwitchLabel}
          >
            <div className="w-4 h-4 rounded-full overflow-hidden relative">
              <Image
                src={lang === 'es' ? '/Flag_of_the_United_States.svg' : '/Flag_of_Spain.svg'}
                alt={languageSwitchLabel}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-[9px] font-black uppercase text-aegrix-muted">{lang === 'es' ? 'EN' : 'ES'}</span>
          </Link>

          <ThemeToggle />

          <button
            className="p-2 text-aegrix-text rounded-full hover:bg-aegrix-surface/70 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={lang === 'es' ? 'Abrir o cerrar menú' : 'Toggle menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div
          id="mobile-navigation-menu"
          aria-hidden={!menuOpen}
          className={cn(
            'fixed inset-0 z-[60] xl:hidden overflow-y-auto bg-aegrix-bg transition-all duration-500 ease-in-out',
            'pt-28 sm:pt-32 pb-[max(1.5rem,env(safe-area-inset-bottom))] px-5 sm:px-8',
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'
          )}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div className="absolute -right-24 top-28 h-64 w-64 rounded-full bg-aegrix-cyan/[0.05] blur-3xl" />
            <div className="absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-aegrix-cyan/[0.035] blur-3xl" />
          </div>

          <div className="relative mx-auto flex w-full max-w-xl flex-col">
            <div className="mb-4 sm:mb-5">
              <p className="font-manrope text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-aegrix-muted">
                {lang === 'es' ? 'Seguridad que impulsa tu negocio' : 'Security that drives your business'}
              </p>
            </div>

            <div className="flex flex-col">
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    tabIndex={menuOpen ? 0 : -1}
                    className={cn(
                      'group flex min-h-[62px] items-center gap-3.5 sm:gap-4 transition-all duration-300',
                      item.featured
                        ? 'my-2 rounded-2xl border border-aegrix-cyan/45 bg-aegrix-cyan/[0.045] px-4 py-3.5 shadow-[0_14px_40px_rgba(0,194,255,0.06)] hover:bg-aegrix-cyan/[0.08]'
                        : 'border-b border-aegrix-border/45 px-1 py-3 hover:bg-aegrix-surface/30'
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-colors',
                        item.featured
                          ? 'border-aegrix-cyan/25 bg-aegrix-cyan/[0.06] text-aegrix-cyan'
                          : 'border-transparent text-aegrix-muted group-hover:text-aegrix-cyan'
                      )}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          'block font-sora text-[19px] sm:text-[20px] font-bold leading-tight transition-colors',
                          item.featured ? 'text-aegrix-cyan' : 'text-aegrix-text group-hover:text-aegrix-cyan'
                        )}
                      >
                        {item.label}
                      </span>
                      <span className="mt-1 block font-manrope text-[12px] sm:text-[13px] leading-snug text-aegrix-muted">
                        {item.description}
                      </span>
                    </span>

                    <ChevronRight
                      size={20}
                      className={cn(
                        'shrink-0 transition-transform duration-300 group-hover:translate-x-1',
                        item.featured ? 'text-aegrix-cyan' : 'text-aegrix-muted'
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 border-t border-aegrix-border/60 pt-5">
              <Link
                href={siteConfig.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className="group flex items-center gap-3 rounded-2xl border border-aegrix-border/70 bg-aegrix-surface/35 px-4 py-3.5 transition-all hover:border-aegrix-cyan/35 hover:bg-aegrix-cyan/[0.04]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-aegrix-cyan/20 text-aegrix-cyan">
                  <LockKeyhole size={19} strokeWidth={1.8} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-sora text-[15px] font-bold text-aegrix-text">
                    {lang === 'es' ? 'Acceso clientes' : 'Client access'}
                  </span>
                  <span className="mt-0.5 block font-manrope text-[11px] text-aegrix-muted">
                    {lang === 'es' ? 'Portal AEGRIX 360' : 'AEGRIX 360 Portal'}
                  </span>
                </span>
                <ArrowRight size={20} className="text-aegrix-cyan transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href={`/${lang}#diagnostico`}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className="group mt-3 flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full bg-aegrix-cyan px-5 text-center font-manrope text-[13px] sm:text-[14px] font-extrabold uppercase tracking-[0.13em] text-[#04111d] shadow-[0_12px_35px_rgba(0,194,255,0.18)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,194,255,0.25)]"
              >
                <Activity size={20} strokeWidth={2.2} />
                <span>{dict.cta}</span>
                <ArrowRight size={19} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <div className="mt-5 flex items-center justify-center gap-3 pb-2 text-center">
                <span className="h-px w-8 bg-aegrix-cyan/55" />
                <span className="font-manrope text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.28em] text-aegrix-muted">
                  {lang === 'es' ? 'De la evaluación a la acción' : 'From assessment to action'}
                </span>
                <span className="h-px w-8 bg-aegrix-cyan/55" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
