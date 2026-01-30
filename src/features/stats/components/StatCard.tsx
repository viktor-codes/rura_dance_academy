"use client";

import { motion } from "framer-motion";
import { CENTER_STAT_INDEX, type StatItem } from "../types";

export const HEART_CLIP_ID = "stats-heart-clip";

type StatCardProps = {
  item: StatItem;
  index?: number;
  /** When "heart", the card is clipped to a heart shape (for the center stat). */
  variant?: "circle" | "heart";
};

const HEART_BORDER_PX = 2;

/** Float duration (seconds). Stagger delay = Math.abs(CENTER_STAT_INDEX - index) * 0.3. */
const FLOAT_DURATION = 4;
/** Heart beat scale animation duration (seconds). */
const HEART_BEAT_DURATION = 2;


export function StatCard({
  item,
  index = 0,
  variant = "circle",
}: StatCardProps) {
  const isHeart = variant === "heart";
  // 1. Считаем дистанцию от центра (для центрального индекса 2)
  const distanceFromCenter = Math.abs(CENTER_STAT_INDEX - index);

  // 2. Считаем задержку для эффекта "волны"
  const staggerDelay = distanceFromCenter * 0.3;

  // 3. Динамическая амплитуда: крайние (dist 2) = 30px, средние (dist 1) = 20px, центр = 10px
  const amplitude = 10 + (distanceFromCenter * 10);

  if (isHeart) {
    return (
      <motion.div
        className="relative flex size-60 flex-shrink-0 cursor-pointer transition-colors duration-300"
        // ПЕРЕНОСИМ АНИМАЦИЮ СЮДА
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: 1 
        }}
        transition={{
          // Пульсация всего сердца
          scale: {
            duration: HEART_BEAT_DURATION,
            repeat: Infinity,
            ease: "easeInOut",
          },
          // Анимация появления (стандартная)
          opacity: { duration: 0.4, delay: index * 0.08 }
        }}
        whileHover={{ scale: 1.08 }} // Увеличиваем чуть сильнее при наведении
      >
        <div
          className="relative size-full"
          style={{ 
            clipPath: `url(#${HEART_CLIP_ID})`,
            willChange: "transform" 
          }}
        >
          {/* Слой границы */}
          <div className="absolute inset-0 bg-sense-rose opacity-90" />
          
          {/* Внутренний слой с контентом */}
          <div
            className="absolute flex flex-col items-center justify-center p-2 text-center bg-white/10"
            style={{
              inset: HEART_BORDER_PX,
              clipPath: `url(#${HEART_CLIP_ID})`,
            }}
          >
            <span className="flex flex-col">
              <h4 className="font-bold font-angst text-2xl sm:text-3xl text-sense-dark">
                {item.value}
              </h4>
              <p className="mt-1 text-xs leading-snug text-sense-dark/80 sm:text-sm">
                The Heart of
              </p>
              <p className="font-bold text-xs leading-snug text-sense-dark/80 sm:text-sm">
                Rura Academy
              </p>
            </span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex size-60 flex-shrink-0 flex-col items-center justify-center"
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
        <h4 className="font-bold text-2xl sm:text-3xl text-sense-dark">
          {item.value}
        </h4>
        <p className="mt-1 text-xs leading-snug text-sense-dark/80 sm:text-sm">
          {item.label}
        </p>
      </motion.div>
    </motion.div>
  );
}
