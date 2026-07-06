"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ORGANIC_EASE = [0.22, 1, 0.36, 1] as const;

type CardProps = {
  children: ReactNode;
  className?: string;
  /** Adds a soft hover lift + deepened shadow, for interactive product tiles. */
  interactive?: boolean;
};

// Tight, rounded-hugging shadow tinted with the brand rose (#b97a88) —
// traces the card outline rather than blooming into a soft blob.
const baseStyles =
  "rounded-3xl bg-surface p-6 shadow-[0_3px_12px_-2px_rgba(185,122,136,0.16)]";

export function Card({ children, className = "", interactive = false }: CardProps) {
  if (!interactive) {
    return <div className={`${baseStyles} ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`group ${baseStyles} transition-shadow duration-500 hover:shadow-[0_8px_20px_-4px_rgba(185,122,136,0.26)] ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: ORGANIC_EASE }}
    >
      {children}
    </motion.div>
  );
}
