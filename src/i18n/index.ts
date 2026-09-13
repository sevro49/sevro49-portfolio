import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import tr from "./locales/tr.json";

export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
const STORAGE_KEY = "locale";

const isLocale = (value: string | null): value is Locale =>
  value === "en" || value === "tr";

const readStoredLocale = (): Locale => {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : defaultLocale;
};

const applyDocumentLanguage = (lng: string) => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lng;
  document.title = i18n.t("meta.title");
};

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: readStoredLocale(),
  fallbackLng: defaultLocale,
  interpolation: { escapeValue: false },
});

applyDocumentLanguage(i18n.language);

i18n.on("languageChanged", (lng) => {
  if (isLocale(lng) && typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lng);
  }
  applyDocumentLanguage(lng);
});

export default i18n;
