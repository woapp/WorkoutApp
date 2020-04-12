import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@woap/utils/styled-components';
import { TextBody } from '@woap/components/Texts';
import { ExerciseSetsType } from '@woap/mobx/exerciseSets';

import { MuscleGroupIcon } from '../MuscleGroupIcon';

type ExerciseItemProps = {
  isFirst?: boolean;
  isLast?: boolean;
  exerciseSets: ExerciseSetsType;
};

export const ExerciseItem: FunctionComponent<ExerciseItemProps> = observer(
  ({ isFirst, isLast, exerciseSets }) => {
    const [isExpended, setIsExpended] = useState(false);
    const onToggleDetails = () => setIsExpended(!isExpended);

    return (
      <Container onPress={onToggleDetails} disabled={exerciseSets.nbSets === 0}>
        <IconContainer>
          {!isFirst && <Bar />}
          <MuscleGroupIcon muscleGroup={exerciseSets.exercise.mainMuscleGroup} />
          {!isLast && <Bar />}
        </IconContainer>
        <InfosContainer>
          {!isFirst && <Spacer />}
          <Title>{exerciseSets.exercise.name}</Title>
          <Sets>{exerciseSets.nbSets} séries</Sets>
          {isExpended && (
            <SetDetails>
              {exerciseSets.sets.map((set, index) => (
                <TextBody style={{ color: 'white' }} key={index}>
                  {set.nbReps} reps - {set.weight}kg
                </TextBody>
              ))}
            </SetDetails>
          )}
        </InfosContainer>
      </Container>
    );
  }
);

const Container = styled.TouchableOpacity({
  flexDirection: 'row',
});

const IconContainer = styled.View({
  alignItems: 'center',
});

const InfosContainer = styled.View(props => ({
  marginLeft: props.theme.margin.x2,
  paddingTop: props.theme.margin.x1,
}));

const Bar = styled.View(props => ({
  minHeight: 10,
  flex: 1,
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

const SetDetails = styled.View(({ theme }) => ({
  marginTop: theme.margin.x1,
}));
