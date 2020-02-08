import styled from '../../utils/styled-components';

export const NameInput = styled.TextInput(props => ({
  borderColor: props.theme.colors.lightGrey,
  borderRadius: 20,
  borderWidth: 2,
  padding: props.theme.margin.x1,
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 20,
  margin: props.theme.margin.x2,
}));
