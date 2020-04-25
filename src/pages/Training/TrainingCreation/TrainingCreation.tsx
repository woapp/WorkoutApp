import React, { FunctionComponent, useState } from 'react';
import { FlatList, Alert } from 'react-native';
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
import { useTranslation } from 'react-i18next';
import { useSearch } from '@woap/hooks/useSearch';

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
  const store = useStore();
  const { t } = useTranslation('trainingCreation');

  if (!store.newFreeWorkout) return null;

  const { filter, setFilter, matchSearch } = useSearch();
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

  const archiveExercise = (exercise: ExerciseType) => () => {
    Alert.alert(
      t('trainingCreation.deleteAlert.title'),
      t('trainingCreation.deleteAlert.content'),
      [
        { text: t('trainingCreation.deleteAlert.cancel'), style: 'cancel' },
        {
          text: t('trainingCreation.deleteAlert.delete'),
          style: 'destructive',
          onPress: () => {
            store.deleteExercise(exercise);
          },
        },
      ]
    );
  };

  return (
    <Background>
      <Container>
        <Header title={t('trainingCreation.title')} />
        <Spacer height={2} />
        <SearchBar placeholder="Crunch, Squat..." value={filter} onChangeText={setFilter} />
        <Spacer height={3} />
        <SubTitle>{t('trainingCreation.chooseExercise')}</SubTitle>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={store.exercises.toJS().filter(exercise => matchSearch(exercise.name))}
          ListHeaderComponent={() => (
            <NewExerciseButton
              onPress={() => {
                goToExerciseNavigator();
              }}
              title={t('trainingCreation.createExercise')}
            />
          )}
          renderItem={({ item, index }) => (
            <ExerciseItem
              title={item.name || ''}
              onPress={() => {
                setSelectedExercise(item);
                openAddExerciseModal();
              }}
              onLongPress={archiveExercise(item)}
              selected={
                store.newFreeWorkout ? store.newFreeWorkout.exercisesId.includes(item.id) : false
              }
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
