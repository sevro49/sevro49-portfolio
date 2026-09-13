import { useTranslation } from "react-i18next";
import { locales, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

const LanguageSwitch = () => {
  const { i18n, t } = useTranslation();
  const current = (i18n.resolvedLanguage ?? i18n.language).split("-")[0] as Locale;

  return (
    <div
      role="group"
      aria-label={t("lang.label")}
      className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.28em]"
    >
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-2">
          {index > 0 && <span className="text-neutral-700">/</span>}
          <button
            type="button"
            onClick={() => {
              void i18n.changeLanguage(locale);
            }}
            className={cn(
              "transition-colors",
              current === locale
                ? "text-neutral-100"
                : "text-neutral-600 hover:text-neutral-300",
            )}
            aria-pressed={current === locale}
          >
            {t(`lang.${locale}`)}
          </button>
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitch;
