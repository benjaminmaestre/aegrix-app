'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL } from '@/lib/data';

const WhatsAppFloating = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-60 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl border border-aegrix-border text-aegrix-bg shadow-2xl transition-all duration-300"
      style={{
        background: 'linear-gradient(180deg, #8EF1FF 0%, #00C2FF 48%, #008FC7 100%)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 10px 30px rgba(0, 194, 255, 0.3)'
      }}
      aria-label="WhatsApp Contact"
    >
      <WhatsAppIcon size={28} />
      
      {/* Active pulse effect */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-aegrix-bg rounded-full">
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
      </span>
    </motion.a>
  );
};

export default WhatsAppFloating;
