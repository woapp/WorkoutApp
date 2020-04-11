import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

export const RightArrowIcon: FunctionComponent = () => {
  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path
        d="M11 0L9.061 1.939l7.673 7.686H0v2.75h16.734L9.06 20.061 11 22l11-11L11 0z"
        fill="#fff"
      />
    </Svg>
  );
};
