import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { TextTitle } from '@woap/components/Texts';
import styled from '@woap/utils/styled-components';
import { Routes } from '@woap/navigation/routes';
import { WorkoutDoneType } from '@woap/mobx/workoutDone';
import { useNavigation } from '@react-navigation/native';

interface Props {
  workout: WorkoutDoneType;
}

export const WorkoutItem: FunctionComponent<Props> = observer(({ workout }) => {
  const navigation = useNavigation();

  const onWorkoutPress = () => navigation.navigate(Routes.HistoryDetails, { workout });

  return (
    <Container onPress={onWorkoutPress}>
      <Row>
        <TextTitle>{workout.name}</TextTitle>
        <TextTitle>
          {workout.date.getDate()}/{workout.date.getMonth() + 1}
        </TextTitle>
      </Row>
      <Exercises>{workout.exercises.length} exercices</Exercises>
    </Container>
  );
});

const Container = styled.TouchableOpacity(props => ({
  padding: props.theme.margin.x2,
  borderBottomColor: props.theme.colors.greyScale[20],
  borderBottomWidth: 1,
  flex: 1,
}));

const Row = styled.View({
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
});

const Exercises = styled.Text({
  fontSize: 18,
});
