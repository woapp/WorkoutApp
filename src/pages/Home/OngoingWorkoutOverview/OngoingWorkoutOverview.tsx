import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { FlatList } from 'react-native';
import { TextTitle, TextSubtitle } from '@woap/components/Texts';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import { Spacer } from '@woap/components/Spacer';
import styled from '@woap/utils/styled-components';
import { useStore } from '@woap/utils/hooks/useStore';
import { Routes } from '@woap/navigation/routes';
import { ExerciseSetsType } from '@woap/mobx/exerciseSets';

import { ExerciseItem } from './components/ExerciseItem';

export const OngoingWorkoutOverview: FunctionComponent<NavigationStackScreenProps> = observer(
  ({ navigation }) => {
    const { ongoingWorkout } = useStore();

    const onStartWorkout = () => navigation.navigate(Routes.OngoingWorkout);

    return (
      <Container>
        {ongoingWorkout && (
          <>
            <Title>{ongoingWorkout.name}</Title>
            <Spacer height={2} />
            <Subtitle>Exercices</Subtitle>
            <Spacer height={2} />
            <FlatList
              data={ongoingWorkout.exercises.toJS()}
              renderItem={({ item, index }: { item: ExerciseSetsType; index: number }) => (
                <ExerciseItem
                  isFirst={index === 0}
                  isLast={index === ongoingWorkout.nbExercises - 1}
                  key={item.id}
                  exerciseName={item.exercise.name}
                  muscleGroup={item.exercise.mainMuscleGroup}
                  nbSets={item.sets.length}
                  maxWeight={item.maxWeight}
                  sets={item.sets}
                />
              )}
            />

            <ButtonContainer>
              <PrimaryButton onPress={onStartWorkout} title="Démarrer" />
            </ButtonContainer>
          </>
        )}
      </Container>
    );
  }
);

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
