import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@woap/styles/colors';

export const TrainingCreation: FunctionComponent = () => {
  return (
    <Background>
      <Container>
        <Header>
          <Title>My new training</Title>
        </Header>
      </Container>
    </Background>
  );
};

const Background = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  colors: [colors.green, colors.blue],
  flex: 1,
})``;

const Container = styled.SafeAreaView``;

const Header = styled.View(({ theme }) => ({
  padding: theme.margin.x2,
  flexDirection: 'row',
}));

const Title = styled.Text(({ theme }) => ({ color: theme.colors.white }));
