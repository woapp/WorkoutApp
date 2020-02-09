import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

import { WorkoutType } from '../../modules/workout';
import { ExercisesListItem } from '../ExercisesListItem';

interface Props {
  workout: WorkoutType;
}

export const ExercisesList: FunctionComponent<Props> = ({ workout }) => {
  const renderItem = ({ item }) => <ExercisesListItem exerciseSets={item} />;

  return (
    <FlatList
      data={workout.exercises}
      renderItem={renderItem}
      keyExtractor={(_, index) => `${index}`}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{ paddingBottom: 250 }} // TODO: remove and find find a way for scrollview to be aware of keyboard
    />
  );
};
