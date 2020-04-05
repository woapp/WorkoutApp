import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OngoingWorkoutOverview } from '@woap/pages/Home/OngoingWorkoutOverview';
import { Dashboard } from '@woap/pages/Home/Dashboard';

import { Routes } from './routes';

export type HomeNavigatorParamList = {
  [Routes.Dashboard]: undefined;
  [Routes.OngoingWorkoutOverview]: undefined;
};

const Stack = createStackNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.Dashboard} component={Dashboard} />
    <Stack.Screen name={Routes.OngoingWorkoutOverview} component={OngoingWorkoutOverview} />
  </Stack.Navigator>
);
