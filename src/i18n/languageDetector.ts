import * as RNLocalize from 'react-native-localize';

const fallback = {
  languageTag: 'en',
};

const { languageTag } = RNLocalize.findBestAvailableLanguage(['en', 'fr']) || fallback;

export const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    callback(languageTag);
  },
  init: () => null,
  cacheUserLanguage: () => null,
} as const;
