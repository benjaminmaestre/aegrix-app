'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { FileText, Shield, Clock } from 'lucide-react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ title, lastUpdated, children }: LegalPageLayoutProps) => {
  const params = useParams();
  const lang = (params?.lang as string) || 'es';

  return (
    <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 min-h-auto lg:min-h-screen relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-aegrix-cyan/3 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-aegrix-blue/3 blur-[80px] rounded-full -z-10" />

      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-3 text-aegrix-cyan font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
              <FileText size={14} aria-hidden="true" />
              {lang === 'en' ? 'Legal Document' : 'Documento legal'}
            </div>
            <h1 className="text-4xl md:text-6xl font-sora font-extrabold text-aegrix-text mb-8 leading-tight">
              {title}
            </h1>
            <div className="flex items-center gap-2 text-aegrix-muted text-sm italic">
              <Clock size={14} aria-hidden="true" />
              {lastUpdated}
            </div>
          </div>

          <div className="p-5 sm:p-8 md:p-12 rounded-[32px] border border-aegrix-border bg-aegrix-surface shadow-sm">
            <div className="prose prose-slate data-[theme=dark]:prose-invert max-w-none prose-h2:font-sora prose-h2:text-aegrix-text prose-h2:mt-12 prose-h2:mb-6 prose-p:text-aegrix-muted prose-p:leading-relaxed prose-li:text-aegrix-muted">
              {children}
            </div>
          </div>

          <div className="mt-12 p-5 sm:p-8 rounded-2xl bg-aegrix-cyan/5 border border-aegrix-cyan/10 flex items-start gap-4">
            <div className="p-2 rounded-lg bg-aegrix-cyan/10 text-aegrix-cyan">
              <Shield size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm text-aegrix-text font-medium mb-1">
                {lang === 'en' ? 'Trust & Security' : 'Confianza y seguridad'}
              </p>
              <p className="text-xs text-aegrix-muted">
                {lang === 'en'
                  ? 'If you have questions about our legal documents, contact us at contacto@aegrix.com.co.'
                  : 'Si tienes alguna duda sobre nuestros documentos legales, puedes contactarnos en contacto@aegrix.com.co.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPageLayout;