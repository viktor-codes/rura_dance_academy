"use client";

import { motion } from "framer-motion";
import type { AgeGroup, DanceStyle } from "../types";

const AGE_GROUP_LABELS: Record<AgeGroup, string> = {
  kids: "Kids 4–12",
  teens: "Teens 13–19",
  adults: "Adults 20+",
};

export type GroupCardProps = {
  style: DanceStyle;
};

export function GroupCard({ style }: GroupCardProps) {
  const ageLabel = AGE_GROUP_LABELS[style.ageGroup];
  const hasImage = Boolean(style.image?.trim());

  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative flex h-full min-h-[350px] flex-col overflow-hidden rounded-4xl border border-border bg-white shadow-sm transition-colors focus-within:ring-2 focus-within:ring-sense-rose focus-within:ring-offset-2 hover:border-sense-rose"
    >
      {hasImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${style.image})` }}
          aria-hidden
        />
      )}
      {hasImage && (
        <div
          className="absolute inset-0 bg-linear-to-b from-sense-dark via-sense-dark/25 to-sense-dark"
          aria-hidden
        />
      )}
      <div
        className={`relative z-10 flex flex-1 flex-col p-5 ${hasImage ? "justify-end" : ""}`}
      >
        <p
          className={`font-sans text-xs uppercase tracking-widest ${hasImage ? "text-sense-light/90" : "text-sense-dark/70"}`}
          aria-hidden
        >
          {ageLabel}
        </p>
        <h3
          className={`mt-2 font-angst text-lg font-bold ${hasImage ? "text-sense-light" : "text-sense-dark"}`}
        >
          {style.title}
        </h3>
        <p
          className={`mt-2 flex-1 font-sans text-sm ${hasImage ? "text-sense-light/95" : "text-sense-dark"}`}
        >
          {style.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2" aria-hidden>
  {style.benefit.map((b) => (
    <span
      key={b}
      className={`rounded-full border px-3 py-1 font-sans text-xs font-medium text-sense-rose ${
        hasImage ? "border-white/20 bg-white/10 backdrop-blur-sm" : "border-sense-rose/40"
      }`}
    >
      {b}
    </span>
  ))}
</div>
      </div>
    </motion.article>
  );
}
