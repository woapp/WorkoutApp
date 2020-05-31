import React, { FunctionComponent, useState } from 'react';
import DeviceInfo from 'react-native-device-info';
import { Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import styled from '@woap/utils/styled-components';
import { RadioButton } from '@woap/components/RadioButton';
import { Spacer } from '@woap/components/Spacer';
import { FormField } from '@woap/components/FormField';
import { colors } from '@woap/styles/colors';
import { LinearButton } from '@woap/components/LinearButton';
import { EmailService } from '@woap/services/email';

enum ReportingType {
  BUG,
  IMPROVEMENT,
}

const getDeviceInfos = async () => {
  let deviceInfos = '###################\n';
  const os = await DeviceInfo.getBaseOs();
  deviceInfos += `os : ${os}\n`;
  const osVersion = DeviceInfo.getSystemVersion();
  deviceInfos += `osVersion : ${osVersion}\n`;
  const appVersion = DeviceInfo.getVersion();
  deviceInfos += `appVersion : ${appVersion}\n`;
  const screen = Dimensions.get('screen');
  deviceInfos += `screen : w${Math.floor(screen.width)} * h${Math.floor(screen.height)}\n`;
  deviceInfos += '###################\n';

  return deviceInfos;
};

const generateEmailId = () =>
  Math.random()
    .toString()
    .substring(2, 10);

export const Support: FunctionComponent = () => {
  const { t } = useTranslation('support');
  const [reportingType, setReportingType] = useState(ReportingType.IMPROVEMENT);
  const [body, setBody] = useState('');
  const sendEmail = async () => {
    const subject = `${
      reportingType === ReportingType.IMPROVEMENT ? 'Improvement' : 'Bug'
    } #${generateEmailId()}`;
    const deviceInfos = await getDeviceInfos();
    const emailBody = `${body}\n\n${deviceInfos}`;
    try {
      await EmailService.sendEmail({ subject, body: emailBody });
    } catch (error) {
      console.warn(error);
    }
  };

  const getInputPlaceholder = () =>
    reportingType === ReportingType.IMPROVEMENT ? t('improvementPlaceholder') : t('bugPlaceholder');

  return (
    <Container>
      <Title>{t('title')}</Title>
      <Spacer height={2} />
      <Row>
        <RadioButton
          label={t('improvement')}
          onSelect={() => setReportingType(ReportingType.IMPROVEMENT)}
          selected={reportingType === ReportingType.IMPROVEMENT}
        />
        <RadioButton
          label={t('bug')}
          onSelect={() => setReportingType(ReportingType.BUG)}
          selected={reportingType === ReportingType.BUG}
        />
      </Row>
      <Spacer height={2} />
      <BodyField
        value={body}
        onChangeText={setBody}
        placeholder={getInputPlaceholder()}
        placeholderTextColor={colors.transparentWhiteScale[60]}
        selectionColor={colors.white}
        multiline
      />
      <ButtonContainer>
        <LinearButton title={t('send')} onPress={sendEmail} />
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
