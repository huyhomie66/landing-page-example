import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en";
import translationVI from "./vi";

const resources = {
  US: {
    translation: translationEN,
  },
  VN: {
    translation: translationVI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "VN",
  lng: "VN",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
