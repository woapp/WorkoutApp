import React, { FunctionComponent } from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors } from '@woap/styles/colors';

interface Props {
  focused: boolean;
}

export const ProfileIcon: FunctionComponent<Props> = ({ focused }) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path
      d="M13.713 10.71a5.996 5.996 0 002.058-3.025 5.966 5.966 0 00-.088-3.65 6 6 0 00-2.2-2.923 6.053 6.053 0 00-6.995 0 6 6 0 00-2.2 2.923 5.965 5.965 0 00-.089 3.65 5.995 5.995 0 002.058 3.024 10.043 10.043 0 00-4.262 3.228 9.964 9.964 0 00-1.989 4.948 1 1 0 00.216.738 1.012 1.012 0 001.794-.518 7.981 7.981 0 012.631-5.069 8.065 8.065 0 015.358-2.034c1.977 0 3.884.724 5.358 2.034a7.98 7.98 0 012.631 5.069 1.008 1.008 0 001.005.89h.11c.264-.031.505-.164.67-.37a.996.996 0 00.215-.73 9.963 9.963 0 00-1.999-4.96 10.044 10.044 0 00-4.282-3.226zM9.985 10a4.036 4.036 0 01-2.233-.674 4.003 4.003 0 01-1.48-1.794 3.977 3.977 0 01.87-4.357 4.04 4.04 0 014.38-.867 4.015 4.015 0 011.805 1.473 3.982 3.982 0 01-.5 5.048 4.031 4.031 0 01-2.842 1.17z"
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
