import styled from '@woap/utils/styled-components';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Spacer } from '@woap/components/Spacer';
import images from '@woap/assets/images';

const ARROW_HEIGHT = 140;
const ARROW_WIDTH = 120;

export const NoTraining = () => {
  const { t } = useTranslation('home');

  return (
    <EmptyContainer>
      <EmptyTitle>{t('dashboard.nothingYet')}</EmptyTitle>
      <Spacer height={1} />
      <EmptyBody>{t('dashboard.createTraining')}</EmptyBody>
      <Spacer height={4} />
      <ArrowContainer>
        <Arrow source={images.bottomRightArrow} />
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

const Arrow = styled.Image({ height: ARROW_HEIGHT, width: ARROW_WIDTH });
