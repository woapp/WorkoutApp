import React, { FunctionComponent, useState } from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Animated, { interpolate } from 'react-native-reanimated';
import { useTransition, bInterpolate } from 'react-native-redash';
import LinearGradient from 'react-native-linear-gradient';
import styled from '@woap/utils/styled-components';
import { colors } from '@woap/styles/colors';
import { BlackVeil } from '@woap/pages/Home/Dashboard/components/BlackVeil';

import { ITEM_HEIGHT, MenuItem, ITEM_WIDTH } from '../MenuItem/MenuItem';

const ITEM_MARGIN_BOTTOM = 16;

export interface MenuItem {
  title: string;
  Icon: FunctionComponent;
  onPress: () => void;
}

interface Props {
  items: MenuItem[];
  Icon: FunctionComponent;
  rotationAngle?: number;
}

export const AnimatedMenu: FunctionComponent<Props> = ({
  items,
  Icon,
  rotationAngle = Math.PI / 4,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const transition = useTransition(isOpen, { duration: 300 });
  const opacity = interpolate(transition, { inputRange: [0, 0.33, 1], outputRange: [0, 0, 1] });
  const rotate = bInterpolate(transition, 0, rotationAngle);
  const itemsContainerWidth = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [0, ITEM_WIDTH],
  });
  const itemsContainerHeight = interpolate(transition, {
    inputRange: [0, 1],
    outputRange: [0, items.length * (ITEM_HEIGHT + ITEM_MARGIN_BOTTOM)],
  });
  const toggleMenu = () => setIsOpen(!isOpen);
  const hideMenuOnItemPress = (onItemPress: Function) => () => {
    onItemPress();
    setIsOpen(false);
  };

  return (
    <>
      <BlackVeil shouldHandleOnPressEvents={isOpen} onPress={toggleMenu} opacity={transition} />
      <Container>
        <Animated.View
          style={{
            height: itemsContainerHeight,
            width: itemsContainerWidth,
            alignItems: 'flex-end',
          }}
        >
          {items.map((item, index) => {
            const translateY = bInterpolate(
              transition,
              (items.length - index + 1) * (ITEM_HEIGHT + ITEM_MARGIN_BOTTOM),
              0
            );

            return (
              <ItemContainer
                style={{
                  opacity,
                  transform: [{ translateY }],
                }}
                key={index}
              >
                <MenuItem {...item} onPress={hideMenuOnItemPress(item.onPress)} />
              </ItemContainer>
            );
          })}
        </Animated.View>
        <TouchableWithoutFeedback
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          onPress={toggleMenu}
        >
          <IconContainer style={{ transform: [{ rotate }] }}>
            <Icon />
          </IconContainer>
        </TouchableWithoutFeedback>
      </Container>
    </>
  );
};

const Container = styled.View({
  alignItems: 'flex-end',
});

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
