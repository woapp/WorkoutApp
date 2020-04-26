import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@woap/utils/hooks/useStore';
import { View } from 'react-native';
import { TextTitle } from '@woap/components/Texts';
import { FinishedTrainingType } from '@woap/mobx/finishedTraining';

export const HistoryOverview: FunctionComponent = observer(() => {
  const store = useStore();

  return (
    <View>
      {store.finishedTrainings.map((training: FinishedTrainingType) => (
        <>
          <TextTitle key={training.id}>{training.name}</TextTitle>
          {training.tags.map(tag => (
            <TextTitle key={training.id}>{tag.name}</TextTitle>
          ))}
        </>
      ))}
    </View>
  );
});
