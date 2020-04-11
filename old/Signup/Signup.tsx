import React, { FunctionComponent } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native';
import styled from './node_modules/@woap/utils/styled-components';
import { colors } from './node_modules/@woap/styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FormField } from './node_modules/@woap/components/FormField';
import { Button } from './node_modules/@woap/components/Button';
import { Spacer } from './node_modules/@woap/components/Spacer';
import { CrossIcon } from './node_modules/@woap/components/Icons/CrossIcon';

import { useSignup } from './Signup.hook';

export const Signup: FunctionComponent = () => {
  const closeModale = () => {};
  const navigateToTabNavigator = () => {};

  const { email, setEmail, password, setPassword, isSignupLoading, onSubmitSignup } = useSignup(
    navigateToTabNavigator
  );

  return (
    <Background>
      <Container>
        <Header>
          <Title>Nouveau compte</Title>
          <TouchableOpacity onPress={closeModale}>
            <CrossIcon />
          </TouchableOpacity>
        </Header>
        <Spacer height={2} />
        <FormField
          label="Email"
          labelStyle={{ color: colors.white }}
          textContentType={'emailAddress'}
          value={email}
          onChangeText={setEmail}
          style={{ color: colors.white }}
          selectionColor={colors.white}
        />
        <Spacer height={2} />
        <FormField
          label="Mot de passe"
          labelStyle={{ color: colors.white }}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{ color: colors.white }}
          selectionColor={colors.white}
        />
        <Spacer height={2} />
        <Button title="Créer" onPress={onSubmitSignup} isLoading={isSignupLoading} />
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
const Header = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Container = styled(SafeAreaView)(({ theme }) => ({
  margin: theme.margin.x2,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  color: theme.colors.white,
  fontWeight: 'bold',
}));
