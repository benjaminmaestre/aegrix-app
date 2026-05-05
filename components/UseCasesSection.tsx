'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

const cases = [
  {
    category: 'Infraestructura Web',
    title: 'Optimización de conversión para Firma Legal',
    description: 'Rediseño de arquitectura web bajo estándares Vercel/Next.js, logrando una reducción del 60% en el tiempo de carga y un aumento del 25% en leads calificados.',
    tags: ['Next.js', 'Conversion Tracking', 'Performance']
  },
  {
    category: 'Ciberseguridad',
    title: 'Protocolo Shield para Fintech regional',
    description: 'Implementación de capa de seguridad integrada y gestión de identidades para proteger activos digitales y asegurar compliance regulatorio.',
    tags: ['Security Shield', 'IAM', 'Data Protection']
  },
  {
    category: 'Data & AI',
    title: 'Dashboard operativo para Retail',
    description: 'Conexión de múltiples fuentes de datos en una sola Capa de Control para visualización de KPIs en tiempo real y automatización de reportes.',
    tags: ['Data Intelligence', 'Automation', 'KPIs']
  }
];

const UseCasesSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="casos" ref={ref} className="section-padding bg-aegrix-bg">
      <div className="container-width">
        <div className={cn(
          "max-w-3xl mb-20 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <div className="label-tag mb-6">Casos de Uso</div>
          <h2 className="heading-lg mb-8 text-white">
            Soluciones reales para <br />
            <span className="text-aegrix-cyan">desafíos complejos.</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            Explora cómo la Capa de Control Digital de AEGRIX ha transformado la operación y seguridad de diversas firmas en Latinoamérica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((useCase, idx) => (
            <div 
              key={idx}
              className={cn(
                "group card-base bg-aegrix-surface/30 border-white/5 p-8 hover:bg-aegrix-surface transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="text-[10px] font-bold text-aegrix-cyan uppercase tracking-widest mb-4">
                {useCase.category}
              </div>
              <h3 className="text-xl font-sora font-bold text-white mb-6 group-hover:text-aegrix-cyan transition-colors">
                {useCase.title}
              </h3>
              <p className="text-sm text-aegrix-muted leading-relaxed mb-8">
                {useCase.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {useCase.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] font-bold text-white/40 uppercase tracking-tighter border border-white/10 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/sectores" className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 group/btn">
                Ver detalles 
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
