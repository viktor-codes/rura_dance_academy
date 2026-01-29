"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "../types";

type MobileMenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenuOverlay({ open, onClose }: MobileMenuOverlayProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 z-40 bg-sense-light/95 backdrop-blur-md"
          aria-hidden={!open}
        >
          <nav
            aria-label="Mobile"
            className="flex h-full w-full flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans uppercase tracking-wider text-sense-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose"
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
