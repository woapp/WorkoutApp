import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { MuscleGroup } from '@woap/mobx/types';
import { MuscleGroupIcon } from '@woap/components/Icons/MuscleGroupIcon';

interface MuscleGroupIconProps {
  muscleGroup: MuscleGroup;
  isSelected: boolean;
  size: number;
}

export const MuscleGroupItem: FunctionComponent<MuscleGroupIconProps> = ({
  muscleGroup,
  isSelected,
  size,
}) => {
  return (
    <Container size={size} isSelected={isSelected}>
      <MuscleGroupIcon muscleGroup={muscleGroup} width={size * 0.7} height={size * 0.7} />
    </Container>
  );
};

const Container = styled.View<{ isSelected: boolean; size: number }>(
  ({ theme, isSelected, size }) => ({
    width: size,
    height: size,
    backgroundColor: theme.colors.black,
    borderRadius: size / 2,
    borderWidth: isSelected ? 4 : 0,
    borderColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  })
);
