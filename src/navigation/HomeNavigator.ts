import { createStackNavigator } from 'react-navigation-stack';

import { Home } from '../pages/Home';
import { Routes } from './routes';

export const HomeNavigator = createStackNavigator({
  [Routes.Home]: {
    screen: Home,
    navigationOptions: {
      title: 'Accueil',
    },
  },
});
