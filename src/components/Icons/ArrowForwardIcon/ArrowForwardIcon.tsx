import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ArrowForwardIcon = (props: SvgProps) => {
  return (
    <Svg width={23} height={23} viewBox="0 0 23 23" fill="none" {...props}>
      <Path
        d="M11.5.18L9.561 2.12l7.673 7.686H.5v2.75h16.734L9.56 20.241l1.939 1.94 11-11-11-11z"
        fill="#fff"
      />
    </Svg>
  );
};
