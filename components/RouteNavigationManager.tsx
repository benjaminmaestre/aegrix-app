'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface RouteNavigationManagerProps {
  lang: 'es' | 'en';
}

export default function RouteNavigationManager({ lang }: RouteNavigationManagerProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const warmRoutes = [
      `/${lang}/nosotros`,
      `/${lang}/aegrix-360`,
      `/${lang}`,
    ];

    const timeoutId = globalThis.setTimeout(() => {
      warmRoutes.forEach((route) => router.prefetch(route));
    }, 250);

    return () => globalThis.clearTimeout(timeoutId);
  }, [lang, router]);

  useEffect(() => {
    const restorePosition = () => {
      const hash = window.location.hash.replace('#', '');

      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash));
        if (target) {
          target.scrollIntoView({ behavior: 'auto', block: 'start' });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    const firstFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(restorePosition);
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [pathname]);

  return null;
}
