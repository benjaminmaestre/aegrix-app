'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Globe, Cpu, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const summaryServices = [
  {
    title: 'Ciberseguridad',
    description: 'Protección, diagnóstico de riesgos, hardening y control de accesos.',
    icon: Shield,
    color: 'text-aegrix-cyan',
    bgColor: 'bg-aegrix-cyan/10',
    borderColor: 'border-aegrix-cyan/20'
  },
  {
    title: 'Web Growth',
    description: 'Sitios web de alto rendimiento, landing pages, SEO técnico y conversión.',
    icon: Globe,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20'
  },
  {
    title: 'Datos e IA',
    description: 'Dashboards, automatización, inteligencia artificial aplicada y reportes ejecutivos.',
    icon: Cpu,
    color: 'text-aegrix-green',
    bgColor: 'bg-aegrix-green/10',
    borderColor: 'border-aegrix-green/20'
  }
];

const HomeServicesSummary = () => {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg-2 border-y border-aegrix-border">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {summaryServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={cn(
                "p-6 md:p-8 rounded-2xl bg-aegrix-surface border transition-all duration-500 hover:bg-aegrix-surface/80 group",
                service.borderColor
              )}
            >
              <div className={cn("p-3 rounded-xl w-fit mb-6", service.bgColor, service.color)}>
                <service.icon size={24} />
              </div>
              <h3 className="font-sora font-bold text-aegrix-text text-xl mb-4">{service.title}</h3>
              <p className="text-aegrix-muted text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link 
            href="/servicios" 
            className="btn-ghost"
          >
            Ver servicios AEGRIX <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServicesSummary;
