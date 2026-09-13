import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "#selected-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-500",
        scrolled
          ? "border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="site-grid items-center py-5 md:py-6">
        <a
          href="#hero"
          className="col-span-6 text-sm font-medium tracking-[-0.02em] text-neutral-100 md:col-span-4"
        >
          Emre Güler
          <span className="text-neutral-600">.</span>
        </a>

        <nav
          aria-label="Primary"
          className="col-span-6 hidden justify-center gap-10 md:col-span-4 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.65rem] uppercase tracking-[0.28em] text-neutral-500 transition-colors hover:text-neutral-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="col-span-6 flex justify-end md:col-span-4">
          <a
            href="mailto:contact@emreguler.com.tr"
            className="text-[0.65rem] uppercase tracking-[0.28em] text-neutral-400 transition-colors hover:text-white"
          >
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
