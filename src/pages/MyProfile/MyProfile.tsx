import React, { FunctionComponent } from 'react';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import { useStore } from '@woap/utils/hooks/useStore';
import firestore from '@react-native-firebase/firestore';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { Routes } from '@woap/navigation/routes';
import styled from '@woap/utils/styled-components';
import { TextBody, TextSubtitle } from '@woap/components/Texts';
import { View } from 'react-native';

interface Props extends NavigationStackScreenProps {}

export const MyProfile: FunctionComponent<Props> = ({ navigation }) => {
  const { workouts, user, exercises, history, logout } = useStore();

  const onSaveData = async () => {
    if (user) {
      try {
        const docRef = firestore().doc(`users/${user.id}`);
        await firestore().runTransaction(transaction =>
          Promise.resolve(transaction.set(docRef, { workouts, exercises, history }))
        );
      } catch (err) {
        console.log('err', err);
      }
    }
  };

  const onLogout = () => {
    logout();
    navigation.navigate(Routes.Login);
  };

  return (
    <Container>
      <View>
        <TextSubtitle>Mon email</TextSubtitle>
        <TextBody>{user && user.email}</TextBody>
      </View>
      <View>
        <PrimaryButton title="Sauvegarder mes données" onPress={onSaveData} />
        <LogoutButton title="Déconnexion" onPress={onLogout} />
      </View>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  padding: theme.margin.x2,
  justifyContent: 'space-between',
}));

const LogoutButton = styled(PrimaryButton)(({ theme }) => ({
  marginTop: theme.margin.x2,
}));