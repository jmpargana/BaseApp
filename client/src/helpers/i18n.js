import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


import translationEN from '../assets/locales/en/translation.json';
import translationRU from '../assets/locales/ru/translation.json';

// call the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)  // passes i18n down to react-i18next
  .init({
    resources,            // read from json files
    lng: 'en',
    fallbackLng: 'en',    // if no language was found on browser

    debug: true,          // for development

    keySeperator: false,  // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already saves from xss
    },
  });

export default i18n;
