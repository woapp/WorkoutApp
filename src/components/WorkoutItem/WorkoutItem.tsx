import React, { FunctionComponent } from 'react';

import styled from '../../utils/styled-components';
import { WorkoutType } from '../../modules/workout';

export const WorkoutItem: FunctionComponent<{ workout: WorkoutType }> = ({ workout }) => {
  return (
    <Container>
      <Name>{workout.name}</Name>
      <Exercises>{workout.nbExercises} exercices</Exercises>
    </Container>
  );
};

const Container = styled.View(props => ({
  padding: props.theme.margin.x2,
  borderBottomColor: props.theme.colors.lightGrey,
  borderBottomWidth: 1,
}));

const Name = styled.Text({
  fontWeight: 'bold',
  fontSize: 24,
});

const Exercises = styled.Text({
  fontSize: 18,
});
