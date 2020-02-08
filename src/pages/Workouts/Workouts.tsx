import React from 'react';
import { FlatList } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { observer } from 'mobx-react-lite';

import { createWorkout } from '../../modules/workout/constructor';
import { useStore } from '../../utils/hooks/useStore';
import styled from '../../utils/styled-components';
import { RoundButton } from '../../components/RoundButton';
import { Routes } from '../..//navigation/routes';
import { WorkoutItem } from '../../components/WorkoutItem';

export const Workouts = observer(({ navigation }: NavigationStackScreenProps) => {
  const { workouts, addWorkout, removeWorkout } = useStore(store => store);

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
      <RoundButtonContainer>
        <RoundButton onPress={onAddWorkout} />
      </RoundButtonContainer>
    </Container>
  );
});

const Container = styled.View({
  flex: 1,
});

const RoundButtonContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
