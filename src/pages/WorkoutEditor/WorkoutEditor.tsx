import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import styled from '../../utils/styled-components';
import { ActionButton } from '../../components/ActionButton';
import { ExercisesList } from '../../components/ExercisesList';
import { Routes } from '../../navigation/routes';
import { NameInput } from '../../components/NameInput';

export const WorkoutEditor = observer(({ navigation }: NavigationStackScreenProps) => {
  const workout = navigation.getParam('workout');
  const navigateToAddExercisesScreen = () =>
    navigation.navigate(Routes.AddExercises, {
      workout,
    });
  console.log('workout.exercises', workout.exercises); // TODO: used to force watch on workout.exercises, find better way

  return (
    <Container>
      <NameInput value={workout.name} placeholder="Entraînement" onChangeText={workout.setName} />
      <ExercisesList workout={workout} />
      <ActionButtonContainer>
        <ActionButton onPress={navigateToAddExercisesScreen} title="+" />
      </ActionButtonContainer>
    </Container>
  );
});

const Container = styled.View({
  flex: 1,
});

const ActionButtonContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
