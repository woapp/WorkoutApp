import { ViewStyle } from 'react-native';
import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { IconName } from '@woap/styles/icons';
import { theme } from '@woap/styles/theme';
import styled from '@woap/utils/styled-components';
import iconConfig from '@woap/assets/fonts/icons/selection.json';

const BaseIcon = createIconSetFromIcoMoon(iconConfig, 'icomoon', 'icomoon.ttf');

const DEFAULT_ICON_SIZE = 32;

interface Props {
  name: IconName;
  size?: number;
  color?: string;
  onPress?: () => void;
  contentContainerStyle?: ViewStyle;
}

export const Icon: React.FC<Props> = ({
  onPress,
  name,
  size = DEFAULT_ICON_SIZE,
  color,
  contentContainerStyle,
}) => (
  <Container
    hitSlop={theme.hitSlop}
    onPress={onPress}
    style={contentContainerStyle}
    disabled={!onPress}
  >
    <BaseIcon size={size} color={color} name={name} />
  </Container>
);

const Container = styled.TouchableOpacity({
  alignItems: 'center',
  justifyContent: 'center',
});
