import React, { FunctionComponent } from 'react';
import { SectionList, View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

import { ExerciseSetsType } from '../../modules/exerciseSets';
import { useStore } from '../../utils/hooks/useStore';

type OngoingWorkoutExercisesProps = {};

export const OngoingWorkoutExercises: FunctionComponent<OngoingWorkoutExercisesProps> = observer(
  () => {
    const { ongoingWorkout } = useStore();
    console.log('ongoingWorkout.exercises.toJSON()', ongoingWorkout?.exercises.toJSON());
    console.log('ongoingWorkout.exercises.toJSON().length', ongoingWorkout?.exercises.toJSON().length);

    const formatExercises = () => {
      if (ongoingWorkout) {
        return ongoingWorkout.exercises.toJSON().map(exerciseSet => ({
          title: exerciseSet.exercise.name,
          data: exerciseSet.sets
        }))
      }
      return []
    }
    
    console.log("formatExercises()",formatExercises())

    const renderWorkoutExercise = ({ item }: { item: ExerciseSetsType }) => (
      <View style={{ flex: 1, height: 100 }}>
        <Text>{item.length}</Text>
      </View>
    );


    return (
      <View>
        {ongoingWorkout && (
          <SectionList
            keyExtractor={(exerciseSets: ExerciseSetsType) => exerciseSets.id}
            sections={formatExercises()}
            renderItem={renderWorkoutExercise}
          />
        )}
      </View>
    );
  }
);
