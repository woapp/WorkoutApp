import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ArrowBackwardIcon = (props: SvgProps) => {
  return (
    <Svg width={23} height={23} viewBox="0 0 23 23" fill="none" {...props}>
      <Path
        d="M11 22l1.939-1.939-7.673-7.686H22v-2.75H5.266l7.673-7.686L11 0 0 11l11 11z"
        fill="#fff"
      />
    </Svg>
  );
};
