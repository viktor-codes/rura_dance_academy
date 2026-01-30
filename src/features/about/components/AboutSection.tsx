"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IRINA_IMAGE_SRC = "/images/iryna.jpg";
const SECTION_TITLE = "Meet your coach";
/** Arcs move by this amount to fully reveal the image */
const ARC_REVEAL_OFFSET = 240;
/** Outer arcs start/end scroll range — slightly delayed vs inner */
const OUTER_ARC_PROGRESS = [0.1, 0.55] as const;

const MD_BREAKPOINT = 768;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MD_BREAKPOINT - 1}px)`);
    setIsMobile(mql.matches);
    const handler = () => setIsMobile(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Desktop: inner pair opens first, outer pair with delay (scale/чешуя effect).
  const leftInnerX = useTransform(
    scrollYProgress,
    [0, 0.45],
    [0, -ARC_REVEAL_OFFSET]
  );
  const rightInnerX = useTransform(
    scrollYProgress,
    [0, 0.45],
    [0, ARC_REVEAL_OFFSET]
  );
  const leftOuterX = useTransform(
    scrollYProgress,
    [...OUTER_ARC_PROGRESS],
    [0, -ARC_REVEAL_OFFSET]
  );
  const rightOuterX = useTransform(
    scrollYProgress,
    [...OUTER_ARC_PROGRESS],
    [0, ARC_REVEAL_OFFSET]
  );
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0.7, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-sense-light/30 px-4 py-16"
      aria-labelledby="about-section-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="mb-16 w-full text-center">
          <motion.h2
            id="about-section-heading"
            className="font-angst text-balance text-4xl text-sense-dark lg:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {SECTION_TITLE}
          </motion.h2>
        </div>
        {/* Mobile: only portrait. Desktop: portrait + 4 arcs (inner pair + outer pair with delay). */}
        <div className="relative h-80 w-80 shrink-0 overflow-visible md:h-[450px] md:w-[450px]">
          {/* Portrait (under arcs on desktop) */}
          <div className="absolute inset-0 z-10 overflow-hidden rounded-full border border-sense-rose/20 bg-sense-dark/5 shadow-inner">
            <Image
              src={IRINA_IMAGE_SRC}
              alt="Irina Rura — Founder & Artistic Director"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 320px, 450px"
              priority={false}
            />
          </div>

          {/* Desktop only: four semicircles — inner pair + outer pair (opens with delay) */}
          {!isMobile && (
            <>
              {/* Left outer — opens with delay */}
              <motion.div
                style={{ x: leftOuterX }}
                className="absolute left-0 top-0 z-18 h-full w-1/2 -translate-x-full rounded-l-full border-r border-white/20 bg-white/50 shadow-xl backdrop-blur-xl"
                aria-hidden
              />
              {/* Left inner — quote */}
              <motion.div
                style={{ x: leftInnerX }}
                className="absolute left-0 top-0 z-20 flex h-full w-1/2 items-center justify-center rounded-l-full border-r border-white/30 bg-white/60 p-6 shadow-2xl backdrop-blur-2xl md:p-8"
                aria-hidden
              >
                <p className="text-center font-serif text-sm italic text-sense-dark/80 md:text-base">
                  &ldquo;Dance is the hidden language of the soul.&rdquo;
                </p>
              </motion.div>
              {/* Right inner — 15+ */}
              <motion.div
                style={{ x: rightInnerX }}
                className="absolute right-0 top-0 z-20 flex h-full w-1/2 flex-col items-center justify-center rounded-r-full border-l border-white/30 bg-white/60 p-6 shadow-2xl backdrop-blur-2xl md:p-8"
                aria-hidden
              >
                <span className="font-angst text-3xl text-sense-rose/60 md:text-4xl">
                  15+
                </span>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sense-dark/60">
                  Years of Excellence
                </p>
              </motion.div>
              {/* Right outer — opens with delay */}
              <motion.div
                style={{ x: rightOuterX }}
                className="absolute left-full top-0 z-18 h-full w-1/2 rounded-r-full border-l border-white/20 bg-white/50 shadow-xl backdrop-blur-xl"
                aria-hidden
              />
            </>
          )}
        </div>

        {/* Text below */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-30 -mt-10 text-center"
        >
          <h2
            id="about-irina-heading"
            className="font-angst text-6xl text-sense-dark md:text-8xl"
          >
            Irina Rura
          </h2>
          <p className="mt-2 font-serif text-xl italic text-sense-dark/70">
            Founder & Artistic Director
          </p>
        </motion.div>
      </div>
    </section>
  );
}
