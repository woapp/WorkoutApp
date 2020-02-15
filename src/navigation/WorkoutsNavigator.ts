import { createStackNavigator } from 'react-navigation-stack';

import { MyWorkouts } from '../pages/MyWorkouts';
import { WorkoutEditor } from '../pages/WorkoutEditor';

import { Routes } from './routes';

export const WorkoutsNavigator = createStackNavigator(
  {
    [Routes.Workouts]: {
      screen: MyWorkouts,
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
