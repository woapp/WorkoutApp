import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styled from '@woap/utils/styled-components';
import { MuscleGroup } from '@woap/mobx/types';
import { TextBody } from '@woap/components/Texts';
import { TouchableOpacity, View } from 'react-native';
import { ExerciseSetsType } from '@woap/mobx/exerciseSets';

import { MuscleGroupIcon } from '../MuscleGroupIcon';

type ExerciseItemProps = {
  isFirst?: boolean;
  isLast?: boolean;
  muscleGroup: MuscleGroup | null;
  exerciseName: string;
  nbSets: number;
  sets: any[];
  maxWeight: number;
};

export const ExerciseItem: FunctionComponent<ExerciseItemProps> = observer(
  ({ isFirst, isLast, muscleGroup, exerciseName, nbSets, sets = [], maxWeight }) => {
    const [isExpended, setIsExpended] = useState(false);
    const onToggleDetails = () => setIsExpended(!isExpended);

    return (
      <Container onPress={onToggleDetails} disabled={sets.length === 0}>
        <IconContainer>
          {!isFirst && <Bar />}
          <MuscleGroupIcon muscleGroup={muscleGroup} />
          {!isLast && <Bar />}
        </IconContainer>
        <View style={{ flexDirection: 'column' }}>
          <InfosContainer>
            {!isFirst && <Spacer />}
            <Title>{exerciseName}</Title>
            <Sets>
              {nbSets} séries - max={maxWeight}kg
            </Sets>
            {isExpended && (
              <View style={{ marginTop: 20 }}>
                {sets.map((set, index) => (
                  <TextBody style={{ color: 'white' }} key={index}>
                    {set.nbReps} reps - {set.weight}kg
                  </TextBody>
                ))}
              </View>
            )}
          </InfosContainer>
        </View>
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
