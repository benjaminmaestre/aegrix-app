'use client';

import React from 'react';

type Brand = {
  id: string;
  name: string;
  color: string; // Brand hex color or CSS variable
  icon: React.ReactNode;
};

const brands: Brand[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    color: '#10A37F',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M21.36 11.12a3.83 3.83 0 0 0-1.76-3.14 3.84 3.84 0 0 0-.69-3.85 3.83 3.83 0 0 0-3.85-.69 3.83 3.83 0 0 0-5-2.52c-.52 0-1.03.09-1.52.27A3.83 3.83 0 0 0 5 3.65a3.84 3.84 0 0 0-.69 3.85 3.83 3.83 0 0 0-3.85.69 3.83 3.83 0 0 0-1.76 3.14 3.83 3.83 0 0 0 1.76 3.14 3.84 3.84 0 0 0 .69 3.85 3.83 3.83 0 0 0 3.85.69 3.83 3.83 0 0 0 5 2.52c1.02.35 2.13.35 3.15 0a3.83 3.83 0 0 0 3.53-2.52 3.84 3.84 0 0 0 .69-3.85 3.83 3.83 0 0 0 3.85-.69 3.83 3.83 0 0 0 1.76-3.14zM12 21.05a2.22 2.22 0 0 1-1.07-.27c.07-.04.22-.11.34-.18l4.47-2.58a1.2 1.2 0 0 0 .6-1.04v-6.3a.1.1 0 0 1 .15-.09l5.46 3.15a2.23 2.23 0 0 1 .13 3.74L16.63 20.3a2.22 2.22 0 0 1-4.63.75zm-6.9-3.08a2.22 2.22 0 0 1-.22-1.09c.04.07.12.21.22.27l5.46 3.15a1.2 1.2 0 0 0 1.2 0l5.46-3.15a.1.1 0 0 1 .15.09v6.3a2.23 2.23 0 0 1-3.35 1.93L8.3 19.38a2.22 2.22 0 0 1-3.2-1.41zm-.86-7.85a2.22 2.22 0 0 1 .85-.68c-.03.08-.09.24-.09.36v6.3a1.2 1.2 0 0 0 .6 1.04l5.46 3.15a.1.1 0 0 1 .05.09v6.3a2.23 2.23 0 0 1-3.48 1.68l-5.46-3.15a2.22 2.22 0 0 1 .07-3.81zM12 2.95a2.22 2.22 0 0 1 1.07.27c-.07.04-.22.11-.34.18l-4.47 2.58a1.2 1.2 0 0 0-.6 1.04v6.3a.1.1 0 0 1-.15.09L2.05 10.26a2.23 2.23 0 0 1-.13-3.74L7.37 3.7a2.22 2.22 0 0 1 4.63-.75zm6.9 3.08c.15.34.22.72.22 1.09-.04-.07-.12-.21-.22-.27l-5.46-3.15a1.2 1.2 0 0 0-1.2 0L6.78 6.85A.1.1 0 0 1 6.63 6.76v-6.3A2.23 2.23 0 0 1 9.98.47l5.46 3.15a2.22 2.22 0 0 1 3.46 2.41zm.86 7.85a2.22 2.22 0 0 1-.85.68c.03-.08.09-.24.09-.36v-6.3a1.2 1.2 0 0 0-.6-1.04l-5.46-3.15a.1.1 0 0 1-.05-.09v-6.3A2.23 2.23 0 0 1 16.42.34l5.46 3.15a2.22 2.22 0 0 1-.02 3.79z" />
      </svg>
    ),
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    color: '#CC9966',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M16.94 19.34l-.84-2.82H7.9l-.84 2.82H4.44l5.52-16.12h4.08l5.52 16.12h-2.62zm-1.48-5l-1.92-6.52h-.08l-1.92 6.52h3.92z" />
      </svg>
    ),
  },
  {
    id: 'gemini',
    name: 'Gemini',
    color: '#4285F4',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M9.82 2.4c.1-.5.7-.5.8 0 .8 3.5 3.3 6 6.8 6.8.5.1.5.7 0 .8-3.5.8-6 3.3-6.8 6.8-.1.5-.7.5-.8 0-.8-3.5-3.3-6-6.8-6.8-.5-.1-.5-.7 0-.8 3.5-.8 6-3.3 6.8-6.8zM18.8 14.4c.05-.25.35-.25.4 0 .4 1.75 1.65 3 3.4 3.4.25.05.25.35 0 .4-1.75.4-3 1.65-3.4 3.4-.05.25-.35.25-.4 0-.4-1.75-1.65-3-3.4-3.4-.25-.05-.25-.35 0-.4 1.75-.4 3-1.65 3.4-3.4z" />
      </svg>
    ),
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    color: '#FFD21E',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-4-9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 8 11zm8 0a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 11zm-4 5.5c-2.3 0-4-1.5-4.5-2.5a.5.5 0 0 1 .4-.7h8.2a.5.5 0 0 1 .4.7c-.5 1-2.2 2.5-4.5 2.5zm7.3-3.2c.4-.2.8.2.6.6a4 4 0 0 1-3.6 2.1.5.5 0 0 1 0-1 3 3 0 0 0 2.6-1.5.4.4 0 0 1 .4-.2zm-14.6 0a.4.4 0 0 1 .4.2 3 3 0 0 0 2.6 1.5.5.5 0 0 1 0 1 4 4 0 0 1-3.6-2.1c-.2-.4.2-.8.6-.6z" />
      </svg>
    ),
  },
  {
    id: 'cohere',
    name: 'Cohere',
    color: '#00C2FF',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v18M3 12h18M12 12m-6 0a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
      </svg>
    ),
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    color: '#10B981',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2a1 1 0 0 1 .8.4l2 3A1 1 0 0 1 14 7h-4a1 1 0 0 1-.8-.6l2-3A1 1 0 0 1 12 2zm4.8 6.4a1 1 0 0 1 .8.4l2 3a1 1 0 0 1-.8 1.6H8.2a1 1 0 0 1-.8-1.6l2-3a1 1 0 0 1 .8-.4h6.6zm2 6.4a1 1 0 0 1 .8.4l2 3a1 1 0 0 1-.8 1.6H3.2a1 1 0 0 1-.8-1.6l2-3A1 1 0 0 1 5.2 15h13.6z" />
      </svg>
    ),
  },
  {
    id: 'meta',
    name: 'Meta',
    color: '#0668E1',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M16.8 5c-2.4 0-4.4 1.7-5.3 3.6A6.9 6.9 0 0 0 6.2 5c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2c2.4 0 4.4-1.7 5.3-3.6.9 1.9 2.9 3.6 5.3 3.6 3.4 0 6.2-2.8 6.2-6.2S20.2 5 16.8 5zm0 10.4c-2.2 0-4.1-1.8-4.7-3.9a5 5 0 0 1 4.7-3.9 3.9 3.9 0 1 1 0 7.8zM7.2 15.4a3.9 3.9 0 1 1 0-7.8c2.2 0 4.1 1.8 4.7 3.9a5 5 0 0 1-4.7 3.9z" />
      </svg>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    color: 'var(--aegrix-text)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.688 14.54l-5.698-7.394V16.3H6.5V7.7h1.492l5.698 7.394V7.7h1.498v8.6H13.69z" />
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.2" aria-hidden="true">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    color: '#38BDF8',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
      </svg>
    ),
  },
  {
    id: 'vercel',
    name: 'Vercel',
    color: 'var(--aegrix-text)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M24 22.525H0L12 1.475L24 22.525Z" />
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub',
    color: 'var(--aegrix-text)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    color: '#3178C6',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM12.2 18.5c-.8.8-1.8 1.2-3.1 1.2-1.7 0-2.9-.8-3.6-2.4l2.1-1.3c.4.8 1 .9 1.4.9.6 0 .9-.3.9-.7 0-.5-.4-.7-1.2-1-1.6-.6-2.7-1.4-2.7-3.2 0-1.8 1.4-3.1 3.4-3.1 1.4 0 2.3.5 2.9 1.4l-1.8 1.2c-.3-.5-.7-.7-1.1-.7-.5 0-.7.3-.7.6 0 .4.4.6 1.1.9 1.9.8 2.8 1.6 2.8 3.3.1 1.4-.7 2.4-1.5 2.9zm9.3-5.2h-3.4V20H15.4V13.3h-3.4v-2.3h9.5v2.3z" />
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    color: '#3776AB',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M11.93 2.02c-2.42 0-4.32.18-4.54.25-1.3.37-2.28 1.38-2.58 2.65-.4 1.7-.35 3.12-.35 3.12l.98.1c0 0-.05-1.4.3-2.9.23-.97.97-1.74 1.95-2.02.2-.06 2.1-.22 4.24-.22 4.15 0 4.26 2.45 4.26 2.45v2.7h-4.63s-2.7-.06-3.72 1.03c-1.02 1.1-1.02 3.7-1.02 3.7v3.2h2.52v-2.16c0-.98.8-1.78 1.78-1.78h4.63s2.7.06 3.72-1.03c1.02-1.1 1.02-3.7 1.02-3.7V9.75c0-4.14-3.52-4.26-3.52-4.26H16.2v-.83s-.08-2.64-4.27-2.64zm-2.26 1.54a.78.78 0 1 1 0 1.56.78.78 0 0 1 0-1.56zm4.58 13.84v2.16c0 .98-.8 1.78-1.78 1.78H7.84s-2.7-.06-3.72 1.03c-1.02 1.1-1.02 3.7-1.02 3.7v1.16c0 4.14 3.52 4.26 3.52 4.26h2.16v.83s.08 2.64 4.27 2.64c2.42 0 4.32-.18 4.54-.25 1.3-.37 2.28-1.38 2.58-2.65.4-1.7.35-3.12.35-3.12l-.98-.1c0 0 .05 1.4-.3 2.9-.23.97-.97 1.74-1.95 2.02-.2.06-2.1.22-4.24.22-4.15 0-4.26-2.45-4.26-2.45v-2.7h4.63s2.7.06 3.72-1.03c1.02-1.1 1.02-3.7 1.02-3.7v-3.2H14.25zm.02 3.55a.78.78 0 1 1 0 1.56.78.78 0 0 1 0-1.56z" />
      </svg>
    ),
  },
  {
    id: 'aws',
    name: 'AWS',
    color: '#FF9900',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M12.92 10.91c.21-.36.43-.88.43-1.42 0-1.19-.89-2.07-2.31-2.07-.76 0-1.33.24-1.89.65L7.84 9.1c.71-.62 1.76-1.01 2.87-1.01 2.45 0 4.11 1.49 4.11 3.59v5.13c0 .59.08 1.15.24 1.63h-1.86a4.42 4.42 0 0 1-.22-.9c-.66.68-1.57 1.05-2.61 1.05-1.89 0-3.32-1.15-3.32-2.9 0-2.3 2.1-3.14 5.37-3.14h.5v-.44zm-3.39 4.2c0 .96.71 1.5 1.73 1.5.88 0 1.66-.49 1.66-1.55v-.74h-.5c-2.02 0-2.89.43-2.89 1.29zm8.56-.37c-.36-.08-.94-.13-1.44-.13-.7 0-1.03.18-1.03.55 0 .28.27.42.75.52l.96.2c1.39.29 2.05.99 2.05 2.14 0 1.73-1.53 2.37-3.64 2.37a7.25 7.25 0 0 1-3.08-.66v-1.77c.61.46 1.73.81 2.76.81.93 0 1.37-.2 1.37-.62 0-.31-.22-.44-.82-.57l-1.04-.22c-1.33-.29-1.92-1.04-1.92-2.05 0-1.63 1.48-2.34 3.32-2.34a6.6 6.6 0 0 1 2.7.55v1.77zM4.1 11.23c-.7-.09-1.57-.15-2.42-.15-.99 0-1.68.22-1.68.86 0 .5.39.73 1.06.84l1.37.22c2.08.33 3.01 1.11 3.01 2.59 0 2.23-2.22 3-5.28 3a10.9 10.9 0 0 1-4.22-.84v-2.52c1 .73 2.7 1.15 4.14 1.15 1.35 0 1.94-.3 1.94-.9 0-.62-.48-.82-1.41-.98L2.09 13.9C.5 13.62 0 12.63 0 11.45c0-2.08 2.02-3 4.88-3 1.5 0 3.1.28 4.09.73L7.75 11.5c-.86-.44-2.27-.67-3.65-.67-.71 0-1.06.13-1.06.44 0 .28.24.4.82.5l.24.04v-.58zm19.9 8.27A13.8 13.8 0 0 1 12 23.5c-4.47 0-8.27-2-10.45-5.02l.93-.8A12.7 12.7 0 0 0 12 22.3a12.8 12.8 0 0 0 10.87-4.44l1.13 1.64zm-1-2.92a.66.66 0 0 1-.9.23L21.4 15.7a.66.66 0 0 1-.22-.9l.75-.44a.66.66 0 0 1 .9-.23l1.1.66a.66.66 0 0 1 .22.9l-.75.44z" />
      </svg>
    ),
  },
  {
    id: 'azure',
    name: 'Azure',
    color: '#0078D4',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M0 19L7 3.5h5.5L4.5 19H0zm12.5-12l3-3.5H24L15.5 19h-5.5l5.5-12h-3z" />
      </svg>
    ),
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    color: '#F38020',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M22.37 13.71a5.64 5.64 0 0 0-4.6-5.59 7.6 7.6 0 0 0-13.9 1.48 4.7 4.7 0 0 0-2.37 8.35h20.87a4.67 4.67 0 0 0 0-4.24z" />
      </svg>
    ),
  },
  {
    id: 'crowdstrike',
    name: 'CrowdStrike',
    color: '#FC0000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2L3 6v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V6l-9-4zm4.5 12h-9l1.5-3.5L12 7l3 3.5-1.5 3.5z" />
      </svg>
    ),
  },
  {
    id: 'snyk',
    name: 'Snyk',
    color: '#EC1A5F',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8zm1-11v4h3l-4 5l-4-5h3V9h2z" />
      </svg>
    ),
  },
  {
    id: 'paloalto',
    name: 'Palo Alto',
    color: '#FF5722',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2L2 12l10 10l10-10L12 2zm0 4.5l5.5 5.5l-5.5 5.5L6.5 12L12 6.5z" />
      </svg>
    ),
  },
  {
    id: 'hashicorp',
    name: 'HashiCorp',
    color: '#1563FF',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm-1.5 4.5v5L5 9v-5l5.5 2.5zm3 0L19 4v5l-5.5 2.5v-5zm-1.5 8.7L5 12.7v5L10.5 20v-4.8zm3 0V20l5.5-2.3v-5L13.5 15.2z" />
      </svg>
    ),
  },
];

const BrandMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-10 bg-aegrix-bg-2/30 border-y border-aegrix-border/50">
      {/* Edge Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-r from-aegrix-bg-2 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-linear-to-l from-aegrix-bg-2 to-transparent z-10 pointer-events-none" />

      {/* Main scrolling track container */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Track 1 */}
        <div className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
          {brands.map((brand, index) => (
            <div
              key={`${brand.id}-track1-${index}`}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-aegrix-surface border border-aegrix-border/80 text-aegrix-text/75 transition-all duration-300 hover:text-aegrix-text hover:border-aegrix-cyan/40 hover:shadow-cyan-sm hover:scale-105 cursor-pointer select-none"
            >
              <span 
                className="shrink-0 transition-transform duration-300"
                style={{ color: brand.color }}
              >
                {brand.icon}
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 font-manrope">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 (Identical duplicate for seamless looping) */}
        <div className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8" aria-hidden="true">
          {brands.map((brand, index) => (
            <div
              key={`${brand.id}-track2-${index}`}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-aegrix-surface border border-aegrix-border/80 text-aegrix-text/75 transition-all duration-300 hover:text-aegrix-text hover:border-aegrix-cyan/40 hover:shadow-cyan-sm hover:scale-105 cursor-pointer select-none"
            >
              <span 
                className="shrink-0 transition-transform duration-300"
                style={{ color: brand.color }}
              >
                {brand.icon}
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 font-manrope">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
