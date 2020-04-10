import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';

interface Props {
  selected: boolean;
  name: string;
  onPress: () => void;
}
export const Tag: FunctionComponent<Props> = ({ name, selected, onPress }) => (
  <Container selected={selected} onPress={onPress}>
    <Name selected={selected}>{name}</Name>
  </Container>
);

const Container = styled.TouchableOpacity<{ selected: boolean }>(({ theme, selected }) => ({
  marginRight: theme.margin.x1,
  marginBottom: theme.margin.x1,
  borderWidth: 2,
  borderColor: theme.colors.black,
  paddingHorizontal: theme.margin.x2,
  paddingVertical: theme.margin.x1,
  backgroundColor: selected ? theme.colors.black : theme.colors.transparentWhiteScale[60],
  borderRadius: theme.border.radius.m,
}));

const Name = styled.Text<{ selected: boolean }>(({ theme, selected }) => ({
  ...theme.fonts.h4,
  color: selected ? theme.colors.white : theme.colors.black,
  fontWeight: 'bold',
}));
