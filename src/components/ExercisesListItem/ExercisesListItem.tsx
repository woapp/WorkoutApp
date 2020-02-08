import React, { FunctionComponent } from 'react';

import { ExerciseType } from '../../modules/exercise';
import styled from '../../utils/styled-components';
import { MuscleGroupSelectableItem } from '../MuscleGroupSelectableItem';

interface ExerciseListItemProps {
  exercise: ExerciseType;
  sets: [{ weight: number; nbReps: number }];
}

export const ExercisesListItem: FunctionComponent<ExerciseListItemProps> = ({ exercise, sets }) => (
  <Container>
    <Column>
      <Name>{exercise.name}</Name>
      <Sets>{`${sets.length} séries`}</Sets>
    </Column>
    {exercise.mainMuscleGroup && (
      <MuscleGroupSelectableItem
        muscleGroup={exercise.mainMuscleGroup}
        isSelected
        disabled
        iconSize={60}
      />
    )}
  </Container>
);

const Container = styled.View(props => ({
  padding: props.theme.margin.x2,
  borderBottomColor: props.theme.colors.lightGrey,
  borderBottomWidth: 1,
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'space-between',
}));

const Name = styled.Text({
  fontWeight: 'bold',
  fontSize: 24,
});

const Sets = styled.Text({
  fontSize: 18,
});

const Column = styled.View({
  flexDirection: 'column',
  justifyContent: 'flex-start',
});
