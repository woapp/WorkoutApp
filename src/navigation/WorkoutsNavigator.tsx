import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyWorkouts } from 'old/pages/Configurator/MyWorkouts';
import { WorkoutEditor } from 'old/pages/Configurator/WorkoutEditor';

import { Routes } from './routes';

export type WorkoutsNavigatorParamList = {
  [Routes.MyWorkouts]: undefined;
  [Routes.WorkoutEditor]: {};
};

const Stack = createStackNavigator();

export const WorkoutsNavigator = () => (
  <Stack.Navigator initialRouteName={Routes.MyWorkouts} headerMode="none">
    <Stack.Screen name={Routes.MyWorkouts} component={MyWorkouts} />
    <Stack.Screen name={Routes.WorkoutEditor} component={WorkoutEditor} />
  </Stack.Navigator>
);
