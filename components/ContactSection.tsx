'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, ShieldCheck } from 'lucide-react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { WhatsAppIcon } from './WhatsAppIcon';
import ObfuscatedEmail from './ObfuscatedEmail';
import { WHATSAPP_URL } from '@/lib/data';

const MAX_MESSAGE_LENGTH = 4000;

const ContactSection = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';

  const [name, setName] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [privacyConsent, setPrivacyConsent] = React.useState(false);
  const [marketingConsent, setMarketingConsent] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [reference, setReference] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    setReference('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          company,
          email,
          message,
          website,
          privacyConsent,
          marketingConsent,
          lang,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
        reference?: string;
      };

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setReference(data.reference || '');
        setName('');
        setCompany('');
        setEmail('');
        setMessage('');
        setWebsite('');
        setPrivacyConsent(false);
        setMarketingConsent(false);
      } else {
        setSubmitStatus('error');
        setErrorMessage(
          data.error ||
            (lang === 'es'
              ? 'No pudimos enviar la solicitud. Puedes intentarlo de nuevo o usar WhatsApp.'
              : 'We could not send the request. Please try again or use WhatsApp.')
        );
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage(
        lang === 'es'
          ? 'No pudimos conectar con el formulario. Inténtalo de nuevo o contáctanos por WhatsApp.'
          : 'We could not connect to the form. Please try again or contact us on WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-sora font-extrabold text-aegrix-text mb-8 tracking-tight">
              {lang === 'es' ? 'Cuéntanos qué necesitas' : 'Tell us what you need'}
              <br />
              <span className="text-aegrix-cyan">
                {lang === 'es' ? 'y revisamos el siguiente paso.' : 'and we will review the next step.'}
              </span>
            </h2>
            <p className="text-lg text-aegrix-muted mb-8 md:mb-12 max-w-md">
              {lang === 'es'
                ? 'Describe brevemente tu necesidad. Revisaremos la solicitud y te responderemos por el canal que indiques.'
                : 'Briefly describe what you need. We will review your request and reply through the channel you provide.'}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-aegrix-surface border border-aegrix-border flex items-center justify-center text-aegrix-cyan">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs font-bold text-aegrix-muted uppercase tracking-widest mb-1">
                    {lang === 'es' ? 'Correo corporativo' : 'Corporate email'}
                  </div>
                  <div className="text-lg font-semibold text-aegrix-text">
                    <ObfuscatedEmail email="contacto@aegrix.com.co" />
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-aegrix-surface border border-aegrix-border flex items-center justify-center text-aegrix-cyan">
                  <WhatsAppIcon size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-aegrix-muted uppercase tracking-widest mb-1">WhatsApp</div>
                  <div className="text-lg font-semibold text-aegrix-text">+57 310 737 9163</div>
                </div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-8 md:p-10 rounded-4xl bg-aegrix-surface border border-aegrix-border relative overflow-hidden shadow-xl"
          >
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-6 relative z-10" role="status">
                <div className="w-16 h-16 rounded-full bg-aegrix-cyan/10 border border-aegrix-cyan/20 flex items-center justify-center text-aegrix-cyan">
                  <ShieldCheck size={36} aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-sora font-bold text-aegrix-text">
                    {lang === 'es' ? 'Solicitud recibida' : 'Request received'}
                  </h3>
                  <p className="text-sm text-aegrix-muted max-w-sm leading-relaxed">
                    {lang === 'es'
                      ? 'La solicitud fue enviada correctamente. Conserva la referencia si necesitas hacer seguimiento.'
                      : 'Your request was sent successfully. Keep the reference if you need to follow up.'}
                  </p>
                  {reference && (
                    <p className="text-sm font-semibold text-aegrix-text">
                      {lang === 'es' ? 'Referencia' : 'Reference'}: {reference}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitStatus('idle')}
                  className="btn-secondary px-6 py-2.5 text-xs font-semibold uppercase tracking-widest mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                >
                  {lang === 'es' ? 'Enviar otra solicitud' : 'Send another request'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate={false}>
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm" role="alert">
                    <p>{errorMessage}</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 font-semibold underline">
                      {lang === 'es' ? 'Abrir WhatsApp' : 'Open WhatsApp'}
                    </a>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">
                      {lang === 'es' ? 'Nombre *' : 'Name *'}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      placeholder={lang === 'es' ? 'Ej. Juan Pérez' : 'e.g. Jane Smith'}
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="w-full bg-aegrix-bg-2 border border-aegrix-border rounded-xl px-4 py-4 text-aegrix-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">
                      {lang === 'es' ? 'Empresa' : 'Company'}
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      maxLength={160}
                      autoComplete="organization"
                      placeholder={lang === 'es' ? 'Nombre de tu empresa' : 'Company name'}
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      className="w-full bg-aegrix-bg-2 border border-aegrix-border rounded-xl px-4 py-4 text-aegrix-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">
                    {lang === 'es' ? 'Correo electrónico *' : 'Email *'}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    inputMode="email"
                    placeholder="nombre@empresa.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full bg-aegrix-bg-2 border border-aegrix-border rounded-xl px-4 py-4 text-aegrix-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/50"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <label htmlFor="contact-message" className="text-xs font-bold text-aegrix-muted uppercase tracking-widest ml-1">
                      {lang === 'es' ? 'Mensaje *' : 'Message *'}
                    </label>
                    <span className="text-[11px] text-aegrix-muted" aria-live="polite">
                      {message.length}/{MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    maxLength={MAX_MESSAGE_LENGTH}
                    placeholder={lang === 'es' ? '¿En qué podemos ayudarte?' : 'How can we help?'}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="w-full bg-aegrix-bg-2 border border-aegrix-border rounded-xl px-4 py-4 text-aegrix-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/50 resize-y"
                  />
                </div>

                <div className="absolute -left-[10000px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </div>

                <fieldset className="space-y-4 mt-6">
                  <legend className="sr-only">{lang === 'es' ? 'Autorizaciones' : 'Consents'}</legend>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy-consent"
                      required
                      checked={privacyConsent}
                      onChange={(event) => setPrivacyConsent(event.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-aegrix-border bg-aegrix-bg-2 text-aegrix-cyan focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                    />
                    <label htmlFor="privacy-consent" className="text-xs sm:text-sm text-aegrix-muted leading-relaxed cursor-pointer">
                      {lang === 'es' ? (
                        <>
                          Autorizo el tratamiento de mis datos necesario para responder esta solicitud, conforme a la{' '}
                          <Link href="/es/privacidad" className="text-aegrix-cyan hover:underline">Política de Privacidad</Link>. *
                        </>
                      ) : (
                        <>
                          I authorize the processing of my data as necessary to respond to this request, according to the{' '}
                          <Link href="/en/privacy" className="text-aegrix-cyan hover:underline">Privacy Policy</Link>. *
                        </>
                      )}
                    </label>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="marketing-consent"
                      checked={marketingConsent}
                      onChange={(event) => setMarketingConsent(event.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-aegrix-border bg-aegrix-bg-2 text-aegrix-cyan focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                    />
                    <label htmlFor="marketing-consent" className="text-xs sm:text-sm text-aegrix-muted leading-relaxed cursor-pointer">
                      {lang === 'es'
                        ? 'Acepto recibir comunicaciones comerciales de AEGRIX. Esta autorización es opcional y puede revocarse.'
                        : 'I agree to receive marketing communications from AEGRIX. This consent is optional and may be withdrawn.'}
                    </label>
                  </div>
                </fieldset>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full min-h-12 flex items-center justify-center gap-3 group mt-4 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-text"
                >
                  {isSubmitting ? (
                    <>
                      {lang === 'es' ? 'Enviando...' : 'Sending...'}
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      {lang === 'es' ? 'Enviar solicitud' : 'Send request'}
                      <Send size={18} aria-hidden="true" />
                    </>
                  )}
                </button>

                <div className="mt-6 flex items-start gap-2 p-4 rounded-xl bg-aegrix-bg-2 border border-aegrix-border">
                  <ShieldCheck size={15} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-aegrix-muted leading-relaxed">
                    {lang === 'es'
                      ? 'No incluyas contraseñas, credenciales, historias clínicas ni otra información sensible en este formulario.'
                      : 'Do not include passwords, credentials, medical records, or other sensitive information in this form.'}
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
