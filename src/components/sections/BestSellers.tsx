import { MotionReveal } from "@/components/motion/MotionReveal";
import { ProductRow } from "@/components/ui/ProductRow";

const bestSellers = [
  { name: "Eternal Rose Dozen", price: "$88", tone: "primary" as const },
  { name: "Sunlit Peony Box", price: "$92", tone: "accent" as const },
  { name: "Whisper Bouquet", price: "$46", tone: "neutral" as const },
  { name: "Velvet Bloom Trio", price: "$72", tone: "primary" as const },
  { name: "Midnight Orchid", price: "$84", tone: "accent" as const },
  { name: "Rose Gold Petite", price: "$58", tone: "neutral" as const },
];

export function BestSellers() {
  return (
    <section className="bg-surface px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mx-auto mb-12 max-w-xl text-center sm:mb-16">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">Best Sellers</h2>
          <p className="mt-4 font-sans leading-relaxed text-ink/70">
            The arrangements our customers come back for, again and again.
          </p>
        </MotionReveal>

        <ProductRow products={bestSellers} />
      </div>
    </section>
  );
}
