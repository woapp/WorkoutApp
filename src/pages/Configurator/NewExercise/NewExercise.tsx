import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { InputTitle } from '@woap/components/InputTitle';
import styled from '@woap/utils/styled-components';
import { MuscleGroupToggle } from '@woap/pages/Exercise/ExerciseMuscleGroups/components/MuscleGroupToggle';
import { ActionButton } from '@woap/components/ActionButton';
import { MuscleGroup } from '@woap/mobx/types';
import { Routes } from '@woap/navigation/routes';
import { ExercicesNavigatorParamList } from '@woap/navigation/ExercisesNavigator';

type NewExerciseScreenNavigationProp = StackNavigationProp<
  ExercicesNavigatorParamList,
  Routes.NewExercise
>;

type NewExerciseScreenRouteProp = RouteProp<ExercicesNavigatorParamList, Routes.NewExercise>;

type Props = {
  navigation: NewExerciseScreenNavigationProp;
  route: NewExerciseScreenRouteProp;
};

export const NewExercise: FunctionComponent<Props> = observer(({ navigation, route }) => {
  const exercise = route.params.exercise;
  const setExerciseName = (text: string) => exercise.setName(text);
  const validateExerciseCreation = route.params.validateExerciseCreation;
  const addMuscleGroup = (muscleGroup: MuscleGroup) => () => exercise.addMuscleGroup(muscleGroup);
  const removeMuscleGroup = (muscleGroup: MuscleGroup) => () =>
    exercise.removeMuscleGroup(muscleGroup);

  const onCreateExercise = () => {
    validateExerciseCreation(exercise);
    navigation.goBack();
  };

  return (
    <Container>
      <InputTitle value={exercise.name} placeholder="Exercice" onChangeText={setExerciseName} />
      <MuscleGroupsRow>
        {Object.values(MuscleGroup).map((muscleGroup, index) => {
          const isSelected = exercise.muscleGroups.includes(muscleGroup);
          const onSelectMuscleGroup = isSelected
            ? removeMuscleGroup(muscleGroup)
            : addMuscleGroup(muscleGroup);

          return (
            <MuscleGroupToggle
              key={index}
              muscleGroup={muscleGroup}
              title={muscleGroup}
              onPress={onSelectMuscleGroup}
              isSelected={isSelected}
            />
          );
        })}
      </MuscleGroupsRow>
      <ActionButtonContainer>
        <ActionButton title="Créer" onPress={onCreateExercise} />
      </ActionButtonContainer>
    </Container>
  );
});

const Container = styled.View({
  flex: 1,
});

const MuscleGroupsRow = styled.View(props => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  paddingVertical: props.theme.margin.x4,
  paddingHorizontal: props.theme.margin.x4,
}));

const ActionButtonContainer = styled.View(props => ({
  width: '100%',
  alignItems: 'center',
  position: 'absolute',
  bottom: props.theme.margin.x4,
}));
