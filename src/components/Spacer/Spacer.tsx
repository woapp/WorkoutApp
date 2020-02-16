import styled from '@woap/utils/styled-components';

export const Spacer = styled.View<{ height?: number }>`
  height: ${props => props.theme.margin.x1 * (props.height || 1)};
`;
