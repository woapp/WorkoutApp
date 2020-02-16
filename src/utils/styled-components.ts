import * as styledComponents from 'styled-components/native';
import { ThemeProps as BasicThemeProps } from 'styled-components';

import { theme } from '@woap/styles/theme';

import { Override } from './types';

export interface ThemeProps extends BasicThemeProps<typeof theme> {}

// to prevent the use of 'styled.' instead of 'styled(...)' that creates errors with react-native-web
type StyledComponents<T extends object> = Override<
  styledComponents.ReactNativeThemedStyledComponentsModule<T>,
  { default: styledComponents.ReactNativeStyledInterface<T> }
>;

const { default: styled, css, ThemeProvider, withTheme } = styledComponents as StyledComponents<
  typeof theme
>;

export { css, ThemeProvider, withTheme };
export default styled;
