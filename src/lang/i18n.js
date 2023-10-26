import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { linksDataAz, linksDataRu, linksDataEn } from "../data/linksData";

const resources = {
  az: {
    translation: {
      apply: "Müraciət et",
      linksData: linksDataAz,
      contact:"Əlaqə"
    },
  },
  en: {
    translation: {
      apply: "Apply now",
      linksData: linksDataEn,
      contact:"Contact"
    },
  },
  ru: {
    translation: {
      apply: "Применить сейчас",
      linksData: linksDataRu,
      contact:"Контакт"
    },
  },
};
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // lng:"az",
    fallbackLng: "az",
    resources,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
