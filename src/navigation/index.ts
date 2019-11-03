import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Routes } from './routes';

import { History } from '../pages/History';
import { Statistics } from '../pages/Statistics';
import { TrainingPlan } from '../pages/TrainingPlan';
import { Trainings } from '../pages/Trainings';

const HomeNavigator = createStackNavigator({
  [Routes.TrainingPlan]: {
    screen: TrainingPlan,
  },
});

const HistoryNavigator = createStackNavigator({
  [Routes.History]: {
    screen: History,
  },
});

const ConfiguratorNavigator = createStackNavigator({
  [Routes.Trainings]: {
    screen: Trainings,
  },
});

const StatisticsNavigator = createStackNavigator({
  [Routes.Statistics]: {
    screen: Statistics,
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  History: HistoryNavigator,
  Configurator: ConfiguratorNavigator,
  Statistics: StatisticsNavigator,
});

// TODO: remove @ts-ignore
//@ts-ignore
export const AppContainer = createAppContainer(TabNavigator);
