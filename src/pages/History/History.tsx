import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

import { WorkoutItem } from '../../components/WorkoutItem';
import { historySelector } from '../../modules/selectors';
import { useStore } from '../../utils/hooks/useStore';
import styled from '../../utils/styled-components';

type IHistory = {};

export const History: FunctionComponent<IHistory> = () => {
  const history = useStore(historySelector);

  const renderWorkoutItem = ({ item }) => <WorkoutItem workout={item} />;

  return (
    <Container>
      <FlatList data={history} renderItem={renderWorkoutItem} keyExtractor={item => item.id} />
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});
