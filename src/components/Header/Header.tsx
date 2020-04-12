import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from '@woap/utils/styled-components';
import { CrossIcon } from '@woap/components/Icons/CrossIcon';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@woap/navigation/routes';

interface Props {
  title: string;
  onClose?: () => void;
}

export const Header: FunctionComponent<Props> = ({ title, onClose }) => {
  const navigation = useNavigation();
  const goToDashboard = () => navigation.navigate(Routes.Dashboard);

  return (
    <Container>
      <Title>{title}</Title>
      <TouchableOpacity onPress={onClose ? onClose : goToDashboard}>
        <CrossIcon />
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottomWidth: 1,
  borderBottomColor: theme.colors.transparentWhiteScale[60],
  paddingTop: theme.margin.x1,
  paddingBottom: theme.margin.x2,
}));

const Title = styled.Text(({ theme }) => ({
  ...theme.fonts.h1,
  fontWeight: 'bold',
  color: theme.colors.white,
}));
