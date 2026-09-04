'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL } from '@/lib/data';
import ObfuscatedEmail from './ObfuscatedEmail';

const FinalCTA = () => {
  const { ref, inView } = useInView();
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const isEnglish = lang === 'en';

  const qualities = isEnglish
    ? [
        { title: 'Security', text: 'Integrated from design' },
        { title: 'Control', text: 'Visibility and traceability' },
        { title: 'Scale', text: 'Architecture ready to evolve' },
      ]
    : [
        { title: 'Seguridad', text: 'Integrada desde el diseño' },
        { title: 'Control', text: 'Visibilidad y trazabilidad' },
        { title: 'Escala', text: 'Arquitectura preparada para evolucionar' },
      ];

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-aegrix-cyan/5 blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="container-width relative z-10">
        <div
          className={cn(
            'max-w-4xl mx-auto text-center transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <div className="label-tag mb-8 border-aegrix-cyan/20">
            {isEnglish ? 'Let’s talk' : 'Conversemos'}
          </div>
          <h2 className="heading-lg mb-8 text-aegrix-text">
            {isEnglish ? 'Build a more secure, measurable' : 'Construye una empresa más segura, medible'} <br />
            <span className="text-aegrix-cyan">{isEnglish ? 'and intelligent digital operation.' : 'e inteligente en lo digital.'}</span>
          </h2>
          <p className="body-lg mb-8 md:mb-12 text-aegrix-muted max-w-2xl mx-auto">
            {isEnglish
              ? 'You do not need to transform everything at once. Start with the highest-priority need, define the scope, and evolve the digital infrastructure in controlled phases.'
              : 'No necesitas transformar todo de una vez. Puedes empezar por la necesidad de mayor prioridad, definir el alcance y evolucionar la infraestructura digital por fases controladas.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              {isEnglish ? 'Request AEGRIX diagnostic' : 'Solicitar diagnóstico AEGRIX'}
            </Link>
            <ObfuscatedEmail
              email="contacto@aegrix.com.co"
              label={isEnglish ? 'Write by email' : 'Escribir por correo'}
              className="btn-secondary w-full sm:w-auto text-center"
            />
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 text-aegrix-text/45">
            {qualities.map((quality, index) => (
              <div
                key={quality.title}
                className={cn(
                  'flex flex-col items-center gap-1.5 rounded-xl sm:rounded-none w-full p-4 sm:px-6 sm:py-0',
                  index > 0 ? 'sm:border-l sm:border-aegrix-border' : ''
                )}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-aegrix-text/60">{quality.title}</span>
                <span className="text-xs text-aegrix-muted">{quality.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
