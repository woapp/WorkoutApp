import React, { FunctionComponent } from 'react';
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

import { ExerciseItem } from './components/ExerciseItem';
import { NewExerciseButton } from './components/NewExerciseButton';

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

export const TrainingCreation: FunctionComponent<Props> = ({ navigation }) => {
  const closeModal = () => navigation.goBack();
  const exercises = [
    { title: 'crunch', id: 1 },
    { title: 'squat', id: 2 },
    { title: 'push up', id: 3 },
    { title: 'curl biceps', id: 4 },
    { title: 'crunch', id: 6 },
    { title: 'squat', id: 7 },
    { title: 'push up', id: 8 },
    { title: 'curl biceps', id: 9 },
  ];

  return (
    <Background>
      <Container>
        <Header>
          <Title>My new training</Title>
          <TouchableOpacity onPress={closeModal}>
            <Button>x</Button>
          </TouchableOpacity>
        </Header>
        <Spacer height={2} />
        <SearchBar placeholder="Crunch, Squat..." />
        <Spacer height={3} />
        <SubTitle>ADD EXERCISES</SubTitle>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={exercises}
          ListHeaderComponent={() => (
            <NewExerciseButton onPress={() => {}} title="Create a new exercice" />
          )}
          renderItem={({ item, index }) => (
            <ExerciseItem
              title={item.title}
              onPress={() => {}}
              selected
              key={item.id}
              index={index}
            />
          )}
        />
      </Container>
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

const Button = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
