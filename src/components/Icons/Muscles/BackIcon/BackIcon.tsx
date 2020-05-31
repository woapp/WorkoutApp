import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

export const BackIcon = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.66 5.46c.809-.013 1.841-.313 2.372-1.356a.417.417 0 01.365-.237h3.023c.157 0 .295.097.366.237.53 1.043 1.563 1.343 2.373 1.357h1.593c.886 0 1.594 1.594 1.594 1.594l.824 3.132a.393.393 0 01-.121.39c-.894.8-.971 1.248-1.063 1.785l-.014.08c-.05.288-.395.362-.587.142l-.374-.427a.38.38 0 00-.646.131c-1.102 3.322-1.625 5.369-.978 8.093a.393.393 0 01-.376.486H7.807a.393.393 0 01-.376-.486c.647-2.724.124-4.77-.978-8.093a.38.38 0 00-.647-.13l-.373.426c-.192.22-.537.146-.587-.141l-.014-.081c-.092-.537-.17-.985-1.063-1.784a.393.393 0 01-.122-.391l.825-3.132S5.18 5.46 6.065 5.46H7.66zm4.426 12.928V7.055h-.354v11.333h.354z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={5.876}
          y1={6.169}
          x2={18.267}
          y2={18.231}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#20CC86" />
          <Stop offset={1} stopColor="#20CCC2" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
