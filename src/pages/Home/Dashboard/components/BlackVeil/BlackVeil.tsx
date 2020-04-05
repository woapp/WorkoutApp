import React, { FunctionComponent } from 'react';
import { TouchableWithoutFeedback, Dimensions, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from '@woap/utils/styled-components';

const { width, height } = Dimensions.get('window');

interface Props {
  opacity: Animated.Node<number>;
  shouldHandleOnPressEvents: boolean;
  onPress: () => void;
}

export const BlackVeil: FunctionComponent<Props> = ({
  opacity,
  shouldHandleOnPressEvents,
  onPress,
}) => {
  return (
    <Container
      pointerEvents={shouldHandleOnPressEvents ? 'auto' : 'none'}
      style={{
        transform: [{ scale: 4 }],
        opacity,
      }}
    >
      <TouchableWithoutFeedback onPress={onPress}>
        <Content />
      </TouchableWithoutFeedback>
    </Container>
  );
};

const Container = styled(Animated.View)({
  width,
  height,
  backgroundColor: '#0A0D21DD',
  ...StyleSheet.absoluteFillObject,
});

const Content = styled.View({ flex: 1 });
