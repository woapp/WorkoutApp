import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '@woap/styles/colors';

interface Props {
  color?: string;
}

export const HamburgerIcon: FunctionComponent<Props> = ({ color = colors.white }) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1.5C0 1.102.135.72.377.44A1.2 1.2 0 011.286 0h15.428a1.2 1.2 0 01.91.44c.24.28.376.662.376 1.06s-.136.78-.377 1.06a1.2 1.2 0 01-.909.44H1.286a1.2 1.2 0 01-.91-.44A1.636 1.636 0 010 1.5zM0 9c0-.398.135-.78.377-1.06a1.2 1.2 0 01.909-.44h15.428a1.2 1.2 0 01.91.44c.24.28.376.662.376 1.06s-.136.78-.377 1.06a1.2 1.2 0 01-.909.44H1.286a1.2 1.2 0 01-.91-.44A1.636 1.636 0 010 9zm0 7.5c0-.398.135-.78.377-1.06a1.2 1.2 0 01.909-.44h15.428a1.2 1.2 0 01.91.44c.24.28.376.662.376 1.06s-.136.78-.377 1.06a1.2 1.2 0 01-.909.44H1.286a1.2 1.2 0 01-.91-.44A1.636 1.636 0 010 16.5z"
      fill={color}
    />
  </Svg>
);
