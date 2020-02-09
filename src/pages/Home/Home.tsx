import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Card } from 'react-native-paper';

import { WorkoutType } from '../../modules/workout';
import { MuscleGroupSelectableItem } from '../../components/MuscleGroupSelectableItem';
import styled from '../../utils/styled-components';
import { useStore } from '../../utils/hooks/useStore';

export const Home: FunctionComponent = observer(() => {
  const { workouts } = useStore();

  return (
    <View>
      {workouts.map((workout: WorkoutType) => (
        <WorkoutCard key={workout.id}>
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
