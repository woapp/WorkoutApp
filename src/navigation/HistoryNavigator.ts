import { createStackNavigator } from 'react-navigation-stack';

import { HistoryDetails } from '../pages/HistoryDetails';
import { History } from '../pages/History';

import { Routes } from './routes';

export const HistoryNavigator = createStackNavigator({
  [Routes.History]: {
    screen: History,
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
