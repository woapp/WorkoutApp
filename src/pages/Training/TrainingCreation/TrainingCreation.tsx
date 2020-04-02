import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '@woap/styles/colors';
import { Routes } from '@woap/navigation/routes';
import { RouteProp } from '@react-navigation/native';
import { TrainingNavigatorParamList } from '@woap/navigation/TrainingNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

type TrainingCreationScreenRouteProp = RouteProp<
  TrainingNavigatorParamList,
  Routes.TrainingCreation
>;

type TrainingCreationScreenNavigationProp = StackNavigationProp<
  TrainingNavigatorParamList,
  Routes.TrainingCreation
>;

type Props = {
  route: TrainingCreationScreenRouteProp;
  navigation: TrainingCreationScreenNavigationProp;
};

export const TrainingCreation: FunctionComponent<Props> = ({ navigation }) => {
  const closeModal = () => navigation.goBack();

  return (
    <Background>
      <Container>
        <Header>
          <Title>My new training</Title>
          <ButtonContainer onPress={closeModal}>
            <Button>x</Button>
          </ButtonContainer>
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

const Container = styled.SafeAreaView(({ theme }) => ({
  margin: theme.margin.x2,
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

const ButtonContainer = styled.TouchableOpacity({});

const Button = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
