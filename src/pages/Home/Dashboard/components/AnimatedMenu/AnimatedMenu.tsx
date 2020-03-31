import React, { FunctionComponent, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { useTransition, bInterpolate } from 'react-native-redash';
import LinearGradient from 'react-native-linear-gradient';
import styled from '@woap/utils/styled-components';
import { colors } from '@woap/styles/colors';
import { IconName } from '@woap/styles/icons';

import { ITEM_HEIGHT, MenuItem } from '../MenuItem/MenuItem';

const ITEM_MARGIN_BOTTOM = 16;

export interface MenuItem {
  title: string;
  iconName: IconName;
}

interface Props {
  items: MenuItem[];
}

export const AnimatedMenu: FunctionComponent<Props> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const transition = useTransition(isOpen, { duration: 400 });
  const rotate = bInterpolate(transition, 0, Math.PI / 4);

  return (
    <Container>
      {items.map((item, index) => {
        const translateY = bInterpolate(
          transition,
          (items.length - index) * (ITEM_HEIGHT + ITEM_MARGIN_BOTTOM),
          0
        );

        return (
          <ItemContainer
            style={{
              opacity: transition,
              transform: [{ translateY }],
            }}
            key={index}
          >
            <MenuItem {...item} />
          </ItemContainer>
        );
      })}

      <TouchableWithoutFeedback
        style={{ ...StyleSheet.absoluteFillObject }}
        onPress={() => {
          setIsOpen(!isOpen);
        }}
      >
        <IconContainer style={{ transform: [{ rotate }] }}>
          <Icon>+</Icon>
        </IconContainer>
      </TouchableWithoutFeedback>
    </Container>
  );
};

const Container = styled.View({ alignItems: 'flex-end' });

const ItemContainer = styled(Animated.View)({
  justifyContent: 'flex-start',
  marginBottom: ITEM_MARGIN_BOTTOM,
});

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const IconContainer = styled(AnimatedLinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [colors.green, colors.blue],
})(({ theme }) => ({
  width: theme.iconSize,
  height: theme.iconSize,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.iconSize / 2,
}));

const Icon = styled(Animated.Text)(({ theme }) => ({
  color: theme.colors.white,
  fontSize: 40,
  lineHeight: 40,
  textAlign: 'center',
}));
