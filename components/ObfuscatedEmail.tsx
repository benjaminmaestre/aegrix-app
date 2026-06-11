'use client';

import React, { useState, useEffect } from 'react';

interface ObfuscatedEmailProps {
  email?: string;
  className?: string;
  label?: string;
}

export default function ObfuscatedEmail({ 
  email = "contacto@aegrix.com.co", 
  className = "",
  label
}: ObfuscatedEmailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className={className}>{label || "Contactar"}</span>;
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {label || email}
    </a>
  );
}
