import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HistoryDetails } from '@woap/pages/History/HistoryDetails';
import { HistoryOverview } from '@woap/pages/History/HistoryOverview';
import { WorkoutType } from '@woap/mobx/workout';
import { colors } from '@woap/styles/colors';

import { Routes } from './routes';

export type HistoryNavigatorParamList = {
  [Routes.HistoryOverview]: undefined;
  [Routes.HistoryDetails]: {
    workout: WorkoutType;
  };
};

const Stack = createStackNavigator<HistoryNavigatorParamList>();

export const HistoryNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen
      name={Routes.HistoryOverview}
      component={HistoryOverview}
      options={{ title: 'Historique' }}
    />
    <Stack.Screen
      name={Routes.HistoryDetails}
      component={HistoryDetails}
      options={{ title: 'Détails' }}
    />
  </Stack.Navigator>
);
