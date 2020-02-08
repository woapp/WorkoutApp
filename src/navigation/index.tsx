import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

import { History } from '../pages/History';
import { Home } from '../pages/Home';

import { Routes } from './routes';
import { WorkoutsNavigator } from './WorkoutsNavigator';

const HomeNavigator = createStackNavigator({
  [Routes.Home]: {
    screen: Home,
    navigationOptions: {
      title: 'Accueil',
    },
  },
});

const HistoryNavigator = createStackNavigator({
  [Routes.History]: {
    screen: History,
    navigationOptions: {
      title: 'Historique',
    },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    History: HistoryNavigator,
    Home: HomeNavigator,
    Workouts: WorkoutsNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }): React.ReactElement => {
        const { routeName } = navigation.state;
        let iconName = '';
        switch (routeName) {
          case 'History':
            iconName = `ios-calendar`;
            break;
          case 'Home':
            iconName = `ios-home`;
            break;
          case 'Workouts':
            iconName = `ios-fitness`;
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
