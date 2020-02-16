import { createStackNavigator } from 'react-navigation-stack';
import { colors } from '@woap/styles/colors';
import { MyProfile } from '@woap/pages/MyProfile';

import { Routes } from './routes';

export const ProfileNavigator = createStackNavigator(
  {
    [Routes.MyProfile]: {
      screen: MyProfile,
      navigationOptions: {
        title: 'Mon Profil',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.black,
      },
      headerTintColor: colors.white,
    },
  }
);
