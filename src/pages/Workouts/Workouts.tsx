import React, { FunctionComponent } from 'react';
import { Alert } from 'react-native';

import styled from '../../utils/styled-components';
import { RoundButton } from '../../components/RoundButton';

type WorkoutsProps = {};

export const Workouts: FunctionComponent<WorkoutsProps> = () => {
  return (
    <Container>
      <RoundButtonContainer>
        <RoundButton onPress={() => Alert.alert('Add a workout')} />
      </RoundButtonContainer>
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});

const RoundButtonContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
