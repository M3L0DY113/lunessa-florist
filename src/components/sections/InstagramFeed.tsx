import { MotionReveal } from "@/components/motion/MotionReveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PlaceholderBlock } from "@/components/ui/PlaceholderBlock";

const tones = ["primary", "accent", "neutral"] as const;
const posts = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  tone: tones[index % tones.length],
}));

export function InstagramFeed() {
  return (
    <footer className="bg-surface px-6 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <MotionReveal>
          <h2 className="font-serif text-2xl text-ink sm:text-3xl">@lunessaflorist</h2>
          <p className="mt-2 font-sans text-sm text-ink/60">
            Follow along for fresh arrangements and studio moments.
          </p>
        </MotionReveal>

        <StaggerGroup className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 md:grid-cols-6">
          {posts.map((post) => (
            <StaggerItem key={post.id}>
              <PlaceholderBlock label="Photo" tone={post.tone} className="aspect-square w-full" />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-16 font-sans text-xs text-ink/50">
          © {new Date().getFullYear()} Lunessa Florist. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
