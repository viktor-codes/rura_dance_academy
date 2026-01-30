"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BurgerIcon } from "./BurgerIcon";
import { MobileMenuOverlay } from "./MobileMenuOverlay";
import { NAV_CTA_LABEL, NAV_LINKS } from "../types";

const isDarkSection = (pathname: string) => pathname === "/";

export function NavbarClient() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dark = isDarkSection(pathname ?? "/");
  const isHomePage = pathname === "/";
  
  // Определяем цвет текста в зависимости от скролла и страницы
  // Если проскроллено — всегда темный (т.к. фон капсулы светлый)
  // Если нет — белый на главной и темный на остальных
  const textClass = scrolled 
    ? "text-sense-dark" 
    : (dark ? "text-sense-light" : "text-sense-dark");

  const handleMobileToggle = () => setMobileOpen((prev) => !prev);
  const handleMobileClose = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "pt-2" : "pt-0"
        }`}
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
            scrolled
              ? "max-w-4xl rounded-full border border-white/20 bg-white/30 p-6 shadow-lg backdrop-blur-lg"
              : "max-w-[1200px] bg-transparent px-6 py-6"
          }`}
        >
          <Link
            href="/"
            className={`font-angst text-2xl transition-colors duration-300 focus-visible:outline-none ${textClass}`}
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
                  className={`font-sans text-sm font-medium transition-colors duration-300 ${textClass} hover:opacity-70`}
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
                className={`rounded-full px-6 py-2.5 font-sans text-sm font-bold uppercase tracking-wider transition-all shadow-sm ${
                  scrolled 
                    ? "bg-sense-rose text-sense-dark" 
                    : "bg-sense-rose text-sense-dark"
                }`}
              >
                {NAV_CTA_LABEL}
              </Link>
            </motion.div>
          </div>

          <div className="md:hidden">
            <BurgerIcon
              open={mobileOpen}
              onClick={handleMobileToggle}
              className={`transition-colors duration-300 ${textClass}`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenuOverlay open={mobileOpen} onClose={handleMobileClose} />
        )}
      </AnimatePresence>
    </>
  );
}