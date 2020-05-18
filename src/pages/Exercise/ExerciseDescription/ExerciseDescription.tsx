/* eslint-disable @typescript-eslint/unbound-method */
import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
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

type ExerciseDescriptionScreenNavigationProp = StackNavigationProp<
  ExerciseNavigatorParamList,
  Routes.ExerciseDescription
>;

type Props = {
  navigation: ExerciseDescriptionScreenNavigationProp;
};

export const ExerciseDescription: FunctionComponent<Props> = observer(({ navigation }) => {
  const store = useStore();
  const newExercise = store.newExercise;
  const { t } = useTranslation('exerciseCreation');

  if (!newExercise) return null;

  const closeModal = () => {
    navigation.popToTop();
    navigation.goBack();
  };

  const goToExerciseSummary = () => navigation.navigate(Routes.ExerciseSummary);

  return (
    <Background>
      <Container>
        <Header title={newExercise.name} onClose={closeModal} />
        <Spacer height={3} />
        <Indication>{t('exerciseDescription.indication')}</Indication>
        <Spacer height={2} />
        <DescriptionFormField
          value={newExercise.description}
          onChangeText={newExercise.setDescription}
          placeholder={t('exerciseDescription.placeholder')}
          placeholderTextColor={colors.transparentWhiteScale[60]}
          selectionColor={colors.white}
          onSubmitEditing={goToExerciseSummary}
          multiline
          textAlignVertical={'top'}
        />

        <NextButton onPress={goToExerciseSummary} disabled={false} />
      </Container>
    </Background>
  );
});

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
  height: 150,
}));
