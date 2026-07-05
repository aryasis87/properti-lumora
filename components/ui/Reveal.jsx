'use client';
import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
