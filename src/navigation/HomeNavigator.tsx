import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OngoingWorkoutOverview } from '@woap/pages/Home/OngoingWorkoutOverview';
import { Dashboard } from '@woap/pages/Home/Dashboard';
import { colors } from '@woap/styles/colors';

import { Routes } from './routes';

export type HomeNavigatorParamList = {
  [Routes.Dashboard]: undefined;
  [Routes.OngoingWorkoutOverview]: undefined;
};

const Stack = createStackNavigator<HomeNavigatorParamList>();

export const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen name={Routes.Dashboard} component={Dashboard} options={{ title: 'Accueil' }} />
    <Stack.Screen
      name={Routes.OngoingWorkoutOverview}
      component={OngoingWorkoutOverview}
      options={{ title: 'Aperçu' }}
    />
  </Stack.Navigator>
);
