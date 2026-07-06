import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";

export function OurStory() {
  return (
    <section className="bg-surface px-6 py-16 text-center sm:px-10 sm:py-24">
      <MotionReveal className="mx-auto flex max-w-xl flex-col items-center gap-6">
        <h2 className="font-serif text-3xl text-ink sm:text-4xl">Our Story</h2>
        <p className="font-sans leading-relaxed text-ink/70">
          Lunessa began with a wish to create a bouquet that could outlast the
          moment it was given for — every petal shaped by hand, made to be
          kept.
        </p>
        <Button href="#contact" variant="outline">
          Get to Know Us
        </Button>
      </MotionReveal>
    </section>
  );
}
