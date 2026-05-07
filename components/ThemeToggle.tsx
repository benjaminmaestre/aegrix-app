'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { getTheme, setTheme, Theme } from '@/lib/theme';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setInternalTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setMounted(true);
    setInternalTheme(getTheme());
  }, []);

  useEffect(() => {
    if (theme && mounted) {
      document.documentElement.dataset.theme = theme;
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setInternalTheme(newTheme);
    setTheme(newTheme);
  };

  if (!mounted || !theme) return <div className="w-8 h-8" />; // Placeholder to avoid layout shift

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300",
        "hover:bg-aegrix-cyan/5 text-aegrix-text",
        "group relative overflow-hidden"
      )}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
    >
      <div className="relative z-10 transition-transform duration-500 group-active:scale-90">
        {theme === 'dark' ? (
          <Sun size={18} className="text-aegrix-cyan" />
        ) : (
          <Moon size={18} className="text-aegrix-cyan" />
        )}
      </div>
      
      {/* Subtle hover effect */}
      <div className="absolute inset-0 bg-aegrix-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
};
