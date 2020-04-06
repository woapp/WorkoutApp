import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';

import { Loader } from '../Loader';

interface Props {
  onPress: () => void;
  title: string;
  isLoading?: boolean;
}

export const Button: FunctionComponent<Props> = ({ title, onPress, isLoading = false }) => {
  return <Container onPress={onPress}>{isLoading ? <Loader /> : <Title>{title}</Title>}</Container>;
};

const Container = styled.TouchableOpacity(({ theme }) => ({
  width: '100%',
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
