import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { shadow } from '@woap/styles/theme';

const styles = StyleSheet.create({
  shadow: {
    ...shadow,
  },
});

interface Props {
  style?: ViewStyle;
}

/**
 * Use this component to display a view with an elevation shadow in Android,
 * besides StyledComponent does not allow shadowOffset as a parameter for iOS.
 * https://github.com/facebook/react-native/issues/10411
 * https://github.com/styled-components/styled-components/issues/1522
 */
export const ViewWithShadow: React.FC<Props> = ({ children, style }) => {
  return <View style={[style, styles.shadow]}>{children}</View>;
};
