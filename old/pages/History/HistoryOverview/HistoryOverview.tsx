import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useStore } from '@woap/utils/hooks/useStore';

import { WorkoutItem } from './components/WorkoutHistoryItem';

export const HistoryOverview: FunctionComponent = observer(() => {
  const { history } = useStore();

  const renderWorkoutItem = ({ item }) => <WorkoutItem workout={item} />;

  return (
    <FlatList data={history.toJS()} renderItem={renderWorkoutItem} keyExtractor={item => item.id} />
  );
});
