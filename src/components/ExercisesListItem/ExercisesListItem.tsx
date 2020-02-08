import React, { FunctionComponent } from 'react';

import styled from '../../utils/styled-components';

interface ExerciseListItemProps {
  exercise: { name: string };
  sets: [{ weight: number; nbReps: number }];
}

export const ExercisesListItem: FunctionComponent<ExerciseListItemProps> = ({ exercise, sets }) => (
  <Container>
    <Name>{exercise.name}</Name>
    <Sets>{`${sets.length} séries`}</Sets>
  </Container>
);

const Container = styled.View(props => ({
  padding: props.theme.margin.x2,
  borderBottomColor: props.theme.colors.lightGrey,
  borderBottomWidth: 1,
}));

const Name = styled.Text({
  fontWeight: 'bold',
  fontSize: 24,
});

const Sets = styled.Text({
  fontSize: 18,
});
