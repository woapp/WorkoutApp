import styled from '@woap/utils/styled-components';
import { ActivityIndicator } from 'react-native-paper';

interface Props {
  size: number;
  color: string;
}

export const Loader = styled(ActivityIndicator).attrs<Props>(({ theme, size, color }) => ({
  size: size ? size : 20,
  color: color ? color : theme.colors.white,
}))``;
