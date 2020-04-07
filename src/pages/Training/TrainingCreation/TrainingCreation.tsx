import React, { FunctionComponent, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from '@woap/utils/styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@woap/styles/colors';
import { Routes } from '@woap/navigation/routes';
import { RouteProp } from '@react-navigation/native';
import { TrainingNavigatorParamList } from '@woap/navigation/TrainingNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { SearchBar } from '@woap/components/SearchBar';
import { Spacer } from '@woap/components/Spacer';
import { CrossIcon } from '@woap/components/Icons/CrossIcon';

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

const EXERCISES = [
  { title: 'crunch', id: 1, selected: false },
  { title: 'squat', id: 2, selected: true },
  { title: 'push up', id: 3, selected: true },
  { title: 'curl biceps', id: 4, selected: false },
  { title: 'crunch', id: 6, selected: false },
  { title: 'squat', id: 7, selected: false },
  { title: 'push up', id: 8, selected: false },
  { title: 'curl biceps', id: 9, selected: false },
];

export const TrainingCreation: FunctionComponent<Props> = ({ navigation }) => {
  const closeModal = () => navigation.goBack();
  const [displayAddExerciseModal, setDisplayAddExerciseModal] = useState(false);
  const openAddExerciseModal = () => {
    setDisplayAddExerciseModal(true);
  };
  const closeAddExerciseModal = () => {
    setDisplayAddExerciseModal(false);
  };
  const navigateToTrainingSetsConfigurationScreen = () => {
    closeAddExerciseModal();
    setTimeout(() => navigation.navigate(Routes.TrainingSetsConfiguration), 500);
  };

  return (
    <Background>
      <Container>
        <Header>
          <Title>My new training</Title>
          <TouchableOpacity onPress={closeModal}>
            <CrossIcon />
          </TouchableOpacity>
        </Header>
        <Spacer height={2} />
        <SearchBar placeholder="Crunch, Squat..." />
        <Spacer height={3} />
        <SubTitle>ADD EXERCISES</SubTitle>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={EXERCISES}
          ListHeaderComponent={() => (
            <NewExerciseButton onPress={() => {}} title="Create a new exercice" />
          )}
          renderItem={({ item, index }) => (
            <ExerciseItem
              title={item.title}
              onPress={openAddExerciseModal}
              selected={item.selected}
              key={`${item.id}`}
              index={index}
            />
          )}
        />
      </Container>
      <AddExerciseModal
        isVisible={displayAddExerciseModal}
        onPressClose={closeAddExerciseModal}
        onPressAdd={navigateToTrainingSetsConfigurationScreen}
      />
    </Background>
  );
};

const Background = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [colors.green, colors.blue],
  flex: 1,
})``;

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));

const Header = styled.View(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.transparentWhiteScale[60],
  paddingTop: theme.margin.x1,
  paddingBottom: theme.margin.x2,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
}));

const SubTitle = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
