import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useStore } from '@woap/utils/hooks/useStore';
import styled from '@woap/utils/styled-components';

import { WorkoutItem } from './components/WorkoutHistoryItem';

export const HistoryOverview: FunctionComponent = observer(() => {
  const { history } = useStore();

  const renderWorkoutItem = ({ item }) => <WorkoutItem workout={item} />;

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
