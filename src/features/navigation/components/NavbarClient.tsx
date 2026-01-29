"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileMenuSheet } from "./MobileMenuSheet";
import { NAV_CTA_LABEL, NAV_LINKS } from "../types";

const isDarkSection = (pathname: string) => pathname === "/";

export function NavbarClient() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dark = isDarkSection(pathname ?? "/");
  const textClass = dark ? "text-sense-light" : "text-sense-dark";
  const barClass = scrolled
    ? "bg-sense-light/90 backdrop-blur-md text-sense-dark"
    : textClass;

  return (
    <header
      className={`sticky top-0 z-50 w-full px-6 py-4 transition-colors duration-300 ${barClass}`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link
          href="/"
          className="font-angst text-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose"
        >
          Rura Dance Academy
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={item.href}
                className={`font-sans font-normal ${scrolled ? "text-sense-dark" : textClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#trial"
              className="rounded-full bg-sense-rose px-5 py-2.5 font-sans text-sense-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose"
            >
              {NAV_CTA_LABEL}
            </Link>
          </motion.div>
        </div>

        <div className="md:hidden">
          <MobileMenuSheet
            open={mobileOpen}
            onOpenChange={setMobileOpen}
            triggerClass={scrolled ? "text-sense-dark" : textClass}
          />
        </div>
      </div>
    </header>
  );
}
