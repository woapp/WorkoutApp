import React, { FunctionComponent } from 'react';
import Animated, {
  Easing,
  Clock,
  Value,
  block,
  timing,
  cond,
  stopClock,
  startClock,
  eq,
  set,
} from 'react-native-reanimated';
import { delay } from 'react-native-redash';
import { TouchableOpacity, View } from 'react-native';
import styled from '@woap/utils/styled-components';
import { colors } from '@woap/styles/colors';
import { PlusIcon } from '@woap/components/Icons/PlusIcon';

interface Props {
  title: string;
  onPress: () => void;
  onLongPress: () => void;
  selected: boolean;
  index: number;
}

const runAnimation = ({ delayDuration }: { delayDuration: number }) => {
  const clock = new Clock();
  const state = {
    finished: new Value(0),
    position: new Value(0),
    frameTime: new Value(0),
    time: new Value(0),
  };
  const config = { toValue: 1, duration: 500, easing: Easing.inOut(Easing.ease) };
  const start = new Value(0);

  return block([
    delay(set(start, 1), delayDuration),
    cond(start, [
      cond(eq(state.finished, 0), startClock(clock)),
      timing(clock, state, config),
      cond(state.finished, stopClock(clock)),
      state.position,
    ]),
  ]);
};

export const ExerciseItem: FunctionComponent<Props> = ({
  selected,
  title,
  onPress,
  onLongPress,
  index,
}) => {
  const opacity = runAnimation({ delayDuration: index * 150 });

  return (
    <Container selected={selected} style={{ opacity }} onPress={onPress} onLongPress={onLongPress}>
      <Title>{title}</Title>
      <View style={{ transform: [{ rotate: selected ? '45deg' : '0deg' }] }}>
        <PlusIcon color={colors.black} />
      </View>
    </Container>
  );
};

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const Container = styled(AnimatedTouchableOpacity)<{ selected: boolean }>(
  ({ selected, theme }) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.margin.x2,
    borderWidth: selected ? 2 : 0,
    padding: theme.margin.x3,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
  })
);

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h2,
  fontWeight: 'bold',
}));
