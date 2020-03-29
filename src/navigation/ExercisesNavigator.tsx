import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExerciseType } from '@woap/mobx/exercise';
import { ExercisesChoice } from '@woap/pages/Configurator/ExercisesChoice';
import { NewExercise } from '@woap/pages/Configurator/NewExercise';
import { colors } from '@woap/styles/colors';
import { WorkoutType } from '@woap/mobx/workout';

import { Routes } from './routes';

export type ExercicesNavigatorParamList = {
  [Routes.ExercisesChoice]: {
    workout: WorkoutType;
  };
  [Routes.NewExercise]: {
    exercise: ExerciseType;
    validateExerciseCreation: (newExercise: ExerciseType) => void;
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
    <Stack.Screen
      name={Routes.NewExercise}
      component={NewExercise}
      options={{ title: 'Nouvel exercice' }}
    />
  </Stack.Navigator>
);
