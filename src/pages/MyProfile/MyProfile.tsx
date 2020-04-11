import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import firestore from '@react-native-firebase/firestore';
import { PrimaryButton } from '@woap/components/PrimaryButton';
import { useStore } from '@woap/utils/hooks/useStore';
import { Routes } from '@woap/navigation/routes';
import styled from '@woap/utils/styled-components';
import { TextBody, TextSubtitle } from '@woap/components/Texts';
import { ProfileNavigatorParamList } from '@woap/navigation/ProfileNavigator';
import { RootNavigatorParamList } from '@woap/navigation';
import { TabNavigatorParamList } from '@woap/navigation/TabNavigator';

type MyProfileScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootNavigatorParamList, Routes.TabNavigator>,
  CompositeNavigationProp<
    MaterialTopTabNavigationProp<TabNavigatorParamList, Routes.ProfileNavigator>,
    StackNavigationProp<ProfileNavigatorParamList, Routes.MyProfile>
  >
>;

type Props = {
  navigation: MyProfileScreenNavigationProp;
};

export const MyProfile: FunctionComponent<Props> = () => {
  const { workouts, user, exercises, history } = useStore();

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

  return (
    <Container>
      <View>
        <TextSubtitle>Mon email</TextSubtitle>
        <TextBody>{user && user.email}</TextBody>
      </View>
      <View>
        <PrimaryButton title="Sauvegarder mes données" onPress={onSaveData} />
      </View>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  padding: theme.margin.x2,
  justifyContent: 'space-between',
}));
