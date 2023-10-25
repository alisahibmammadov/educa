import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  az: {
    translation: {
        salam:"salam"
    },
  },
  en: {
    translation: {},
  },
  ru: {
    translation: {},
  },
};
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "az",
    resources,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
