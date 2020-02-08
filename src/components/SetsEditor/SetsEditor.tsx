import React, { FunctionComponent, useState } from 'react';
import { View, Alert } from 'react-native';

import { Set } from '../Set/Set';
import { AddSet } from '../AddSet';

type SetsEditorProps = {};

export const SetsEditor: FunctionComponent<SetsEditorProps> = () => {
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);

  return (
    <View>
      <Set
        rank={1}
        nbReps={reps}
        onChangeReps={setReps}
        weight={weight}
        onChangeWeight={setWeight}
      />
      <Set
        rank={2}
        nbReps={reps}
        onChangeReps={setReps}
        weight={weight}
        onChangeWeight={setWeight}
      />
      <Set
        rank={3}
        nbReps={reps}
        onChangeReps={setReps}
        weight={weight}
        onChangeWeight={setWeight}
      />
      <AddSet onPress={() => Alert.alert('Add new set')} />
    </View>
  );
};
