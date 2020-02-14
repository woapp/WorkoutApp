import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { OngoingWorkoutExercises } from '../pages/OngoingWorkoutExercises';

import { Routes } from './routes';
import { TabNavigator } from './TabNavigator';
import { ExercisesNavigator } from './ExercisesNavigator';

const RootNavigator = createStackNavigator(
  {
    [Routes.TabNavigator]: TabNavigator,
    [Routes.ExercisesNavigator]: ExercisesNavigator,
    [Routes.OngoingWorkoutExercises]: {
      screen: OngoingWorkoutExercises,
      navigationOptions: {
        title: 'Exercices',
        gestureEnabled: false,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1C1B21',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const AppContainer = createAppContainer(RootNavigator);
