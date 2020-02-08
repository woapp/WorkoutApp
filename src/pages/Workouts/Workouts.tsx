import React from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import styled from '../../utils/styled-components';
import { RoundButton } from '../../components/RoundButton';
import { Routes } from '../..//navigation/routes';

export const Workouts: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
  return (
    <Container>
      <RoundButtonContainer>
        <RoundButton
          onPress={() => {
            console.log(navigation);
            navigation.navigate(Routes.WorkoutEditor);
          }}
        />
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
