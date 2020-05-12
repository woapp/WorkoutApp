import React, { FunctionComponent, useState } from 'react';
import { Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import { useTranslation } from 'react-i18next';
import { subDays } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { useStore } from '@woap/utils/hooks/useStore';
import styled from '@woap/utils/styled-components';
import { BodyVisualisation } from '@woap/components/BodyVisualisation';
import { Spacer } from '@woap/components/Spacer';
import { colors } from '@woap/styles/colors';

export const HistoryStatistics: FunctionComponent = observer(() => {
  const { t } = useTranslation('history');
  const store = useStore();

  const [numberOfDays, setNumberOfDays] = useState(7);
  const bodyRatios = store.getStatisticsBodyRatios(subDays(new Date(), numberOfDays));

  return (
    <Container>
      <Title>{t('historyStatistics.title')}</Title>
      <Spacer height={2} />
      <Since>{t('historyStatistics.since', { numberOfDays })}</Since>
      <Spacer height={5} />
      <BodyVisualisation width={Dimensions.get('window').width * 0.85} ratios={bodyRatios} />
      <Spacer height={2} />
      <Slider
        value={numberOfDays}
        onValueChange={value => setNumberOfDays(value)}
        style={{ width: '80%' }}
        step={1}
        minimumValue={1}
        maximumValue={30}
        minimumTrackTintColor={colors.green}
        maximumTrackTintColor={colors.greyScale[40]}
      />
    </Container>
  );
});

const Container = styled.View(({ theme }) => ({
  padding: theme.margin.x2,
  backgroundColor: theme.colors.background.black,
  flex: 1,
  alignItems: 'center',
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
  width: '100%',
}));

const Since = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  fontWeight: 'bold',
  color: theme.colors.white,
  width: '100%',
}));
