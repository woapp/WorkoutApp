import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CrossIcon = props => {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" {...props}>
      <Path
        d="M6.018 7.254L7.95 5.322l5.32 5.32 5.05-5.05 2.087 2.087-5.05 5.05 5.321 5.32-1.933 1.933-5.32-5.32L8.387 19.7 6.3 17.613l5.038-5.038-5.32-5.32z"
        fill="#FFFBF4"
      />
    </Svg>
  );
};
