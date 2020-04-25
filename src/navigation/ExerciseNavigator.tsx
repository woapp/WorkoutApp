import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExerciseName } from '@woap/pages/Exercise/ExerciseName';
import { ExerciseMuscleGroups } from '@woap/pages/Exercise/ExerciseMuscleGroups';
import { ExerciseDescription } from '@woap/pages/Exercise/ExerciseDescription';
import { ExerciseType } from '@woap/mobx/exercise';

import { Routes } from './routes';

export type ExerciseNavigatorParamList = {
  [Routes.ExerciseName]: undefined;
  [Routes.ExerciseMuscleGroups]: { exercise: ExerciseType };
  [Routes.ExerciseDescription]: { exercise: ExerciseType };
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
    <Stack.Screen name={Routes.ExerciseMuscleGroups} component={ExerciseMuscleGroups} />
    <Stack.Screen name={Routes.ExerciseDescription} component={ExerciseDescription} />
  </Stack.Navigator>
);
