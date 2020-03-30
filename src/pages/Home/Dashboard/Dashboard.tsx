import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '@woap/navigation/routes';
import { HomeNavigatorParamList } from '@woap/navigation/HomeNavigator';
import styled from '@woap/utils/styled-components';
import { AnimatedMenu } from '@woap/components/AnimatedMenu';

type DashboardScreenNavigationProp = StackNavigationProp<HomeNavigatorParamList, Routes.Dashboard>;

type Props = {
  navigation: DashboardScreenNavigationProp;
};

export const Dashboard: FunctionComponent<Props> = observer(() => {
  return (
    <Container>
      <MenuContainer>
        <AnimatedMenu
          items={[
            { title: 'NEW\nTRAINING', iconName: 'whistle' },
            { title: 'NEW\nEXERCISE', iconName: 'dumbbell' },
          ]}
        />
      </MenuContainer>
    </Container>
  );
});

const Container = styled.View(props => ({
  flex: 1,
  backgroundColor: props.theme.colors.background.black,
}));

const MenuContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
