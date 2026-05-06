'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Send } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/data';

const ContactSection = () => {
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

              <button 
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-3 group"
              >
                Enviar Mensaje
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
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
