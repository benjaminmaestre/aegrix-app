/**
 * AEGRIX Theme Management Utility
 */

export type Theme = 'dark' | 'light';

const THEME_KEY = 'aegrix-theme';

export const getTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  const saved = localStorage.getItem(THEME_KEY) as Theme;
  if (saved) return saved;
  
  // Optional: Respect system preference
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  
  return 'dark';
};

export const setTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.dataset.theme = theme;
};

export const initTheme = () => {
  const theme = getTheme();
  setTheme(theme);
};
