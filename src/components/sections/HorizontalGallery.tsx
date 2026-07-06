"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const ORGANIC_EASE = [0.22, 1, 0.36, 1] as const;

// Your photos live in public/bouquets/. Add or remove entries here to match
// how many images you have — the marquee adapts automatically.
const bouquets = Array.from({ length: 7 }, (_, index) => ({
  src: `/bouquets/bouquet-${index + 1}.jpeg`,
  alt: `Lunessa soap flower bouquet ${index + 1}`,
}));

// Three copies of the set; scroll position is kept inside the middle copy so
// the row can wrap seamlessly in either direction.
const COPIES = 3;
const loopedBouquets = Array.from({ length: COPIES }, () => bouquets).flat();

// Gentle constant marquee drift, in px/sec — subtle background motion.
const BASE_SPEED = 60;
// Wheel impulse -> extra px/sec added to the boost velocity per unit of delta.
const WHEEL_BOOST = 18;
// How quickly the wheel boost eases back toward the base drift (per second).
const BOOST_DECAY = 3.5;
// Clamp so a violent scroll can't fling the row absurdly fast.
const BOOST_CAP = 6000;

export function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const boostRef = useRef(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const copyWidth = () => container.scrollWidth / COPIES;

    // Track the position ourselves as a float. The DOM's scrollLeft getter
    // rounds to an integer, so sub-pixel drift read back from it would be lost
    // — we only ever write to scrollLeft, never accumulate from it.
    let position = copyWidth();
    // What we last wrote, so we can tell when touch/momentum moved it for us.
    let expected = position;

    container.scrollLeft = position;

    let rafId = 0;
    let last = performance.now();

    const tick = (now: number) => {
      // Clamp dt so a backgrounded tab doesn't produce one giant jump.
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const width = copyWidth();

      // If something external (touch drag, momentum, keyboard) moved the
      // scroll, adopt that position so we don't fight the user.
      if (Math.abs(container.scrollLeft - expected) > 1) {
        position = container.scrollLeft;
      }

      const velocity = BASE_SPEED + boostRef.current;
      position += velocity * dt;

      // Keep the position within the middle copy for a seamless loop.
      if (width > 0) {
        if (position < width * 0.5) position += width;
        else if (position > width * 1.5) position -= width;
      }

      container.scrollLeft = position;
      expected = container.scrollLeft;

      // Ease the boost back toward zero (leaving the base drift behind).
      boostRef.current *= Math.exp(-BOOST_DECAY * dt);
      if (Math.abs(boostRef.current) < 0.5) boostRef.current = 0;

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      setShowHint(false);
      const delta = event.deltaY + event.deltaX;
      boostRef.current += delta * WHEEL_BOOST;
      boostRef.current = Math.max(Math.min(boostRef.current, BOOST_CAP), -BOOST_CAP);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="w-screen">
      <div
        ref={containerRef}
        onTouchStart={() => setShowHint(false)}
        className="flex cursor-grab touch-pan-x gap-4 overflow-x-auto overflow-y-hidden pb-2 active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedBouquets.map((bouquet, index) => (
          <div
            key={`${bouquet.src}-${index}`}
            className="relative aspect-[4/5] w-[80vw] max-w-[360px] flex-shrink-0 overflow-hidden rounded-3xl sm:w-[38vw]"
          >
            <Image
              src={bouquet.src}
              alt={bouquet.alt}
              fill
              sizes="(max-width: 640px) 80vw, 38vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {showHint && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: ORGANIC_EASE }}
            className="mt-3 text-center font-sans text-xs text-ink/40"
          >
            Scroll or swipe to explore
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
