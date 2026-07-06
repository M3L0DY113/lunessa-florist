"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ORGANIC_EASE = [0.22, 1, 0.36, 1] as const;
const INTRO_STORAGE_KEY = "lunessa-intro-seen";
const INTRO_DURATION_MS = 2600;

function MoonGlyph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.4, ease: ORGANIC_EASE }}
    >
      <motion.svg
        width={110}
        height={110}
        viewBox="0 0 110 110"
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--moonlight)" stopOpacity="0.9" />
            <stop offset="55%" stopColor="var(--moonlight)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--moonlight)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="55" cy="55" r="50" fill="url(#moonGlow)" />
        <circle cx="55" cy="55" r="24" fill="var(--moonlight)" />
      </motion.svg>
    </motion.div>
  );
}

export function IntroAnimation({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<"playing" | "done">("playing");

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem(INTRO_STORAGE_KEY);
    const timer = setTimeout(
      () => {
        if (!hasSeenIntro) {
          sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
        }
        setPhase("done");
      },
      hasSeenIntro ? 0 : INTRO_DURATION_MS,
    );
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = phase === "playing" ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  return (
    <>
      <AnimatePresence>
        {phase === "playing" && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50 flex items-center justify-center bg-night"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: ORGANIC_EASE }}
          >
            <MoonGlyph />
          </motion.div>
        )}
      </AnimatePresence>

      {phase === "done" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: ORGANIC_EASE }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
