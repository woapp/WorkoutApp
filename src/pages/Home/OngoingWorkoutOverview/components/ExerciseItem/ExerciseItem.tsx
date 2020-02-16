import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@woap/utils/styled-components';
import { MuscleGroup } from '@woap/mobx/types';

import { MuscleGroupIcon } from '../MuscleGroupIcon';

type ExerciseItemProps = {
  isFirst?: boolean;
  isLast?: boolean;
  muscleGroup: MuscleGroup | null;
  exerciseName: string;
  nbSets: number;
};

export const ExerciseItem: FunctionComponent<ExerciseItemProps> = observer(
  ({ isFirst, isLast, muscleGroup, exerciseName, nbSets }) => {
    return (
      <Container>
        <IconContainer>
          {!isFirst && <Bar />}
          <MuscleGroupIcon muscleGroup={muscleGroup} />
          {!isLast && <Bar />}
        </IconContainer>
        <InfosContainer>
          {!isFirst && <Spacer />}
          <Title>{exerciseName}</Title>
          <Sets>{nbSets} séries</Sets>
        </InfosContainer>
      </Container>
    );
  }
);

const Container = styled.View({
  flexDirection: 'row',
});

const IconContainer = styled.View({
  alignItems: 'center',
});

const InfosContainer = styled.View(props => ({
  marginLeft: props.theme.margin.x1,
}));

const Bar = styled.View(props => ({
  height: 10,
  width: 2,
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

const Sets = styled.Text(props => ({
  fontSize: 16,
  color: props.theme.colors.white,
}));
