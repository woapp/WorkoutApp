import React, { FunctionComponent, useRef } from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import { observer } from 'mobx-react-lite';
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
import { SelectableTag } from '@woap/components/SelectableTag';
import { useStore } from '@woap/utils/hooks/useStore';
import { colors } from '@woap/styles/colors';

type ExerciseMuscleGroupsScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.ExerciseNavigator>,
  StackNavigationProp<ExerciseNavigatorParamList, Routes.ExerciseMuscleGroups>
>;

interface Props {
  navigation: ExerciseMuscleGroupsScreenNavigationProp;
}

export const ExerciseMuscleGroups: FunctionComponent<Props> = observer(({ navigation }) => {
  const store = useStore();
  const newExercise = store.newExercise;

  const { t } = useTranslation(['exerciseCreation', 'common']);

  const selectedMuscleGroupsContainerRef = useRef<ScrollView>(null);

  const closeModale = () => {
    navigation.popToTop();
    navigation.goBack();
  };

  const goToExerciseDescriptionScreen = () => navigation.navigate(Routes.ExerciseDescription);

  const onMuscleGroupPressed = name => () => {
    if (newExercise.muscleGroups.includes(name)) {
      newExercise.setMuscleGroups(
        newExercise.muscleGroups.filter(muscleGroup => muscleGroup !== name)
      );
    } else {
      newExercise.setMuscleGroups([...newExercise.muscleGroups, name]);
    }
  };

  const onPressMuscles = Object.assign(
    {},
    ...Object.values(MuscleGroup).map(muscleGroup => ({
      [muscleGroup]: onMuscleGroupPressed(muscleGroup),
    }))
  );

  return (
    <Background>
      <Container>
        <Header title={newExercise.name} onClose={closeModale} />
        <Spacer height={3} />
        <Indication>{t('exerciseMuscleGroups.indication')}</Indication>
        <Spacer height={2} />
        <BodyContainer>
          <BodyVisualisation
            width={Dimensions.get('screen').width * 0.85}
            onPressMuscles={onPressMuscles}
            ratios={newExercise.muscleRatios}
            musclesBackgroundColor={colors.black}
            selectedMusclesColor={colors.white}
          />
        </BodyContainer>
        <Spacer height={2} />
        {newExercise.muscleGroups.length > 0 && (
          <SelectedMuscleGroupsTitle>
            {t('exerciseMuscleGroups.selectedMusclesTitle')}
          </SelectedMuscleGroupsTitle>
        )}
        <Spacer height={2} />
        <View>
          <SelectedMuscleGroupsContainer
            ref={selectedMuscleGroupsContainerRef}
            onContentSizeChange={() => {
              selectedMuscleGroupsContainerRef.current &&
                selectedMuscleGroupsContainerRef.current.scrollToEnd();
            }}
          >
            {newExercise.muscleGroups.map(muscleGroup => (
              <SelectableTag
                name={t(`common:muscleGroups.${muscleGroup}`)}
                selected
                key={muscleGroup}
              />
            ))}
          </SelectedMuscleGroupsContainer>
        </View>
        <NextButton
          onPress={goToExerciseDescriptionScreen}
          disabled={newExercise.muscleGroups.length === 0}
        />
      </Container>
    </Background>
  );
});

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));

const BodyContainer = styled.View(({ theme }) => ({
  width: Dimensions.get('window').width,
  marginLeft: -theme.margin.x2,
  paddingVertical: theme.margin.x1,
  justifyContent: 'center',
  alignItems: 'center',
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

const SelectedMuscleGroupsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})({
  flexDirection: 'row',
});
