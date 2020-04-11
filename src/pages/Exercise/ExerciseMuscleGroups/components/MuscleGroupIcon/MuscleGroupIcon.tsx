import React, { FunctionComponent } from 'react';
import { Image } from 'react-native';
import styled from '@woap/utils/styled-components';
import { MuscleGroup } from '@woap/mobx/types';
import { colors } from '@woap/styles/colors';
import images from '@woap/assets/images';

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
  backgroundColor: props.theme.colors.white,
  borderRadius: props.size / 2,
  borderWidth: props.isSelected ? 2 : 0,
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}));

const EmptyView = styled.View({ flex: 1, backgroundColor: colors.greyScale[20] });
