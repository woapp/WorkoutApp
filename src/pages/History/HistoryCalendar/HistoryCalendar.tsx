import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { observer } from 'mobx-react-lite';
import _ from 'lodash';
import styled from '@woap/utils/styled-components';
import { Spacer } from '@woap/components/Spacer';
import { colors } from '@woap/styles/colors';
import { useStore } from '@woap/utils/hooks/useStore';
import { FinishedTrainingType } from '@woap/mobx/finishedTraining';

import { FinishedTrainingItem } from '../components/FinishedTrainingItem';

interface Props {}

const extractDayKeyFromDate = (date: Date) => date.toISOString().split('T')[0];

const markedDateStyle = {
  container: {
    backgroundColor: colors.white,
  },
  text: {
    color: colors.background.black,
  },
};

const calendarTheme = {
  todayTextColor: 'red',
  dayTextColor: colors.white,
  calendarBackground: colors.background.black,
  textDisabledColor: colors.greyScale[50],
  monthTextColor: colors.white,
  indicatorColor: colors.green,
  textDayFontWeight: 'bold',
  textMonthFontWeight: 'bold',
  textMonthFontSize: 20,
};

export const HistoryCalendar: FunctionComponent<Props> = observer(() => {
  const { t } = useTranslation('history');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const store = useStore();
  const finishedTrainingsOnSelectedDate = store.getFinishedTrainingsForAGivenDate(selectedDate);
  const numberOfFinishedTrainingsPerDay = store.numberOfFinishedTrainingsPerDay;
  const markedTrainingDays = Object.assign(
    {},
    ..._.toPairs(numberOfFinishedTrainingsPerDay).map(item => ({
      [extractDayKeyFromDate(new Date(item[0]))]: {
        customStyles: {
          container: {
            backgroundColor: colors.green,
          },
        },
      },
    }))
  );

  return (
    <Container>
      <Title>{t('historyCalendar.title')}</Title>
      <Spacer height={2} />
      <Calendar
        onDayPress={day => {
          setSelectedDate(new Date(day.timestamp));
        }}
        markingType={'custom'}
        markedDates={{
          ...markedTrainingDays,
          [extractDayKeyFromDate(selectedDate)]: {
            customStyles: markedDateStyle,
          },
        }}
        theme={calendarTheme}
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
