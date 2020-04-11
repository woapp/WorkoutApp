import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { PlusIcon } from '@woap/components/Icons/PlusIcon';

interface Props {
  title: string;
  onPress: () => void;
}

export const NewExerciseButton: FunctionComponent<Props> = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <PlusIcon />
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
