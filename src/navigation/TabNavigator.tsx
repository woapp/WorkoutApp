import React from 'react';
import { SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '@woap/styles/colors';
import { HistoryIcon } from '@woap/components/Icons/HistoryIcon';
import { HomeIcon } from '@woap/components/Icons/HomeIcon';
import { ProfileIcon } from '@woap/components/Icons/ProfileIcon';

import { Routes } from './routes';
import { HistoryNavigator } from './HistoryNavigator';
import { HomeNavigator } from './HomeNavigator';
import { ProfileNavigator } from './ProfileNavigator';

export type TabNavigatorParamList = {
  [Routes.HomeNavigator]: undefined;
  [Routes.WorkoutsNavigator]: undefined;
  [Routes.HistoryNavigator]: undefined;
  [Routes.ProfileNavigator]: undefined;
};

const ICON_SIZE = 32;

const Tab = createMaterialTopTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => (
  <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: colors.background.black }}>
    <Tab.Navigator
      initialRouteName={Routes.HomeNavigator}
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        iconStyle: { height: ICON_SIZE, width: ICON_SIZE },
        indicatorStyle: { backgroundColor: colors.green },
        style: {
          backgroundColor: colors.background.black,
        },
      }}
    >
      <Tab.Screen
        name={Routes.HistoryNavigator}
        component={HistoryNavigator}
        options={{
          tabBarIcon: ({ focused }) => <HistoryIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name={Routes.HomeNavigator}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name={Routes.ProfileNavigator}
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  </SafeAreaView>
);
