import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Routes } from './routes';
import { WorkoutsNavigator } from './WorkoutsNavigator';
import { HistoryNavigator } from './HistoryNavigator';
import { HomeNavigator } from './HomeNavigator';

export const TabNavigator = createBottomTabNavigator(
  {
    [Routes.HistoryNavigator]: {
      screen: HistoryNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-calendar" size={30} color={tintColor} />,
      },
    },
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
  },
  {
    initialRouteName: Routes.HomeNavigator,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#FFDB7C',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#1C1B21',
      },
    },
  }
);
