import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { IconName } from '@woap/styles/icons';
import { theme } from '@woap/styles/theme';
import { colors } from '@woap/styles/colors';

import { Icon } from '../Icon';

export const ITEM_HEIGHT = 48;

interface Props {
  title: string;
  iconName: IconName;
}

export const MenuItem: FunctionComponent<Props> = ({ title, iconName }) => {
  return (
    <ItemContainer>
      <ItemTitle>{title}</ItemTitle>
      <IconContainer>
        <Icon name={iconName} size={theme.iconSize} color={colors.background.black} />
      </IconContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.View({
  height: ITEM_HEIGHT,
  flexDirection: 'row',
  alignItems: 'center',
});

const IconContainer = styled.View(props => ({
  width: props.theme.iconSize,
  height: props.theme.iconSize,
  backgroundColor: props.theme.colors.ecru,
  borderRadius: props.theme.iconSize / 2,
}));

const ItemTitle = styled.Text(props => ({
  fontSize: 14,
  fontWeight: 'bold',
  color: props.theme.colors.white,
  textAlign: 'right',
  marginRight: props.theme.margin.x1,
}));
