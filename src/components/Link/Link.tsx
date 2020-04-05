import React, { FunctionComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from '@woap/utils/styled-components';

interface Props {
  label: string;
  onPress: () => void;
}

export const Link: FunctionComponent<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Label>{label}</Label>
    </TouchableOpacity>
  );
};

const Label = styled.Text(props => ({
  ...props.theme.fonts.link,
  fontWeight: 'bold',
  color: props.theme.colors.white,
}));
