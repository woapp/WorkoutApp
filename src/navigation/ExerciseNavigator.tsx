import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExerciseName } from '@woap/pages/Exercise/ExerciseName';

import { Routes } from './routes';

export type ExerciseNavigatorParamList = {
  [Routes.ExerciseName]: undefined;
};

const Stack = createStackNavigator<ExerciseNavigatorParamList>();

export const ExerciseNavigator = () => (
  <Stack.Navigator
    initialRouteName={Routes.ExerciseName}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={Routes.ExerciseName} component={ExerciseName} />
  </Stack.Navigator>
);
