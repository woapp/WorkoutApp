import React, { FunctionComponent } from 'react';
import { TextInputProps, TextStyle } from 'react-native';
import styled from '@woap/utils/styled-components';

interface Props extends TextInputProps {
  label: string;
  labelStyle: TextStyle;
}

export const FormField: FunctionComponent<Props> = ({ label, labelStyle, ...textInputProps }) => {
  return (
    <Container>
      <Label style={labelStyle}>{label}</Label>
      <InputContainer>
        <TextInputWithoutPadding {...textInputProps} />
      </InputContainer>
    </Container>
  );
};

const Container = styled.View({ width: '100%' });

const Label = styled.Text(props => ({
  ...props.theme.fonts.label,
  fontWeight: 'bold',
}));

const TextInputWithoutPadding = styled.TextInput({
  padding: 0,
});

const InputContainer = styled.View(({ theme }) => ({
  marginTop: theme.margin.d2,
  backgroundColor: theme.colors.transparentWhiteScale[20],
  borderRadius: theme.border.radius.s,
  paddingHorizontal: theme.margin.x2,
  paddingVertical: theme.margin.x1,
}));
