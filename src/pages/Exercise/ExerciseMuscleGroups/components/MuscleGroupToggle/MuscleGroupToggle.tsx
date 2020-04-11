import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { MuscleGroup } from '@woap/mobx/types';
import { MuscleGroupIcon } from '@woap/pages/Exercise/ExerciseMuscleGroups/components/MuscleGroupIcon';

interface Props {
  title?: string;
  muscleGroup: MuscleGroup;
  onPress?: () => void;
  isSelected: boolean;
  disabled?: boolean;
  iconSize?: number;
}

export const MuscleGroupToggle: FunctionComponent<Props> = ({
  title,
  disabled,
  muscleGroup,
  onPress = () => {},
  isSelected,
  iconSize = 80,
}) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <MuscleGroupIcon muscleGroup={muscleGroup} isSelected={isSelected} size={iconSize} />
      {title && <MuscleGroupTitle>{title}</MuscleGroupTitle>}
    </Container>
  );
};

const Container = styled.TouchableOpacity({
  alignItems: 'center',
});

const MuscleGroupTitle = styled.Text(({ theme }) => ({
  ...theme.fonts.h4,
  textAlign: 'center',
  marginTop: theme.margin.x1,
  marginBottom: theme.margin.x4,
  color: theme.colors.white,
}));
