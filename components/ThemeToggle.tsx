'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { getTheme, setTheme, Theme } from '@/lib/theme';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setInternalTheme] = useState<Theme>('dark');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setInternalTheme(getTheme());
      setMounted(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setInternalTheme(newTheme);
    setTheme(newTheme);
  };

  if (!mounted) return <div className="w-8 h-8" aria-hidden="true" />;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        'flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300',
        'hover:bg-aegrix-cyan/5 text-aegrix-text',
        'group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aegrix-cyan/60'
      )}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
    >
      <div className="relative z-10 transition-transform duration-500 group-active:scale-90">
        {theme === 'dark' ? (
          <Sun size={18} className="text-aegrix-cyan" aria-hidden="true" />
        ) : (
          <Moon size={18} className="text-aegrix-cyan" aria-hidden="true" />
        )}
      </div>
      <div className="absolute inset-0 bg-aegrix-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
    </button>
  );
};
