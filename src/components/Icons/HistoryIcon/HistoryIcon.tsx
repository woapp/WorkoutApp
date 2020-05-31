import React, { FunctionComponent } from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors } from '@woap/styles/colors';

interface Props {
  focused: boolean;
}

export const HistoryIcon: FunctionComponent<Props> = ({ focused }) => {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
      <Path
        d="M11 0a11 11 0 00-7.568 3.047V1.1a1.1 1.1 0 10-2.2 0v4.95a1.1 1.1 0 001.1 1.1h4.95a1.1 1.1 0 000-2.2h-2.64A8.8 8.8 0 112.2 11 1.1 1.1 0 000 11 11 11 0 1011 0zm0 6.6a1.1 1.1 0 00-1.1 1.1V11a1.1 1.1 0 001.1 1.1h2.2a1.1 1.1 0 000-2.2h-1.1V7.7A1.1 1.1 0 0011 6.6z"
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
};
