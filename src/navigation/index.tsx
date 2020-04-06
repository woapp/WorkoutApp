import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { OngoingWorkout } from '@woap/pages/Home/OngoingWorkout';
import { Login } from '@woap/pages/Login';
import { WorkoutType } from '@woap/mobx/workout';
import { Signup } from '@woap/pages/Signup';

import { Routes } from './routes';
import { TabNavigator } from './TabNavigator';
import { ExercisesNavigator } from './ExercisesNavigator';
import { TrainingNavigator } from './TrainingNavigator';

export type RootNavigatorParamList = {
  [Routes.Login]: undefined;
  [Routes.Signup]: undefined;
  [Routes.TabNavigator]: {
    screen: Routes;
    params?: { screen: Routes };
  };
  [Routes.ExercisesNavigator]: {
    screen: Routes;
    params: {
      workout: WorkoutType;
    };
  };
  [Routes.OngoingWorkout]: undefined;
  [Routes.TrainingNavigator]: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

const RootNavigator = () => (
  <Stack.Navigator
    mode="modal"
    headerMode="none"
    initialRouteName={Routes.Login}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1C1B21',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name={Routes.TabNavigator}
      component={TabNavigator}
      options={{ gestureEnabled: false }}
    />
    <Stack.Screen name={Routes.ExercisesNavigator} component={ExercisesNavigator} />
    <Stack.Screen
      name={Routes.Login}
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={Routes.Signup}
      component={Signup}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name={Routes.OngoingWorkout}
      component={OngoingWorkout}
      options={{
        title: 'Exercices',
        gestureEnabled: false,
      }}
    />

    <Stack.Screen
      name={Routes.TrainingNavigator}
      component={TrainingNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export const AppContainer = () => (
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
);
