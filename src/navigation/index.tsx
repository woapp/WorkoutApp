import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { AddExercises } from '../pages/AddExercises';

import { Routes } from './routes';
import { TabNavigator } from './TabNavigator';

const RootNavigator = createStackNavigator(
  {
    [Routes.TabNavigator]: TabNavigator,
    [Routes.AddExercises]: AddExercises,
  },
  {
    mode: 'modal',
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
