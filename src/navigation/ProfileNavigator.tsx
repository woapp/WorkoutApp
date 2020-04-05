import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MyProfile } from '@woap/pages/MyProfile';

import { Routes } from './routes';

export type ProfileNavigatorParamList = {
  [Routes.MyProfile]: undefined;
};

const Stack = createStackNavigator<ProfileNavigatorParamList>();

export const ProfileNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.MyProfile} component={MyProfile} />
  </Stack.Navigator>
);
