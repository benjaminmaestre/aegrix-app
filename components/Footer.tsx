'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-10">
          <div className="lg:col-span-4">
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

            <p className="mt-5 text-sm text-aegrix-muted leading-relaxed max-w-sm">
              {isEnglish
                ? 'Elite technology engineering across software, cybersecurity, data and AI, with AEGRIX 360 for assessment, readiness and assurance.'
                : 'Ingeniería tecnológica de élite en software, ciberseguridad, datos e IA, con AEGRIX 360 para assessment, readiness y assurance.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:col-span-8">
            <FooterColumn title={isEnglish ? 'Solutions' : 'Soluciones'} links={serviceLinks} />
            <FooterColumn title={isEnglish ? 'Industries' : 'Industrias'} links={industryLinks} />
            <FooterColumn title={isEnglish ? 'Company' : 'Empresa'} links={companyLinks} />

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-xs font-bold text-aegrix-text uppercase tracking-[0.18em] mb-5">
                {isEnglish ? 'Contact' : 'Contacto'}
              </h4>
              <div className="space-y-3 text-sm text-aegrix-muted">
                <p className="text-aegrix-text font-semibold">Colombia</p>
                <ObfuscatedEmail email="contacto@aegrix.com.co" className="block hover:text-aegrix-cyan transition-colors" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-aegrix-cyan transition-colors">
                  +57 310 737 9163
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-aegrix-border flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-xs text-aegrix-muted/70 text-center lg:text-left">
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
    <div>
      <h4 className="text-xs font-bold text-aegrix-text uppercase tracking-[0.18em] mb-5">{title}</h4>
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
    </div>
  );
}

export default Footer;
