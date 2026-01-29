import { GroupsGrid } from "@/features/groups-catalog/components";
import { Hero } from "@/features/hero/components";

const HERO_PROPS = {
  title: "Ballroom Dance Classes in the Irish Midlands",
  description:
    "Take a free trial class and find out how dance can transform your world.",
  videoSrc: "/hero-video.mp4",
  ctaText: "Book a Trial",
} as const;

export default function Home() {
  return (
    <main>
      <Hero {...HERO_PROPS} />
      <GroupsGrid />
    </main>
  );
}
