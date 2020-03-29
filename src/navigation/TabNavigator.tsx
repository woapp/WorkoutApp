import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '@woap/styles/colors';

import { Routes } from './routes';
import { WorkoutsNavigator } from './WorkoutsNavigator';
import { HistoryNavigator } from './HistoryNavigator';
import { HomeNavigator } from './HomeNavigator';
import { ProfileNavigator } from './ProfileNavigator';

export type TabNavigatorParamList = {
  [Routes.HomeNavigator]: undefined;
  [Routes.WorkoutsNavigator]: undefined;
  [Routes.HistoryNavigator]: undefined;
  [Routes.ProfileNavigator]: undefined;
};

const ICON_SIZE = 30;

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName={Routes.HomeNavigator}
    tabBarOptions={{
      showLabel: false,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.white,
      style: {
        backgroundColor: colors.black,
      },
    }}
  >
    <Tab.Screen
      name={Routes.HomeNavigator}
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="ios-home" size={ICON_SIZE} color={color} />,
      }}
    />
    <Tab.Screen
      name={Routes.WorkoutsNavigator}
      component={WorkoutsNavigator}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="ios-fitness" size={ICON_SIZE} color={color} />,
      }}
    />
    <Tab.Screen
      name={Routes.HistoryNavigator}
      component={HistoryNavigator}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="ios-calendar" size={ICON_SIZE} color={color} />,
      }}
    />
    <Tab.Screen
      name={Routes.ProfileNavigator}
      component={ProfileNavigator}
      options={{
        tabBarIcon: ({ color }) => <Ionicons name="ios-person" size={ICON_SIZE} color={color} />,
      }}
    />
  </Tab.Navigator>
);
