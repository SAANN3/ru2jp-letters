import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      "enter-text": "Enter text",
      "output":"Output",
      "clipboard-copy":"Copy to clipboard",
      "title":"Convert RU text to JP/CN symbols",
    }
  },
  ru: {
    translation: {
      "enter-text": "Введите текст",
      "output":"Результат",
      "clipboard-copy":"Скопировать",
      "title":"Замена RU символов на JP/CN ",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    ...(localStorage.getItem('i18nextLng') == undefined) && {lng: "en"}, 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;