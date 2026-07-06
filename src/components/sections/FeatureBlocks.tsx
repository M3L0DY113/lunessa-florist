import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";

const features = [
  {
    title: "Custom Orders",
    description:
      "Tell us your colors, your occasion, your vision, and we will shape a one-of-a-kind bouquet just for you.",
    cta: "Start a Custom Order",
    tone: "primary" as const,
  },
  {
    title: "Weddings",
    description:
      "Everlasting bouquets, boutonnieres, and centerpieces that stay as beautiful in the photos as they do years later.",
    cta: "Plan Your Wedding Order",
    tone: "accent" as const,
  },
  {
    title: "Corporate Gifting",
    description:
      "Branded, bulk, and beautifully packaged soap flower arrangements that make an impression that lasts.",
    cta: "Enquire About Bulk Orders",
    tone: "neutral" as const,
  },
];

export function FeatureBlocks() {
  return (
    <section className="bg-neutral px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-16 md:gap-20">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16"
          >
            <MotionReveal className={index % 2 === 1 ? "md:order-2" : ""}>
              <PlaceholderBlock
                label={feature.title}
                tone={feature.tone}
                className="aspect-[4/3] w-full"
              />
            </MotionReveal>
            <MotionReveal
              delay={0.15}
              className={`flex flex-col gap-4 ${index % 2 === 1 ? "md:order-1" : ""}`}
            >
              <h3 className="font-serif text-2xl text-ink sm:text-3xl">{feature.title}</h3>
              <p className="font-sans leading-relaxed text-ink/70">{feature.description}</p>
              <Button href="#contact" variant="outline" className="self-start">
                {feature.cta}
              </Button>
            </MotionReveal>
          </div>
        ))}
      </div>
    </section>
  );
}
