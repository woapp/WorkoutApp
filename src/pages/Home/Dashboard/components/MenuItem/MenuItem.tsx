import React, { FunctionComponent } from 'react';
import styled from '@woap/utils/styled-components';
import { IconName } from '@woap/styles/icons';
import { theme } from '@woap/styles/theme';
import { colors } from '@woap/styles/colors';

import { Icon } from '../../../../../components/Icon';

export const ITEM_HEIGHT = 48;

interface Props {
  title: string;
  iconName: IconName;
  onPress: () => void;
}

export const MenuItem: FunctionComponent<Props> = ({ title, iconName, onPress }) => {
  return (
    <ItemContainer onPress={onPress}>
      <ItemTitle>{title}</ItemTitle>
      <IconContainer>
        <Icon name={iconName} size={theme.iconSize} color={colors.background.black} />
      </IconContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity({
  height: ITEM_HEIGHT,
  flexDirection: 'row',
  alignItems: 'center',
});

const IconContainer = styled.View({
  width: theme.iconSize,
  height: theme.iconSize,
  backgroundColor: theme.colors.ecru,
  borderRadius: theme.iconSize / 2,
});

const ItemTitle = styled.Text({
  fontSize: 14,
  fontWeight: 'bold',
  color: theme.colors.white,
  textAlign: 'right',
  marginRight: theme.margin.x1,
});
