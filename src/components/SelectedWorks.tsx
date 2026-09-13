import { useCallback, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type PreviewState = {
  project: Project;
  x: number;
  y: number;
};

const SelectedWorks = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const [preview, setPreview] = useState<PreviewState | null>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const showPreview = useCallback(
    (project: Project, event: React.MouseEvent<HTMLElement>) => {
      if (reduceMotion || window.matchMedia("(max-width: 1023px)").matches) {
        setActiveId(project.id);
        return;
      }
      setPreview({
        project,
        x: event.clientX,
        y: event.clientY,
      });
    },
    [reduceMotion],
  );

  const movePreview = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!preview || reduceMotion) return;
      setPreview((prev) =>
        prev ? { ...prev, x: event.clientX, y: event.clientY } : null,
      );
    },
    [preview, reduceMotion],
  );

  const hidePreview = useCallback(() => {
    setPreview(null);
    setActiveId(null);
  }, []);

  return (
    <section
      id="selected-works"
      ref={sectionRef}
      className="relative border-t border-neutral-900 bg-neutral-950 py-24 md:py-32 lg:py-40"
      onMouseMove={movePreview}
    >
      <div className="site-grid">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="col-span-12 mb-16 md:col-span-5 md:mb-0"
        >
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-neutral-500">
            {t("works.kicker")}
          </p>
          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-neutral-50 md:text-4xl lg:text-5xl">
            {t("works.title")}
            <span className="block text-neutral-500">
              {t("works.titleAccent")}
            </span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-500 md:text-base">
            {t("works.intro")}
          </p>
        </motion.header>

        <div className="col-span-12 md:col-span-7 md:col-start-6 lg:col-start-7">
          <ul className="divide-y divide-neutral-800/90 border-y border-neutral-800/90">
            {projects.map((project, index) => (
              <WorkRow
                key={project.slug}
                project={project}
                index={index}
                isInView={isInView}
                reduceMotion={!!reduceMotion}
                isActive={activeId === project.id}
                onEnter={(e) => showPreview(project, e)}
                onLeave={hidePreview}
              />
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {preview && !reduceMotion && (
          <motion.div
            key={preview.project.id}
            role="presentation"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease }}
            className="pointer-events-none fixed z-50 hidden w-[min(22rem,42vw)] overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl lg:block"
            style={{
              left: preview.x + 24,
              top: preview.y - 120,
            }}
          >
            <img
              src={preview.project.img}
              alt=""
              className="aspect-[4/3] w-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
            />
            <div className="border-t border-neutral-800 px-4 py-3">
              <p className="text-xs leading-relaxed text-neutral-400">
                {t(`projects.${preview.project.slug}.description`)}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

type WorkRowProps = {
  project: Project;
  index: number;
  isInView: boolean;
  reduceMotion: boolean;
  isActive: boolean;
  onEnter: (event: React.MouseEvent<HTMLElement>) => void;
  onLeave: () => void;
};

const WorkRow = ({
  project,
  index,
  isInView,
  reduceMotion,
  isActive,
  onEnter,
  onLeave,
}: WorkRowProps) => {
  const { t } = useTranslation();
  const RowTag = project.url ? "a" : "div";
  const rowProps = project.url
    ? {
        href: project.url,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.08 * index, ease }}
    >
      <RowTag
        {...rowProps}
        className={cn(
          "group relative flex flex-col gap-4 py-8 transition-colors md:flex-row md:items-center md:justify-between md:gap-8 md:py-10",
          project.url && "cursor-pointer",
        )}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div className="flex items-baseline gap-6 md:gap-10">
          <span className="text-xs tabular-nums text-neutral-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-xl font-medium tracking-[-0.02em] text-neutral-200 transition-colors group-hover:text-white md:text-2xl lg:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500 line-clamp-2">
              {t(`projects.${project.slug}.description`)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 pl-10 md:pl-0">
          {project.year && (
            <span className="text-sm tabular-nums text-neutral-600">
              {project.year}
            </span>
          )}
          <span
            aria-hidden
            className="text-neutral-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-300"
          >
            →
          </span>
        </div>

        <div
          className={cn(
            "overflow-hidden border border-neutral-800 transition-all duration-500 lg:hidden",
            isActive ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <img
            src={project.img}
            alt=""
            className="aspect-video w-full object-cover grayscale"
          />
        </div>
      </RowTag>
    </motion.li>
  );
};

export default SelectedWorks;
