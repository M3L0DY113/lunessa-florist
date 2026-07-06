import { MotionReveal } from "@/components/motion/MotionReveal";
import { ProductRow } from "@/components/ui/ProductRow";

const products = [
  { name: "Rosalind Bouquet", price: "$58 – $78", tone: "primary" as const },
  { name: "Golden Hour Bouquet", price: "$64 – $84", tone: "accent" as const },
  { name: "Blush Petite", price: "$42 – $58", tone: "primary" as const },
  { name: "Ivory Bloom", price: "$50 – $70", tone: "neutral" as const },
  { name: "Lavender Dream", price: "$54 – $72", tone: "accent" as const },
  { name: "Coral Whisper", price: "$48 – $64", tone: "primary" as const },
  { name: "Moonlit Garden", price: "$60 – $80", tone: "neutral" as const },
];

export function ProductGrid() {
  return (
    <section id="shop" className="bg-neutral px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <MotionReveal className="mx-auto mb-12 max-w-xl text-center sm:mb-16">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">Shop the Collection</h2>
          <p className="mt-4 font-sans leading-relaxed text-ink/70">
            Every bouquet is made to order and shaped by hand — choose a size
            and let us do the rest.
          </p>
        </MotionReveal>

        <ProductRow products={products} />
      </div>
    </section>
  );
}
