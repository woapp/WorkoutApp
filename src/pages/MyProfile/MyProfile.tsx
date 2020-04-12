import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { Routes } from '@woap/navigation/routes';
import styled from '@woap/utils/styled-components';
import { TextSubtitle } from '@woap/components/Texts';
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
  // const { user } = useStore();

  return (
    <Container>
      <View>
        <TextSubtitle>To implement</TextSubtitle>
      </View>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  padding: theme.margin.x2,
  justifyContent: 'space-between',
}));
