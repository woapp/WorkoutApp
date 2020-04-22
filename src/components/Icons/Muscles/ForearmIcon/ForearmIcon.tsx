import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

export const ForearmIcon = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M5.056 14.006c.126.92 1.577 3.74 3.772 3.435.899-.193 1.82-.686 1.64-2.916a.375.375 0 01.016-.14c.276-.884.178-1.413-.224-2.286a.397.397 0 00-.15-.164c-.99-.637-1.057-2.529-1.043-3.277a.373.373 0 00-.294-.37c-1.617-.344-2.192-.86-2.711-2.077-.541-1.268-.99 3.588-1.006 3.766v.014c-.007.174-.122 3.121 0 4.015z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        d="M15.716 10.075c-2.21-.42-4.913 1.761-4.778 1.964.136.203.724 1.539.293 2.254h3.228c1.273-.101 2.43-.428 4.307-1.322a.323.323 0 00.186-.345c-.248-1.407-1.41-2.204-3.236-2.551zM9.931 18.041l5.03-.125c1.006-.108 1.723-.014 2.765-.88.69-.666.975-1.247 1.257-2.666.007-.076.012-.15.014-.225.01-.243-.248-.386-.467-.28-1.674.807-2.704 1.09-4.073 1.204h-3.222c.124 2.29-.48 2.598-1.304 2.972z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={5.764}
          y1={7.552}
          x2={12.386}
          y2={10.811}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#20CC86" />
          <Stop offset={1} stopColor="#20CCC2" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
