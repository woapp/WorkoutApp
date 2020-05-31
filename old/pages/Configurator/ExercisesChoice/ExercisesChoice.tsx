import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { observer } from 'mobx-react-lite';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ActionButton } from '@woap/components/ActionButton';
import { useStore } from '@woap/utils/hooks/useStore';
import styled from '@woap/utils/styled-components';
import { Routes } from '@woap/navigation/routes';
import { WorkoutType } from '@woap/mobx/workout';
import { colors } from '@woap/styles/colors';
import { ExercicesNavigatorParamList } from '@woap/navigation/ExercisesNavigator';

import { ExerciseItem } from './components/ExerciseItem';

type ExercicesChoiceScreenNavigationProp = StackNavigationProp<
  ExercicesNavigatorParamList,
  Routes.ExercisesChoice
>;

type ExercicesChoiceScreenRouteProp = RouteProp<
  ExercicesNavigatorParamList,
  Routes.ExercisesChoice
>;

type Props = {
  navigation: ExercicesChoiceScreenNavigationProp;
  route: ExercicesChoiceScreenRouteProp;
};

export const ExercisesChoice: FunctionComponent<Props> = observer(({ navigation, route }) => {
  const { exercises } = useStore();
  const workout: WorkoutType = route.params.workout;
  console.log('workoutExercises', workout.exercises); // TODO: used to force watch on workout.exercises, find better way
  console.log('exercises', exercises); // TODO: used to force watch on workout.exercises, find better way

  const closeModal = () => navigation.goBack();

  const isExerciseInWorkout = (exerciseId: string) =>
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

  const onCreateExercise = () => {};

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
});

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
