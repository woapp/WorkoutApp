import React, { FunctionComponent, useState } from 'react';
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

type ExerciseNameScreenNavigationProp = StackNavigationProp<
  ExerciseNavigatorParamList,
  Routes.ExerciseName
>;

type Props = {
  navigation: ExerciseNameScreenNavigationProp;
};

export const ExerciseName: FunctionComponent<Props> = ({ navigation }) => {
  const goToExerciseMuscleGroupsScreen = () => navigation.navigate(Routes.ExerciseMuscleGroups);
  const [name, setName] = useState('');

  return (
    <Background>
      <Container>
        <Header title="New Exercise" />
        <Spacer height={3} />
        <Title>HOW WOULD YOU NAME IT?</Title>
        <Spacer height={2} />
        <NameFormField
          value={name}
          onChangeText={setName}
          placeholder="Bench, squat, curl..."
          placeholderTextColor={colors.transparentWhiteScale[60]}
          selectionColor={colors.white}
        />
        <NextButton onPress={goToExerciseMuscleGroupsScreen} disabled={name.length === 0} />
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

const NameFormField = styled(FormField)(({ theme }) => ({
  marginVertical: 8,
  color: theme.colors.white,
  fontWeight: 'bold',
  ...theme.fonts.h3,
}));
