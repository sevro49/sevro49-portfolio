import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ease = [0.22, 1, 0.36, 1] as const;

const Footer = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-8% 0px" });
  const reduceMotion = useReducedMotion();

  const socialLinks = [
    {
      label: t("footer.github"),
      href: "https://github.com/sevro49",
      external: true,
    },
    {
      label: t("footer.linkedin"),
      href: "https://www.linkedin.com/in/sevro49/",
      external: true,
    },
    {
      label: t("footer.resumeEn"),
      href: "/file/resume/emre-guler-resume.pdf",
      download: "emre-guler-resume.pdf",
    },
    {
      label: t("footer.resumeTr"),
      href: "/file/resume/emre-guler-ozgecmis.pdf",
      download: "emre-guler-ozgecmis.pdf",
    },
  ] as const;

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="relative border-t border-neutral-900 bg-neutral-950 pb-10 pt-24 md:pt-32 lg:pt-40"
    >
      <div className="site-grid">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease }}
          className="col-span-12 lg:col-span-8"
        >
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.35em] text-neutral-500">
            {t("footer.kicker")}
          </p>
          <h2 className="mt-8 text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-neutral-100">
            {t("footer.title")}
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-neutral-500 md:text-lg">
            {t("footer.body")}
          </p>

          <a
            href="mailto:dr.emreguler@hotmail.com.tr"
            className="group mt-12 inline-block text-[clamp(1.25rem,3.5vw,2.25rem)] font-medium tracking-[-0.02em] text-neutral-300 transition-colors hover:text-white"
          >
            dr.emreguler@hotmail.com.tr
            <span className="mt-3 block h-px max-w-0 bg-neutral-500 transition-all duration-500 group-hover:max-w-full group-hover:bg-white" />
          </a>
        </motion.div>

        <motion.nav
          aria-label={t("footer.social")}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.12, ease }}
          className="col-span-12 mt-16 flex flex-col gap-4 lg:col-span-4 lg:col-start-9 lg:mt-32"
        >
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...("download" in link && link.download
                ? { download: link.download }
                : {})}
              className="group flex items-center justify-between border-b border-neutral-800/90 py-4 text-sm uppercase tracking-[0.22em] text-neutral-500 transition-colors hover:border-neutral-600 hover:text-neutral-100"
            >
              {link.label}
              <span
                aria-hidden
                className="text-neutral-700 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-neutral-400"
              >
                →
              </span>
            </a>
          ))}
        </motion.nav>

        <div className="col-span-12 mt-20 flex flex-col gap-4 border-t border-neutral-800/80 pt-8 text-[0.65rem] uppercase tracking-[0.28em] text-neutral-600 md:mt-28 md:flex-row md:items-center md:justify-between">
          <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <p className="text-neutral-700">{t("footer.meta")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
