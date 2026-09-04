'use client';

import { motion, useReducedMotion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, x = 0, y = 20 }: { children: React.ReactNode, delay?: number, x?: number, y?: number }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};
