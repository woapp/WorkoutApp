import { createStackNavigator } from 'react-navigation-stack';
import { OngoingWorkoutOverview } from '@woap/pages/Home/OngoingWorkoutOverview';
import { Dashboard } from '@woap/pages/Home/Dashboard';
import { colors } from '@woap/styles/colors';

import { Routes } from './routes';

export const HomeNavigator = createStackNavigator(
  {
    [Routes.Dashboard]: {
      screen: Dashboard,
      navigationOptions: {
        title: 'Accueil',
      },
    },
    [Routes.OngoingWorkoutOverview]: {
      screen: OngoingWorkoutOverview,
      navigationOptions: {
        title: 'Aperçu',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.white,
    },
  }
);
