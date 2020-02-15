import { createStackNavigator } from 'react-navigation-stack';

import { OngoingWorkoutOverview } from '../pages/Home/OngoingWorkoutOverview';
import { Dashboard } from '../pages/Home/Dashboard';

import { Routes } from './routes';

export const HomeNavigator = createStackNavigator({
  [Routes.Dashboard]: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Accueil',
    },
  },
  [Routes.OngoingWorkoutOverview]: {
    screen: OngoingWorkoutOverview,
    navigationOptions: {
      title: "Let's go!",
    },
  },
});
