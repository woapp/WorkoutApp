import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { TextSubtitle, TextTitle } from '@woap/components/Texts';
import { Spacer } from '@woap/components/Spacer';

interface Props {
  // workout: WorkoutType;
}

export const WorkoutOverview: FunctionComponent<Props> = () => (
  <Container>
    <Title>Workout name</Title>
    <Spacer height={2} />
    <Subtitle>Exercices</Subtitle>
    <Spacer height={2} />
    {/* <FlatList
      data={workout.exercises.toJS()}
      renderItem={({ item, index }: { item: ExerciseSetsType; index: number }) => (
        <ExerciseItem
          isFirst={index === 0}
          isLast={index === workout.nbExercises - 1}
          key={item.id}
          exerciseSets={item}
        />
      )}
    /> */}
  </Container>
);

const Container = styled.View(props => ({
  padding: props.theme.margin.x2,
  flex: 1,
  backgroundColor: props.theme.colors.greyScale[90],
}));

const Title = styled(TextTitle)(props => ({
  textAlign: 'center',
  color: props.theme.colors.greyScale[10],
}));

const Subtitle = styled(TextSubtitle)(props => ({
  color: props.theme.colors.greyScale[10],
}));
