import React, { FunctionComponent } from 'react';
import { ExerciseType } from '@woap/mobx/exercise';
import styled from '@woap/utils/styled-components';
import { colors } from '@woap/styles/colors';

import { BodyVisualisation } from '../BodyVisualisation';
import { Spacer } from '../Spacer';

interface Props {
  exercise: ExerciseType;
  width: number;
}

export const ExercisePreview: FunctionComponent<Props> = ({ exercise, width }) => {
  return (
    <Container>
      <Title>{exercise.name}</Title>
      <Spacer height={2} />
      <BodyVisualisationContainer>
        <BodyVisualisation
          width={width}
          ratios={exercise.muscleRatios}
          selectedMusclesColor={colors.white}
          musclesBackgroundColor={colors.black}
        />
      </BodyVisualisationContainer>
      <Spacer height={2} />
      <DescriptionTitle>Description :</DescriptionTitle>
      <Spacer height={1} />
      <Description>{exercise.description}</Description>
    </Container>
  );
};

const Container = styled.ScrollView({});

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  color: theme.colors.white,
  fontWeight: 'bold',
  textAlign: 'center',
}));
const DescriptionTitle = styled.Text(({ theme }) => ({
  ...theme.fonts.h2,
  color: theme.colors.white,
  fontWeight: 'bold',
}));
const Description = styled.Text(({ theme }) => ({
  ...theme.fonts.h4,
  color: theme.colors.white,
}));

const BodyVisualisationContainer = styled.View({ alignItems: 'center' });
