import React, { FunctionComponent, useState } from 'react';
import { Dimensions, View } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
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
import { Tag } from '@woap/components/Tag';
import { useStore } from '@woap/utils/hooks/useStore';

type ExerciseMuscleGroupsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.ExerciseNavigator>,
  StackNavigationProp<ExerciseNavigatorParamList, Routes.ExerciseMuscleGroups>
>;

interface Props {
  navigation: ExerciseMuscleGroupsScreenNavigationProp;
}

export const ExerciseMuscleGroups: FunctionComponent<Props> = ({ navigation }) => {
  const store = useStore();

  const [muscleGroups, setMuscleGroups] = useState(
    Object.values(MuscleGroup).map(muscleGroup => ({
      name: muscleGroup,
      selected: store.newExercise.muscleGroups.includes(muscleGroup),
    }))
  );

  const { t } = useTranslation(['exerciseCreation', 'common']);

  const closeModale = () => {
    navigation.popToTop();
    navigation.goBack();
  };

  const goToExerciseDescriptionScreen = () => navigation.navigate(Routes.ExerciseDescription);

  const onNextButtonPressed = () => {
    store.newExercise.setMuscleGroups(
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
        <Header title={store.newExercise.name} onClose={closeModale} />
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
        <Spacer height={2} />
        <SelectedMuscleGroupsTitle>Groupes de muscles selectionnés :</SelectedMuscleGroupsTitle>
        <Spacer height={2} />
        <View>
          <SelectedMuscleGroupsContainer>
            {muscleGroups
              .filter(muscleGroup => muscleGroup.selected)
              .map(({ name }) => (
                <Tag name={t(`common:muscleGroups.${name}`)} selected key={name} />
              ))}
          </SelectedMuscleGroupsContainer>
        </View>
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

const SelectedMuscleGroupsTitle = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  color: theme.colors.white,
  fontWeight: 'bold',
}));

const SelectedMuscleGroupsContainer = styled.ScrollView.attrs({ horizontal: true })({
  flexDirection: 'row',
});
