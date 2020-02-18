import React, { FunctionComponent } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { WorkoutType } from '@woap/mobx/workout';
import { WorkoutOverview } from '@woap/components/WorkoutOverview';

export const HistoryDetails: FunctionComponent<NavigationStackScreenProps> = ({ navigation }) => {
  const workout: WorkoutType = navigation.getParam('workout');

  return <WorkoutOverview workout={workout} />;
};
