'use client';

interface ObfuscatedEmailProps {
  email?: string;
  className?: string;
  label?: string;
}

export default function ObfuscatedEmail({
  email = 'contacto@aegrix.com.co',
  className = '',
  label,
}: ObfuscatedEmailProps) {
  return (
    <a href={`mailto:${email}`} className={className}>
      {label || email}
    </a>
  );
}
