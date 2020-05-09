import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { Spacer } from '@woap/components/Spacer';
import { useTranslation } from 'react-i18next';
import { EmptyData } from '@woap/components/EmptyData';

interface Props {}

export const EmptyDataPlaceholder: FunctionComponent<Props> = () => {
  const { t } = useTranslation('history');

  return (
    <EmptyDataContainer>
      <EmptyData size={200} />
      <Spacer height={2} />
      <NoDataText>{t('historyOverview.noData')}</NoDataText>
    </EmptyDataContainer>
  );
};

const EmptyDataContainer = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.background.black,
}));

const NoDataText = styled.Text(({ theme }) => ({
  ...theme.fonts.h2,
  color: theme.colors.white,
  fontWeight: 'bold',
  textAlign: 'center',
}));
