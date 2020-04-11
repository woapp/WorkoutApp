import LinearGradient from 'react-native-linear-gradient';
import styled from '@woap/utils/styled-components';
import { colors } from '@woap/styles/colors';

export const Background = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [colors.green, colors.blue],
  flex: 1,
})``;
