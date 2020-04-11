import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HistoryDetails } from '@woap/pages/History/HistoryDetails';
import { HistoryOverview } from '@woap/pages/History/HistoryOverview';

import { Routes } from './routes';

export type HistoryNavigatorParamList = {
  [Routes.HistoryOverview]: undefined;
  [Routes.HistoryDetails]: {};
};

const Stack = createStackNavigator<HistoryNavigatorParamList>();

export const HistoryNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.HistoryOverview} component={HistoryOverview} />
    <Stack.Screen name={Routes.HistoryDetails} component={HistoryDetails} />
  </Stack.Navigator>
);
