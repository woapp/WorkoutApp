import React, { FunctionComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Card } from 'react-native-paper';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import { WorkoutType } from '../../modules/workout';
import { MuscleGroupSelectableItem } from '../../components/MuscleGroupSelectableItem';
import styled from '../../utils/styled-components';
import { useStore } from '../../utils/hooks/useStore';
import { Routes } from '../../navigation/routes';

export const Home: FunctionComponent<NavigationStackScreenProps> = observer(({ navigation }) => {
  const { workouts, setOngoingWorkout } = useStore();

  const onSelectWorkout = (workout: WorkoutType) => () => {
    setOngoingWorkout(workout);
    navigation.navigate(Routes.OngoingWorkout);
  };

  return (
    <View>
      {workouts.map((workout: WorkoutType) => (
        <WorkoutCard key={workout.id}>
          <TouchableOpacity onPress={onSelectWorkout(workout)}>
            <Name>{workout.name}</Name>
            <Exercises>{workout.nbExercises} exercices</Exercises>
            <Row>
              {workout.mainMuscleGroups.map((muscleGroup, index) => (
                <MuscleGroupContainer key={index}>
                  <MuscleGroupSelectableItem
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    muscleGroup={muscleGroup}
                    isSelected
                    disabled
                    iconSize={60}
                  />
                </MuscleGroupContainer>
              ))}
            </Row>
          </TouchableOpacity>
        </WorkoutCard>
      ))}
    </View>
  );
});

const Name = styled.Text(props => ({
  fontWeight: 'bold',
  fontSize: 24,
  marginBottom: props.theme.margin.x2,
}));

const Exercises = styled.Text(props => ({
  marginBottom: props.theme.margin.x2,
  fontSize: 18,
}));

const WorkoutCard = styled(Card)(({ theme }) => ({
  padding: theme.margin.x3,
  margin: theme.margin.x2,
  borderRadius: 7,
}));

const Row = styled.View({
  flexDirection: 'row',
});

const MuscleGroupContainer = styled.View(props => ({
  marginRight: props.theme.margin.x2,
}));
