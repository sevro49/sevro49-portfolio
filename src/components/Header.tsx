import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#works" },
  { label: "Contact", href: "mailto:contact@emreguler.com.tr" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 mix-blend-difference"
      initial={reduceMotion ? false : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`site-grid items-center py-5 transition-[padding] duration-500 md:py-6 ${
          scrolled ? "md:py-4" : ""
        }`}
      >
        <a
          href="#hero"
          className="col-span-6 text-sm font-medium uppercase tracking-[0.25em] text-white md:col-span-4"
        >
          Emre Güler
        </a>
        <nav
          className="col-span-6 flex justify-end gap-8 md:col-span-8 md:col-start-5"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-opacity hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
