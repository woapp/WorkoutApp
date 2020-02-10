import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';

import styled from '../../utils/styled-components';
import { useStore } from '../../utils/hooks/useStore';

export const OngoingWorkout: FunctionComponent = observer(() => {
  const { ongoingWorkout } = useStore();

  return (
    <View>
      <Name>{ongoingWorkout.name}</Name>
    </View>
  );
});

const Name = styled.Text(props => ({
  fontWeight: 'bold',
  fontSize: 24,
  marginBottom: props.theme.margin.x2,
}));
