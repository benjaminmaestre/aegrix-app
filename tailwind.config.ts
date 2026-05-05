import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'aegrix': {
          'bg':        '#05070D',
          'bg-2':      '#080B12',
          'surface':   '#0E1420',
          'charcoal':  '#1C2333',
          'cyan':      '#00C2FF',
          'blue':      '#2563EB',
          'green':     '#22C55E',
          'purple':    '#7C3AED',
          'text':      '#FFFFFF',
          'muted':     '#A7B0C0',
          'border':    'rgba(255,255,255,0.08)',
        },
      },
      fontFamily: {
        sora:    ['var(--font-sora)', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
      boxShadow: {
        'cyan-sm':  '0 0 20px rgba(0,194,255,0.12)',
        'cyan-md':  '0 0 40px rgba(0,194,255,0.18)',
        'cyan-lg':  '0 0 60px rgba(0,194,255,0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in':    'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
