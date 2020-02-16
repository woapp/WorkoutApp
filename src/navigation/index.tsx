import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { OngoingWorkout } from '@woap/pages/Home/OngoingWorkout';
import { Login } from '@woap/pages/Login';

import { Routes } from './routes';
import { TabNavigator } from './TabNavigator';
import { ExercisesNavigator } from './ExercisesNavigator';

const RootNavigator = createStackNavigator(
  {
    [Routes.TabNavigator]: TabNavigator,
    [Routes.ExercisesNavigator]: ExercisesNavigator,
    [Routes.Login]: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    [Routes.OngoingWorkout]: {
      screen: OngoingWorkout,
      navigationOptions: {
        title: 'Exercices',
        gestureEnabled: false,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: Routes.Login,
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
