import React, { FunctionComponent, useState } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from '@woap/utils/styled-components';
import { Routes } from '@woap/navigation/routes';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { TrainingNavigatorParamList } from '@woap/navigation/TrainingNavigator';
import { SearchBar } from '@woap/components/SearchBar';
import { Spacer } from '@woap/components/Spacer';
import { Background } from '@woap/components/Background';
import { Header } from '@woap/components/Header';
import { useStore } from '@woap/utils/hooks/useStore';
import { ExerciseType } from '@woap/mobx/exercise';
import { RootNavigatorParamList } from '@woap/navigation';

import { ExerciseItem } from './components/ExerciseItem';
import { NewExerciseButton } from './components/NewExerciseButton';
import { AddExerciseModal } from './components/AddExerciseModal';

type TrainingCreationScreenRouteProp = RouteProp<
  TrainingNavigatorParamList,
  Routes.TrainingCreation
>;

type TrainingCreationScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.TrainingNavigator>,
  StackNavigationProp<TrainingNavigatorParamList, Routes.TrainingCreation>
>;

type Props = {
  route: TrainingCreationScreenRouteProp;
  navigation: TrainingCreationScreenNavigationProp;
};

export const TrainingCreation: FunctionComponent<Props> = observer(({ navigation }) => {
  const { exercises, newFreeWorkout } = useStore();
  if (!newFreeWorkout) return null;

  const [filter, setFilter] = useState('');
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

  const goToExerciseNavigator = () => navigation.navigate(Routes.ExerciseNavigator);

  return (
    <Background>
      <Container>
        <Header title="My new training" />
        <Spacer height={2} />
        <SearchBar placeholder="Crunch, Squat..." value={filter} onChangeText={setFilter} />
        <Spacer height={3} />
        <SubTitle>ADD EXERCISES</SubTitle>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={exercises
            .toJS()
            .filter(exercise => exercise.name.toLowerCase().includes(filter.toLowerCase()))}
          ListHeaderComponent={() => (
            <NewExerciseButton
              onPress={() => {
                goToExerciseNavigator();
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
