import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en";
import translationVI from "./vi";

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "vi",
  lng: "vi",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
