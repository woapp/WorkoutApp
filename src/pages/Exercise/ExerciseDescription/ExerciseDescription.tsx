import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
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

type ExerciseDescriptionScreenNavigationProp = StackNavigationProp<
  ExerciseNavigatorParamList,
  Routes.ExerciseDescription
>;

type ExerciseDescriptionScreenRouteProp = RouteProp<
  ExerciseNavigatorParamList,
  Routes.ExerciseDescription
>;

type Props = {
  navigation: ExerciseDescriptionScreenNavigationProp;
  route: ExerciseDescriptionScreenRouteProp;
};

export const ExerciseDescription: FunctionComponent<Props> = ({ navigation, route }) => {
  const { addExercise } = useStore();
  const [description, setDescription] = useState('');
  const { t } = useTranslation('exerciseCreation');
  const exercise = route.params.exercise;

  const closeModal = () => {
    navigation.popToTop();
    navigation.goBack();
  };
  const onNextButtonPressed = () => {
    exercise.setDescription(description);
    addExercise(exercise);
    closeModal();
  };

  return (
    <Background>
      <Container>
        <Header title={t('exerciseDescription.title')} onClose={closeModal} />
        <Spacer height={3} />
        <Indication>{t('exerciseDescription.indication')}</Indication>
        <Spacer height={2} />
        <DescriptionFormField
          value={description}
          onChangeText={setDescription}
          placeholder={t('exerciseDescription.placeholder')}
          placeholderTextColor={colors.transparentWhiteScale[60]}
          selectionColor={colors.white}
          onSubmitEditing={onNextButtonPressed}
          multiline
        />
        <NextButton onPress={onNextButtonPressed} disabled={false} />
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

const DescriptionFormField = styled(FormField)(({ theme }) => ({
  marginVertical: theme.margin.x1,
  color: theme.colors.white,
  fontWeight: 'bold',
  ...theme.fonts.h3,
  maxHeight: 400,
}));
