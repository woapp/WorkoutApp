import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styled from '@woap/utils/styled-components';
import { Spacer } from '@woap/components/Spacer';
import { colors } from '@woap/styles/colors';
import { observer } from 'mobx-react-lite';
import { useStore } from '@woap/utils/hooks/useStore';
import { FinishedTrainingType } from '@woap/mobx/finishedTraining';

import { FinishedTrainingItem } from '../components/FinishedTrainingItem';

interface Props {}

const extractDayKeyFromDate = (date: Date) => date.toISOString().split('T')[0];

export const HistoryCalendar: FunctionComponent<Props> = observer(() => {
  const { t } = useTranslation('history');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const store = useStore();
  const finishedTrainingsOnSelectedDate = store.getFinishedTrainingsForAGivenDate(selectedDate);

  return (
    <Container>
      <Title>{t('historyCalendar.title')}</Title>
      <Spacer height={2} />
      <Calendar
        onDayPress={(day: { timestamp: number }) => {
          setSelectedDate(new Date(day.timestamp));
        }}
        markingType={'custom'}
        markedDates={{
          [extractDayKeyFromDate(selectedDate)]: {
            customStyles: {
              container: {
                backgroundColor: colors.white,
              },
              text: {
                color: colors.background.black,
              },
            },
          },
        }}
        theme={{
          dayTextColor: colors.white,
          calendarBackground: colors.background.black,
          textDisabledColor: colors.greyScale[50],
          monthTextColor: colors.white,
          indicatorColor: colors.green,
          textDayFontWeight: 'bold',
          textMonthFontWeight: 'bold',
          textMonthFontSize: 20,
        }}
      />
      <Spacer height={1} />
      <FlatList
        data={finishedTrainingsOnSelectedDate}
        renderItem={({ item }: { item: FinishedTrainingType }) => (
          <FinishedTrainingItem training={item} key={item.id} />
        )}
      />
    </Container>
  );
});

const Container = styled.View(({ theme }) => ({
  flex: 1,
  padding: theme.margin.x2,
  backgroundColor: theme.colors.background.black,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
