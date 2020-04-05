import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';

interface Props {
  title: string;
  onPress: () => void;
}

export const NewExerciseButton: FunctionComponent<Props> = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Button>+</Button>
    </Container>
  );
};

const Container = styled.TouchableOpacity(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: theme.margin.x2,
  padding: theme.margin.x3,
  backgroundColor: theme.colors.transparentWhiteScale[20],
  borderWidth: 2,
  borderRadius: 8,
  borderStyle: 'dashed',
  borderColor: theme.colors.white,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h2,
  color: theme.colors.white,
}));

const Button = styled.Text(({ theme }) => ({
  ...theme.fonts.h2,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
