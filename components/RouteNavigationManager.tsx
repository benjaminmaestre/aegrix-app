'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface RouteNavigationManagerProps {
  lang: 'es' | 'en';
}

export default function RouteNavigationManager({ lang }: RouteNavigationManagerProps) {
  const pathname = usePathname();
  const router = useRouter();
  const historyTraversal = useRef(false);

  useEffect(() => {
    const warmRoutes = [
      lang === 'es' ? '/es/nosotros' : '/en/about',
      `/${lang}/aegrix-360`,
      `/${lang}`,
    ];

    const warmup = () => warmRoutes.forEach((route) => router.prefetch(route));
    const timeoutId = globalThis.setTimeout(warmup, 250);

    return () => globalThis.clearTimeout(timeoutId);
  }, [lang, router]);

  useEffect(() => {
    const markHistoryTraversal = () => {
      historyTraversal.current = true;
    };

    window.addEventListener('popstate', markHistoryTraversal);
    return () => window.removeEventListener('popstate', markHistoryTraversal);
  }, []);

  useEffect(() => {
    if (historyTraversal.current) {
      historyTraversal.current = false;
      return;
    }

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
