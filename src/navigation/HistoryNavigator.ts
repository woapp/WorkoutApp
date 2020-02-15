import { createStackNavigator } from 'react-navigation-stack';

import { HistoryDetails } from '../pages/History/HistoryDetails';
import { HistoryOverview } from '../pages/History/HistoryOverview';
import { colors } from '../styles/colors';

import { Routes } from './routes';

export const HistoryNavigator = createStackNavigator(
  {
    [Routes.HistoryOverview]: {
      screen: HistoryOverview,
      navigationOptions: {
        title: 'Historique',
      },
    },
    [Routes.HistoryDetails]: {
      screen: HistoryDetails,
      navigationOptions: {
        title: 'Détails',
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
