import React, { FunctionComponent, useRef, useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import styled from '@woap/utils/styled-components';
import { useTranslation } from 'react-i18next';

interface Props {}

export const TrainingCompleteAnimation: FunctionComponent<Props> = () => {
  const animationRef = useRef<LottieView>(null);
  const { t } = useTranslation('home');
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1800,
      easing: Easing.ease,
    }).start();
  }, [progress]);

  return (
    <Container>
      <BlackVeil />
      <CheckAnimation
        source={require('./trainingCompleteAnimation.json')}
        ref={animationRef}
        loop={false}
        resizeMode="contain"
        progress={progress}
      />
      <TrainingComplete>{t('ongoingTraining.trainingCompleted')}</TrainingComplete>
    </Container>
  );
};

const Container = styled.View({
  position: 'absolute',
  alignItems: 'center',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  height: '100%',
  width: '100%',
});

const BlackVeil = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  height: '120%',
  width: '100%',
  backgroundColor: theme.colors.black,
  opacity: 0.9,
}));

const TrainingComplete = styled.Text(({ theme }) => ({
  color: theme.colors.white,
  position: 'absolute',
  bottom: '15%',
  ...theme.fonts.h1,
}));

const CheckAnimation = styled(LottieView)({ opacity: 1, flex: 1 });
