import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import homeEn from './locales/en/home.json';
import commonEn from './locales/en/common.json';
import profileEn from './locales/en/profile.json';
import historyEn from './locales/en/history.json';
import trainingCreationEn from './locales/en/trainingCreation.json';
import commonFr from './locales/en/common.json';
import profileFr from './locales/en/profile.json';
import historyFr from './locales/en/history.json';
import trainingCreationFr from './locales/en/trainingCreation.json';
import homeFr from './locales/fr/home.json';
import exerciseCreationFr from './locales/fr/exerciseCreation.json';
import exerciseCreationEn from './locales/en/exerciseCreation.json';
import { languageDetector } from './languageDetector';

const resources = {
  en: {
    home: homeEn,
    history: historyEn,
    profile: profileEn,
    common: commonEn,
    trainingCreation: trainingCreationEn,
    exerciseCreation: exerciseCreationEn,
  },
  fr: {
    home: homeFr,
    history: historyFr,
    profile: profileFr,
    common: commonFr,
    trainingCreation: trainingCreationFr,
    exerciseCreation: exerciseCreationFr,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    saveMissing: true, // send not translated keys to endpoint
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
