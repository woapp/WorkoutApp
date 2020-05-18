import React, { FunctionComponent } from 'react';
import { Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { Background } from '@woap/components/Background';
import styled from '@woap/utils/styled-components';
import { Spacer } from '@woap/components/Spacer';
import { Routes } from '@woap/navigation/routes';
import { ExerciseNavigatorParamList } from '@woap/navigation/ExerciseNavigator';
import { Header } from '@woap/components/Header';
import { useStore } from '@woap/utils/hooks/useStore';
import { ExercisePreview } from '@woap/components/ExercisePreview';
import { FinalButton } from '@woap/components/FinalButton';

type ExerciseDescriptionScreenNavigationProp = StackNavigationProp<
  ExerciseNavigatorParamList,
  Routes.ExerciseDescription
>;

type Props = {
  navigation: ExerciseDescriptionScreenNavigationProp;
};

export const ExerciseSummary: FunctionComponent<Props> = ({ navigation }) => {
  const { saveNewExercise, newExercise } = useStore();
  const { t } = useTranslation('exerciseCreation');

  if (!newExercise) return null;

  const closeModal = () => {
    navigation.popToTop();
    navigation.goBack();
  };
  const createExercise = () => {
    saveNewExercise();
    closeModal();
  };

  return (
    <Background>
      <Container>
        <Header title={t('exerciseSummary.title')} onClose={closeModal} />
        <Spacer height={3} />
        <ExercisePreview exercise={newExercise} width={Dimensions.get('window').width * 0.85} />
      </Container>
      <FinalButton onPress={createExercise} title={t('exerciseSummary.create')} />
    </Background>
  );
};

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));
