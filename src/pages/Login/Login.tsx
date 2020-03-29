import React, { FunctionComponent, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { observer } from 'mobx-react-lite';
import auth from '@react-native-firebase/auth';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import { Routes } from '@woap/navigation/routes';
import { useStore } from '@woap/utils/hooks/useStore';
import { Spacer } from '@woap/components/Spacer';
import styled from '@woap/utils/styled-components';
import { RootNavigatorParamList } from '@woap/navigation';
import { FormField } from '@woap/components/FormField';

type LoginScreenNavigationProp = StackNavigationProp<RootNavigatorParamList, Routes.Login>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export const Login: FunctionComponent<Props> = observer(({ navigation }) => {
  const { login, user } = useStore();
  const [email, setEmail] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      navigation.navigate(Routes.TabNavigator);
    } else {
      setIsLoading(false);
    }
  }, [navigation, user]);

  const onSubmitLogin = async () => {
    setIsLoginLoading(true);
    try {
      const {
        user: { uid: id },
      } = await auth().signInWithEmailAndPassword(email, password);
      login({ id, email });
      navigation.navigate(Routes.TabNavigator);
    } catch (e) {
      Alert.alert('Erreur', e.message);
    }
    setIsLoginLoading(false);
  };

  return (
    <Container>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Card>
          <Title>Connexion</Title>
          <Spacer height={4} />
          <FormField
            label="Email"
            labelStyle={{ color: 'white' }}
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={{ color: 'white' }}
            selectionColor={'white'}
          />
          <Spacer height={2} />
          <FormField
            label="Mot de passe"
            labelStyle={{ color: 'white' }}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={{ color: 'white' }}
            selectionColor={'white'}
          />
          <Spacer height={2} />
          <PrimaryButton title="Se connecter" onPress={onSubmitLogin} isLoading={isLoginLoading} />
        </Card>
      )}
    </Container>
  );
});

const Container = styled.View(props => ({
  flex: 1,
  padding: 50,
  justifyContent: 'center',
  backgroundColor: props.theme.colors.greyScale[70],
}));

const Card = styled.View(props => ({
  padding: props.theme.margin.x2,
  borderRadius: props.theme.border.radius.l,
  backgroundColor: props.theme.colors.greyScale[90],
  ...props.theme.shadow,
}));

const Title = styled.Text(props => ({
  ...props.theme.fonts.title.H1,
  textAlign: 'center',
  fontWeight: 'bold',
  color: props.theme.colors.white,
}));
