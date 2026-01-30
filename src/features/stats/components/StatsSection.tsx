"use client";

import { motion } from "framer-motion";
import { HEART_CLIP_ID } from "./StatCard";
import { StatsDesktop } from "./StatsDesktop";
import { StatsSlider } from "./StatsSlider";

const SECTION_TITLE = "The Pulse of Every Movement";
const SECTION_DESCRIPTION =
  "At Rura Dance Academy, we believe dance is more than just steps. It is the heartbeat of our community, where technical excellence meets raw passion in every beat."

export function StatsSection() {
  return (
    <section className="relative z-10 bg-sense-light py-24 dark:bg-transparent">
      <svg aria-hidden className="absolute size-0" focusable={false}>
        <defs>
          <clipPath id={HEART_CLIP_ID} clipPathUnits="objectBoundingBox">
          <path d="M.5 0.2 C.3 0, 0 0.1, 0 0.4 C0 0.7, .5 1, .5 1 C.5 1, 1 0.7, 1 0.4 C1 0.1, .7 0, .5 0.2 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="@container relative mx-auto max-w-5xl px-6">
        <div className="text-center">
          <motion.h2
            className="font-angst text-balance text-4xl lg:text-5xl text-sense-dark"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {SECTION_TITLE}
          </motion.h2>
          <motion.p
            className="mt-4 font-sans text-sense-dark"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {SECTION_DESCRIPTION}
          </motion.p>
        </div>

        <div className="lg:hidden">
          <StatsSlider />
        </div>

        <StatsDesktop />
      </div>
    </section>
  );
}
