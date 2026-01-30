"use client";

import { StatCard } from "./StatCard";
import { CENTER_STAT_INDEX, STATS_ITEMS } from "../types";

export function StatsSlider() {
  return (
    <div
      className="my-8 flex h-60 w-full snap-x snap-mandatory gap-4 overflow-x-auto px-10 scrollbar-hide md:h-72"
      role="region"
      aria-label="Statistics carousel"
    >
      {STATS_ITEMS.map((item, index) => (
        <div
          key={item.label}
          className="flex min-w-[min(280px,calc(100vw-5rem))] shrink-0 snap-center items-center justify-center"
        >
          <StatCard
            item={item}
            index={index}
            variant={index === CENTER_STAT_INDEX ? "heart" : "circle"}
            enableFloatAnimation={false}
          />
        </div>
      ))}
    </div>
  );
}
