import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
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

interface Props {
  title: string;
  onPress: () => void;
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

export const ExerciseItem: FunctionComponent<Props> = ({ selected, title, onPress, index }) => {
  const opacity = runAnimation({ delayDuration: index * 150 });

  return (
    <Container selected={selected} style={{ opacity }}>
      <Title>{title}</Title>
      <ButtonContainer onPress={onPress}>
        <Button>+</Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled(Animated.View)<{ selected: boolean }>(({ selected, theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: theme.margin.x2,
  borderWidth: selected ? 2 : 0,
  padding: theme.margin.x3,
  backgroundColor: theme.colors.white,
  borderRadius: 8,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h2,
  fontWeight: 'bold',
}));

const ButtonContainer = styled.TouchableOpacity({});

const Button = styled.Text(({ theme }) => ({
  ...theme.fonts.h2,
  fontWeight: 'bold',
}));
