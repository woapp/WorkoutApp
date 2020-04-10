import React, { FunctionComponent } from 'react';
import { Background } from '@woap/components/Background';
import styled from '@woap/utils/styled-components';

import { Header } from '../components/Header';

interface Props {}

export const TrainingName: FunctionComponent<Props> = () => {
  return (
    <Background>
      <Container>
        <Header title="New Training" />
      </Container>
    </Background>
  );
};

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));
