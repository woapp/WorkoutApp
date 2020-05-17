import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@woap/utils/styled-components';
import { RadioButton } from '@woap/components/RadioButton';
import { Spacer } from '@woap/components/Spacer';
import { FormField } from '@woap/components/FormField';
import { colors } from '@woap/styles/colors';
import { LinearButton } from '@woap/components/LinearButton';
import { EmailService } from '@woap/services/email';

enum RepportingType {
  BUG,
  IMPROVEMENT,
}

const generateEmailId = () =>
  Math.random()
    .toString()
    .substring(2, 10);

export const Support: FunctionComponent = () => {
  const { t } = useTranslation('support');
  const [repportingType, setRepportingType] = useState(RepportingType.IMPROVEMENT);
  const [body, setBody] = useState('');
  const sendEmail = async () => {
    const subject = `${
      repportingType === RepportingType.IMPROVEMENT ? 'Improvement' : 'Bug'
    } #${generateEmailId()}`;
    try {
      await EmailService.sendEmail({ subject, body });
    } catch (error) {
      console.warn(error);
    }
  };

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
      <Spacer height={2} />
      <BodyField
        value={body}
        onChangeText={setBody}
        placeholder={t('bodyPlaceholder')}
        placeholderTextColor={colors.transparentWhiteScale[60]}
        selectionColor={colors.white}
        multiline
      />
      <ButtonContainer>
        <LinearButton title={'send'} onPress={sendEmail} />
      </ButtonContainer>
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

const BodyField = styled(FormField)(({ theme }) => ({
  marginVertical: theme.margin.x1,
  color: theme.colors.white,
  fontWeight: 'bold',
  ...theme.fonts.h3,
  maxHeight: 150,
}));

const ButtonContainer = styled.View({
  flex: 1,
  justifyContent: 'flex-end',
});
