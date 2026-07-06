"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ORGANIC_EASE = [0.22, 1, 0.36, 1] as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type MotionRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function MotionReveal({ children, delay = 0, className }: MotionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.9, ease: ORGANIC_EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
