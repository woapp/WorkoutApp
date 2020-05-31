import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '@woap/pages/Home/Dashboard';

import { Routes } from './routes';

export type HomeNavigatorParamList = {
  [Routes.Dashboard]: undefined;
};

const Stack = createStackNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.Dashboard} component={Dashboard} />
  </Stack.Navigator>
);
