import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home } from '../pages/Home';

import { Routes } from './routes';

export const stackNavigation = createStackNavigator({
  [Routes.Home]: {
    screen: Home,
  },
});

export const AppContainer = createAppContainer(stackNavigation);
