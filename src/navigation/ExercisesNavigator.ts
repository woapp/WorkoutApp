import { createStackNavigator } from 'react-navigation-stack';

import { AddExercises } from '../pages/AddExercises';
import { CreateExercise } from '../pages/CreateExercise';
import { colors } from '../styles/colors';

import { Routes } from './routes';

export const ExercisesNavigator = createStackNavigator(
  {
    [Routes.AddExercises]: { screen: AddExercises, navigationOptions: { title: 'Exercices' } },
    [Routes.CreateExercise]: {
      screen: CreateExercise,
      navigationOptions: { title: 'Nouvel exercice' },
    },
  },
  {
    initialRouteName: Routes.AddExercises,
    defaultNavigationOptions: {
      headerTitleStyle: { color: colors.white },
      headerStyle: { backgroundColor: colors.black },
    },
  }
);
