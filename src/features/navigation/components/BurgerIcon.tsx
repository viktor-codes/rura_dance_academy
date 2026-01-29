"use client";

import { motion } from "framer-motion";

type BurgerIconProps = {
  open: boolean;
  onClick: () => void;
  className?: string;
  "aria-label": string;
};

const lineVariants = {
  closed: { rotate: 0, y: 0, opacity: 1 },
  openTop: { rotate: 45, y: 8, opacity: 1 },
  openMid: { opacity: 0 },
  openBottom: { rotate: -45, y: -8, opacity: 1 },
};

export function BurgerIcon({
  open,
  onClick,
  className = "",
  "aria-label": ariaLabel,
}: BurgerIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={open}
      className={`inline-flex size-10 flex-col items-center justify-center gap-1.5 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose ${className}`.trim()}
    >
      <motion.div
        className="h-0.5 w-6 origin-center rounded-full bg-current"
        variants={lineVariants}
        initial="closed"
        animate={open ? "openTop" : "closed"}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
      <motion.div
        className="h-0.5 w-6 origin-center rounded-full bg-current"
        variants={lineVariants}
        initial="closed"
        animate={open ? "openMid" : "closed"}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="h-0.5 w-6 origin-center rounded-full bg-current"
        variants={lineVariants}
        initial="closed"
        animate={open ? "openBottom" : "closed"}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      />
    </button>
  );
}
