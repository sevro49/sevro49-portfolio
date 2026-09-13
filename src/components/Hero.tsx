import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ease = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const { t, i18n } = useTranslation();
  const reduceMotion = useReducedMotion();
  const headlineLines = t("hero.headline", { returnObjects: true }) as string[];

  return (
    <section
      id="hero"
      className="hero-grain relative flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-neutral-950 text-neutral-50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.08),transparent)]"
      />

      <div className="site-grid relative z-10 w-full pb-16 pt-28 md:pb-24 md:pt-32 lg:pb-32">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="col-span-12 mb-10 flex flex-col gap-6 border-b border-neutral-800/80 pb-10 md:col-span-4 md:mb-0 md:border-b-0 md:border-r md:pb-0 md:pr-10 lg:pr-16"
        >
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-neutral-500">
            Emre Güler
          </p>
          <p className="max-w-[16rem] text-sm leading-relaxed text-neutral-400 md:text-base">
            {t("hero.role")}
          </p>
          <a
            href="#selected-works"
            className="group inline-flex w-fit items-center gap-3 text-xs uppercase tracking-[0.25em] text-neutral-300 transition-colors hover:text-white"
          >
            <span className="h-px w-8 bg-neutral-600 transition-all group-hover:w-12 group-hover:bg-white" />
            {t("hero.viewWork")}
          </a>
        </motion.div>

        <div className="col-span-12 md:col-span-8 md:pl-4 lg:pl-8">
          <h1
            key={i18n.language}
            className="max-w-[16ch] text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
          >
            {headlineLines.map((line, index) => (
              <motion.span
                key={`${i18n.language}-${line}`}
                className="hero-line block"
                initial={reduceMotion ? false : { opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15 + index * 0.12,
                  ease,
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            key={`${i18n.language}-subhead`}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
            className="mt-10 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg"
          >
            {t("hero.subhead")}
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75, ease }}
          className="col-span-12 mt-16 flex items-end border-t border-neutral-800/80 pt-8 md:mt-24"
        >
          <div className="flex flex-wrap gap-x-10 gap-y-2 text-[0.65rem] uppercase tracking-[0.3em] text-neutral-500">
            <span>{t("hero.location")}</span>
            <span>{t("hero.availability")}</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        id="about"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.95, duration: 0.7, ease }}
        className="site-grid relative z-10 w-full pb-12 pt-2 md:pb-16"
      >
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-neutral-500">
            {t("nav.about")}
          </p>
        </div>
        <p
          key={`${i18n.language}-about`}
          className="col-span-12 mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 md:col-span-8 md:col-start-5 md:mt-0 md:text-lg lg:col-span-8 lg:col-start-5"
        >
          {t("hero.about")}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
