import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@woap/utils/styled-components';
import { RadioButton } from '@woap/components/RadioButton';
import { Spacer } from '@woap/components/Spacer';

enum RepportingType {
  BUG,
  IMPROVEMENT,
}

export const Support: FunctionComponent = () => {
  const { t } = useTranslation('support');
  const [repportingType, setRepportingType] = useState(RepportingType.IMPROVEMENT);

  return (
    <Container>
      <Title>{t('title')}</Title>
      <Spacer height={2} />
      <Row>
        <RadioButton
          label={t('improvement')}
          onSelect={() => setRepportingType(RepportingType.IMPROVEMENT)}
          selected={repportingType === RepportingType.IMPROVEMENT}
        />
        <RadioButton
          label={t('bug')}
          onSelect={() => setRepportingType(RepportingType.BUG)}
          selected={repportingType === RepportingType.BUG}
        />
      </Row>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  padding: theme.margin.x2,
  backgroundColor: theme.colors.background.black,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  fontWeight: 'bold',
  color: theme.colors.white,
}));

const Row = styled.View({ flexDirection: 'row' });
