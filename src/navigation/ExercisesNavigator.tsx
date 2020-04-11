import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExercisesChoice } from '@woap/pages/Configurator/ExercisesChoice';
import { colors } from '@woap/styles/colors';
import { WorkoutType } from '@woap/mobx/workout';

import { Routes } from './routes';

export type ExercicesNavigatorParamList = {
  [Routes.ExercisesChoice]: {
    workout: WorkoutType;
  };
};

const Stack = createStackNavigator<ExercicesNavigatorParamList>();

export const ExercisesNavigator = () => (
  <Stack.Navigator
    initialRouteName={Routes.ExercisesChoice}
    screenOptions={{
      headerTitleStyle: { color: colors.white },
      headerStyle: { backgroundColor: colors.black },
    }}
  >
    <Stack.Screen
      name={Routes.ExercisesChoice}
      component={ExercisesChoice}
      options={{ title: 'Exercices' }}
    />
  </Stack.Navigator>
);
