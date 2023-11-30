import i18n from "i18next";
import translationEN from "../locales/EN/translationEN.json";
import translationJP from "../locales/JP/translationJP.json";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: translationEN,
  },
  jp: {
    translation: translationJP,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
