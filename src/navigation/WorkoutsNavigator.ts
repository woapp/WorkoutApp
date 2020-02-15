import { createStackNavigator } from 'react-navigation-stack';

import { MyWorkouts } from '../pages/MyWorkouts';
import { WorkoutEditor } from '../pages/WorkoutEditor';
import { colors } from '../styles/colors';

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

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.white,
    },
  }
);
