import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '@woap/styles/colors';

import { Routes } from './routes';
import { WorkoutsNavigator } from './WorkoutsNavigator';
import { HistoryNavigator } from './HistoryNavigator';
import { HomeNavigator } from './HomeNavigator';
import { ProfileNavigator } from './ProfileNavigator';

export const TabNavigator = createBottomTabNavigator(
  {
    [Routes.HomeNavigator]: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={30} color={tintColor} />,
      },
    },
    [Routes.WorkoutsNavigator]: {
      screen: WorkoutsNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-fitness" size={30} color={tintColor} />,
      },
    },
    [Routes.HistoryNavigator]: {
      screen: HistoryNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-calendar" size={30} color={tintColor} />,
      },
    },
    [Routes.ProfileNavigator]: {
      screen: ProfileNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-person" size={30} color={tintColor} />,
      },
    },
  },
  {
    initialRouteName: Routes.HomeNavigator,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.white,
      style: {
        backgroundColor: colors.black,
      },
    },
  }
);
