import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';

import { ExerciseSetsType } from '../../mobx/exerciseSets';
import { InputSet } from '../InputSet';
import { NewSetButton } from '../NewSetButton';

interface Props {
  exerciseSets: ExerciseSetsType;
}

export const FormSets: FunctionComponent<Props> = observer(({ exerciseSets }) => {
  const onAddNewSet = () => exerciseSets.addNewSet();
  const onSetNbReps = setRank => nbReps => exerciseSets.setNbReps(setRank, nbReps);
  const onSetWeight = setRank => weight => exerciseSets.setWeight(setRank, weight);

  return (
    <View>
      {exerciseSets.sets.map((set, setRank) => (
        <InputSet
          key={setRank}
          rank={setRank + 1}
          nbReps={set.nbReps}
          onChangeReps={onSetNbReps(setRank)}
          weight={set.weight}
          onChangeWeight={onSetWeight(setRank)}
        />
      ))}
      <NewSetButton onPress={onAddNewSet} />
    </View>
  );
});