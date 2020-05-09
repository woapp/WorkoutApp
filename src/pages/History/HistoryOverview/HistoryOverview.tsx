import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@woap/utils/hooks/useStore';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { FinishedTrainingType } from '@woap/mobx/finishedTraining';
import styled from '@woap/utils/styled-components';
import { Spacer } from '@woap/components/Spacer';

import { FinishedTrainingItem } from '../components/FinishedTrainingItem';

import { EmptyDataPlaceholder } from './components/EmptyDataPlaceholder';

export const HistoryOverview: FunctionComponent = observer(() => {
  const store = useStore();
  const { t } = useTranslation('history');
  const finishedTrainings = store.finishedTrainingsSorted;
  console.log(finishedTrainings);

  if (finishedTrainings.length === 0) {
    return <EmptyDataPlaceholder />;
  }

  return (
    <Container>
      <Title>{t('historyOverview.title')}</Title>
      <Spacer height={2} />
      <FlatList
        data={finishedTrainings}
        renderItem={({ item }: { item: FinishedTrainingType }) => (
          <FinishedTrainingItem training={item} key={item.id} />
        )}
      />
    </Container>
  );
});

const Container = styled.View(({ theme }) => ({
  padding: theme.margin.x2,
  backgroundColor: theme.colors.background.black,
  flex: 1,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
