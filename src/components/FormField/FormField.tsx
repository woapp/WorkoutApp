import React, { FunctionComponent } from 'react';
import { TextInputProps, TextInput } from 'react-native';
import styled from '@woap/utils/styled-components';

interface Props extends TextInputProps {
  label: string;
}

export const FormField: FunctionComponent<Props> = ({ label, ...textInputProps }) => {
  return (
    <>
      <Label>{label}</Label>
      <InputContainer>
        <TextInput {...textInputProps} />
      </InputContainer>
    </>
  );
};

const Label = styled.Text(props => ({
  ...props.theme.fonts.label,
  fontWeight: 'bold',
}));

const InputContainer = styled.View(props => ({
  marginTop: props.theme.margin.d2,
  borderColor: props.theme.colors.greyScale[30],
  borderWidth: props.theme.border.width.s,
  paddingVertical: props.theme.margin.x1,
  paddingHorizontal: props.theme.margin.x2,
  borderRadius: props.theme.border.radius.s,
}));
