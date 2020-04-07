import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TrainingCreation } from '@woap/pages/Training/TrainingCreation';
import { TrainingSetsConfiguration } from '@woap/pages/Training/TrainingSetsConfiguration';

import { Routes } from './routes';

export type TrainingNavigatorParamList = {
  [Routes.TrainingCreation]: undefined;
  [Routes.TrainingSetsConfiguration]: undefined;
};

const Stack = createStackNavigator<TrainingNavigatorParamList>();

export const TrainingNavigator = () => (
  <Stack.Navigator
    initialRouteName={Routes.TrainingCreation}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={Routes.TrainingCreation} component={TrainingCreation} />
    <Stack.Screen name={Routes.TrainingSetsConfiguration} component={TrainingSetsConfiguration} />
  </Stack.Navigator>
);
