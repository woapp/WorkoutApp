/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FunctionComponent, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { Routes } from '@woap/navigation/routes';
import styled from '@woap/utils/styled-components';
import { ProfileNavigatorParamList } from '@woap/navigation/ProfileNavigator';
import { RootNavigatorParamList } from '@woap/navigation';
import { TabNavigatorParamList } from '@woap/navigation/TabNavigator';
import { FrontBodyVisualisation } from '@woap/components/BodyVisualisation/components/FrontBodyVisualisation';
import { Slider, ScrollView } from 'react-native';
import { BackBodyVisualisation } from '@woap/components/BodyVisualisation/components/BackBodyVisualisation';

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
  const [absRatio, setAbsRatio] = useState(0);
  const [adductorsRatio, setAdductorsRatio] = useState(0);
  const [backRatio, setBackRatio] = useState(0);
  const [bicepsRatio, setBicepsRatio] = useState(0);
  const [calvesRatio, setCalvesRatio] = useState(0);
  const [chestRatio, setChestRatio] = useState(0);
  const [forearmRatio, setForearmRatio] = useState(0);
  const [obliquesRatio, setObliquesRatio] = useState(0);
  const [quadricepsRatio, setQuadricepsRatio] = useState(0);
  const [shouldersRatio, setShouldersRatio] = useState(0);
  const [trapeziusRatio, setTrapeziusRatio] = useState(0);
  const [tricepsRatio, setTricepsRatio] = useState(0);
  const [buttocksRatio, setButtocksRatio] = useState(0);
  const [hamstringRatio, setHamstringRatio] = useState(0);
  const [lumbarRatio, setLumbarRatio] = useState(0);

  return (
    <Container>
      <Row>
        <FrontBodyVisualisation />
        <BackBodyVisualisation />
      </Row>
      <ScrollView>
        <Label>Abs</Label>
        <Slider onValueChange={setAbsRatio} />
        <Label>Adductors</Label>
        <Slider onValueChange={setAdductorsRatio} />
        <Label>Back</Label>
        <Slider onValueChange={setBackRatio} />
        <Label>Biceps</Label>
        <Slider onValueChange={setBicepsRatio} />
        <Label>Calves</Label>
        <Slider onValueChange={setCalvesRatio} />
        <Label>Chest</Label>
        <Slider onValueChange={setChestRatio} />
        <Label>Forearm</Label>
        <Slider onValueChange={setForearmRatio} />
        <Label>obliquesRatio</Label>
        <Slider onValueChange={setObliquesRatio} />
        <Label>quadricepsRatio</Label>
        <Slider onValueChange={setQuadricepsRatio} />
        <Label>shouldersRatio</Label>
        <Slider onValueChange={setShouldersRatio} />
        <Label>trapeziusRatio</Label>
        <Slider onValueChange={setTrapeziusRatio} />
        <Label>tricepsRatio</Label>
        <Slider onValueChange={setTricepsRatio} />
        <Label>buttocskRatio</Label>
        <Slider onValueChange={setButtocksRatio} />
        <Label>hamstringRatio </Label>
        <Slider onValueChange={setHamstringRatio} />
        <Label>lumbarRatio </Label>
        <Slider onValueChange={setLumbarRatio} />
      </ScrollView>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  padding: theme.margin.x2,
  justifyContent: 'space-between',
  backgroundColor: theme.colors.background.black,
}));

const Label = styled.Text({
  color: 'white',
});

const Row = styled.View({ flexDirection: 'row', alignItems: 'flex-end' });
