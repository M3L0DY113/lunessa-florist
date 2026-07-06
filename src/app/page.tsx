import { IntroAnimation } from "@/components/IntroAnimation";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { BestSellers } from "@/components/sections/BestSellers";
import { FeatureBlocks } from "@/components/sections/FeatureBlocks";
import { OurStory } from "@/components/sections/OurStory";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { InstagramFeed } from "@/components/sections/InstagramFeed";

export default function Home() {
  return (
    <IntroAnimation>
      <AnnouncementBar />
      <main className="flex flex-col">
        <Hero />
        <ProductGrid />
        <BestSellers />
        <FeatureBlocks />
        <OurStory />
        <ContactInfo />
      </main>
      <InstagramFeed />
    </IntroAnimation>
  );
}
