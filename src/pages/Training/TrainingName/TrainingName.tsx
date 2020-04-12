import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { Background } from '@woap/components/Background';
import styled from '@woap/utils/styled-components';
import { FormField } from '@woap/components/FormField';
import { Spacer } from '@woap/components/Spacer';
import { colors } from '@woap/styles/colors';
import { NextButton } from '@woap/components/NextButton';
import { Routes } from '@woap/navigation/routes';
import { TrainingNavigatorParamList } from '@woap/navigation/TrainingNavigator';
import { Header } from '@woap/components/Header';
import { useStore } from '@woap/utils/hooks/useStore';

type TrainingNameScreenNavigationProp = StackNavigationProp<
  TrainingNavigatorParamList,
  Routes.TrainingName
>;

type Props = {
  navigation: TrainingNameScreenNavigationProp;
};

export const TrainingName: FunctionComponent<Props> = observer(({ navigation }) => {
  const { newFreeWorkout } = useStore();
  if (!newFreeWorkout) return null;
  const [name, setName] = useState('');
  const goToTrainingTagsScreen = () => {
    newFreeWorkout.setName(name);
    navigation.navigate(Routes.TrainingTags);
  };

  return (
    <Background>
      <Container>
        <Header title="New Training" />
        <Spacer height={3} />
        <Title>HOW WOULD YOU NAME IT?</Title>
        <Spacer height={2} />
        <NameFormField
          value={name}
          onChangeText={setName}
          placeholder="Full body, matinal routine..."
          placeholderTextColor={colors.transparentWhiteScale[60]}
          selectionColor={colors.white}
        />
        <NextButton onPress={goToTrainingTagsScreen} disabled={name.length === 0} />
      </Container>
    </Background>
  );
});

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
