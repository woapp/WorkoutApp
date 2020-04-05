import React, { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';
import styled from '@woap/utils/styled-components';
import { colors } from '@woap/styles/colors';
import { SearchIcon } from '@woap/components/Icons/SearchIcon';

export const SearchBar: FunctionComponent<TextInputProps> = props => {
  return (
    <Container>
      <SearchIcon />
      <Input {...props} />
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.colors.transparentWhiteScale[20],
  borderRadius: 8,
  paddingHorizontal: theme.margin.x2,
  paddingVertical: theme.margin.x1,
}));

const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.transparentWhiteScale[60],
  selectionColor: colors.white,
})(({ theme }) => ({
  flex: 1,
  marginLeft: theme.margin.x1,
  color: theme.colors.white,
  padding: 0,
}));
