import React, { FunctionComponent, useState } from 'react';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Background } from '@woap/components/Background';
import { Header } from '@woap/components/Header';
import { Spacer } from '@woap/components/Spacer';
import styled from '@woap/utils/styled-components';
import { MuscleGroup } from '@woap/mobx/types';
import { MuscleGroupToggle } from '@woap/pages/Exercise/ExerciseMuscleGroups/components/MuscleGroupToggle';
import { NextButton } from '@woap/components/NextButton';
import { RootNavigatorParamList } from '@woap/navigation';
import { Routes } from '@woap/navigation/routes';
import { ExerciseNavigatorParamList } from '@woap/navigation/ExerciseNavigator';
import { useTranslation } from 'react-i18next';

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
  const exercise = route.params.exercise;

  const [muscleGroups, setMuscleGroups] = useState(
    Object.values(MuscleGroup).map(muscleGroup => ({ name: muscleGroup, selected: false }))
  );

  const { t } = useTranslation('exerciseCreation');

  const closeModale = () => {
    navigation.popToTop();
    navigation.goBack();
  };

  const goToExerciseDescriptionScreen = () =>
    navigation.navigate(Routes.ExerciseDescription, { exercise });

  const onNextButtonPressed = () => {
    exercise.setMuscleGroups(
      muscleGroups.filter(muscleGroup => muscleGroup.selected).map(muscleGroup => muscleGroup.name)
    );
    goToExerciseDescriptionScreen();
  };

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
        <Header title={exercise.name} onClose={closeModale} />
        <Spacer height={3} />
        <Indication>{t('exerciseMuscleGroups.indication')}</Indication>
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
          onPress={onNextButtonPressed}
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

const Indication = styled.Text(({ theme }) => ({
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
