import { AppRegistry, YellowBox } from 'react-native';

import { App } from './src/App';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'RCTRootView cancelTouches', // https://github.com/kmagiera/react-native-gesture-handler/issues/746
]);

AppRegistry.registerComponent(appName, () => App);
