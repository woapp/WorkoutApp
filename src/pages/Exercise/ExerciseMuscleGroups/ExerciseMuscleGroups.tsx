import React, { FunctionComponent } from 'react';
import { Background } from '@woap/components/Background';
import { Header } from '@woap/components/Header';
import { Spacer } from '@woap/components/Spacer';
import styled from '@woap/utils/styled-components';

export const ExerciseMuscleGroups: FunctionComponent = () => {
  return (
    <Background>
      <Container>
        <Header title="New Exercise" />
        <Spacer height={3} />
        <Title>CHOOSE AT LEAST ONE MUSCLE GROUP</Title>
      </Container>
    </Background>
  );
};

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  color: theme.colors.white,
  fontWeight: 'bold',
}));
