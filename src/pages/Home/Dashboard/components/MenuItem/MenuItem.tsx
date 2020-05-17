import React, { FunctionComponent } from 'react';
import { Dimensions } from 'react-native';
import styled from '@woap/utils/styled-components';
import { theme } from '@woap/styles/theme';
export const ITEM_HEIGHT = 48;
export const ITEM_WIDTH = Dimensions.get('window').width * 0.5;

interface Props {
  title: string;
  Icon: FunctionComponent;
  onPress: () => void;
}

export const MenuItem: FunctionComponent<Props> = ({ title, Icon, onPress }) => {
  return (
    <ItemContainer onPress={onPress}>
      <ItemTitle>{title}</ItemTitle>
      <IconContainer>
        <Icon />
      </IconContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.TouchableOpacity({
  height: ITEM_HEIGHT,
  width: ITEM_WIDTH,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

const IconContainer = styled.View({
  width: theme.iconSize,
  height: theme.iconSize,
  alignItems: 'center',
  justifyContent: 'center',
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
