import React, { useState } from 'react';
import { Alert } from 'react-native';

import { createWorkout } from '../../modules/workout/constructor';
import styled from '../../utils/styled-components';
import { RoundButton } from '../../components/RoundButton';
import { ExercisesList } from '../../components/ExercisesList';

export const WorkoutEditor: React.FC = () => {
  const workout = createWorkout();
  const [name, setName] = useState('');

  return (
    <Container>
      <NameInput value={name} placeholder="Entraînement" onChangeText={setName} />
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
};

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
