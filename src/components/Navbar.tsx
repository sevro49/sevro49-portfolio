import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-zinc-800 flex items-center justify-center py-2 drop-shadow">
      <div id="social-icons" className="flex items-center gap-4">
        <Button className="p-0 h-auto bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-zinc-800 text-3xl md:text-4xl">
          <a href="https://github.com/sevro49" target="_blank">
            <Icon icon="mdi:github"/>
          </a>
        </Button>
        <div className="relative flex items-center justify-center" ref={dropdownRef}>
          <Button
            type="button"
            onClick={() => setResumeOpen((o) => !o)}
            className="p-0 h-auto bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-zinc-800 text-3xl md:text-4xl"
            aria-expanded={resumeOpen}
            aria-haspopup="true"
          >
            <Icon icon="mdi:file-download"/>
          </Button>
          {resumeOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-1 min-w-[7rem] rounded bg-zinc-700 border border-zinc-600 shadow-lg z-50">
              <a
                href="/file/resume/emre-guler-ozgecmis.pdf"
                download="emre-guler-ozgecmis.pdf"
                className="block px-4 py-2 text-sm text-yellow-400 hover:bg-yellow-400 hover:text-zinc-800 rounded-t transition-colors"
                onClick={() => setResumeOpen(false)}
              >
                TR
              </a>
              <a
                href="/file/resume/emre-guler-resume.pdf"
                download="emre-guler-resume.pdf"
                className="block px-4 py-2 text-sm text-yellow-400 hover:bg-yellow-400 hover:text-zinc-800 rounded-b transition-colors"
                onClick={() => setResumeOpen(false)}
              >
                EN
              </a>
            </div>
          )}
        </div>
        <Button className="p-0 h-auto bg-transparent text-yellow-400 hover:bg-yellow-400 hover:text-zinc-800 text-3xl md:text-4xl">
          <a href="https://www.linkedin.com/in/sevro49/" target="_blank">
            <Icon icon="ri:linkedin-fill"/>
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
