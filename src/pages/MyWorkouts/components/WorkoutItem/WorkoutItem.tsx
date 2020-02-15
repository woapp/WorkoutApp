import React, { FunctionComponent } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { Alert } from 'react-native';
import { observer } from 'mobx-react-lite';

import styled from '../../../../utils/styled-components';
import { WorkoutType } from '../../../../modules/workout';
import { Routes } from '../../../../navigation/routes';

interface Props {
  workout: WorkoutType;
  deleteWorkout: (workout: WorkoutType) => void;
}

export const WorkoutItem: FunctionComponent<Props> = observer(({ workout, deleteWorkout }) => {
  const navigation = useNavigation();

  const navigateToWorkoutEditor = () => navigation.navigate(Routes.WorkoutEditor, { workout });

  const showDeleteAlert = () => {
    Alert.alert('', 'Voulez-vous supprimer ce workout ?', [
      { text: 'Annuler', onPress: () => {} },
      {
        text: 'Supprimer',
        onPress: () => deleteWorkout(workout),
        style: 'destructive',
      },
    ]);
  };

  return (
    <Container onPress={navigateToWorkoutEditor} onLongPress={showDeleteAlert}>
      <Name>{workout.name}</Name>
      <Exercises>{workout.nbExercises} exercices</Exercises>
    </Container>
  );
});

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
