'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL } from '@/lib/data';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ObfuscatedEmail from './ObfuscatedEmail';

const ContactSection = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';

  // State variables for form fields
  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  
  // Submission status states
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          company,
          email,
          message,
          lang,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setName('');
        setCompany('');
        setEmail('');
        setMessage('');
        
        // Reset checkbox elements manually
        const privacyCheckbox = document.getElementById('privacy-consent') as HTMLInputElement;
        const termsCheckbox = document.getElementById('terms-consent') as HTMLInputElement;
        if (privacyCheckbox) privacyCheckbox.checked = false;
        if (termsCheckbox) termsCheckbox.checked = false;
      } else {
        setSubmitStatus('error');
        setErrorMessage(
          data.error || 
          (lang === 'es' ? 'Hubo un error al enviar el mensaje.' : 'There was an error sending the message.')
        );
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus('error');
      setErrorMessage(
        lang === 'es' ? 'Error de red. Inténtalo de nuevo.' : 'Network error. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Info & Context */}
          <div>
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-aegrix-text mb-8 tracking-tight">
              ¿Listo para dar el <br />
              <span className="text-aegrix-cyan">siguiente paso?</span>
            </h2>
            <p className="text-lg text-aegrix-muted mb-12 max-w-md">
              Estamos aquí para resolver tus dudas y ayudarte a construir la infraestructura digital que tu empresa merece.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-aegrix-surface border border-aegrix-border flex items-center justify-center text-aegrix-cyan group-hover:bg-aegrix-cyan group-hover:text-aegrix-bg transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-aegrix-muted uppercase tracking-widest mb-1">Email Corporativo</div>
                  <div className="text-lg font-semibold text-aegrix-text"><ObfuscatedEmail email="contacto@aegrix.com.co" /></div>
                </div>
              </div>

              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-aegrix-surface border border-aegrix-border flex items-center justify-center text-aegrix-cyan group-hover:bg-aegrix-cyan group-hover:text-aegrix-bg transition-all duration-500">
                  <WhatsAppIcon size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-aegrix-muted uppercase tracking-widest mb-1">Respuesta Inmediata</div>
                  <div className="text-lg font-semibold text-aegrix-text">+57 310 737 9163</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Premium Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[32px] bg-aegrix-surface border border-aegrix-border relative overflow-hidden group shadow-xl"
          >
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-aegrix-cyan/10 border border-aegrix-cyan/20 flex items-center justify-center text-aegrix-cyan animate-pulse">
                  <ShieldCheck size={36} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-sora font-bold text-aegrix-text">
                    {lang === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                  </h3>
                  <p className="text-sm text-aegrix-muted max-w-sm leading-relaxed">
                    {lang === 'es' 
                      ? 'Hemos recibido tu solicitud correctamente. Un ingeniero de AEGRIX se pondrá en contacto contigo en las próximas horas.' 
                      : 'We have received your request successfully. An AEGRIX engineer will contact you within the next few hours.'}
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-secondary px-6 py-2.5 text-xs font-semibold uppercase tracking-widest mt-4"
                >
                  {lang === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">Nombre</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej. Juan Pérez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-aegrix-bg-2 border border-aegrix-border rounded-xl px-4 py-4 text-aegrix-text focus:outline-none focus:border-aegrix-cyan/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">Empresa</label>
                    <input 
                      type="text" 
                      placeholder="Nombre de tu empresa"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-aegrix-bg-2 border border-aegrix-border rounded-xl px-4 py-4 text-aegrix-text focus:outline-none focus:border-aegrix-cyan/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">Correo Electrónico</label>
                  <input 
                    type="email" 
                    required
                    placeholder="juan@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-aegrix-bg-2 border border-aegrix-border rounded-xl px-4 py-4 text-aegrix-text focus:outline-none focus:border-aegrix-cyan/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">Mensaje</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="¿En qué podemos ayudarte?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-aegrix-bg-2 border border-aegrix-border rounded-xl px-4 py-4 text-aegrix-text focus:outline-none focus:border-aegrix-cyan/50 transition-all resize-none"
                  />
                </div>

                <div className="space-y-3 mt-6 mb-2">
                  <div className="flex items-start gap-3">
                    <div className="pt-1">
                      <input 
                        type="checkbox" 
                        id="privacy-consent" 
                        required 
                        className="w-4 h-4 rounded border-aegrix-border bg-aegrix-bg-2 text-aegrix-cyan focus:ring-aegrix-cyan/30"
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
                        className="w-4 h-4 rounded border-aegrix-border bg-aegrix-bg-2 text-aegrix-cyan focus:ring-aegrix-cyan/30"
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
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-3 group mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      {lang === 'es' ? 'Enviando...' : 'Sending...'}
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      {lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="mt-6 flex items-start gap-2 p-4 rounded-xl bg-aegrix-bg-2 border border-aegrix-border">
                  <ShieldCheck size={14} className="text-aegrix-cyan shrink-0 mt-0.5" />
                  <p className="text-[10px] text-aegrix-muted leading-relaxed italic">
                    {lang === 'es' ? (
                      <>
                        Al enviar este formulario, declaro que la información suministrada es veraz, que cuento con autorización para compartirla y que acepto el tratamiento de mis datos personales conforme a la Política de Privacidad de AEGRIX. Entiendo que AEGRIX no será responsable por consecuencias derivadas de información falsa o incompleta.
                      </>
                    ) : (
                      <>
                        By sending this form, I declare that the information provided is true, that I have authorization to share it, and that I accept the treatment of my personal data in accordance with AEGRIX&apos;s Privacy Policy. I understand that AEGRIX will not be responsible for consequences derived from false or incomplete information.
                      </>
                    )}
                  </p>
                </div>
              </form>
            )}

            {/* Decorative background for the form */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-aegrix-cyan/2 blur-[60px] rounded-full pointer-events-none group-hover:bg-aegrix-cyan/4 transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
