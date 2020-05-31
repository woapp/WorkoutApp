import { Card } from 'react-native-paper';
import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import { TextTitle } from '@woap/components/Texts';
import styled from '@woap/utils/styled-components';
import { FreeWorkoutType } from '@woap/mobx/freeWorkout';

interface Props {
  workout: FreeWorkoutType;
  onSelectWorkout: (workout: FreeWorkoutType) => () => void;
}

export const WorkoutCard: FunctionComponent<Props> = observer(({ workout, onSelectWorkout }) => {
  return (
    <Container key={workout.id}>
      <TouchableOpacity onPress={onSelectWorkout(workout)}>
        <TextTitle>{workout.name}</TextTitle>
      </TouchableOpacity>
    </Container>
  );
});

const Container = styled(Card)(({ theme }) => ({
  padding: theme.margin.x2,
  margin: theme.margin.x2,
  borderRadius: 7,
}));
