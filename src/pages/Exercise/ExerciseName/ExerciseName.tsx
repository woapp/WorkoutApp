import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { Background } from '@woap/components/Background';
import styled from '@woap/utils/styled-components';
import { FormField } from '@woap/components/FormField';
import { Spacer } from '@woap/components/Spacer';
import { colors } from '@woap/styles/colors';
import { NextButton } from '@woap/components/NextButton';
import { Routes } from '@woap/navigation/routes';
import { ExerciseNavigatorParamList } from '@woap/navigation/ExerciseNavigator';
import { Header } from '@woap/components/Header';
import { useStore } from '@woap/utils/hooks/useStore';

type ExerciseNameScreenNavigationProp = StackNavigationProp<
  ExerciseNavigatorParamList,
  Routes.ExerciseName
>;

type Props = {
  navigation: ExerciseNameScreenNavigationProp;
};

export const ExerciseName: FunctionComponent<Props> = ({ navigation }) => {
  const { t } = useTranslation('exerciseCreation');
  const store = useStore();
  const newExercise = store.newExercise;
  const [name, setName] = useState((newExercise && newExercise.name) || '');
  const isNameValid = name.length > 0;

  if (!newExercise) return null;
  const goToExerciseMuscleGroupsScreen = () => {
    if (isNameValid) {
      newExercise.setName(name);
      navigation.navigate(Routes.ExerciseMuscleGroups);
    }
  };
  const closeModal = () => navigation.goBack();

  return (
    <Background>
      <Container>
        <Header title={t('exerciseName.title')} onClose={closeModal} />
        <Spacer height={3} />
        <Question>{t('exerciseName.question')}</Question>
        <Spacer height={2} />
        <NameFormField
          value={name}
          onChangeText={setName}
          placeholder={t('exerciseName.placeholder')}
          placeholderTextColor={colors.transparentWhiteScale[60]}
          selectionColor={colors.white}
          onSubmitEditing={goToExerciseMuscleGroupsScreen}
        />
        <NextButton onPress={goToExerciseMuscleGroupsScreen} disabled={!isNameValid} />
      </Container>
    </Background>
  );
};

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));

const Question = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  color: theme.colors.white,
  fontWeight: 'bold',
}));

const NameFormField = styled(FormField)(({ theme }) => ({
  marginVertical: 8,
  color: theme.colors.white,
  fontWeight: 'bold',
  ...theme.fonts.h3,
}));
