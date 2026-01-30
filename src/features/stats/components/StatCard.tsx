"use client";

import { motion } from "framer-motion";
import { CENTER_STAT_INDEX, type StatItem } from "../types";

export const HEART_CLIP_ID = "stats-heart-clip";

type StatCardProps = {
  item: StatItem;
  index?: number;
  /** When "heart", the card is clipped to a heart shape (for the center stat). */
  variant?: "circle" | "heart";
  /** When false (mobile), use Tailwind animations only to save CPU. When true (desktop), use Framer Motion float. */
  enableFloatAnimation?: boolean;
};

const HEART_BORDER_PX = 2;

const FLOAT_DURATION = 4;
const HEART_BEAT_DURATION = 2;

export function StatCard({
  item,
  index = 0,
  variant = "circle",
  enableFloatAnimation = true,
}: StatCardProps) {
  const isHeart = variant === "heart";
  const distanceFromCenter = Math.abs(CENTER_STAT_INDEX - index);
  const staggerDelay = distanceFromCenter * 0.3;
  const amplitude = 10 + (distanceFromCenter * 10);

  if (isHeart) {
    if (!enableFloatAnimation) {
      return (
        <div
          className="relative flex size-60 shrink-0 cursor-pointer animate-pulse-subtle transition-colors duration-300"
          style={{
            clipPath: `url(#${HEART_CLIP_ID})`,
          }}
        >
          <div className="relative size-full">
            <div className="absolute inset-0 bg-sense-rose opacity-90" />
            <div
              className="absolute flex flex-col items-center justify-center bg-white/10 p-2 text-center"
              style={{
                inset: HEART_BORDER_PX,
                clipPath: `url(#${HEART_CLIP_ID})`,
              }}
            >
              <span className="flex flex-col">
                <h4 className="font-angst text-2xl font-bold text-sense-dark sm:text-3xl">
                  {item.value}
                </h4>
                <p className="mt-1 text-xs leading-snug text-sense-dark/80 sm:text-sm">
                  The Heart of
                </p>
                <p className="text-xs font-bold leading-snug text-sense-dark/80 sm:text-sm">
                  Rura Academy
                </p>
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <motion.div
        className="relative flex size-60 shrink-0 cursor-pointer transition-colors duration-300"
        animate={{ scale: [1, 1.05, 1], opacity: 1 }}
        transition={{
          scale: {
            duration: HEART_BEAT_DURATION,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: { duration: 0.4, delay: index * 0.08 },
        }}
        whileHover={{ scale: 1.08 }}
      >
        <div
          className="relative size-full"
          style={{
            clipPath: `url(#${HEART_CLIP_ID})`,
            willChange: "transform",
          }}
        >
          <div className="absolute inset-0 bg-sense-rose opacity-90" />
          <div
            className="absolute flex flex-col items-center justify-center bg-white/10 p-2 text-center"
            style={{
              inset: HEART_BORDER_PX,
              clipPath: `url(#${HEART_CLIP_ID})`,
            }}
          >
            <span className="flex flex-col">
              <h4 className="font-angst text-2xl font-bold text-sense-dark sm:text-3xl">
                {item.value}
              </h4>
              <p className="mt-1 text-xs leading-snug text-sense-dark/80 sm:text-sm">
                The Heart of
              </p>
              <p className="text-xs font-bold leading-snug text-sense-dark/80 sm:text-sm">
                Rura Academy
              </p>
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!enableFloatAnimation) {
    return (
      <div className="flex size-60 shrink-0 flex-col items-center justify-center">
        <div className="flex size-full flex-col items-center justify-center rounded-full border-2 border-sense-rose bg-secondary/10 p-2 text-center transition-colors duration-300 hover:bg-sense-rose/10 animate-pulse-subtle cursor-pointer">
          <h4 className="text-2xl font-bold text-sense-dark sm:text-3xl">
            {item.value}
          </h4>
          <p className="mt-1 text-xs leading-snug text-sense-dark/80 sm:text-sm">
            {item.label}
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="flex size-60 shrink-0 flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="flex size-full flex-col items-center justify-center rounded-full border-2 border-sense-rose bg-secondary/10 p-2 text-center transition-colors duration-300 hover:bg-sense-rose/10 cursor-pointer"
        style={{ willChange: "transform" }}
        animate={{ y: [-amplitude, amplitude, -amplitude] }}
        transition={{
          duration: FLOAT_DURATION,
          repeat: Infinity,
          delay: staggerDelay,
          ease: "easeInOut",
        }}
      >
        <h4 className="text-2xl font-bold text-sense-dark sm:text-3xl">
          {item.value}
        </h4>
        <p className="mt-1 text-xs leading-snug text-sense-dark/80 sm:text-sm">
          {item.label}
        </p>
      </motion.div>
    </motion.div>
  );
}
