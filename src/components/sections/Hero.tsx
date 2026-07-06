"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HorizontalGallery } from "@/components/sections/HorizontalGallery";

const ORGANIC_EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: ORGANIC_EASE } },
};

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-12 overflow-x-clip bg-neutral px-6 py-24 text-center sm:px-10">
      <motion.div
        className="flex max-w-2xl flex-col items-center gap-6"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p
          variants={item}
          className="font-sans text-sm uppercase tracking-[0.3em] text-primary-dark"
        >
          Lunessa Florist
        </motion.p>
        <motion.h1
          variants={item}
          className="font-serif text-3xl leading-tight text-ink sm:text-5xl md:text-6xl"
        >
          Soap flower bouquets, made to last a lifetime.
        </motion.h1>
        <motion.p
          variants={item}
          className="max-w-md font-sans text-base leading-relaxed text-ink/70 sm:text-lg"
        >
          Hand-shaped, botanically inspired, and built to stay beautiful long
          after fresh flowers would fade.
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button href="#shop" variant="primary">
            Shop Now
          </Button>
          <Button
            href="https://wa.me/60197838261?text=Hi%2C%20I'd%20like%20to%20order%20a%20bouquet"
            variant="outline"
          >
            Message us on WhatsApp
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        className="flex w-full justify-center"
      >
        <HorizontalGallery />
      </motion.div>
    </section>
  );
}
