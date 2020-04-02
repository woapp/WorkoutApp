import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TrainingCreation } from '@woap/pages/Training/TrainingCreation';

import { Routes } from './routes';

export type TrainingNavigatorParamList = {
  [Routes.TrainingCreation]: undefined;
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
  </Stack.Navigator>
);
