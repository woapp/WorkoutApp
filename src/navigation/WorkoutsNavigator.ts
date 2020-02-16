import { createStackNavigator } from 'react-navigation-stack';

import { MyWorkouts } from '@woap/pages/Configurator/MyWorkouts';
import { WorkoutEditor } from '@woap/pages/Configurator/WorkoutEditor';
import { colors } from '../styles/colors';

import { Routes } from './routes';

export const WorkoutsNavigator = createStackNavigator(
  {
    [Routes.MyWorkouts]: {
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
    initialRouteName: Routes.MyWorkouts,

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.white,
    },
  }
);
