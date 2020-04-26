import React, { FunctionComponent, useState } from 'react';
import { Dimensions } from 'react-native';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Background } from '@woap/components/Background';
import { Header } from '@woap/components/Header';
import { Spacer } from '@woap/components/Spacer';
import styled from '@woap/utils/styled-components';
import { MuscleGroup } from '@woap/mobx/types';
import { NextButton } from '@woap/components/NextButton';
import { RootNavigatorParamList } from '@woap/navigation';
import { Routes } from '@woap/navigation/routes';
import { ExerciseNavigatorParamList } from '@woap/navigation/ExerciseNavigator';
import { useTranslation } from 'react-i18next';
import { BodyVisualisation } from '@woap/components/BodyVisualisation';

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

  const onPressMuscles = Object.assign(
    {},
    ...Object.values(MuscleGroup).map(muscleGroup => ({
      [muscleGroup]: onMuscleGroupPressed(muscleGroup),
    }))
  );

  const ratios = Object.assign(
    {},
    ...muscleGroups.map(({ name, selected }) => ({ [name]: selected ? 1 : 0 }))
  );

  return (
    <Background>
      <Container>
        <Header title={exercise.name} onClose={closeModale} />
        <Spacer height={3} />
        <Indication>{t('exerciseMuscleGroups.indication')}</Indication>
        <Spacer height={2} />
        <BodyContainer>
          <BodyVisualisation
            width={Dimensions.get('screen').width}
            onPressMuscles={onPressMuscles}
            ratios={ratios}
          />
        </BodyContainer>
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

const BodyContainer = styled.View(({ theme }) => ({
  width: Dimensions.get('window').width,
  marginLeft: -theme.margin.x2,
  backgroundColor: theme.colors.white,
  paddingVertical: theme.margin.x1,
}));
const Indication = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  color: theme.colors.white,
  fontWeight: 'bold',
}));
