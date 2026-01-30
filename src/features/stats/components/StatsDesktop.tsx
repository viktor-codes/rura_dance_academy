"use client";

import { motion } from "framer-motion";
import { StatCard } from "./StatCard";
import { CENTER_STAT_INDEX, STATS_ITEMS } from "../types";

const DESKTOP_POSITIONS: readonly {
  top: string;
  left?: string;
  right?: string;
  transform: string;
  zIndex: number;
}[] = [
  { top: "50%", left: "0%", transform: "translateY(-50%)", zIndex: 10 },
  { top: "25%", left: "20%", transform: "translateY(-50%)", zIndex: 20 },
  {
    top: "50%",
    left: "37.5%",
    transform: "translate(-50%, -50%)",
    zIndex: 30,
  },
  { top: "25%", right: "20%", transform: "translateY(-50%)", zIndex: 20 },
  { top: "50%", right: "0%", transform: "translateY(-50%)", zIndex: 10 },
];

export function StatsDesktop() {
  return (
    <div className="relative mx-auto hidden h-96 w-full max-w-5xl lg:block -mt-4">
      {STATS_ITEMS.map((item, index) => {
        const pos = DESKTOP_POSITIONS[index];
        return (
          <motion.div
            key={item.label}
            className="absolute flex size-60 flex-col items-center justify-center"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              transform: pos.transform,
              zIndex: pos.zIndex,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <StatCard
              item={item}
              index={index}
              variant={index === CENTER_STAT_INDEX ? "heart" : "circle"}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
