import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';

interface Props {
  onPress: () => void;
  title: string;
}

export const Button: FunctionComponent<Props> = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.TouchableOpacity(({ theme }) => ({
  backgroundColor: theme.colors.black,
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
