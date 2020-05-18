import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Support } from '@woap/pages/Support';

import { Routes } from './routes';

export type SupportNavigatorParamList = {
  [Routes.Support]: undefined;
};

const Stack = createStackNavigator<SupportNavigatorParamList>();

export const SupportNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.Support} component={Support} />
  </Stack.Navigator>
);
