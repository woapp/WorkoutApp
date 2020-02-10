import React, { FunctionComponent } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import styled from '../../utils/styled-components';
import { useStore } from '../../utils/hooks/useStore';

export const OngoingWorkout: FunctionComponent = observer(() => {
  const { ongoingWorkout } = useStore();

  return (
    <View>
      {ongoingWorkout && (
        <View>
          <Name>{ongoingWorkout.name}</Name>
          <Text>EXERCICES</Text>
          {ongoingWorkout.exercises.map(exerciseSet => (
            <Text key={exerciseSet.id}>{exerciseSet.exercise.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
});

const Name = styled.Text(props => ({
  fontWeight: 'bold',
  fontSize: 24,
  marginBottom: props.theme.margin.x2,
}));
