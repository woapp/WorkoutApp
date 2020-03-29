import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '@woap/styles/colors';
import { MyProfile } from '@woap/pages/MyProfile';

import { Routes } from './routes';

export type ProfileNavigatorParamList = {
  [Routes.MyProfile]: undefined;
};

const Stack = createStackNavigator<ProfileNavigatorParamList>();

export const ProfileNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen name={Routes.MyProfile} component={MyProfile} options={{ title: 'Mon Profil' }} />
  </Stack.Navigator>
);
