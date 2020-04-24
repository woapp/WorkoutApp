import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { ExerciseSetType } from '@woap/mobx/exerciseSet';
import styled from '@woap/utils/styled-components';
import { MuscleGroupIcon } from '@woap/components/Icons/MuscleGroupIcon';

type ExerciseItemProps = {
  isFirst: boolean;
  isLast: boolean;
  exerciseSet: ExerciseSetType;
};

export const ExerciseSet: FunctionComponent<ExerciseItemProps> = observer(
  ({ isFirst, isLast, exerciseSet }) => {
    return (
      <Container>
        <Column>
          {!isFirst && <Bar />}
          <IconContainer>
            <MuscleGroupIcon
              muscleGroup={exerciseSet.exercise.mainMuscleGroup}
              width={40}
              height={40}
            />
          </IconContainer>
          {!isLast && <Bar />}
        </Column>
        <InfosContainer>
          {!isFirst && <Spacer />}
          <Title>{exerciseSet.exercise.name}</Title>
        </InfosContainer>
      </Container>
    );
  }
);

const Container = styled.View({
  flexDirection: 'row',
});

const Column = styled.View({
  alignItems: 'center',
});

const IconContainer = styled.View(({ theme }) => ({
  backgroundColor: theme.colors.greyScale[80],
  borderRadius: 10,
}));

const InfosContainer = styled.View(props => ({
  marginLeft: props.theme.margin.x2,
  paddingTop: props.theme.margin.x1,
}));

const Bar = styled.View(props => ({
  minHeight: 10,
  flex: 1,
  width: 4,
  backgroundColor: props.theme.colors.greyScale[80],
}));

const Spacer = styled.View({
  height: 10,
});

const Title = styled.Text(props => ({
  fontSize: 18,
  color: props.theme.colors.white,
  fontWeight: 'bold',
}));
