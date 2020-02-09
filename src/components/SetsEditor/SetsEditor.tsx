import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';

import { ExerciseSetsType } from '../../modules/exerciseSets';
import { Set } from '../Set/Set';
import { AddSet } from '../AddSet';

interface Props {
  exerciseSets: ExerciseSetsType;
}

export const SetsEditor: FunctionComponent<Props> = observer(({ exerciseSets }) => {
  const onAddNewSet = () => exerciseSets.addNewSet();
  const onSetNbReps = setRank => nbReps => exerciseSets.setNbReps(setRank, nbReps);
  const onSetWeight = setRank => weight => exerciseSets.setWeight(setRank, weight);

  return (
    <View>
      {exerciseSets.sets.map((set, setRank) => (
        <Set
          key={setRank}
          rank={setRank}
          nbReps={set.nbReps}
          onChangeReps={onSetNbReps(setRank)}
          weight={set.weight}
          onChangeWeight={onSetWeight(setRank)}
        />
      ))}
      <AddSet onPress={onAddNewSet} />
    </View>
  );
});
