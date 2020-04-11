import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TrainingCreation } from '@woap/pages/Training/TrainingCreation';
import { TrainingSets } from '@woap/pages/Training/TrainingSets';
import { TrainingName } from '@woap/pages/Training/TrainingName';
import { TrainingTags } from '@woap/pages/Training/TrainingTags';

import { Routes } from './routes';

export type TrainingNavigatorParamList = {
  [Routes.TrainingCreation]: undefined;
  [Routes.TrainingSets]: undefined;
  [Routes.TrainingName]: undefined;
  [Routes.TrainingTags]: undefined;
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
    <Stack.Screen name={Routes.TrainingSets} component={TrainingSets} />
    <Stack.Screen name={Routes.TrainingName} component={TrainingName} />
    <Stack.Screen name={Routes.TrainingTags} component={TrainingTags} />
  </Stack.Navigator>
);
