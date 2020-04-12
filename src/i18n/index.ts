import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import homeEn from '@woap/i18n/locales/en/home';
import commonEn from '@woap/i18n/locales/en/common';
import profileEn from '@woap/i18n/locales/en/profile';
import historyEn from '@woap/i18n/locales/en/history';
import trainingCreationEn from '@woap/i18n/locales/en/trainingCreation';
import commonFr from '@woap/i18n/locales/en/common';
import profileFr from '@woap/i18n/locales/en/profile';
import historyFr from '@woap/i18n/locales/en/history';
import trainingCreationFr from '@woap/i18n/locales/en/trainingCreation';
import homeFr from '@woap/i18n/locales/fr/home';

import { languageDetector } from './languageDetector';

const resources = {
  en: {
    home: homeEn,
    history: historyEn,
    profile: profileEn,
    common: commonEn,
    trainingCreation: trainingCreationEn,
  },
  fr: {
    home: homeFr,
    history: historyFr,
    profile: profileFr,
    common: commonFr,
    trainingCreation: trainingCreationFr,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: 'fr',
    keySeparator: false, // we do not use keys in form messages.welcome
    saveMissing: true, // send not translated keys to endpoint
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
