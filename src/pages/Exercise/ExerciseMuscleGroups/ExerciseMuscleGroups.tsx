import React, { FunctionComponent, useState } from 'react';
import { Background } from '@woap/components/Background';
import { Header } from '@woap/components/Header';
import { Spacer } from '@woap/components/Spacer';
import styled from '@woap/utils/styled-components';
import { MuscleGroup } from '@woap/mobx/types';
import { MuscleGroupToggle } from '@woap/pages/Exercise/ExerciseMuscleGroups/components/MuscleGroupToggle';
import { NextButton } from '@woap/components/NextButton';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigatorParamList } from '@woap/navigation';
import { Routes } from '@woap/navigation/routes';
import { ExerciseNavigatorParamList } from '@woap/navigation/ExerciseNavigator';

type ExerciseMuscleGroupsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.ExerciseNavigator>,
  StackNavigationProp<ExerciseNavigatorParamList, Routes.ExerciseMuscleGroups>
>;

type ExerciseMuscleGroupsScreenRouteProp = RouteProp<
  ExerciseNavigatorParamList,
  Routes.ExerciseMuscleGroups
>;

interface Props {
  navigation: ExerciseMuscleGroupsScreenNavigationProp;
  route: ExerciseMuscleGroupsScreenRouteProp;
}

export const ExerciseMuscleGroups: FunctionComponent<Props> = ({ navigation, route }) => {
  const goToDashboardScreen = () => navigation.navigate(Routes.TabNavigator);
  const exerciseName = route.params.exerciseName;
  console.log(exerciseName);
  const [muscleGroups, setMuscleGroups] = useState(
    Object.values(MuscleGroup).map(muscleGroup => ({ name: muscleGroup, selected: false }))
  );
  const onMuscleGroupPressed = name => () => {
    setMuscleGroups(previousMuscleGroups =>
      previousMuscleGroups.map(muscleGroup => ({
        ...muscleGroup,
        selected: muscleGroup.name === name ? !muscleGroup.selected : muscleGroup.selected,
      }))
    );
  };

  return (
    <Background>
      <Container>
        <Header title="New Exercise" />
        <Spacer height={3} />
        <Title>CHOOSE AT LEAST ONE MUSCLE GROUP</Title>
        <Spacer height={2} />
        <MuscleGroupsRow>
          {muscleGroups.map((muscleGroup, index) => {
            return (
              <MuscleGroupToggle
                key={index}
                muscleGroup={muscleGroup.name}
                title={muscleGroup.name}
                onPress={onMuscleGroupPressed(muscleGroup.name)}
                isSelected={muscleGroup.selected}
              />
            );
          })}
        </MuscleGroupsRow>
        <NextButton
          onPress={goToDashboardScreen}
          disabled={muscleGroups.filter(muscleGroup => muscleGroup.selected).length === 0}
        />
      </Container>
    </Background>
  );
};

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  color: theme.colors.white,
  fontWeight: 'bold',
}));

const MuscleGroupsRow = styled.View(props => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  paddingVertical: props.theme.margin.x4,
  paddingHorizontal: props.theme.margin.x4,
}));
