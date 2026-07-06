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

const baseStyles = "rounded-3xl bg-surface p-6 shadow-lg shadow-primary/10";

export function Card({ children, className = "", interactive = false }: CardProps) {
  if (!interactive) {
    return <div className={`${baseStyles} ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`group ${baseStyles} transition-shadow duration-500 hover:shadow-xl hover:shadow-primary/20 ${className}`}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: ORGANIC_EASE }}
    >
      {children}
    </motion.div>
  );
}
