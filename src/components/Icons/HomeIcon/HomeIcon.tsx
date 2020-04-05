import React, { FunctionComponent } from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors } from '@woap/styles/colors';

interface Props {
  focused;
}

export const HomeIcon: FunctionComponent<Props> = ({ focused }) => (
  <Svg width={28} height={28} viewBox="0 0 28 28" fill="none">
    <Path
      d="M19.333 11.693L12.667 7.84a2.667 2.667 0 00-4 2.306v7.707a2.667 2.667 0 004 2.307l6.666-3.854a2.667 2.667 0 000-4.613zM18 14l-6.667 3.853v-7.707L18 14zM14 .667a13.333 13.333 0 100 26.666A13.333 13.333 0 0014 .667zm0 24a10.666 10.666 0 110-21.333 10.666 10.666 0 010 21.332z"
      fill={focused ? 'url(#prefix__paint0_linear)' : colors.greyScale[60]}
    />
    <Defs>
      <LinearGradient
        id="prefix__paint0_linear"
        x1={4.278}
        y1={4.278}
        x2={23.722}
        y2={23.722}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#20CC86" />
        <Stop offset={1} stopColor="#20CCC2" />
      </LinearGradient>
    </Defs>
  </Svg>
);
