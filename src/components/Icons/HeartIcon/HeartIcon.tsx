import React, { FunctionComponent } from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors } from '@woap/styles/colors';

interface Props {
  size?: number;
  selected: boolean;
}

export const HeartIcon: FunctionComponent<Props> = ({ size = 75, selected }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 75 69" fill="none">
      <Path
        d="M73.54 12.647c3.406 10.525.555 21.235-5.453 29.304-3.965 5.472-8.704 10.188-13.55 14.312-4.457 4.149-14.433 12.36-17.077 12.587-2.337-.447-4.96-3.09-6.815-4.45C20.22 56.475 8.995 46.837 3.305 36.3c-4.771-10.117-4.78-22.63 2.646-30.387 9.628-8.68 24.145-6.984 31.509 2.085a21.314 21.314 0 017.296-6.054c11.7-4.67 23.873.089 28.783 10.704z"
        fill={selected ? 'url(#prefix__paint0_linear)' : colors.greyScale[80]}
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={10.156}
          y1={9.453}
          x2={60.058}
          y2={63.931}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#20CC86" />
          <Stop offset={1} stopColor="#20CCC2" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
