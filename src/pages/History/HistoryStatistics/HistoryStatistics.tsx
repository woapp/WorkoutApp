import React, { FunctionComponent } from 'react';
import { Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { subWeeks } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useStore } from '@woap/utils/hooks/useStore';
import styled from '@woap/utils/styled-components';
import { BodyVisualisation } from '@woap/components/BodyVisualisation';
import { Spacer } from '@woap/components/Spacer';

export const HistoryStatistics: FunctionComponent = observer(() => {
  const { t } = useTranslation('history');
  const store = useStore();
  const bodyRatios = store.getStatisticsBodyRatios(subWeeks(new Date(), 1));

  return (
    <Container>
      <Title>{t('historyStatistics.title')}</Title>
      <Spacer height={5} />
      <BodyVisualisationContainer>
        <BodyVisualisation width={Dimensions.get('window').width * 0.85} ratios={bodyRatios} />
      </BodyVisualisationContainer>
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

const BodyVisualisationContainer = styled.View({ alignItems: 'center' });
