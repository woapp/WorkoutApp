import { createStackNavigator } from 'react-navigation-stack';

import { Workouts } from '../pages/Workouts';
import { WorkoutEditor } from '../pages/WorkoutEditor';

import { Routes } from './routes';

export const WorkoutsNavigator = createStackNavigator(
  {
    [Routes.Workouts]: {
      screen: Workouts,
      navigationOptions: {
        title: 'Entraînements',
      },
    },
    [Routes.WorkoutEditor]: {
      screen: WorkoutEditor,
      navigationOptions: {
        title: 'Edition',
      },
    },
  },
  {
    initialRouteName: Routes.Workouts,
  }
);
