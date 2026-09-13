import { useCallback, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { selectedProjects, type Project } from "@/data/projects";
import { Reveal } from "./motion/Reveal";

const formatIndex = (id: number) => String(id).padStart(2, "0");

const ProjectRow = ({
  project,
  index,
  onHover,
  onLeave,
}: {
  project: Project;
  index: number;
  onHover: (project: Project) => void;
  onLeave: () => void;
}) => {
  const rowRef = useRef<HTMLLIElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      ref={rowRef}
      className="group border-t border-zinc-800/90"
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a
        href={project.href ?? `#project-${project.id}`}
        target={project.href ? "_blank" : undefined}
        rel={project.href ? "noopener noreferrer" : undefined}
        className="site-grid py-6 md:py-8 lg:py-10"
        onMouseEnter={() => onHover(project)}
        onMouseLeave={onLeave}
        onFocus={() => onHover(project)}
        onBlur={onLeave}
      >
        <span className="col-span-2 text-xs tabular-nums text-zinc-600 md:col-span-1 md:text-sm">
          {formatIndex(project.id)}
        </span>
        <span className="col-span-10 flex flex-col gap-2 md:col-span-5 md:gap-3">
          <span className="font-display text-2xl font-medium tracking-[-0.02em] text-zinc-100 transition-colors duration-300 group-hover:text-white md:text-3xl lg:text-4xl">
            {project.title}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-600">
            {project.status} · {project.year}
          </span>
        </span>
        <span className="col-span-12 mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-zinc-500 md:col-span-5 md:mt-0 md:justify-end md:text-right lg:col-span-4 lg:col-start-9">
          {project.techStack.map((tech, i) => (
            <span key={tech} className="inline-flex items-center gap-3">
              {i > 0 && (
                <span className="hidden text-zinc-700 md:inline" aria-hidden>
                  /
                </span>
              )}
              <span className="transition-colors duration-300 group-hover:text-zinc-400">
                {tech}
              </span>
            </span>
          ))}
        </span>
        <span
          className="col-span-12 hidden items-center justify-end text-zinc-600 transition-all duration-500 group-hover:translate-x-1 group-hover:text-zinc-300 md:col-span-1 md:flex"
          aria-hidden
        >
          ↗
        </span>
      </a>
    </motion.li>
  );
};

const HoverPreview = ({
  project,
  visible,
  x,
  y,
}: {
  project: Project | null;
  visible: boolean;
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
}) => {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-40 hidden w-[min(28rem,42vw)] overflow-hidden rounded-sm border border-zinc-800 bg-zinc-900 shadow-2xl lg:block"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={false}
      animate={{
        opacity: visible && project ? 1 : 0,
        scale: visible && project ? 1 : 0.96,
      }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence mode="wait">
        {project && (
          <motion.img
            key={project.id}
            src={project.image}
            alt=""
            className="aspect-[16/10] w-full object-cover object-top grayscale-[0.15] contrast-[1.05]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      <div className="border-t border-zinc-800 px-4 py-3">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Preview
        </p>
        <p className="mt-1 font-display text-lg text-zinc-100">{project?.title}</p>
      </div>
    </motion.div>
  );
};

const SelectedWorks = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 22, mass: 0.4 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 22, mass: 0.4 });
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointerMove = useCallback(
    (e: React.MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (e.clientY < rect.top || e.clientY > rect.bottom) {
        setPreviewVisible(false);
        return;
      }
      pointerX.set(e.clientX);
      pointerY.set(e.clientY);
    },
    [pointerX, pointerY],
  );

  const handleHover = useCallback((project: Project) => {
    setActive(project);
    setPreviewVisible(true);
  }, []);

  const handleLeave = useCallback(() => {
    setPreviewVisible(false);
    setActive(null);
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative bg-zinc-950 py-24 text-zinc-50 md:py-32 lg:py-40"
      onMouseMove={handlePointerMove}
      onMouseLeave={handleLeave}
    >
      <HoverPreview
        project={active}
        visible={previewVisible}
        x={springX}
        y={springY}
      />

      <div className="site-grid mb-16 md:mb-24">
        <div className="col-span-12 lg:col-span-8 lg:col-start-1">
          <Reveal>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-zinc-500 md:text-xs">
              Selected works
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-zinc-100 md:text-5xl lg:text-6xl">
              Crafted for clarity,
              <br />
              built to scale.
            </h2>
          </Reveal>
        </div>
        <Reveal
          className="col-span-12 mt-8 lg:col-span-4 lg:col-start-9 lg:mt-16 lg:text-right"
          delay={0.12}
        >
          <p className="text-sm leading-relaxed text-zinc-500 md:text-base">
            A curated set of products—client platforms, internal tools, and
            full-stack applications—delivered with obsessive attention to
            structure and detail.
          </p>
        </Reveal>
      </div>

      <ul className="border-b border-zinc-800/90">
        {selectedProjects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
            onHover={handleHover}
            onLeave={handleLeave}
          />
        ))}
      </ul>

      <div className="site-grid mt-12 md:mt-16">
        <p className="col-span-12 text-center text-xs uppercase tracking-[0.25em] text-zinc-600 lg:col-span-8 lg:col-start-3">
          Hover a project on desktop to preview · Tap to open when available
        </p>
      </div>
    </section>
  );
};

export default SelectedWorks;
