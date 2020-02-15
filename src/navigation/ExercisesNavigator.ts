import { createStackNavigator } from 'react-navigation-stack';

import { ExercisesChoice } from '../pages/ExercisesChoice';
import { NewExercise } from '../pages/NewExercise';
import { colors } from '../styles/colors';

import { Routes } from './routes';

export const ExercisesNavigator = createStackNavigator(
  {
    [Routes.ExercisesChoice]: {
      screen: ExercisesChoice,
      navigationOptions: { title: 'Exercices' },
    },
    [Routes.NewExercise]: {
      screen: NewExercise,
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
