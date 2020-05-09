import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HistoryOverview } from '@woap/pages/History/HistoryOverview';
import { HistoryCalendar } from '@woap/pages/History/HistoryCalendar';
import { HistoryStatistics } from '@woap/pages/History/HistoryStatistics';

import { Routes } from './routes';

export type HistoryNavigatorParamList = {
  [Routes.HistoryOverview]: undefined;
  [Routes.HistoryCalendar]: undefined;
  [Routes.HistoryStatistics]: undefined;
};

const Stack = createStackNavigator<HistoryNavigatorParamList>();

export const HistoryNavigator = () => (
  <>
    <Stack.Navigator headerMode="none" initialRouteName={Routes.HistoryOverview}>
      <Stack.Screen name={Routes.HistoryOverview} component={HistoryOverview} />
      <Stack.Screen name={Routes.HistoryCalendar} component={HistoryCalendar} />
      <Stack.Screen name={Routes.HistoryStatistics} component={HistoryStatistics} />
    </Stack.Navigator>
  </>
);
