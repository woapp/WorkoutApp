import { Dimensions } from 'react-native';
import styled from 'styled-components';
import Animated from 'react-native-reanimated';

export const CARD_HEIGHT = 320;
export const CARD_WIDTH = Dimensions.get('window').width * 0.8;

export const Card = styled(Animated.View)(props => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: CARD_HEIGHT,
  width: CARD_WIDTH,
  paddingHorizontal: props.theme.margin.x2,
  borderRadius: props.theme.border.radius.l,
  backgroundColor: props.theme.colors.greyScale[90],
  ...props.theme.shadow,
}));
