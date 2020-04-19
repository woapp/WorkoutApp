import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { MuscleGroup } from '@woap/mobx/types';
import { TricepsIcon } from '@woap/components/Icons/Muscles/TricepsIcon';
import { ChestIcon } from '@woap/components/Icons/Muscles/ChestIcon';
import { ShoulderIcon } from '@woap/components/Icons/Muscles/ShoulderIcon';
import { LegsIcon } from '@woap/components/Icons/Muscles/LegsIcon';
import { CalvesIcon } from '@woap/components/Icons/Muscles/CalvesIcon';
import { AbsIcon } from '@woap/components/Icons/Muscles/AbsIcon';
import { BackIcon } from '@woap/components/Icons/Muscles/BackIcon';
import { BicepsIcon } from '@woap/components/Icons/Muscles/BicepsIcon';
import { ForearmIcon } from '@woap/components/Icons/Muscles/ForearmIcon';

const ICON_CONTAINER_SIZE = 55;
interface MuscleGroupIconProps {
  muscleGroup: MuscleGroup;
}

export const MuscleGroupIcon: FunctionComponent<MuscleGroupIconProps> = ({ muscleGroup }) => {
  let MuscleIcon;
  const iconProps = { height: '100%', width: '100%' };
  switch (muscleGroup) {
    case MuscleGroup.Abs:
      MuscleIcon = <AbsIcon {...iconProps} />;
      break;
    case MuscleGroup.Back:
      MuscleIcon = <BackIcon {...iconProps} />;
      break;
    case MuscleGroup.Biceps:
      MuscleIcon = <BicepsIcon {...iconProps} />;
      break;
    case MuscleGroup.Calves:
      MuscleIcon = <CalvesIcon {...iconProps} />;
      break;
    case MuscleGroup.Chest:
      MuscleIcon = <ChestIcon {...iconProps} />;
      break;
    case MuscleGroup.Forearms:
      MuscleIcon = <ForearmIcon {...iconProps} />;
      break;
    case MuscleGroup.Legs:
      MuscleIcon = <LegsIcon {...iconProps} />;
      break;
    case MuscleGroup.Shoulders:
      MuscleIcon = <ShoulderIcon {...iconProps} />;
      break;
    case MuscleGroup.Triceps:
      MuscleIcon = <TricepsIcon {...iconProps} />;
      break;
  }
  if (MuscleIcon === null) {
    return <Container />;
  }

  return <Container>{MuscleIcon}</Container>;
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
