'use client';

import React from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { ShieldCheck, Award, ClipboardCheck } from 'lucide-react';

export default function TrustSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-padding bg-aegrix-bg border-y border-aegrix-border/50">
      <div className="container-width">
        <div className={cn(
          "text-center max-w-3xl mx-auto mb-10 md:mb-16 transition-all duration-1000",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="heading-lg mb-6 text-aegrix-text">
            Respaldados por la <span className="text-aegrix-cyan">Confianza</span>
          </h2>
          <p className="body-lg text-aegrix-muted">
            Diseñamos tecnología con controles verificables, trazabilidad y evidencia para que cada decisión pueda explicarse y auditarse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: ShieldCheck,
              title: "Seguridad por diseño",
              desc: "Autenticación multifactor, aislamiento por organización, control de acceso y registro auditable forman parte de la arquitectura de AEGRIX 360."
            },
            {
              icon: Award,
              title: "Marcos trazables",
              desc: "Evaluaciones con referencias trazables a NIST CSF 2.0, HIPAA Security Rule e ISO/IEC 27001:2022 Readiness, sin presentar la herramienta como certificación."
            },
            {
              icon: ClipboardCheck,
              title: "Evidencia y seguimiento",
              desc: "Las evaluaciones conectan respuestas, evidencia, hallazgos, remediaciones, revisión y exportaciones dentro de un mismo registro de trabajo."
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className={cn(
                "p-5 sm:p-7 md:p-8 rounded-2xl md:rounded-3xl bg-aegrix-surface border border-aegrix-border text-center flex flex-col items-center transition-all duration-700",
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
