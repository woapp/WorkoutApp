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
    },
    width: {
      s: 1,
    },
  },
};
