import { CodePushButton } from '@woap/modules/cheatcodes/components/CodePushButton/CodePushButton.component';
import styled from '@woap/utils/styled-components';
import React from 'react';

export const CheatCodes = () => (
  <Container>
    <CodePushButton />
  </Container>
);

const Container = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
});
