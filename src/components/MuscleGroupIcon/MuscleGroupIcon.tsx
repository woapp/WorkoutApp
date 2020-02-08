import React, { FunctionComponent } from 'react';
import { Image } from 'react-native';

import { MuscleGroup } from '../../modules/types';
import images from '../../assets/images';
import { colors } from '../../styles/colors';
import styled from '../../utils/styled-components';

interface MuscleGroupIconProps {
  muscleGroup: MuscleGroup;
  isSelected: boolean;
}

export const MuscleGroupIcon: FunctionComponent<MuscleGroupIconProps> = ({
  muscleGroup,
  isSelected,
}) => {
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
    return (
      <Container isSelected={false}>
        <EmptyView />
      </Container>
    );
  }

  return (
    <Container isSelected={isSelected}>
      <Image source={icon} />
    </Container>
  );
};

const Container = styled.View<{ isSelected: boolean }>(props => ({
  width: 80,
  height: 80,
  borderRadius: 40,
  borderColor: props.theme.colors.lightGrey,
  borderWidth: 2,
  alignItems: 'center',
  justifyContent: 'center',
  opacity: !props.isSelected ? 0.2 : undefined,
}));

const EmptyView = styled.View({ flex: 1, backgroundColor: colors.lightGrey });
