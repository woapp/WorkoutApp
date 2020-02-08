import { createStackNavigator } from 'react-navigation-stack';
import { History } from '../pages/History';
import { Routes } from './routes';

export const HistoryNavigator = createStackNavigator({
  [Routes.History]: {
    screen: History,
    navigationOptions: {
      title: 'Historique',
    },
  },
});
