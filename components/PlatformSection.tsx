'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, BrainCircuit, Globe2, ShieldCheck } from 'lucide-react';

const PlatformSection = () => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';
  const isEnglish = lang === 'en';

  const points = isEnglish
    ? [
        'Security integrated into architecture, access, and configuration.',
        'Software and web built around performance, SEO, and measurable journeys.',
        'Data and analytics connected to decisions, reports, and traceability.',
      ]
    : [
        'Seguridad integrada en arquitectura, accesos y configuración.',
        'Software y web orientados a rendimiento, SEO y recorridos medibles.',
        'Datos y analítica conectados con decisiones, reportes y trazabilidad.',
      ];

  const layers = isEnglish
    ? [
        { name: 'AI & Automation', detail: 'Automate repetitive work and accelerate analysis where it adds value.', icon: BrainCircuit, className: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
        { name: 'Data & Analytics', detail: 'Connect information, indicators and decisions with traceability.', icon: BarChart3, className: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
        { name: 'Software & Web', detail: 'Build experience, performance, SEO and measurable conversion journeys.', icon: Globe2, className: 'text-aegrix-cyan bg-aegrix-cyan/10 border-aegrix-cyan/20' },
        { name: 'Cybersecurity', detail: 'Strengthen identities, access, configurations and relevant controls.', icon: ShieldCheck, className: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
      ]
    : [
        { name: 'IA & Automatización', detail: 'Automatiza trabajo repetitivo y acelera análisis donde realmente aporta valor.', icon: BrainCircuit, className: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
        { name: 'Datos & Analítica', detail: 'Conecta información, indicadores y decisiones con trazabilidad.', icon: BarChart3, className: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
        { name: 'Software & Web', detail: 'Construye experiencia, rendimiento, SEO y recorridos de conversión medibles.', icon: Globe2, className: 'text-aegrix-cyan bg-aegrix-cyan/10 border-aegrix-cyan/20' },
        { name: 'Ciberseguridad', detail: 'Fortalece identidades, accesos, configuraciones y controles relevantes.', icon: ShieldCheck, className: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
      ];

  return (
    <section id="arquitectura" className="section-padding bg-aegrix-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(0,194,255,0.045),transparent_45%)] pointer-events-none" aria-hidden="true" />

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-aegrix-cyan">
              {isEnglish ? 'Coordinated architecture' : 'Arquitectura coordinada'}
            </span>
            <h2 className="heading-lg mt-3 mb-8 text-aegrix-text">
              {isEnglish ? 'Security, software, data and AI' : 'Seguridad, software, datos e IA'} <br />
              <span className="text-aegrix-cyan">{isEnglish ? 'working in the same direction.' : 'trabajando en la misma dirección.'}</span>
            </h2>
            <p className="body-lg mb-8 md:mb-10 text-aegrix-muted">
              {isEnglish
                ? 'AEGRIX connects the capabilities a project actually needs instead of treating them as isolated tools. The architecture is defined around the client context, priorities, and delivery scope.'
                : 'AEGRIX conecta las capacidades que realmente necesita un proyecto en lugar de tratarlas como herramientas aisladas. La arquitectura se define alrededor del contexto, las prioridades y el alcance de entrega del cliente.'}
            </p>

            <div className="space-y-5 mb-8 md:mb-12">
              {points.map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] gap-4 items-start text-aegrix-text/80 font-medium">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-aegrix-cyan/70 pt-1.5">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="border-l border-aegrix-cyan/20 pl-4 leading-relaxed">{item}</div>
                </div>
              ))}
            </div>

            <Link href={`/${lang}#servicios`} className="btn-primary">
              {isEnglish ? 'Explore services' : 'Explorar servicios'}
            </Link>
          </motion.div>

          <div className="relative">
            <div className="relative aspect-square w-full max-w-125 mx-auto">
              <div className="absolute inset-0 bg-aegrix-cyan/8 blur-[100px] rounded-full" aria-hidden="true" />

              <div className="relative h-full flex flex-col justify-center gap-5 md:gap-6">
                {layers.map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    style={{ zIndex: layers.length - index }}
                    className={[
                      'group relative bg-aegrix-surface border border-aegrix-border p-5 md:p-6 rounded-xl shadow-xl transition-all duration-300 hover:border-aegrix-cyan/30 hover:-translate-y-0.5',
                      index === 0 ? 'ml-0 mr-6 md:mr-15' : '',
                      index === 1 ? 'ml-2 md:ml-5 mr-4 md:mr-10' : '',
                      index === 2 ? 'ml-4 md:ml-10 mr-2 md:mr-5' : '',
                      index === 3 ? 'ml-6 md:ml-15 mr-0' : '',
                    ].join(' ')}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-lg border ${layer.className}`}>
                        <layer.icon size={19} aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-sora font-bold text-aegrix-text text-sm md:text-base">{layer.name}</span>
                        <p className="mt-1 text-[10px] md:text-xs text-aegrix-muted leading-relaxed">{layer.detail}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
