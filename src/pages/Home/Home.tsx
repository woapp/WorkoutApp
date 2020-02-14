import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { WorkoutType } from '../../modules/workout';
import { useStore } from '../../utils/hooks/useStore';
import { Routes } from '../../navigation/routes';

import { WorkoutCard } from './WorkoutCard/WorkoutCard';

export const Home: FunctionComponent<NavigationStackScreenProps> = observer(({ navigation }) => {
  const { workouts, setOngoingWorkout } = useStore();

  const onSelectWorkout = (workout: WorkoutType) => () => {
    setOngoingWorkout(workout);
    navigation.navigate(Routes.OngoingWorkout);
  };

  const renderWorkoutCard = ({ item: workout }: { item: WorkoutType }) => (
    <WorkoutCard key={workout.id} onSelectWorkout={onSelectWorkout} workout={workout} />
  );

  return (
    <FlatList
      data={workouts.toJS()}
      renderItem={renderWorkoutCard}
      keyExtractor={item => item.id}
    />
  );
});
