'use client';

import { usePathname } from 'next/navigation';

export default function Loading() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith('/en');

  return (
    <main
      className="min-h-screen bg-aegrix-bg pt-28 md:pt-36"
      aria-busy="true"
      aria-label={isEnglish ? 'Loading page' : 'Cargando página'}
    >
      <div className="container-width py-10 md:py-16">
        <div className="max-w-3xl animate-pulse">
          <div className="h-7 w-44 rounded-full bg-aegrix-surface mb-7" />
          <div className="h-11 sm:h-14 w-[86%] rounded-xl bg-aegrix-surface mb-4" />
          <div className="h-11 sm:h-14 w-[68%] rounded-xl bg-aegrix-surface mb-8" />
          <div className="space-y-3 max-w-2xl">
            <div className="h-5 w-full rounded bg-aegrix-surface/80" />
            <div className="h-5 w-[92%] rounded bg-aegrix-surface/80" />
            <div className="h-5 w-[72%] rounded bg-aegrix-surface/80" />
          </div>
        </div>
      </div>
    </main>
  );
}
