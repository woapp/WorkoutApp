import React, { FunctionComponent, useState } from 'react';
import { FlatList, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from '@woap/utils/styled-components';
import { Routes } from '@woap/navigation/routes';
import { RouteProp } from '@react-navigation/native';
import { TrainingNavigatorParamList } from '@woap/navigation/TrainingNavigator';
import { SearchBar } from '@woap/components/SearchBar';
import { Spacer } from '@woap/components/Spacer';
import { Background } from '@woap/components/Background';
import { Header } from '@woap/components/Header';
import { useStore } from '@woap/utils/hooks/useStore';
import { ExerciseType } from '@woap/mobx/exercise';

import { ExerciseItem } from './components/ExerciseItem';
import { NewExerciseButton } from './components/NewExerciseButton';
import { AddExerciseModal } from './components/AddExerciseModal';

type TrainingCreationScreenRouteProp = RouteProp<
  TrainingNavigatorParamList,
  Routes.TrainingCreation
>;

type TrainingCreationScreenNavigationProp = StackNavigationProp<
  TrainingNavigatorParamList,
  Routes.TrainingCreation
>;

type Props = {
  route: TrainingCreationScreenRouteProp;
  navigation: TrainingCreationScreenNavigationProp;
};

export const TrainingCreation: FunctionComponent<Props> = observer(({ navigation }) => {
  const { exercises, newFreeWorkout } = useStore();
  if (!newFreeWorkout) return null;
  const [displayAddExerciseModal, setDisplayAddExerciseModal] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<ExerciseType | null>(null);
  const openAddExerciseModal = () => {
    setDisplayAddExerciseModal(true);
  };
  const closeAddExerciseModal = () => {
    setDisplayAddExerciseModal(false);
  };
  const navigateToTrainingSetsScreen = () => {
    closeAddExerciseModal();
    setTimeout(() => navigation.push(Routes.TrainingSets), 500);
  };

  return (
    <Background>
      <Container>
        <Header title="My new training" />
        <Spacer height={2} />
        <SearchBar placeholder="Crunch, Squat..." />
        <Spacer height={3} />
        <SubTitle>ADD EXERCISES</SubTitle>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={exercises.toJS()}
          ListHeaderComponent={() => (
            <NewExerciseButton
              onPress={() => {
                Alert.alert('new exercise');
              }}
              title="Create a new exercice"
            />
          )}
          renderItem={({ item, index }) => (
            <ExerciseItem
              title={item.name || ''}
              onPress={() => {
                setSelectedExercise(item);
                openAddExerciseModal();
              }}
              selected={newFreeWorkout.exercisesId.includes(item.id)}
              key={`${item.id}`}
              index={index}
            />
          )}
        />
      </Container>
      {selectedExercise && (
        <AddExerciseModal
          exercise={selectedExercise}
          isVisible={displayAddExerciseModal}
          onPressClose={closeAddExerciseModal}
          onPressAdd={navigateToTrainingSetsScreen}
        />
      )}
    </Background>
  );
});

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));

const SubTitle = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
