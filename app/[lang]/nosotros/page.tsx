import React from 'react';
import { Shield, Target, Zap, ChevronRight } from 'lucide-react';
import { getDictionary } from '@/lib/get-dictionary';
import Link from 'next/link';
import { FadeIn, ScaleIn } from '@/components/AboutAnimations';

export default async function NosotrosPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { about } = dict;

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aegrix-cyan/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-aegrix-blue/5 blur-[100px] rounded-full -z-10" />

      <div className="container-width">
        {/* Hero Section - About */}
        <div className="max-w-4xl mb-24">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-aegrix-cyan/10 border border-aegrix-cyan/20 text-aegrix-cyan text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              {about.subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl font-sora font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              {about.title}
            </h1>
            <p className="text-xl text-aegrix-muted leading-relaxed max-w-2xl">
              {about.description}
            </p>
          </FadeIn>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <FadeIn x={-20} y={0} delay={0.2}>
            <div className="glass-card p-10 rounded-3xl border border-white/5 relative group overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={120} />
              </div>
              <h3 className="text-2xl font-sora font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-aegrix-cyan/10 flex items-center justify-center text-aegrix-cyan">
                  <Target size={20} />
                </div>
                {about.mission_title}
              </h3>
              <p className="text-aegrix-muted leading-relaxed">
                {about.mission_text}
              </p>
            </div>
          </FadeIn>

          <FadeIn x={20} y={0} delay={0.3}>
            <div className="glass-card p-10 rounded-3xl border border-white/5 relative group overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap size={120} />
              </div>
              <h3 className="text-2xl font-sora font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-aegrix-blue/10 flex items-center justify-center text-aegrix-blue">
                  <Zap size={20} />
                </div>
                {about.vision_title}
              </h3>
              <p className="text-aegrix-muted leading-relaxed">
                {about.vision_text}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Values Grid */}
        <div className="mb-24">
          <FadeIn delay={0.4}>
            <h2 className="text-3xl font-sora font-bold text-white mb-12 text-center">Nuestros Valores Core</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: about.values.security, color: 'text-aegrix-green' },
              { icon: Target, title: about.values.precision, color: 'text-aegrix-cyan' },
              { icon: Zap, title: about.values.innovation, color: 'text-aegrix-blue' }
            ].map((value, idx) => (
              <FadeIn key={idx} delay={0.1 * idx + 0.5}>
                <div className="p-8 rounded-2xl bg-white/2 border border-white/5 hover:border-white/10 transition-all text-center group h-full">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-6 ${value.color} group-hover:scale-110 transition-transform`}>
                    <value.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider">{value.title}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <ScaleIn delay={0.6}>
          <div className="relative p-12 md:p-20 rounded-[40px] overflow-hidden text-center">
            <div className="absolute inset-0 bg-linear-to-br from-aegrix-cyan/20 to-aegrix-blue/20 -z-10" />
            <h2 className="text-3xl md:text-5xl font-sora font-extrabold text-white mb-8">¿Listo para blindar tu futuro?</h2>
            <Link href={`/${lang}#diagnostico`} className="btn-primary inline-flex items-center gap-3">
              Empezar Diagnóstico 360
              <ChevronRight size={18} />
            </Link>
          </div>
        </ScaleIn>
      </div>
    </div>
  );
}
