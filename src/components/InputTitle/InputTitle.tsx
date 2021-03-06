import styled from '@woap/utils/styled-components';

export const InputTitle = styled.TextInput(props => ({
  borderColor: props.theme.colors.greyScale[20],
  borderRadius: 20,
  borderWidth: 2,
  padding: props.theme.margin.x1,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
  margin: props.theme.margin.x2,
}));
