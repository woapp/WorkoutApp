import React from 'react';
import { FlatList } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { workoutsSelector } from '../../modules/selectors';
import { useStore } from '../../utils/hooks/useStore';
import styled from '../../utils/styled-components';
import { RoundButton } from '../../components/RoundButton';
import { Routes } from '../..//navigation/routes';
import { WorkoutItem } from '../../components/WorkoutItem';

export const Workouts: React.FC<NavigationStackScreenProps> = ({ navigation }) => {
  const workouts = useStore(workoutsSelector);

  const renderWorkoutItem = ({ item }) => <WorkoutItem workout={item} />;
  const onEditWorkout = () => navigation.navigate(Routes.WorkoutEditor);

  return (
    <Container>
      <FlatList data={workouts} renderItem={renderWorkoutItem} />
      <RoundButtonContainer>
        <RoundButton onPress={onEditWorkout} />
      </RoundButtonContainer>
    </Container>
  );
};

const Container = styled.View({
  flex: 1,
});

const RoundButtonContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
