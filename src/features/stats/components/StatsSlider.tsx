"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StatCard } from "./StatCard";
import { CENTER_STAT_INDEX, STATS_ITEMS } from "../types";

const SLIDE_DURATION = 0.5;

export function StatsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = STATS_ITEMS.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const translateX = -currentIndex * 20;

  return (
    <div className="relative my-8 h-60 w-full overflow-hidden md:h-72">
      <motion.div
        className="flex h-full"
        style={{ width: `${totalSlides * 100}%` }}
        animate={{ x: `${translateX}%` }}
        transition={{ type: "tween", ease: "easeOut", duration: SLIDE_DURATION }}
      >
        {STATS_ITEMS.map((item, index) => (
          <div
            key={item.label}
            className="flex h-full flex-shrink-0 items-center justify-center p-4"
            style={{ width: `${100 / totalSlides}%` }}
          >
            <StatCard
              item={item}
              index={index}
              variant={index === CENTER_STAT_INDEX ? "heart" : "circle"}
            />
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-8">
        <button
          type="button"
          onClick={handlePrev}
          className="rounded-full bg-white/80 p-1 text-sense-dark shadow opacity-90 transition-opacity hover:bg-white hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-6" aria-hidden />
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="rounded-full bg-white/80 p-1 text-sense-dark shadow opacity-90 transition-opacity hover:bg-white hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose"
          aria-label="Next slide"
        >
          <ChevronRight className="size-6" aria-hidden />
        </button>
      </div>

      <div className="absolute bottom-2 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {STATS_ITEMS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose ${
                index === currentIndex ? "bg-sense-rose" : "bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
