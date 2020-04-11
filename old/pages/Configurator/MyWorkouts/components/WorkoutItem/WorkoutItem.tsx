import React, { FunctionComponent } from 'react';
import { Alert } from 'react-native';
import { observer } from 'mobx-react-lite';
import { TextTitle } from '@woap/components/Texts';
import styled from '@woap/utils/styled-components';
import { Routes } from '@woap/navigation/routes';
import { WorkoutType } from '@woap/mobx/workout';
import { useNavigation } from '@react-navigation/native';

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
      <TextTitle>{workout.name}</TextTitle>
      <Exercises>{workout.nbExercises} exercices</Exercises>
    </Container>
  );
});

const Container = styled.TouchableOpacity(props => ({
  padding: props.theme.margin.x2,
  borderBottomColor: props.theme.colors.greyScale[20],
  borderBottomWidth: 1,
}));

const Exercises = styled.Text({
  fontSize: 18,
});