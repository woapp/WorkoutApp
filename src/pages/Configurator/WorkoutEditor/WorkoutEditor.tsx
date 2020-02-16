import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import styled from '@woap/utils/styled-components';
import { ActionButton } from '@woap/components/ActionButton';
import { ExercisesList } from '@woap/components/ExercisesList';
import { InputTitle } from '@woap/components/InputTitle';

import { Routes } from '../../../navigation/routes';

export const WorkoutEditor = observer(({ navigation }: NavigationStackScreenProps) => {
  const workout = navigation.getParam('workout');
  const navigateToAddExercisesScreen = () =>
    navigation.navigate(Routes.ExercisesChoice, {
      workout,
    });

  return (
    <Container>
      <InputTitle value={workout.name} placeholder="Entraînement" onChangeText={workout.setName} />
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
