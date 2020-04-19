import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { MuscleGroup } from '@woap/mobx/types';
import { MuscleGroupIcon } from '@woap/components/Icons/MuscleGroupIcon';

const ICON_CONTAINER_SIZE = 55;
interface MuscleGroupIconProps {
  muscleGroup: MuscleGroup;
}

export const MuscleGroupCard: FunctionComponent<MuscleGroupIconProps> = ({ muscleGroup }) => {
  const iconProps = { height: '100%', width: '100%' };

  return (
    <Container>
      <MuscleGroupIcon muscleGroup={muscleGroup} {...iconProps} />
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  width: ICON_CONTAINER_SIZE,
  height: ICON_CONTAINER_SIZE,
  padding: theme.margin.x1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#6D6C7D',
  borderRadius: theme.border.radius.s + 2,
}));
