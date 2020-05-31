import React, { FunctionComponent } from 'react';
import { FlatList } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { WorkoutsNavigatorParamList } from '@woap/navigation/WorkoutsNavigator';
import { ActionButton } from '@woap/components/ActionButton';
import styled from '@woap/utils/styled-components';
import { useStore } from '@woap/utils/hooks/useStore';
import { Routes } from '@woap/navigation/routes';
import { createWorkout } from '@woap/mobx/workout/constructor';

import { WorkoutItem } from './components/WorkoutItem';

type MyWorkoutsScreenNavigationProp = StackNavigationProp<
  WorkoutsNavigatorParamList,
  Routes.MyWorkouts
>;

type Props = {
  navigation: MyWorkoutsScreenNavigationProp;
};

export const MyWorkouts: FunctionComponent<Props> = observer(({ navigation }) => {
  const { workouts, addWorkout, removeWorkout } = useStore();

  workouts.map(w => console.log(w.name));

  const renderWorkoutItem = ({ item }) => (
    <WorkoutItem workout={item} deleteWorkout={removeWorkout} />
  );

  const onAddWorkout = () => {
    const newWorkout = createWorkout();
    addWorkout(newWorkout);
    navigation.navigate(Routes.WorkoutEditor, { workout: newWorkout });
  };

  return (
    <Container>
      <FlatList data={workouts} renderItem={renderWorkoutItem} keyExtractor={item => item.id} />
      <ActionButtonContainer>
        <ActionButton onPress={onAddWorkout} title="+" />
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
