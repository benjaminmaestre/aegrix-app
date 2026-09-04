'use client';

import Image from 'next/image';
import { BarChart3, Bot, Globe2, ShieldCheck } from 'lucide-react';
import { commandCapabilities } from '@/lib/data';

const icons = [ShieldCheck, Globe2, BarChart3, Bot];

const CommandCenter = () => {
  return (
    <div className="bg-aegrix-surface border border-aegrix-border rounded-2xl overflow-hidden shadow-xl">
      <div className="bg-aegrix-bg-2 border-b border-aegrix-border px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image
            src="/AEGRIX_hero_vector.svg"
            alt="AEGRIX"
            width={76}
            height={20}
            className="h-4 w-auto opacity-90"
          />
          <span className="text-xs font-semibold text-aegrix-muted">Mapa de capacidades digitales</span>
        </div>
        <span className="text-[11px] text-aegrix-muted">
          Ilustración de alcance · no muestra datos en tiempo real
        </span>
      </div>

      <div className="p-5 sm:p-7 lg:p-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {commandCapabilities.map((capability, index) => {
            const Icon = icons[index];
            return (
              <article key={capability.layer} className="rounded-xl border border-aegrix-border bg-aegrix-bg-2 p-5">
                <div className="w-10 h-10 rounded-lg bg-aegrix-cyan/8 border border-aegrix-cyan/15 text-aegrix-cyan flex items-center justify-center mb-5">
                  <Icon size={19} aria-hidden="true" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-aegrix-muted mb-2">{capability.layer}</div>
                <h3 className="text-lg font-sora font-bold text-aegrix-text mb-3">{capability.title}</h3>
                <p className="text-sm text-aegrix-muted leading-relaxed">{capability.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-xl border border-aegrix-border bg-aegrix-bg-2 p-5 sm:p-6">
          <h3 className="text-sm font-sora font-bold text-aegrix-text mb-2">Qué puede salir de un diagnóstico</h3>
          <p className="text-sm text-aegrix-muted leading-relaxed max-w-3xl">
            Dependiendo del alcance contratado, el resultado puede incluir hallazgos, riesgos priorizados, oportunidades de mejora, responsables sugeridos y un plan de siguientes pasos. Las métricas se presentan únicamente cuando provienen de datos reales del cliente o de mediciones ejecutadas durante el servicio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommandCenter;
