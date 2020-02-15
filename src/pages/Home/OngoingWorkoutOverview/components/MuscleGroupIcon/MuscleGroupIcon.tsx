import React, { FunctionComponent } from 'react';
import { Image } from 'react-native';

import styled from '../../../../../utils/styled-components';
import images from '../../../../../assets/images';
import { MuscleGroup } from '../../../../../mobx/types';

const ICON_SIZE = 70;

interface MuscleGroupIconProps {
  muscleGroup: MuscleGroup | null;
}

export const MuscleGroupIcon: FunctionComponent<MuscleGroupIconProps> = ({ muscleGroup }) => {
  let icon = null;
  switch (muscleGroup) {
    case MuscleGroup.Abs:
      icon = images.abs;
      break;
    case MuscleGroup.Back:
      icon = images.back;
      break;
    case MuscleGroup.Biceps:
      icon = images.biceps;
      break;
    case MuscleGroup.Calves:
      icon = images.calves;
      break;
    case MuscleGroup.Chest:
      icon = images.chest;
      break;
    case MuscleGroup.Forearms:
      icon = images.forearm;
      break;
    case MuscleGroup.Legs:
      icon = images.legs;
      break;
    case MuscleGroup.Shoulders:
      icon = images.shoulders;
      break;
    case MuscleGroup.Triceps:
      icon = images.triceps;
      break;
  }
  if (icon === null) {
    return <Container />;
  }

  return (
    <Container>
      <Image source={icon} resizeMode="contain" />
    </Container>
  );
};

const Container = styled.View(props => ({
  width: ICON_SIZE,
  height: ICON_SIZE,
  padding: props.theme.margin.x1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: props.theme.colors.greyScale[80],
  borderRadius: 20,
}));
