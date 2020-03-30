import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '@woap/navigation/routes';
import { HomeNavigatorParamList } from '@woap/navigation/HomeNavigator';
import styled from '@woap/utils/styled-components';
import { AnimatedMenu } from '@woap/components/AnimatedMenu';
import images from '@woap/assets/images';
import { Spacer } from '@woap/components/Spacer';

type DashboardScreenNavigationProp = StackNavigationProp<HomeNavigatorParamList, Routes.Dashboard>;

type Props = {
  navigation: DashboardScreenNavigationProp;
};

const ARROW_HEIGHT = 140;
const ARROW_WIDTH = 120;

export const Dashboard: FunctionComponent<Props> = observer(() => {
  return (
    <Container>
      <EmptyContainer>
        <EmptyTitle>Nothing yet.</EmptyTitle>
        <Spacer height={1} />
        <EmptyBody>Create your first personnalized training!</EmptyBody>
        <Spacer height={4} />
        <ArrowContainer>
          <Arrow source={images.bottomRightArrow} />
        </ArrowContainer>
      </EmptyContainer>
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

const EmptyContainer = styled.View({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const EmptyTitle = styled.Text(props => ({
  ...props.theme.fonts.h2,
  fontWeight: 'bold',
  textAlign: 'center',
  color: props.theme.colors.white,
}));
const EmptyBody = styled.Text(props => ({
  ...props.theme.fonts.h3,
  textAlign: 'center',
  color: props.theme.colors.white,
  width: '50%',
}));

const ArrowContainer = styled.View(props => ({
  marginRight: props.theme.margin.x10,
  marginBottom: props.theme.margin.x5,
  alignSelf: 'flex-end',
}));

const Arrow = styled.Image({ height: ARROW_HEIGHT, width: ARROW_WIDTH });

const MenuContainer = styled.View(props => ({
  position: 'absolute',
  bottom: props.theme.margin.x2,
  right: props.theme.margin.x2,
}));
