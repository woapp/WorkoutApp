import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';

import { ExercisesListItem } from '../ExercisesListItem';

export const ExercisesList: FunctionComponent<{
  exercices: [
    {
      exercise: { name: string };
      sets: [{ weight: number; nbReps: number }];
    }
  ];
}> = ({ exercices }) => {
  const renderItem = ({ item }) => <ExercisesListItem {...item} />;

  return (
    <FlatList data={exercices} renderItem={renderItem} keyExtractor={(_, index) => `${index}`} />
  );
};
