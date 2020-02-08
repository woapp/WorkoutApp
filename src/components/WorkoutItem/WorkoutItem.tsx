import React, { FunctionComponent } from 'react';
import { useNavigation } from 'react-navigation-hooks';

import styled from '../../utils/styled-components';
import { WorkoutType } from '../../modules/workout';
import { Routes } from '../../navigation/routes';

export const WorkoutItem: FunctionComponent<{ workout: WorkoutType }> = ({ workout }) => {
  const navigation = useNavigation();
  const navigateToWorkoutEditor = () => {
    navigation.navigate(Routes.WorkoutEditor);
  };

  return (
    <Container onPress={navigateToWorkoutEditor}>
      <Name>{workout.name}</Name>
      <Exercises>{workout.nbExercises} exercices</Exercises>
    </Container>
  );
};

const Container = styled.TouchableOpacity(props => ({
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
