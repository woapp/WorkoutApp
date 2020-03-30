import React, { FunctionComponent } from 'react';
import images from '@woap/assets/images';
import styled from '@woap/utils/styled-components';

export const ITEM_HEIGHT = 48;

interface Props {
  title: string;
  icon: string;
}

export const MenuItem: FunctionComponent<Props> = ({ title, icon }) => {
  return (
    <ItemContainer>
      <ItemTitle>{title}</ItemTitle>
      <Icon source={images[icon]} />
    </ItemContainer>
  );
};

const ItemContainer = styled.View({
  height: ITEM_HEIGHT,
  flexDirection: 'row',
  alignItems: 'center',
});

const Icon = styled.Image(props => ({
  width: props.theme.iconSize,
  height: props.theme.iconSize,
}));

const ItemTitle = styled.Text(props => ({
  fontSize: 14,
  fontWeight: 'bold',
  color: props.theme.colors.white,
  textAlign: 'right',
  marginRight: props.theme.margin.x1,
}));
