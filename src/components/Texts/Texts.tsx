import styled from '@woap/utils/styled-components';
import React from 'react';
import { Text, TextProps } from 'react-native';
import { FunctionComponent } from 'react';
import { Trans } from '@lingui/macro';

export const TranslatedText: FunctionComponent<TextProps> = ({ children, ...textProps }) => (
  <Trans>
    <Text {...textProps}>{children}</Text>
  </Trans>
);

export const TextTitle = styled(TranslatedText)({
  fontWeight: 'bold',
  fontSize: 24,
});

export const TextSubtitle = styled(TranslatedText)({
  fontSize: 20,
});

export const TextBody = styled(TranslatedText)({
  fontSize: 16,
});
