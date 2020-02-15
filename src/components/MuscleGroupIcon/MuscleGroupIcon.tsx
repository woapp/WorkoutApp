import React, { FunctionComponent } from 'react';
import { Image } from 'react-native';

import { MuscleGroup } from '../../modules/types';
import images from '../../assets/images';
import { colors } from '../../styles/colors';
import styled from '../../utils/styled-components';

interface MuscleGroupIconProps {
  muscleGroup: MuscleGroup;
  isSelected: boolean;
  size: number;
}

export const MuscleGroupIcon: FunctionComponent<MuscleGroupIconProps> = ({
  muscleGroup,
  isSelected,
  size,
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
      <Container size={size} isSelected={false}>
        <EmptyView />
      </Container>
    );
  }

  return (
    <Container size={size} isSelected={isSelected}>
      <Image
        source={icon}
        style={{ flex: 1 }}
        width={size * 0.58}
        height={size / 2}
        resizeMode="contain"
      />
    </Container>
  );
};

const Container = styled.View<{ isSelected: boolean; size: number }>(props => ({
  width: props.size,
  height: props.size,
  borderRadius: 40,
  borderColor: props.theme.colors.greyScale[20],
  borderWidth: 2,
  alignItems: 'center',
  justifyContent: 'center',
  opacity: !props.isSelected ? 0.2 : undefined,
  overflow: 'hidden',
}));

const EmptyView = styled.View({ flex: 1, backgroundColor: colors.greyScale[20] });
