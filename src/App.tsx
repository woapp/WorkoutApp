import {SafeAreaView, Text} from 'react-native';
import React, {useEffect} from 'react';

export const App: any = () => {
  const a = 2;

  useEffect(() => {
    console.log('coucou', a);
  }, [a]);
  return (
    <SafeAreaView>
      <Text>WorkoutApp</Text>
    </SafeAreaView>
  );
};
