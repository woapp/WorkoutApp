import React, { FunctionComponent } from 'react';
import { TrainingType } from '@woap/mobx/training';
import styled from '@woap/utils/styled-components';
import { Dimensions } from 'react-native';
import { MuscleGroup } from '@woap/mobx/types';

import { MuscleGroupIcon } from '../MuscleGroupIcon';

const { width: screenWidth } = Dimensions.get('window');

interface Props {
  training: TrainingType;
  onPressTraining: () => void;
  onDeleteTraining: () => void;
}

export const FavoriteTrainingCard: FunctionComponent<Props> = ({
  training,
  onPressTraining,
  onDeleteTraining,
}) => (
  <Container key={training.id} onPress={onPressTraining} onLongPress={onDeleteTraining}>
    <MuscleGroupsRow>
      {training.mainMuscleGroups.map((muscleGroup: MuscleGroup) => (
        <MuscleGroupIcon key={muscleGroup} muscleGroup={muscleGroup} />
      ))}
    </MuscleGroupsRow>
    <FavoriteTrainingName>{training.name}</FavoriteTrainingName>
    <TagRow>
      {training.tags.map(tag => (
        <Tag key={tag.id}>{tag.name}</Tag>
      ))}
    </TagRow>
  </Container>
);

const Container = styled.TouchableOpacity(({ theme }) => ({
  backgroundColor: '#3D3D55',
  padding: theme.margin.x2,
  borderRadius: theme.border.radius.s + 2,
  marginRight: theme.margin.x2,
  width: screenWidth * 0.7,
  flex: 1,
  overflow: 'hidden',
}));

const TagRow = styled.View({
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflow: 'visible',
});

const Tag = styled.Text(({ theme }) => ({
  paddingVertical: theme.margin.x1,
  paddingHorizontal: theme.margin.x2,
  marginRight: theme.margin.x2,
  marginVertical: theme.margin.x1,
  borderColor: theme.colors.greyScale[10],
  borderWidth: theme.border.width.s,
  borderRadius: theme.border.radius.m,
  color: theme.colors.greyScale[10],
}));

const FavoriteTrainingName = styled.Text(({ theme }) => ({
  color: theme.colors.white,
  fontSize: 20,
  fontWeight: 'bold',
}));

const MuscleGroupsRow = styled.View(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflow: 'visible',
  marginBottom: theme.margin.x2,
}));
