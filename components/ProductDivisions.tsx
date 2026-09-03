'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CheckCircle2, Cpu, Globe, Heart, Shield, type LucideIcon } from 'lucide-react';
import { productDivisions, WHATSAPP_URL } from '@/lib/data';
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
    tagline: 'Cybersecurity and data protection.',
    description: 'We assess risks and controls to propose security improvements aligned with each organization’s scope and context.',
    features: [
      'Risk and control assessment',
      'Identity and access management',
      'Configuration and vulnerability review',
      'Privacy and reference frameworks according to scope',
    ],
  },
  web: {
    title: 'AEGRIX Software & Web',
    tagline: 'Software and web experiences for specific goals.',
    description: 'We design and build web and software solutions with a defined technical scope, performance criteria, and deliverables.',
    features: [
      'Web applications and business software',
      'Full-stack development',
      'Landing pages and corporate websites',
      'Architecture and technical performance',
    ],
  },
  'data-ai': {
    title: 'AEGRIX Data & AI',
    tagline: 'Data, automation and applied AI.',
    description: 'We implement data, automation, and artificial intelligence solutions around specific processes and use cases.',
    features: [
      'AI agents and assistants',
      'Applied AI training',
      'Process automation',
      'Dashboards and analytics',
    ],
  },
  care: {
    title: 'AEGRIX Care',
    tagline: 'Support and continuous improvement.',
    description: 'Technical support under service plans with priorities and response times agreed in advance.',
    features: [
      'Technical support according to plan',
      'Periodic optimization',
      'Updates and maintenance',
      'Advisory support',
    ],
  },
};

const ProductDivisions = () => {
  const { ref, inView } = useInView();
  const params = useParams();
  const lang = (params?.lang as string) || 'es';

  return (
    <section id="servicios" ref={ref} className="section-padding bg-aegrix-bg-2">
      <div className="container-width">
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-12 md:mb-20 transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <h2 className="heading-lg mb-8 text-aegrix-text">
            {lang === 'en' ? 'Digital services with' : 'Servicios digitales con'}
            <br />
            <span className="text-aegrix-cyan">
              {lang === 'en' ? 'defined scopes and deliverables.' : 'alcances y entregables definidos.'}
            </span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            {lang === 'en'
              ? 'We combine cybersecurity, software, data, and AI according to each project’s needs. Every proposal defines what will be done, what will be delivered, and the conditions the outcome depends on.'
              : 'Combinamos ciberseguridad, software, datos e IA según la necesidad del proyecto. Cada propuesta define qué se hará, qué se entregará y de qué depende el resultado.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {productDivisions.map((division, index) => {
            const Icon = icons[division.id];
            const localizedDivision = lang === 'en' ? englishDivisions[division.id] : division;

            return (
              <article
                key={division.id}
                className={cn(
                  'relative p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl bg-aegrix-surface border border-aegrix-border transition-all duration-500 flex flex-col overflow-hidden',
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
                    className="object-cover object-center opacity-[0.07] dark:opacity-[0.06]"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-aegrix-surface/80 via-aegrix-surface/95 to-aegrix-surface" />
                </div>

                <div className="relative z-10 flex flex-col h-full grow">
                  <div className="w-12 h-12 rounded-xl bg-aegrix-bg-2 border border-aegrix-border text-aegrix-cyan flex items-center justify-center mb-6">
                    <Icon size={24} aria-hidden="true" />
                  </div>

                  <h3 className="text-2xl font-sora font-bold text-aegrix-text mb-2">{localizedDivision.title}</h3>
                  <p className="text-xs font-semibold text-aegrix-cyan uppercase tracking-[0.16em] mb-4">{localizedDivision.tagline}</p>
                  <p className="body-md text-aegrix-muted leading-relaxed mb-7">{localizedDivision.description}</p>

                  <ul className="grow mb-8 space-y-3">
                    {localizedDivision.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-aegrix-text/80">
                        <CheckCircle2 size={16} className="text-aegrix-cyan shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60"
                  >
                    {lang === 'en' ? 'Discuss scope' : 'Consultar alcance'}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 md:mt-20">
          <p className="text-center text-aegrix-muted font-medium mb-8 md:mb-12">
            {lang === 'en'
              ? 'Technologies and ecosystems we can work with depending on the project.'
              : 'Tecnologías y ecosistemas con los que podemos trabajar según el proyecto.'}
          </p>
          <BrandMarquee />
        </div>
      </div>
    </section>
  );
};

export default ProductDivisions;