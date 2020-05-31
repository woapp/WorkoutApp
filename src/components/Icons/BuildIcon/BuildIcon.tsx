import React, { FunctionComponent } from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { colors } from '@woap/styles/colors';

interface Props {
  focused: boolean;
}

export const BuildIcon: FunctionComponent<Props> = ({ focused }) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 22 22" fill="none">
      <Path
        d="M21.699 17.995l-9.117-9.087a6.494 6.494 0 00-1.446-7.005C8.827-.399 5.233-.609 2.672 1.253l3.856 3.852-1.426 1.411-3.845-3.832C-.611 5.225-.4 8.818 1.909 11.11c1.868 1.861 4.589 2.351 6.918 1.48l9.147 9.117c.391.39 1.024.39 1.416 0l2.309-2.301a.977.977 0 000-1.411zm-3.012 1.6L9.189 10.13c-.613.45-1.296.72-2.008.82-1.366.2-2.802-.21-3.846-1.25A4.463 4.463 0 012.01 6.256l3.102 3.092L9.37 5.105 6.267 2.013c1.245-.07 2.5.37 3.454 1.311a4.469 4.469 0 011.245 3.963 4.346 4.346 0 01-.884 1.961l9.488 9.457-.883.89z"
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
