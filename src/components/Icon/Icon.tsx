import { ViewStyle } from 'react-native';
import React from 'react';
import { IconName } from '@woap/styles/icons';
import { theme } from '@woap/styles/theme';
import styled from '@woap/utils/styled-components';

import { TextBody } from '../Texts';

interface Props {
  name: IconName;
  size?: number;
  color?: string;
  onPress?: () => void;
  contentContainerStyle?: ViewStyle;
}

export const Icon: React.FC<Props> = ({ onPress, contentContainerStyle }) => (
  <Container
    hitSlop={theme.hitSlop}
    onPress={onPress}
    style={contentContainerStyle}
    disabled={!onPress}
  >
    <TextBody>REPLACE ME</TextBody>
  </Container>
);

const Container = styled.TouchableOpacity({
  alignItems: 'center',
  justifyContent: 'center',
});
