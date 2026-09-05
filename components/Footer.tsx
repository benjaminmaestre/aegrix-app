'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';
import { openCookieSettings } from '@/lib/cookie-consent';
import ObfuscatedEmail from './ObfuscatedEmail';

const Footer = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const currentYear = new Date().getFullYear();
  const isEnglish = lang === 'en';

  const serviceLinks = [
    { name: 'AEGRIX Shield · Cybersecurity', href: `/${lang}#servicios` },
    { name: 'AEGRIX Software & Web', href: `/${lang}#servicios` },
    { name: 'AEGRIX Data & AI', href: `/${lang}#servicios` },
    { name: 'AEGRIX Care', href: `/${lang}#servicios` },
    { name: 'AEGRIX 360 · Assessment & Assurance', href: `/${lang}/aegrix-360` },
  ];

  const industryLinks = [
    { name: isEnglish ? 'Health' : 'Salud', href: `/${lang}/health-premium` },
    { name: 'Real Estate', href: `/${lang}/real-estate` },
    { name: isEnglish ? 'Construction & Services' : 'Construcción & Servicios', href: `/${lang}/construction-tech` },
    { name: isEnglish ? 'Legal & Professional' : 'Legal & Profesional', href: `/${lang}/legal-tech` },
    { name: isEnglish ? 'Logistics & Distribution' : 'Logística & Distribución', href: isEnglish ? '/en/industrial-logistics' : '/es/industrial-logistica' },
    { name: isEnglish ? 'Corporate Training' : 'Capacitación corporativa', href: `/${lang}/education-corporate` },
  ];

  const companyLinks = [
    { name: isEnglish ? 'About' : 'Nosotros', href: isEnglish ? '/en/about' : '/es/nosotros' },
    { name: isEnglish ? 'How we work' : 'Cómo trabajamos', href: `/${lang}#metodologia` },
    { name: 'AEGRIX 360', href: `/${lang}/aegrix-360` },
    { name: isEnglish ? 'Contact' : 'Contacto', href: `/${lang}#contacto` },
  ];

  return (
    <footer className="bg-aegrix-bg border-t border-aegrix-border px-4 pt-10 pb-28 sm:px-6 lg:px-16 lg:pt-12 lg:pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-8 lg:gap-12 mb-8 lg:mb-10">
          <div className="col-span-2 lg:col-span-4">
            <Link href={`/${lang}`} className="inline-block group">
              <Image
                src="/AEGRIX_hero_vector.svg"
                alt="AEGRIX"
                width={130}
                height={35}
                className="w-32 h-auto object-contain hidden dark:block brightness-110"
              />
              <Image
                src="/AEGRIX_vector.svg"
                alt="AEGRIX"
                width={130}
                height={35}
                className="w-32 h-auto object-contain dark:hidden"
              />
            </Link>

            <p className="mt-4 text-sm text-aegrix-muted leading-relaxed max-w-sm">
              {isEnglish
                ? 'Elite technology engineering across software, cybersecurity, data and AI, with AEGRIX 360 for assessment, readiness and assurance.'
                : 'Ingeniería tecnológica de élite en software, ciberseguridad, datos e IA, con AEGRIX 360 para assessment, readiness y assurance.'}
            </p>

            <div className="flex items-center gap-3 mt-5">
              <a href="https://www.linkedin.com/company/aegrix" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn de AEGRIX">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://x.com/aegrix" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="AEGRIX en X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://instagram.com/aegrix" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram de AEGRIX">
                <Instagram size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 lg:col-span-8 lg:gap-8">
            <FooterColumn title={isEnglish ? 'Solutions' : 'Soluciones'} links={serviceLinks} />
            <FooterColumn title={isEnglish ? 'Industries' : 'Industrias'} links={industryLinks} />
            <FooterColumn title={isEnglish ? 'Company' : 'Empresa'} links={companyLinks} />

            <div className="col-span-1 md:col-span-1 min-w-0">
              <p className="text-xs font-bold text-aegrix-text uppercase tracking-[0.18em] mb-5">
                {isEnglish ? 'Contact' : 'Contacto'}
              </p>
              <div className="space-y-3 text-sm text-aegrix-muted min-w-0">
                <p className="text-aegrix-text font-semibold">Colombia</p>
                <ObfuscatedEmail email="contacto@aegrix.com.co" className="block break-all hover:text-aegrix-cyan transition-colors" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-aegrix-cyan transition-colors">
                  +57 310 737 9163
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-aegrix-border flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-xs text-aegrix-muted/90 text-center lg:text-left">
            © {currentYear} AEGRIX. {isEnglish ? 'All rights reserved.' : 'Todos los derechos reservados.'}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-semibold text-aegrix-muted">
            <Link href={isEnglish ? '/en/privacy' : '/es/privacidad'} className="hover:text-aegrix-text transition-colors">
              {isEnglish ? 'Privacy' : 'Privacidad'}
            </Link>
            <Link href={isEnglish ? '/en/terms' : '/es/terminos'} className="hover:text-aegrix-text transition-colors">
              {isEnglish ? 'Terms' : 'Términos'}
            </Link>
            <Link href={`/${lang}/cookies`} className="hover:text-aegrix-text transition-colors">Cookies</Link>
            <button type="button" onClick={openCookieSettings} className="hover:text-aegrix-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60 rounded-sm">
              {isEnglish ? 'Cookie preferences' : 'Preferencias de cookies'}
            </button>
            <Link href={isEnglish ? '/en/security' : '/es/seguridad'} className="hover:text-aegrix-text transition-colors">
              {isEnglish ? 'Security' : 'Seguridad'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: Array<{ name: string; href: string }>;
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <nav aria-label={title}>
      <p className="text-xs font-bold text-aegrix-text uppercase tracking-[0.18em] mb-5">{title}</p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${link.name}-${link.href}`}>
            <Link href={link.href} className="text-sm text-aegrix-muted hover:text-aegrix-cyan transition-colors inline-flex items-center gap-1 group">
              {link.name}
              <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Footer;
