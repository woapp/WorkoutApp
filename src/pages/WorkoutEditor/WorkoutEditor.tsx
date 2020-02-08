import React, { useState } from 'react';
import { Alert } from 'react-native';

import styled from '../../utils/styled-components';
import { RoundButton } from '../../components/RoundButton';

export const WorkoutEditor: React.FC = () => {
  const [name, setName] = useState('');

  return (
    <Container>
      <NameInput value={name} placeholder="Entraînement" onChangeText={setName} />
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

const Container = styled.View(props => ({
  flex: 1,
  padding: props.theme.margin.x2,
}));

const NameInput = styled.TextInput(props => ({
  borderColor: props.theme.colors.lightGrey,
  borderRadius: 20,
  borderWidth: 2,
  padding: props.theme.margin.x1,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
}));

const RoundButtonContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
