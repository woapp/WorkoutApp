import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

export const EditIcon: FunctionComponent = () => {
  return (
    <Svg width={17} height={17} viewBox="0 0 17 17" fill="none">
      <Path
        d="M1 16.006h4.24a1 1 0 00.71-.29l6.92-6.93 2.84-2.78a1.001 1.001 0 000-1.42L11.47.296a.999.999 0 00-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 00-.29.71v4.24a1 1 0 001 1zm9.76-13.59l2.83 2.83-1.42 1.42-2.83-2.83 1.42-1.42zM2 11.176l5.93-5.93 2.83 2.83-5.93 5.93H2v-2.83z"
        fill="#0A0D21"
      />
    </Svg>
  );
};
