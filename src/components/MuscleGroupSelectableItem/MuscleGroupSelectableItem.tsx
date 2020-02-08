import React, { FunctionComponent } from 'react';

import styled from '../../utils/styled-components';
import { MuscleGroupIcon } from '../MuscleGroupIcon';
import { MuscleGroup } from '../../modules/types';

interface MuscleGroupSelectableItemProps {
  title: string;
  muscleGroup: MuscleGroup;
  onPress: () => void;
  isSelected: boolean;
}

export const MuscleGroupSelectableItem: FunctionComponent<MuscleGroupSelectableItemProps> = ({
  title,
  muscleGroup,
  onPress,
  isSelected,
}) => {
  return (
    <MuscleGroupContainer onPress={onPress}>
      <MuscleGroupIcon muscleGroup={muscleGroup} isSelected={isSelected} />
      <MuscleGroupTitle>{title}</MuscleGroupTitle>
    </MuscleGroupContainer>
  );
};

const MuscleGroupContainer = styled.TouchableOpacity({});

const MuscleGroupTitle = styled.Text(props => ({
  fontSize: 15,
  textAlign: 'center',
  marginTop: props.theme.margin.x1,
  marginBottom: props.theme.margin.x4,
}));
