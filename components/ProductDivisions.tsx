'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CheckCircle2, Cpu, Globe, Heart, Shield, type LucideIcon } from 'lucide-react';
import { productDivisions } from '@/lib/data';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import BrandMarquee from './BrandMarquee';

const icons: Record<string, LucideIcon> = {
  shield: Shield,
  web: Globe,
  'data-ai': Cpu,
  care: Heart,
};

const cardImages: Record<string, string> = {
  shield: '/images/aegrix-card-shield.avif',
  web: '/images/aegrix-card-software-web.avif',
  'data-ai': '/images/aegrix-card-data-ai.avif',
  care: '/images/aegrix-card-care.avif',
};

const englishDivisions: Record<string, { title: string; tagline: string; description: string; features: string[] }> = {
  shield: {
    title: 'AEGRIX Shield',
    tagline: 'Cybersecurity, risk and data protection.',
    description: 'We assess security posture, risks and controls to strengthen organizations and support evaluations against recognized frameworks when the engagement requires it.',
    features: ['Risk and control assessment', 'Identity and access management', 'Configuration and vulnerability review', 'NIST, ISO/IEC 27001/27002, HIPAA and GDPR according to scope'],
  },
  web: {
    title: 'AEGRIX Software & Web',
    tagline: 'Robust, secure software built to scale.',
    description: 'We design and build web and software solutions with architecture, security, performance, maintainability and clear delivery criteria.',
    features: ['Web applications and business software', 'Full-stack development', 'Landing pages and corporate websites', 'Architecture, performance and scalability'],
  },
  'data-ai': {
    title: 'AEGRIX Data & AI',
    tagline: 'Data, automation and applied AI.',
    description: 'We implement data, automation and artificial intelligence solutions around specific processes and use cases.',
    features: ['AI agents and assistants', 'Applied AI training', 'Process automation', 'Dashboards and analytics'],
  },
  care: {
    title: 'AEGRIX Care',
    tagline: 'Support, monitoring and continuous improvement.',
    description: 'Technical support through service plans with defined priorities, monitoring or observability when applicable, and agreed response times.',
    features: ['Technical support according to plan', 'Proactive monitoring according to scope', 'Updates and maintenance', 'Optimization and advisory support'],
  },
};

const ProductDivisions = () => {
  const { ref, inView } = useInView();
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const isEnglish = lang === 'en';

  return (
    <section id="servicios" ref={ref} className="section-padding bg-aegrix-bg-2 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,194,255,0.035),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(99,102,241,0.035),transparent_40%)] pointer-events-none" aria-hidden="true" />

      <div className="container-width relative z-10">
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-12 md:mb-20 transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
            {isEnglish ? 'AEGRIX capabilities' : 'Capacidades AEGRIX'}
          </span>
          <h2 className="heading-lg mt-3 mb-8 text-aegrix-text">
            {isEnglish ? 'Elite engineering across' : 'Ingeniería de élite aplicada a'}
            <br />
            <span className="text-aegrix-cyan">
              {isEnglish ? 'security, software, data and AI.' : 'seguridad, software, datos e IA.'}
            </span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            {isEnglish
              ? 'We combine the capabilities each project needs. Scope, deliverables, responsibilities and success criteria are defined before implementation.'
              : 'Combinamos las capacidades que necesita cada proyecto. El alcance, los entregables, las responsabilidades y los criterios de éxito se definen antes de implementar.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {productDivisions.map((division, index) => {
            const Icon = icons[division.id];
            const localizedDivision = isEnglish ? englishDivisions[division.id] : division;

            return (
              <article
                key={division.id}
                className={cn(
                  'group relative p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-4xl bg-aegrix-surface border border-aegrix-border transition-all duration-500 flex flex-col overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-aegrix-cyan/25',
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                )}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <Image
                    src={cardImages[division.id]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center opacity-[0.16] dark:opacity-[0.12] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-aegrix-surface/70 via-aegrix-surface/92 to-aegrix-surface" />
                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-aegrix-cyan/40 to-transparent opacity-60" />
                  <div className="absolute inset-0 grid-bg opacity-[0.018]" />
                </div>

                <div className="relative z-10 flex flex-col h-full grow">
                  <div className="flex items-start justify-between gap-4 mb-7">
                    <div className="w-13 h-13 rounded-xl bg-aegrix-bg-2/80 border border-aegrix-border text-aegrix-cyan flex items-center justify-center shadow-sm">
                      <Icon size={26} aria-hidden="true" />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-aegrix-text/25">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-2xl font-sora font-bold text-aegrix-text mb-2 tracking-tight">{localizedDivision.title}</h3>
                  <p className="text-xs font-semibold text-aegrix-cyan uppercase tracking-[0.16em] mb-4">{localizedDivision.tagline}</p>
                  <p className="body-md text-aegrix-muted leading-relaxed mb-7">{localizedDivision.description}</p>

                  <ul className="grow space-y-3">
                    {localizedDivision.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-aegrix-text/80">
                        <CheckCircle2 size={16} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 md:mt-14 flex justify-center">
          <Link
            href={`/${lang}#contacto`}
            className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-text"
          >
            {isEnglish ? 'Talk about a project' : 'Hablar sobre un proyecto'}
          </Link>
        </div>

        <div className="mt-12 md:mt-20">
          <p className="text-center text-aegrix-muted font-medium mb-8 md:mb-12">
            {isEnglish
              ? 'Technologies and ecosystems we work with according to project requirements.'
              : 'Tecnologías y ecosistemas con los que trabajamos según los requisitos del proyecto.'}
          </p>
          <BrandMarquee />
        </div>
      </div>
    </section>
  );
};

export default ProductDivisions;
