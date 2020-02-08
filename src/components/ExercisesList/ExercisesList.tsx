import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

import { WorkoutType } from '../../modules/workout';
import { ExercisesListItem } from '../ExercisesListItem';

interface Props {
  workout: WorkoutType;
}

export const ExercisesList: FunctionComponent<Props> = ({ workout }) => {
  const renderItem = ({ item }) => <ExercisesListItem {...item} />;
  // console.log(workout.exercises);

  return <FlatList data={[]} renderItem={renderItem} keyExtractor={(_, index) => `${index}`} />;
};
