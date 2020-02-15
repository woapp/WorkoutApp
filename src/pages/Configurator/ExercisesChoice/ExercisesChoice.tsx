import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { ExerciseType } from '../../../mobx/exercise';
import { createExercise } from '../../../mobx/exercise/constructor';
import { useStore } from '../../../utils/hooks/useStore';
import styled from '../../../utils/styled-components';
import { colors } from '../../../styles/colors';
import { WorkoutType } from '../../../mobx/workout';
import { ActionButton } from '../../../components/ActionButton';
import { Routes } from '../../../navigation/routes';

import { ExerciseItem } from './components/ExerciseItem';

export const ExercisesChoice: FunctionComponent<NavigationStackScreenProps> = observer(
  ({ navigation }) => {
    const { exercises, addExercise } = useStore();
    const workout: WorkoutType = navigation.getParam('workout');
    console.log('workoutExercises', workout.exercises); // TODO: used to force watch on workout.exercises, find better way
    console.log('exercises', exercises); // TODO: used to force watch on workout.exercises, find better way

    const closeModal = () => navigation.dismiss();

    const isExerciseInWorkout = exerciseId =>
      workout.exercises.reduce(
        (previousValue, currentValue) => currentValue.exercise.id === exerciseId || previousValue,
        false
      );

    const renderItem = ({ item }) => {
      const isChecked = isExerciseInWorkout(item.id);
      const addExerciseToWorkout = () => workout.addExercise(item);
      const removeExerciseFromWorkout = () => workout.removeExercise(item);

      return (
        <ExerciseItem
          exercise={item}
          checked={isChecked ? 'checked' : 'unchecked'}
          onPress={isChecked ? removeExerciseFromWorkout : addExerciseToWorkout}
        />
      );
    };

    const validateExerciseCreation = (newExercise: ExerciseType) => {
      addExercise(newExercise);
      workout.addExercise(newExercise);
    };

    const onCreateExercise = () => {
      const newExercise = createExercise();
      navigation.navigate(Routes.NewExercise, {
        exercise: newExercise,
        validateExerciseCreation,
      });
    };

    return (
      <Container>
        <FlatListContainer>
          <FlatList
            data={exercises}
            renderItem={renderItem}
            style={{ backgroundColor: colors.white }}
            keyExtractor={item => item.id}
          />
          <ActionButtonContainer>
            <ActionButton title="Nouvel exercice" onPress={onCreateExercise} />
          </ActionButtonContainer>
        </FlatListContainer>
        <ValidateButton onPress={closeModal}>
          <ValidateButtonTitle>Valider</ValidateButtonTitle>
        </ValidateButton>
      </Container>
    );
  }
);

const Container = styled.SafeAreaView(props => ({
  flex: 1,
  backgroundColor: props.theme.colors.black,
}));

const ValidateButton = styled.TouchableOpacity(props => ({
  padding: props.theme.margin.x2,
  backgroundColor: props.theme.colors.black,
}));

const ValidateButtonTitle = styled.Text(props => ({
  fontSize: 24,
  fontWeight: 'bold',
  color: props.theme.colors.white,
  textAlign: 'center',
}));

const FlatListContainer = styled.View({
  flex: 1,
});

const ActionButtonContainer = styled.View(props => ({
  width: '100%',
  alignItems: 'center',
  position: 'absolute',
  bottom: props.theme.margin.x2,
}));
