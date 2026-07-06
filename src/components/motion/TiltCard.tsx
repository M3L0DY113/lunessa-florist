"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ORGANIC_EASE = [0.22, 1, 0.36, 1] as const;

// Kept gentle — a "slight" Steam-card tilt, not a full flip.
const MAX_TILT = 10; // degrees
const HOVER_SCALE = 1.05;

const springCfg = { stiffness: 160, damping: 18, mass: 0.4 } as const;

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * A card that tilts in 3D toward the cursor and pops forward on hover, with a
 * soft glare sweep — the Steam trading-card feel. Mouse-only; touch is ignored
 * so it never fights a scroll/drag.
 */
export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Pointer position within the card, normalized to -0.5..0.5.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const glare = useMotionValue(0); // 0..1

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), springCfg);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), springCfg);

  const glareX = useTransform(px, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(py, [-0.5, 0.5], [0, 100]);
  const glareOpacity = useSpring(glare, { stiffness: 200, damping: 30 });
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.45), transparent 55%)`;

  function handleMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
    glare.set(1);
  }

  function reset() {
    px.set(0);
    py.set(0);
    glare.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{
        scale: HOVER_SCALE,
        zIndex: 10,
        // Tight, rounded-hugging shadow: a close contact edge + a soft short
        // lift — not a diffuse blob cast far below the card.
        boxShadow:
          "0 3px 8px -3px rgba(63, 51, 47, 0.24), 0 10px 20px -8px rgba(63, 51, 47, 0.30)",
      }}
      transition={{ duration: 0.45, ease: ORGANIC_EASE }}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{ background: glareBg, opacity: glareOpacity }}
      />
    </motion.div>
  );
}
