import { Platform } from 'react-native';

import { colors } from './colors';
import { fonts } from './fonts';

const BASE_SPACING = 8;

export const theme = {
  fonts,
  colors,
  margin: {
    d2: BASE_SPACING / 2,
    x1: BASE_SPACING,
    x2: 2 * BASE_SPACING,
    x3: 3 * BASE_SPACING,
    x4: 4 * BASE_SPACING,
    x5: 5 * BASE_SPACING,
    x6: 6 * BASE_SPACING,
    x7: 7 * BASE_SPACING,
    x8: 8 * BASE_SPACING,
    x9: 9 * BASE_SPACING,
    x10: 10 * BASE_SPACING,
  },
  border: {
    radius: {
      s: 6,
      m: 16,
      l: 24,
    },
    width: {
      s: 1,
    },
  },
  iconSize: 48,
  hitSlop: { top: 20, bottom: 20, left: 20, right: 20 },
};

export const shadow = Platform.select({
  ios: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 6.27,
    shadowOpacity: 0.34,
  },
  android: {
    elevation: 10,
  },
});
