import React, { FunctionComponent } from 'react';
import DraggableFlatList from 'react-native-draggable-flatlist';
import { observer } from 'mobx-react-lite';

import { WorkoutType } from '../../modules/workout';
import { ExercisesListItem } from '../ExercisesListItem';

interface Props {
  workout: WorkoutType;
}

export const ExercisesList: FunctionComponent<Props> = observer(({ workout }) => {
  const renderExercise = ({ item, drag }) => (
    <ExercisesListItem onDrag={drag} exerciseSets={item} />
  );

  const onReorderExercises = ({ data }) => workout.setExercises(data);

  return (
    <DraggableFlatList
      data={workout.exercises}
      renderItem={renderExercise}
      keyExtractor={item => item.id}
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      //@ts-ignore
      onDragEnd={onReorderExercises}
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{ paddingBottom: 250 }} // TODO: remove and find find a way for scrollview to be aware of keyboard
    />
  );
});
