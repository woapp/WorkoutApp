import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '@woap/pages/Home/Dashboard';
import { OngoingTrainingPreview } from '@woap/pages/Home/OngoingTrainingPreview';

import { Routes } from './routes';

export type HomeNavigatorParamList = {
  [Routes.Dashboard]: undefined;
  [Routes.OngoingTrainingPreview]: undefined;
};

const Stack = createStackNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.Dashboard} component={Dashboard} />
    <Stack.Screen name={Routes.OngoingTrainingPreview} component={OngoingTrainingPreview} />
  </Stack.Navigator>
);
