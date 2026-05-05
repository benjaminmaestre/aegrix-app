import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Linkedin, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { navItems } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-[#030508] border-t border-aegrix-border pt-24 pb-12">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Col 1 — Marca */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="w-[140px] h-[38px] flex items-center">
                {/* LOGO PLACEHOLDER — reemplazar con <Image> cuando se añada /public/logo-aegrix.svg */}
                <span className="text-2xl font-sora font-extrabold tracking-tighter text-white">
                  AEG<span className="text-aegrix-cyan italic">RIX</span>
                </span>
              </div>
            </Link>
            <p className="font-manrope text-sm text-aegrix-muted leading-relaxed max-w-xs">
              Seguridad, web y datos inteligentes para empresas modernas. Protegemos tu información y potenciamos tu crecimiento.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-lg bg-aegrix-surface border border-aegrix-border text-aegrix-muted hover:text-aegrix-cyan hover:border-aegrix-cyan transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="https://wa.me/573107379163" target="_blank" className="p-2 rounded-lg bg-aegrix-surface border border-aegrix-border text-aegrix-muted hover:text-aegrix-cyan hover:border-aegrix-cyan transition-all">
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          {/* Col 2 — Servicios */}
          <div>
            <h4 className="label-tag mb-6 bg-transparent border-none p-0">Servicios</h4>
            <ul className="space-y-4">
              {['Ciberseguridad', 'Desarrollo Web', 'Analítica de Datos', 'IA Empresarial', 'Diagnóstico 360', 'Mantenimiento Care'].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-manrope text-sm text-aegrix-muted hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Empresa */}
          <div>
            <h4 className="label-tag mb-6 bg-transparent border-none p-0">Empresa</h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-manrope text-sm text-aegrix-muted hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#" className="font-manrope text-sm text-aegrix-muted hover:text-white transition-colors">
                  Trabaja con nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <h4 className="label-tag mb-6 bg-transparent border-none p-0">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-aegrix-muted">
                <Phone size={18} className="text-aegrix-cyan" />
                <span>+57 310 737 9163</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-aegrix-muted">
                <Mail size={18} className="text-aegrix-cyan" />
                <span>benjaminmaestre@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-aegrix-muted">
                <MapPin size={18} className="text-aegrix-cyan" />
                <span>Medellín, Colombia</span>
              </li>
              <li className="pt-4">
                <span className="text-xs font-medium text-aegrix-cyan/60 uppercase tracking-widest italic">
                  Empresas en Colombia y Latinoamérica
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-aegrix-border gap-6">
          <p className="font-manrope text-xs text-aegrix-muted">
            © 2026 AEGRIX. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="font-manrope text-xs text-aegrix-muted hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="font-manrope text-xs text-aegrix-muted hover:text-white transition-colors">
              Términos de servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
