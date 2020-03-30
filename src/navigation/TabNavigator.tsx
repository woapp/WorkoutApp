import React from 'react';
import { SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
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

const Tab = createMaterialTopTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => (
  <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: colors.background.black }}>
    <Tab.Navigator
      initialRouteName={Routes.HomeNavigator}
      tabBarOptions={{
        showLabel: false,
        indicatorStyle: { backgroundColor: colors.green },
        style: {
          backgroundColor: colors.background.black,
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
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-calendar" size={ICON_SIZE} color={color} />
          ),
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
  </SafeAreaView>
);
