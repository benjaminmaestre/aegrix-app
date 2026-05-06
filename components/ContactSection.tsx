'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Send, ShieldCheck } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const ContactSection = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  return (
    <section id="contacto" className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Info & Context */}
          <div>
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-white mb-8 tracking-tight">
              ¿Listo para dar el <br />
              <span className="text-aegrix-cyan">siguiente paso?</span>
            </h2>
            <p className="text-lg text-aegrix-muted mb-12 max-w-md">
              Estamos aquí para resolver tus dudas y ayudarte a construir la infraestructura digital que tu empresa merece.
            </p>

            <div className="space-y-8">
              <a 
                href="mailto:contacto@aegrix.co" 
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/2 border border-white/5 flex items-center justify-center text-aegrix-cyan group-hover:bg-aegrix-cyan group-hover:text-black transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-aegrix-muted uppercase tracking-widest mb-1">Email Corporativo</div>
                  <div className="text-lg font-semibold text-white">contacto@aegrix.co</div>
                </div>
              </a>

              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/2 border border-white/5 flex items-center justify-center text-aegrix-cyan group-hover:bg-aegrix-cyan group-hover:text-black transition-all duration-500">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-aegrix-muted uppercase tracking-widest mb-1">Respuesta Inmediata</div>
                  <div className="text-lg font-semibold text-white">WhatsApp Directo</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[32px] bg-white/2 border border-white/5 relative overflow-hidden group"
          >
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-aegrix-cyan/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Nombre de tu empresa"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-aegrix-cyan/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  placeholder="juan@empresa.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-aegrix-cyan/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-aegrix-cyan/50 transition-all resize-none"
                />
              </div>

              <div className="space-y-3 mt-6 mb-2">
                <div className="flex items-start gap-3">
                  <div className="pt-1">
                    <input 
                      type="checkbox" 
                      id="privacy-consent" 
                      required 
                      className="w-4 h-4 rounded border-white/10 bg-white/5 text-aegrix-cyan focus:ring-aegrix-cyan/30"
                    />
                  </div>
                  <label htmlFor="privacy-consent" className="text-[11px] text-aegrix-muted leading-relaxed cursor-pointer">
                    {lang === 'es' ? (
                      <>
                        He leído y acepto la <Link href={`/${lang}/privacidad`} className="text-aegrix-cyan hover:underline">Política de Privacidad</Link>.
                      </>
                    ) : (
                      <>
                        I have read and accept the <Link href={`/${lang}/privacidad`} className="text-aegrix-cyan hover:underline">Privacy Policy</Link>.
                      </>
                    )}
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <div className="pt-1">
                    <input 
                      type="checkbox" 
                      id="terms-consent" 
                      required 
                      className="w-4 h-4 rounded border-white/10 bg-white/5 text-aegrix-cyan focus:ring-aegrix-cyan/30"
                    />
                  </div>
                  <label htmlFor="terms-consent" className="text-[11px] text-aegrix-muted leading-relaxed cursor-pointer">
                    {lang === 'es' ? (
                      <>
                        He leído y acepto los <Link href={`/${lang}/terminos`} className="text-aegrix-cyan hover:underline">Términos y Condiciones de Servicio</Link>.
                      </>
                    ) : (
                      <>
                        I have read and accept the <Link href={`/${lang}/terminos`} className="text-aegrix-cyan hover:underline">Terms and Conditions of Service</Link>.
                      </>
                    )}
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-3 group mt-4"
              >
                {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <div className="mt-6 flex items-start gap-2 p-4 rounded-xl bg-white/2 border border-white/5">
                <ShieldCheck size={14} className="text-aegrix-cyan shrink-0 mt-0.5" />
                <p className="text-[10px] text-aegrix-muted leading-relaxed italic">
                  {lang === 'es' ? (
                    <>
                      Al enviar este formulario, declaro que la información suministrada es veraz, que cuento con autorización para compartirla y que acepto el tratamiento de mis datos personales conforme a la Política de Privacidad de AEGRIX. Entiendo que AEGRIX no será responsable por consecuencias derivadas de información falsa o incompleta.
                    </>
                  ) : (
                    <>
                      By sending this form, I declare that the information provided is true, that I have authorization to share it, and that I accept the treatment of my personal data in accordance with AEGRIX's Privacy Policy. I understand that AEGRIX will not be responsible for consequences derived from false or incomplete information.
                    </>
                  )}
                </p>
              </div>
            </form>

            {/* Decorative background for the form */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-aegrix-cyan/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-aegrix-cyan/10 transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
