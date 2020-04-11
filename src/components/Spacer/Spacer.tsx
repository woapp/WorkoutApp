import styled from '@woap/utils/styled-components';

export const Spacer = styled.View<{ height?: number; width?: number }>`
  height: ${props => props.theme.margin.x1 * (props.height || 0)};
  width: ${props => props.theme.margin.x1 * (props.width || 0)};
`;
