import React from 'react';
import { useStore } from '@woap/utils/hooks/useStore';
import { TextTitle } from '@woap/components/Texts';

export const OngoingTrainingPreview = () => {
  const store = useStore();
  const ongoingTraining = store.ongoingTraining;
  if (!ongoingTraining) {
    return null;
  }

  return <TextTitle>{ongoingTraining.name}</TextTitle>;
};
