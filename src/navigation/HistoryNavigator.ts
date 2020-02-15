import { createStackNavigator } from 'react-navigation-stack';

import { HistoryDetails } from '../pages/History/HistoryDetails';
import { HistoryOverview } from '../pages/History/HistoryOverview';

import { Routes } from './routes';

export const HistoryNavigator = createStackNavigator({
  [Routes.History]: {
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
});
