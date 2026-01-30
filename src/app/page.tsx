import { GroupsGrid } from "@/features/groups-catalog/components";
import { Hero } from "@/features/hero/components";
import { StatsSection } from "@/features/stats/components";
import { AboutSection } from "@/features/about/components";

const HERO_PROPS = {
  title: "Ballroom Dance Classes in the Irish Midlands",
  description:
    "Take a free trial class and find out how dance can transform your world.",
  imageSrc: "/images/hero-bg.jpg",
  ctaText: "Book a Trial",
} as const;

export default function Home() {
  return (
    <main>
      <Hero {...HERO_PROPS} />
      <AboutSection />
      <GroupsGrid />
      <StatsSection />
    </main>
  );
}
