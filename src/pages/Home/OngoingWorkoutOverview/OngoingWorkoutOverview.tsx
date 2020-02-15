import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { FlatList } from 'react-native';

import { TextTitle } from '../../../components/Texts';
import { Routes } from '../../../navigation/routes';
import { ActionButton } from '../../../components/ActionButton';
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
            <Name>{ongoingWorkout.name}</Name>
            <Exercice>EXERCICES</Exercice>
            <FlatList
              data={ongoingWorkout.exercises.toJS()}
              renderItem={({ item, index }: { item: ExerciseSetsType; index: number }) => (
                <ExerciseItem
                  isFirst={index === 0}
                  isLast={index === ongoingWorkout.nbExercises - 1}
                  key={item.id}
                  exerciseName={item.exercise.name}
                  muscleGroup={item.exercise.mainMuscleGroup}
                  nbSets={4}
                />
              )}
            />

            <ButtonContainer>
              <ActionButton onPress={onStartWorkout} title="Démarrer" />
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
}));

const Name = styled(TextTitle)(props => ({
  marginBottom: props.theme.margin.x4,
  textAlign: 'center',
}));

const Exercice = styled.Text(props => ({
  fontWeight: 'bold',
  fontSize: 20,
  marginBottom: props.theme.margin.x2,
}));

const ButtonContainer = styled.View(props => ({
  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: props.theme.margin.x2,
}));
