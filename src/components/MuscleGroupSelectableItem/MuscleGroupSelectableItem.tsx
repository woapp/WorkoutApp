import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';

import styled from '../../utils/styled-components';
import { MuscleGroupIcon } from '../MuscleGroupIcon';
import { MuscleGroup } from '../../modules/types';

interface MuscleGroupSelectableItemProps {
  title?: string;
  muscleGroup: MuscleGroup;
  onPress?: () => void;
  isSelected: boolean;
  disabled?: boolean;
  iconSize: number;
}

export const MuscleGroupSelectableItem: FunctionComponent<MuscleGroupSelectableItemProps> = ({
  title,
  disabled,
  muscleGroup,
  onPress = () => {},
  isSelected,
  iconSize = 80,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <MuscleGroupIcon muscleGroup={muscleGroup} isSelected={isSelected} size={iconSize} />
      {title && <MuscleGroupTitle>{title}</MuscleGroupTitle>}
    </TouchableOpacity>
  );
};

const MuscleGroupTitle = styled.Text(props => ({
  fontSize: 15,
  textAlign: 'center',
  marginTop: props.theme.margin.x1,
  marginBottom: props.theme.margin.x4,
}));
