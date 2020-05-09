import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createStackNavigator } from '@react-navigation/stack';
import { HistoryOverview } from '@woap/pages/History/HistoryOverview';
import { HistoryCalendar } from '@woap/pages/History/HistoryCalendar';
import { HistoryStatistics } from '@woap/pages/History/HistoryStatistics';
import { AnimatedMenu } from '@woap/pages/Home/Dashboard/components/AnimatedMenu';
import styled from '@woap/utils/styled-components';
import { WhistleIcon } from '@woap/components/Icons/WhistleIcon';
import { CalendarIcon } from '@woap/components/Icons/CalendarIcon';
import { StatisticsIcon } from '@woap/components/Icons/StatisticsIcon';
import { HamburgerIcon } from '@woap/components/Icons/HamburgerIcon';

import { Routes } from './routes';

type HistoryNavigatorRouteList =
  | Routes.HistoryOverview
  | Routes.HistoryCalendar
  | Routes.HistoryStatistics;

export type HistoryNavigatorParamList = {
  [Routes.HistoryOverview]: undefined;
  [Routes.HistoryCalendar]: undefined;
  [Routes.HistoryStatistics]: undefined;
};

const Stack = createStackNavigator<HistoryNavigatorParamList>();

export const HistoryNavigator = () => {
  const { t } = useTranslation('history');
  const [activeRoute, setActiveRoute] = useState<HistoryNavigatorRouteList>(Routes.HistoryOverview);

  return (
    <>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={Routes.HistoryOverview}
        screenOptions={{ animationEnabled: false }}
      >
        {activeRoute === Routes.HistoryOverview && (
          <Stack.Screen name={Routes.HistoryOverview} component={HistoryOverview} />
        )}
        {activeRoute === Routes.HistoryCalendar && (
          <Stack.Screen name={Routes.HistoryCalendar} component={HistoryCalendar} />
        )}
        {activeRoute === Routes.HistoryStatistics && (
          <Stack.Screen name={Routes.HistoryStatistics} component={HistoryStatistics} />
        )}
      </Stack.Navigator>
      <MenuContainer>
        <AnimatedMenu
          rotationAngle={Math.PI / 2}
          Icon={HamburgerIcon}
          items={[
            {
              title: t('historyOverview.menuTitle'),
              Icon: WhistleIcon,
              onPress: () => setActiveRoute(Routes.HistoryOverview),
            },
            {
              title: t('historyCalendar.menuTitle'),
              Icon: CalendarIcon,
              onPress: () => setActiveRoute(Routes.HistoryCalendar),
            },
            {
              title: t('historyStatistics.menuTitle'),
              Icon: StatisticsIcon,
              onPress: () => setActiveRoute(Routes.HistoryStatistics),
            },
          ]}
        />
      </MenuContainer>
    </>
  );
};

const MenuContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: theme.margin.x2,
  right: theme.margin.x2,
}));
