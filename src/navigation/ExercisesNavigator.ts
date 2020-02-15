import { createStackNavigator } from 'react-navigation-stack';

import { ExercisesChoice } from '../pages/ExercisesChoice';
import { CreateExercise } from '../pages/CreateExercise';
import { colors } from '../styles/colors';

import { Routes } from './routes';

export const ExercisesNavigator = createStackNavigator(
  {
    [Routes.ExercisesChoice]: {
      screen: ExercisesChoice,
      navigationOptions: { title: 'Exercices' },
    },
    [Routes.CreateExercise]: {
      screen: CreateExercise,
      navigationOptions: { title: 'Nouvel exercice' },
    },
  },
  {
    initialRouteName: Routes.ExercisesChoice,
    defaultNavigationOptions: {
      headerTitleStyle: { color: colors.white },
      headerStyle: { backgroundColor: colors.black },
    },
  }
);
