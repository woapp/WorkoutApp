import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';

import { useStore } from '../../utils/hooks/useStore';
import { NotYetImplemented } from '../../components/NotYetImplemented';

export const Home: FunctionComponent = () => {
  const { finishWorkout, workouts } = useStore();

  return (
    <View>
      <NotYetImplemented pageTitle="Home" />
      <Button
        title="J'ai fini mon workout !"
        onPress={() => {
          finishWorkout(workouts[0]);
        }}
      />
    </View>
  );
};
