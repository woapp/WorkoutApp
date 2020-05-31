import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '@woap/styles/colors';

interface Props {
  color?: string;
}

export const PlusIcon: FunctionComponent<Props> = ({ color = colors.white }) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <Path d="M0 10.456V7.562h7.524V0h2.952v7.562H18v2.894h-7.524V18H7.524v-7.544H0z" fill={color} />
  </Svg>
);
