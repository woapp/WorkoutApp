import React, { FunctionComponent } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { Routes } from '@woap/navigation/routes';
import styled from '@woap/utils/styled-components';
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
  return <Container />;
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  padding: theme.margin.x2,
  justifyContent: 'space-between',
  backgroundColor: theme.colors.background.black,
}));
