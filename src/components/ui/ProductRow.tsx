"use client";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ProductCard } from "@/components/ui/ProductCard";

const ORGANIC_EASE = [0.22, 1, 0.36, 1] as const;

type Product = {
  name: string;
  price: string;
  tone: "primary" | "accent" | "neutral";
};

export function ProductRow({ products }: { products: Product[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function handleWheel(event: WheelEvent) {
      if (!container) return;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return; // nothing to scroll — let the page scroll

      const delta = event.deltaY + event.deltaX;
      const atStart = container.scrollLeft <= 0;
      const atEnd = container.scrollLeft >= maxScroll - 1;

      // At a hard end, release the wheel back to normal vertical page scroll.
      if ((delta < 0 && atStart) || (delta > 0 && atEnd)) return;

      event.preventDefault();
      const current = container.scrollLeft;
      const target = Math.min(Math.max(current + delta * 1.2, 0), maxScroll);

      controlsRef.current?.stop();
      controlsRef.current = animate(current, target, {
        duration: 0.5,
        ease: ORGANIC_EASE,
        onUpdate: (value) => {
          container.scrollLeft = value;
        },
      });
    }

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      controlsRef.current?.stop();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="snap-x snap-mandatory overflow-x-auto overflow-y-hidden pb-2 touch-pan-x md:snap-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <StaggerGroup className="flex gap-6 sm:gap-8">
        {products.map((product) => (
          <StaggerItem
            key={product.name}
            className="w-full flex-shrink-0 snap-start sm:w-[calc((100%_-_2rem)/2)] md:w-[calc((100%_-_4rem)/3)] xl:w-[calc((100%_-_6rem)/4)]"
          >
            <ProductCard {...product} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
