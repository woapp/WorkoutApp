import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Platform } from 'react-native';

import { History } from '../pages/History';
import { Statistics } from '../pages/Statistics';
import { TrainingPlan } from '../pages/TrainingPlan';
import { Trainings } from '../pages/Trainings';
import { Watch } from '../pages/Watch';

import { Routes } from './routes';

const HomeNavigator = createStackNavigator({
  [Routes.TrainingPlan]: {
    screen: TrainingPlan,
  },
});

const HistoryNavigator = createStackNavigator({
  [Routes.History]: {
    screen: History,
  },
});

const ConfiguratorNavigator = createStackNavigator({
  [Routes.Trainings]: {
    screen: Trainings,
  },
});

const StatisticsNavigator = createStackNavigator({
  [Routes.Statistics]: {
    screen: Statistics,
  },
});

const WatchNavigator = createStackNavigator({
  [Routes.Watch]: {
    screen: Watch,
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    History: HistoryNavigator,
    Configurator: ConfiguratorNavigator,
    Statistics: StatisticsNavigator,
    ...(Platform.OS === 'ios' ? { Watch: WatchNavigator } : {}),
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }): React.ReactElement => {
        const { routeName } = navigation.state;
        let iconName = '';
        switch (routeName) {
          case 'Home':
            iconName = `ios-home`;
            break;
          case 'History':
            iconName = `ios-calendar`;
            break;
          case 'Configurator':
            iconName = `ios-fitness`;
            break;
          case 'Statistics':
            iconName = `ios-stats`;
            break;
          case 'Watch':
            iconName = `ios-watch`;
            break;
        }

        return <Ionicons name={iconName} size={30} color={tintColor} />;
      },
    }),
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

const RootNavigator = createStackNavigator(
  {
    Root: TabNavigator,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1C1B21',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const AppContainer = createAppContainer(RootNavigator);
