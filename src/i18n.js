import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import translationEN from "../public/locales/en/translation.json";
import translationUK from "../public/locales/uk/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  uk: {
    translation: translationUK,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("i18nextLng")
      ? localStorage.getItem("i18nextLng")
      : "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
