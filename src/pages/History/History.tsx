import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

import { WorkoutHistoryItem } from '../../components/WorkoutHistoryItem';
import { historySelector } from '../../modules/selectors';
import { useStore } from '../../utils/hooks/useStore';
import styled from '../../utils/styled-components';

type IHistory = {};

export const History: FunctionComponent<IHistory> = () => {
  const history = useStore(historySelector);

  const renderWorkoutItem = ({ item }) => <WorkoutHistoryItem workout={item} />;

  return (
    <Container>
      {/* 
      // @ts-ignore */}
      <FlatList data={history} renderItem={renderWorkoutItem} keyExtractor={item => item.id} />
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});
