import { View, Text, FlatList } from 'react-native';
import React, { FunctionComponent } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import styled from '@woap/utils/styled-components';
import { TextSubtitle, TextTitle } from '@woap/components/Texts';
import { WorkoutType } from '@woap/mobx/workout';
import { ExerciseItem } from '@woap/pages/Home/OngoingWorkoutOverview/components/ExerciseItem';
import { Spacer } from '@woap/components/Spacer';
import { ExerciseSetsType } from '@woap/mobx/exerciseSets';

export const HistoryDetails: FunctionComponent<NavigationStackScreenProps> = ({ navigation }) => {
  const workout: WorkoutType = navigation.getParam('workout');
  console.log(workout.exercises[0].maxWeight);

  return (
    <Container>
      <Title>{workout.name}</Title>
      <Spacer height={2} />
      <Subtitle>Exercices</Subtitle>
      <Spacer height={2} />
      <FlatList
        data={workout.exercises.toJS()}
        renderItem={({ item, index }: { item: ExerciseSetsType; index: number }) => (
          <ExerciseItem
            isFirst={index === 0}
            isLast={index === workout.nbExercises - 1}
            key={item.id}
            exerciseName={item.exercise.name}
            muscleGroup={item.exercise.mainMuscleGroup}
            nbSets={item.sets.length}
            sets={item.sets}
            maxWeight={item.maxWeight}
          />
        )}
      />
    </Container>
  );
};

const Container = styled.View(props => ({
  padding: props.theme.margin.x2,
  flex: 1,
  backgroundColor: props.theme.colors.greyScale[90],
}));

const Title = styled(TextTitle)(props => ({
  textAlign: 'center',
  color: props.theme.colors.greyScale[10],
}));

const Subtitle = styled(TextSubtitle)(props => ({
  color: props.theme.colors.greyScale[10],
}));

const ButtonContainer = styled.View(props => ({
  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: props.theme.margin.x2,
}));
