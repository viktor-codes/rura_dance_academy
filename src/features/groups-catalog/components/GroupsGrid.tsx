"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { PanInfo } from "motion-dom";
import { useState } from "react";
import { GroupCard } from "./GroupCard";
import { AGE_TABS, GROUPS_DATA } from "../constants";
import type { AgeGroup, DanceStyle } from "../types";

function getFilteredStyles(styles: readonly DanceStyle[], ageGroup: AgeGroup): DanceStyle[] {
  return styles.filter((s) => s.ageGroup === ageGroup);
}

const STAGGER_DELAY = 0.1;
const SWIPE_THRESHOLD_PX = 50;
const DRAG_CONSTRAINT_PX = 80;

const AGE_ORDER: AgeGroup[] = ["kids", "teens", "adults"];

function getNextTab(current: AgeGroup): AgeGroup {
  const i = AGE_ORDER.indexOf(current);
  return AGE_ORDER[(i + 1) % AGE_ORDER.length];
}

function getPrevTab(current: AgeGroup): AgeGroup {
  const i = AGE_ORDER.indexOf(current);
  return AGE_ORDER[(i - 1 + AGE_ORDER.length) % AGE_ORDER.length];
}

export function GroupsGrid() {
  const [activeTab, setActiveTab] = useState<AgeGroup>("kids");
  const filtered = getFilteredStyles(GROUPS_DATA, activeTab);

  function handleSwipeEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    const offsetX = info.offset.x;
    if (offsetX > SWIPE_THRESHOLD_PX) {
      setActiveTab(getPrevTab(activeTab));
    } else if (offsetX < -SWIPE_THRESHOLD_PX) {
      setActiveTab(getNextTab(activeTab));
    }
  }

  return (
    <section
      className="bg-sense-light pb-16 pt-32"
      aria-labelledby="groups-heading"
    >
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-12 text-center">
          <h2
            id="groups-heading"
            className="font-angst text-4xl font-medium text-sense-dark md:text-5xl"
          >
            Find Your Rhythm
          </h2>
          <p className="mt-3 font-sans text-sense-dark md:text-lg">
            From first steps to professional flow — we have a group for every
            stage of your dance journey.
          </p>
        </header>

        <nav
          className="mb-10 flex justify-center md:hidden"
          aria-label="Age groups"
        >
          <div className="inline-flex rounded-full bg-sense-dark/10 p-1 shadow-sm">
            {AGE_TABS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setActiveTab(value)}
                className={`relative z-10 rounded-full px-6 py-2.5 font-sans text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose ${
                  activeTab === value ? "text-sense-rose" : "text-sense-dark"
                }`}
                aria-pressed={activeTab === value}
                aria-label={`Age group ${label}`}
              >
                {activeTab === value && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    aria-hidden
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="md:hidden">
          <motion.div
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: -DRAG_CONSTRAINT_PX, right: DRAG_CONSTRAINT_PX }}
            dragElastic={0.2}
            dragSnapToOrigin
            onDragEnd={handleSwipeEnd}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, filter: "blur(12px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(12px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 gap-6"
              >
                {filtered.map((style) => (
                  <GroupCard key={style.id} style={style} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="hidden gap-6 md:grid md:grid-cols-3">
          {GROUPS_DATA.map((style, index) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * STAGGER_DELAY, ease: "easeOut" }}
            >
              <GroupCard style={style} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
