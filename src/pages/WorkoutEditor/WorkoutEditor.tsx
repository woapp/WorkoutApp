import React from 'react';
import { Alert } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { observer } from 'mobx-react-lite';

import styled from '../../utils/styled-components';
import { RoundButton } from '../../components/RoundButton';
import { ExercisesList } from '../../components/ExercisesList';

export const WorkoutEditor = observer(({ navigation }: NavigationStackScreenProps) => {
  const workout = navigation.getParam('workout');

  return (
    <Container>
      <NameInput value={workout.name} placeholder="Entraînement" onChangeText={workout.setName} />
      <ExercisesList workout={workout} />
      <RoundButtonContainer>
        <RoundButton
          onPress={() => {
            Alert.alert('add a new exercise');
          }}
        />
      </RoundButtonContainer>
    </Container>
  );
});

const Container = styled.View({
  flex: 1,
});

const NameInput = styled.TextInput(props => ({
  borderColor: props.theme.colors.lightGrey,
  borderRadius: 20,
  borderWidth: 2,
  padding: props.theme.margin.x1,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
  margin: props.theme.margin.x2,
}));

const RoundButtonContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
