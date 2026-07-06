"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ORGANIC_EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ORGANIC_EASE },
  },
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerGroup({ children, className }: StaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: StaggerProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
