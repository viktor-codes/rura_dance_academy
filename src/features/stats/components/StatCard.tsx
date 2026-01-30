"use client";

import { motion } from "framer-motion";
import type { StatItem } from "../types";

export const HEART_CLIP_ID = "stats-heart-clip";

type StatCardProps = {
  item: StatItem;
  index?: number;
  /** When "heart", the card is clipped to a heart shape (for the center stat). */
  variant?: "circle" | "heart";
};

const HEART_BORDER_PX = 2;

export function StatCard({
  item,
  index = 0,
  variant = "circle",
}: StatCardProps) {
  const isHeart = variant === "heart";

  if (isHeart) {
    return (
      <motion.div
        className="relative flex size-60 flex-shrink-0 cursor-pointer transition-colors duration-300 hover:bg-sense-rose/5"
        style={{ clipPath: `url(#${HEART_CLIP_ID})` }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        whileHover={{ scale: 1.03 }}
      >
        {/* Border layer: full heart in accent color */}
        <div
          className="absolute inset-0 bg-sense-rose opacity-90"
          style={{ clipPath: `url(#${HEART_CLIP_ID})` }}
          aria-hidden
        />
        {/* Inner layer: inset heart for fill */}
        <div
          className="absolute flex flex-col items-center justify-center p-2 text-center bg-secondary/10 hover:bg-sense-rose/10"
          style={{
            inset: HEART_BORDER_PX,
            clipPath: `url(#${HEART_CLIP_ID})`,
          }}
        >
          <span className="mt-[-0.25rem] flex flex-col">
            <h4 className="font-bold font-angst text-2xl sm:text-3xl text-sense-dark">
              {item.value}
            </h4>
            <p className="mt-1 text-xs leading-snug text-sense-dark/80 sm:text-sm">
              The Heart of
            </p>
            <p className="mt-1 text-xs font-bold leading-snug text-sense-dark/80 sm:text-sm">
              Rura Academy
            </p>
            
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex size-60 flex-shrink-0 flex-col items-center justify-center rounded-full border-2 border-sense-rose bg-secondary/10 p-2 text-center transition-colors duration-300 hover:bg-sense-rose/10 cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
    >
      <h4 className="font-bold text-2xl sm:text-3xl text-sense-dark">
        {item.value}
      </h4>
      <p className="mt-1 text-xs leading-snug text-sense-dark/80 sm:text-sm">
        {item.label}
      </p>
    </motion.div>
  );
}
