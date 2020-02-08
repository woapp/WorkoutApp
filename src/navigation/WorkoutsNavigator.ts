import { createStackNavigator } from 'react-navigation-stack';

import { Workouts } from '../pages/Workouts';

import { Routes } from './routes';

export const WorkoutsNavigator = createStackNavigator(
  {
    [Routes.Workouts]: {
      screen: Workouts,
      navigationOptions: {
        title: 'Entraînements',
      },
    },
  },
  {
    initialRouteName: Routes.Workouts,
  }
);
