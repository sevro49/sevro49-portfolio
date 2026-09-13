import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./motion/Reveal";

const headlineLines = [
  "Building scalable",
  "systems & premium",
  "digital experiences.",
];

const hoverLineVariants = {
  rest: { x: 0, opacity: 1 },
  hover: { x: 8, opacity: 0.72 },
};

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-zinc-950 text-zinc-50"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-soft-light"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)]"
        aria-hidden
      />

      <div className="site-grid relative z-10 pb-16 pt-32 md:pb-24 md:pt-40 lg:pb-32">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <Reveal delay={0.05}>
            <p className="mb-8 max-w-xl text-[0.65rem] font-medium uppercase tracking-[0.35em] text-zinc-500 md:text-xs">
              Full-stack developer · Istanbul
            </p>
          </Reveal>

          <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.04em]">
            {headlineLines.map((line, index) => (
              <motion.span
                key={line}
                className="block overflow-hidden"
                initial={reduceMotion ? false : { opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.span
                  className="inline-block cursor-default transition-colors duration-500 hover:text-white"
                  variants={hoverLineVariants}
                  initial="rest"
                  whileHover={reduceMotion ? undefined : "hover"}
                >
                  {line}
                </motion.span>
              </motion.span>
            ))}
          </h1>

          <Reveal className="mt-12 md:mt-16" delay={0.35}>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg md:leading-relaxed">
              I architect and ship custom web applications for teams that care
              about performance, clarity, and long-term maintainability—from
              backend systems to refined interfaces.
            </p>
          </Reveal>

          <Reveal
            className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 md:mt-14"
            delay={0.45}
          >
            <a
              href="#works"
              className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-100"
            >
              <span className="border-b border-zinc-600 pb-1 transition-colors group-hover:border-zinc-100">
                View selected work
              </span>
              <span
                className="text-zinc-500 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-zinc-200"
                aria-hidden
              >
                →
              </span>
            </a>
            <a
              href="mailto:contact@emreguler.com.tr"
              className="text-sm uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-300"
            >
              contact@emreguler.com.tr
            </a>
          </Reveal>
        </div>

        <div className="col-span-12 mt-20 flex items-end justify-between border-t border-zinc-800/80 pt-6 lg:col-span-10 lg:col-start-2 lg:mt-28">
          <Reveal delay={0.5}>
            <p className="text-[0.65rem] uppercase tracking-[0.3em] text-zinc-600">
              Available for freelance &amp; contract
            </p>
          </Reveal>
          <motion.div
            className="hidden flex-col items-center gap-2 md:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="text-[0.6rem] uppercase tracking-[0.25em] text-zinc-600">
              Scroll
            </span>
            <motion.span
              className="block h-12 w-px origin-top bg-zinc-700"
              animate={reduceMotion ? undefined : { scaleY: [0.4, 1, 0.4] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
