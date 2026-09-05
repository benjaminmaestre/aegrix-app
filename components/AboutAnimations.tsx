'use client';

import { motion, useReducedMotion } from 'framer-motion';

const MAX_DELAY = 0.12;
const DURATION = 0.28;

export const FadeIn = ({
  children,
  delay = 0,
  x = 0,
  y = 12,
}: {
  children: React.ReactNode;
  delay?: number;
  x?: number;
  y?: number;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const effectiveDelay = Math.min(delay, MAX_DELAY);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: DURATION, delay: effectiveDelay }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const shouldReduceMotion = useReducedMotion();
  const effectiveDelay = Math.min(delay, MAX_DELAY);

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: DURATION, delay: effectiveDelay }}
    >
      {children}
    </motion.div>
  );
};
