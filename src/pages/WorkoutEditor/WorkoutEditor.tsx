import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import styled from '../../utils/styled-components';
import { RoundButton } from '../../components/RoundButton';
import { ExercisesList } from '../../components/ExercisesList';
import { Routes } from '../../navigation/routes';

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
      <RoundButtonContainer>
        <RoundButton onPress={navigateToAddExercisesScreen} />
      </RoundButtonContainer>
    </Container>
  );
});

const Container = styled.View({
  flex: 1,
});

const NameInput = styled.TextInput(props => ({
  borderColor: props.theme.colors.lightGrey,
  borderRadius: 20,
  borderWidth: 2,
  padding: props.theme.margin.x1,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
  margin: props.theme.margin.x2,
}));

const RoundButtonContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
