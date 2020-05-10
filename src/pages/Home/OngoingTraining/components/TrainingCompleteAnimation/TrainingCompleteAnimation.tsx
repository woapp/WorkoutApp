import React, { FunctionComponent, useRef, useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, Animated, Easing } from 'react-native';

interface Props {}

export const TrainingCompleteAnimation: FunctionComponent<Props> = () => {
  const animationRef = useRef<LottieView>(null);
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1800,
      easing: Easing.ease,
    }).start();
  }, [progress]);

  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
      }}
    >
      <LottieView
        source={require('./trainingCompleteAnimation.json')}
        ref={animationRef}
        loop={false}
        resizeMode="contain"
        progress={progress}
        style={{ opacity: 1, zIndex: 2, flex: 1 }}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          height: '120%',
          width: '100%',
          backgroundColor: 'black',
          opacity: 0.85,
          zIndex: 1,
        }}
      />
      <Text
        style={{
          color: 'white',
          position: 'absolute',
          bottom: '15%',
          fontSize: 24,
          fontWeight: 'bold',
          zIndex: 2,
        }}
      >
        TRAINING COMPLETED
      </Text>
    </View>
  );
};
