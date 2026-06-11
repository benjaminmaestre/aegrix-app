'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { ShieldCheck, Award, Users } from 'lucide-react';

export default function TrustSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg border-y border-aegrix-border/50">
      <div className="container-width">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="heading-lg mb-6 text-aegrix-text">
            Respaldados por la <span className="text-aegrix-cyan">Confianza</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            Empresas líderes confían en nuestra arquitectura y metodología para asegurar su estabilidad a largo plazo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Caso de Éxito: Fintech Global",
              desc: "Aseguramos la infraestructura de pagos procesando más de 2M de transacciones diarias sin interrupciones."
            },
            {
              icon: Award,
              title: "Validación de la Industria",
              desc: "Arquitectura auditada y certificada bajo los más altos estándares de seguridad (ISO 27001)."
            },
            {
              icon: Users,
              title: "Equipo Experto",
              desc: "Un equipo de ingenieros senior, ex-consultores de ciberseguridad y arquitectos de IA."
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className={cn(
                "p-8 rounded-3xl bg-aegrix-surface border border-aegrix-border text-center flex flex-col items-center transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-aegrix-cyan/10 flex items-center justify-center text-aegrix-cyan mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-aegrix-text mb-4">{item.title}</h3>
              <p className="text-aegrix-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
