import styled from '@woap/utils/styled-components';
import { useTranslation } from 'react-i18next';
import React, { FunctionComponent } from 'react';
import { Spacer } from '@woap/components/Spacer';

import { BottomRightArrow } from '../BottomRightArrow';

interface Props {}

export const NoTraining: FunctionComponent<Props> = () => {
  const { t } = useTranslation('home');

  return (
    <EmptyContainer>
      <EmptyTitle>{t('dashboard.nothingYet')}</EmptyTitle>
      <Spacer height={1} />
      <EmptyBody>{t('dashboard.createTraining')}</EmptyBody>
      <Spacer height={4} />
      <ArrowContainer>
        <BottomRightArrow />
      </ArrowContainer>
    </EmptyContainer>
  );
};

const EmptyContainer = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const EmptyTitle = styled.Text(props => ({
  ...props.theme.fonts.h2,
  fontWeight: 'bold',
  textAlign: 'center',
  color: props.theme.colors.white,
}));

const EmptyBody = styled.Text(props => ({
  ...props.theme.fonts.h3,
  textAlign: 'center',
  color: props.theme.colors.white,
  width: '50%',
}));

const ArrowContainer = styled.View(props => ({
  marginRight: props.theme.margin.x10,
  marginBottom: props.theme.margin.x5,
  alignSelf: 'flex-end',
}));
