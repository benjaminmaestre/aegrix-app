'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Globe, Shield } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const HomeServicesSummary = () => {
  const { ref, inView } = useInView();
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const isEnglish = lang === 'en';

  const services = [
    {
      title: isEnglish ? 'Cybersecurity' : 'Ciberseguridad',
      description: isEnglish
        ? 'Risk assessment, hardening, access controls and security improvement plans.'
        : 'Evaluación de riesgos, hardening, controles de acceso y planes de mejora de seguridad.',
      icon: Shield,
    },
    {
      title: 'Software & Web',
      description: isEnglish
        ? 'Websites, landing pages and business software with defined technical scope.'
        : 'Sitios web, landing pages y software empresarial con alcance técnico definido.',
      icon: Globe,
    },
    {
      title: isEnglish ? 'Data & AI' : 'Datos e IA',
      description: isEnglish
        ? 'Dashboards, automation and applied AI solutions for specific business processes.'
        : 'Dashboards, automatización y soluciones de IA aplicadas a procesos empresariales concretos.',
      icon: Cpu,
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg-2 border-y border-aegrix-border">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={cn('p-5 md:p-8 rounded-2xl bg-aegrix-surface border border-aegrix-border')}
            >
              <div className="p-3 rounded-xl w-fit mb-6 bg-aegrix-cyan/10 text-aegrix-cyan">
                <service.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="font-sora font-bold text-aegrix-text text-xl mb-4">{service.title}</h3>
              <p className="text-aegrix-muted text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href={`/${lang}#servicios`} className="btn-ghost focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60 rounded-sm">
            {isEnglish ? 'View AEGRIX services' : 'Ver servicios AEGRIX'} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSummary;
