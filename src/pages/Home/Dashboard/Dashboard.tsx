import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { useStore } from '@woap/utils/hooks/useStore';
import { Routes } from '@woap/navigation/routes';
import { WorkoutType } from '@woap/mobx/workout';
import { HomeNavigatorParamList } from '@woap/navigation/HomeNavigator';

import { WorkoutCard } from './components/WorkoutCard/WorkoutCard';

type DashboardScreenNavigationProp = StackNavigationProp<HomeNavigatorParamList, Routes.Dashboard>;

type Props = {
  navigation: DashboardScreenNavigationProp;
};

export const Dashboard: FunctionComponent<Props> = observer(({ navigation }) => {
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
});
