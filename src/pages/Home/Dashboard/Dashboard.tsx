import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useStore } from '@woap/utils/hooks/useStore';
import { Routes } from '@woap/navigation/routes';

import { WorkoutType } from '../../../mobx/workout';

import { WorkoutCard } from './components/WorkoutCard/WorkoutCard';

export const Dashboard: FunctionComponent<NavigationStackScreenProps> = observer(
  ({ navigation }) => {
    const { workouts, setOngoingWorkout } = useStore();

    const onSelectWorkout = (workout: WorkoutType) => () => {
      setOngoingWorkout(workout);
      navigation.navigate(Routes.OngoingWorkoutOverview);
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
  }
);
