import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { FlatList } from 'react-native';

import { TextTitle, TextSubtitle } from '../../../components/Texts';
import { Routes } from '../../../navigation/routes';
import { PrimaryButton } from '../../../components/PrimaryButton';
import { Spacer } from '../../../components/Spacer';
import styled from '../../../utils/styled-components';
import { useStore } from '../../../utils/hooks/useStore';
import { ExerciseSetsType } from '../../../modules/exerciseSets';

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
