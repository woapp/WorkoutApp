import { FunctionComponent } from 'react';
import { HistoryNavigatorParamList } from '@woap/navigation/HistoryNavigator';
import { Routes } from '@woap/navigation/routes';
import { RouteProp } from '@react-navigation/native';

type HistoryDetailsScreenRouteProp = RouteProp<HistoryNavigatorParamList, Routes.HistoryDetails>;

type Props = {
  route: HistoryDetailsScreenRouteProp;
};

export const HistoryDetails: FunctionComponent<Props> = () => {
  return null;
};
