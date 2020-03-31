import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { StackNavigationProp } from '@react-navigation/stack';
import styled from '@woap/utils/styled-components';
import { ActionButton } from '@woap/components/ActionButton';
import { ExercisesList } from '@woap/components/ExercisesList';
import { InputTitle } from '@woap/components/InputTitle';
import { Routes } from '@woap/navigation/routes';
import { WorkoutsNavigatorParamList } from '@woap/navigation/WorkoutsNavigator';
import { TabNavigatorParamList } from '@woap/navigation/TabNavigator';
import { RootNavigatorParamList } from '@woap/navigation';

type WorkoutEditorScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.TabNavigator>,
  CompositeNavigationProp<
    MaterialTopTabNavigationProp<TabNavigatorParamList, Routes.WorkoutsNavigator>,
    StackNavigationProp<WorkoutsNavigatorParamList, Routes.WorkoutEditor>
  >
>;

type WorkoutEditorScreenRouteProp = RouteProp<WorkoutsNavigatorParamList, Routes.WorkoutEditor>;

type Props = {
  navigation: WorkoutEditorScreenNavigationProp;
  route: WorkoutEditorScreenRouteProp;
};

export const WorkoutEditor: FunctionComponent<Props> = observer(({ navigation, route }) => {
  const workout = route.params.workout;
  const setWorkoutName = (text: string) => workout.setName(text);
  const navigateToAddExercisesScreen = () =>
    navigation.navigate(Routes.ExercisesNavigator, {
      screen: Routes.ExercisesChoice,
      params: {
        workout,
      },
    });

  return (
    <Container>
      <InputTitle value={workout.name} placeholder="Entraînement" onChangeText={setWorkoutName} />
      <ExercisesList workout={workout} />
      <ActionButtonContainer>
        <ActionButton onPress={navigateToAddExercisesScreen} title="+" />
      </ActionButtonContainer>
    </Container>
  );
});

const Container = styled.View({
  flex: 1,
});

const ActionButtonContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
