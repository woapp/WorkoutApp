import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';

import { WorkoutHistoryItem } from '../../components/WorkoutHistoryItem';
import { useStore } from '../../utils/hooks/useStore';
import styled from '../../utils/styled-components';

export const History: FunctionComponent = observer(() => {
  const { history } = useStore();

  const renderWorkoutItem = ({ item }) => <WorkoutHistoryItem workout={item} />;

  return (
    <Container>
      <FlatList
        data={history.toJS()}
        renderItem={renderWorkoutItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
});

const Container = styled.View({
  flex: 1,
});
