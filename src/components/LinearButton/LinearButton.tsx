import React, { FunctionComponent } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from '@woap/utils/styled-components';
import { colors } from '@woap/styles/colors';
import { TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
  title: string;
}

export const LinearButton: FunctionComponent<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Background>
        <Title>{title}</Title>
      </Background>
    </TouchableOpacity>
  );
};

const Background = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [colors.green, colors.blue],
})(({ theme }) => ({
  width: '100%',
  padding: theme.margin.x2,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.border.radius.m,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h2,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
