"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ORGANIC_EASE = [0.22, 1, 0.36, 1] as const;

type ButtonVariant = "primary" | "accent" | "outline";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-8 py-3 font-sans text-sm font-medium tracking-wide transition-colors duration-300";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-dark",
  accent: "bg-accent text-white shadow-lg shadow-accent/30 hover:bg-accent-dark",
  outline: "border border-primary bg-transparent text-primary hover:bg-primary/10",
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;
  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.4, ease: ORGANIC_EASE },
  } as const;

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={classes} {...motionProps}>
      {children}
    </motion.button>
  );
}
