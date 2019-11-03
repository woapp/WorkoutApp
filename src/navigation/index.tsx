import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

import { Routes } from './routes';

import { History } from '../pages/History';
import { Statistics } from '../pages/Statistics';
import { TrainingPlan } from '../pages/TrainingPlan';
import { Trainings } from '../pages/Trainings';
import {} from 'react-navigation';

const HomeNavigator = createStackNavigator(
  {
    [Routes.TrainingPlan]: {
      screen: TrainingPlan,
    },
  },
  {
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

const HistoryNavigator = createStackNavigator(
  {
    [Routes.History]: {
      screen: History,
    },
  },
  {
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

const ConfiguratorNavigator = createStackNavigator(
  {
    [Routes.Trainings]: {
      screen: Trainings,
    },
  },
  {
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

const StatisticsNavigator = createStackNavigator(
  {
    [Routes.Statistics]: {
      screen: Statistics,
    },
  },
  {
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

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    History: HistoryNavigator,
    Configurator: ConfiguratorNavigator,
    Statistics: StatisticsNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        console.log(routeName);
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
        }
        // You can return any component that you like here!
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

// TODO: remove @ts-ignore
//@ts-ignore
export const AppContainer = createAppContainer(TabNavigator);
