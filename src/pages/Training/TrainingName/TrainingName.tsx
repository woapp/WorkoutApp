import React, { FunctionComponent, useState } from 'react';
import { Background } from '@woap/components/Background';
import styled from '@woap/utils/styled-components';
import { FormField } from '@woap/components/FormField';
import { Spacer } from '@woap/components/Spacer';
import { colors } from '@woap/styles/colors';

import { Header } from '../components/Header';

interface Props {}

export const TrainingName: FunctionComponent<Props> = () => {
  const [name, setName] = useState('');

  return (
    <Background>
      <Container>
        <Header title="New Training" />
        <Spacer height={3} />
        <Title>HOW WOULD YOU NAME IT?</Title>
        <Spacer height={2} />
        <NameFormField
          value={name}
          onChangeText={setName}
          placeholder="Full body, matinal routine..."
          placeholderTextColor={colors.transparentWhiteScale[60]}
        />
      </Container>
    </Background>
  );
};

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h3,
  color: theme.colors.white,
  fontWeight: 'bold',
}));

const NameFormField = styled(FormField)(({ theme }) => ({
  marginVertical: 8,
  color: theme.colors.white,
  fontWeight: 'bold',
  ...theme.fonts.h3,
}));
