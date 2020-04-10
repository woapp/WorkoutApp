import React, { FunctionComponent } from 'react';
import { useTimingTransition, bInterpolate } from 'react-native-redash';
import Animated, { interpolate } from 'react-native-reanimated';
import styled from '@woap/utils/styled-components';
import { CopyIcon } from '@woap/components/CopyIcon';
import { TrashIcon } from '@woap/components/TrashIcon';
import { EditIcon } from '@woap/components/EditIcon';
import { Spacer } from '@woap/components/Spacer';

interface Props {
  set: { title: string; weight: number; reps: number; selected: boolean };
  onDrag: () => void;
  onPress: () => void;
}

const ICON_CONTAINER_SIZE = 32;

export const SetListItem: FunctionComponent<Props> = ({ set, onDrag, onPress }) => {
  const { title, weight, reps, selected } = set;
  const transition = useTimingTransition(selected, { duration: 200 });
  const translateY = bInterpolate(transition, -48, 0);
  const height = bInterpolate(transition, 0, 48);
  const opacity = interpolate(transition, { inputRange: [0, 0.5, 1], outputRange: [0, 0, 1] });

  return (
    <>
      <ItemContainer selected={selected} onLongPress={onDrag} onPress={onPress}>
        <Title>{title}</Title>
        <FiguresContainer>
          <Data>
            <Figure>{reps}</Figure>
            <Label> reps</Label>
          </Data>
          <Data>
            <Figure>{weight}</Figure>
            <Label> kg</Label>
          </Data>
        </FiguresContainer>
      </ItemContainer>
      <OptionsContainer style={{ height, transform: [{ translateY }], opacity }}>
        <IconContainer>
          <CopyIcon />
        </IconContainer>
        <Spacer width={2} />
        <IconContainer>
          <EditIcon />
        </IconContainer>
        <Separator />
        <IconContainer>
          <TrashIcon />
        </IconContainer>
      </OptionsContainer>
    </>
  );
};

const ItemContainer = styled.TouchableOpacity<{ selected: boolean }>(({ theme, selected }) => ({
  flex: 1,
  borderRadius: theme.border.radius.s,
  padding: theme.margin.x1,
  ...theme.shadow,
  backgroundColor: theme.colors.white,
  zIndex: 1,
  borderWidth: selected ? 2 : 0,
}));

const OptionsContainer = styled(Animated.View)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  flex: 1,
  marginTop: theme.margin.x2,
}));

const Title = styled.Text(({ theme }) => ({
  flex: 1,
  ...theme.fonts.h5,
  fontWeight: 'bold',
  paddingHorizontal: theme.margin.x1,
  paddingBottom: theme.margin.x1,
}));

const FiguresContainer = styled.View(({ theme }) => ({
  flexDirection: 'row',
  paddingTop: theme.margin.x1,
  borderTopColor: theme.colors.transparentBlackScale[20],
  borderTopWidth: 1,
}));

const Data = styled.Text({ textAlign: 'center', flex: 1 });

const Figure = styled.Text(({ theme }) => ({ ...theme.fonts.h1, fontWeight: 'bold' }));

const Label = styled.Text(({ theme }) => ({ ...theme.fonts.h5, fontWeight: 'bold' }));

const IconContainer = styled.TouchableOpacity({
  height: ICON_CONTAINER_SIZE,
  width: ICON_CONTAINER_SIZE,
  borderRadius: ICON_CONTAINER_SIZE / 2,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
});

const Separator = styled.View({ flex: 1 });
