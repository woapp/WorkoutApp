import React, { FunctionComponent } from 'react';
import { WorkoutType } from '@woap/mobx/workout';
import { WorkoutOverview } from '@woap/components/WorkoutOverview';
import { HistoryNavigatorParamList } from '@woap/navigation/HistoryNavigator';
import { Routes } from '@woap/navigation/routes';
import { RouteProp } from '@react-navigation/native';

type HistoryDetailsScreenRouteProp = RouteProp<HistoryNavigatorParamList, Routes.HistoryDetails>;

type Props = {
  route: HistoryDetailsScreenRouteProp;
};

export const HistoryDetails: FunctionComponent<Props> = ({ route }) => {
  const workout: WorkoutType = route.params.workout;

  return <WorkoutOverview workout={workout} />;
};
