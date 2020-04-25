import React, { FunctionComponent } from 'react';
import { MuscleGroup } from '@woap/mobx/types';
import { SvgProps } from 'react-native-svg';

import { TricepsIcon } from '../Muscles/TricepsIcon';
import { ChestIcon } from '../Muscles/ChestIcon';
import { ShoulderIcon } from '../Muscles/ShoulderIcon';
import { LegsIcon } from '../Muscles/LegsIcon';
import { CalvesIcon } from '../Muscles/CalvesIcon';
import { AbsIcon } from '../Muscles/AbsIcon';
import { BackIcon } from '../Muscles/BackIcon';
import { BicepsIcon } from '../Muscles/BicepsIcon';
import { ForearmIcon } from '../Muscles/ForearmIcon';

interface MuscleGroupIconProps extends SvgProps {
  muscleGroup: MuscleGroup;
}

export const MuscleGroupIcon: FunctionComponent<MuscleGroupIconProps> = ({
  muscleGroup,
  ...iconProps
}) => {
  switch (muscleGroup) {
    case MuscleGroup.Trapezius:
      return <BackIcon {...iconProps} />;
    case MuscleGroup.Shoulders:
      return <ShoulderIcon {...iconProps} />;
    case MuscleGroup.Biceps:
      return <BicepsIcon {...iconProps} />;
    case MuscleGroup.Triceps:
      return <TricepsIcon {...iconProps} />;
    case MuscleGroup.Forearms:
      return <ForearmIcon {...iconProps} />;
    case MuscleGroup.Chest:
      return <ChestIcon {...iconProps} />;
    case MuscleGroup.Back:
      return <BackIcon {...iconProps} />;
    case MuscleGroup.Lombar:
      return <BackIcon {...iconProps} />;
    case MuscleGroup.Abs:
      return <AbsIcon {...iconProps} />;
    case MuscleGroup.Obliques:
      return <AbsIcon {...iconProps} />;
    case MuscleGroup.Buttock:
      return <LegsIcon {...iconProps} />;
    case MuscleGroup.Adductors:
      return <LegsIcon {...iconProps} />;
    case MuscleGroup.Quadriceps:
      return <LegsIcon {...iconProps} />;
    case MuscleGroup.Ischios:
      return <LegsIcon {...iconProps} />;
    case MuscleGroup.Calves:
      return <CalvesIcon {...iconProps} />;
  }
};
