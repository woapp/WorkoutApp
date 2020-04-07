import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CrossIcon } from '@woap/components/Icons/CrossIcon';
import styled from '@woap/utils/styled-components';
import { colors } from '@woap/styles/colors';

export const TrainingSetsConfiguration: FunctionComponent = () => (
  <Background>
    <Container>
      <Header>
        <Title>Training</Title>
        <TouchableOpacity onPress={() => {}}>
          <CrossIcon />
        </TouchableOpacity>
      </Header>
    </Container>
  </Background>
);

const Background = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [colors.green, colors.blue],
  flex: 1,
})``;

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
  flex: 1,
}));

const Header = styled.View(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.transparentWhiteScale[60],
  paddingTop: theme.margin.x1,
  paddingBottom: theme.margin.x2,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
