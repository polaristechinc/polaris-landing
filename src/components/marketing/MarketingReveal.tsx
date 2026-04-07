"use client";

import { motion, useReducedMotion } from "framer-motion";

interface MarketingRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MarketingReveal({
  children,
  className,
  delay = 0,
}: MarketingRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
