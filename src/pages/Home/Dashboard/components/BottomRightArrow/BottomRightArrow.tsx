import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const BottomRightArrow = () => {
  return (
    <Svg width={100} height={120} viewBox="0 0 64 80" fill="none">
      <Path
        d="M63.285 73.207a1 1 0 000-1.414l-6.364-6.364a1 1 0 00-1.414 1.414l5.657 5.657-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM.078.967C-.929 30.69 7.892 48.89 20.491 59.635 33.052 70.348 49.197 73.5 62.578 73.5v-2c-13.12 0-28.725-3.098-40.789-13.386C9.764 47.86 1.085 30.31 2.077 1.034L.078.966z"
        fill="#FFFBF4"
      />
    </Svg>
  );
};
