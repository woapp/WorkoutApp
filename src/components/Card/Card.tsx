import { Dimensions } from 'react-native';
import styled from 'styled-components';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@woap/styles/colors';

export const CARD_HEIGHT = 320;
export const CARD_WIDTH = Dimensions.get('window').width * 0.8;

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const Card = styled(AnimatedLinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [colors.green, colors.blue],
})(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: CARD_HEIGHT,
  width: CARD_WIDTH,
  paddingHorizontal: theme.margin.x2,
  borderRadius: theme.border.radius.l,
  backgroundColor: theme.colors.greyScale[90],
}));
