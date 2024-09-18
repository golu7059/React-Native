/**
 * @format
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppPro from './AppPro';
import {name as appName} from './app.json';

/**
 * IMPORTANT:
 * 1. The `AppRegistry.registerComponent` function
 *    is the entry point for rendering the React Native app.
 * 2. The second argument to `AppRegistry.registerComponent` is a function
 *    that should return the root component of the application.
 * 3. The app name is specified in the `app.json` file and is used
 *    to identify the app in the Metro Bundler.
 * 4. The `AppRegistry.registerComponent` function should only be
 *    called once per app.
 *
 * See https://reactnative.dev/docs/appregistry for more information.
 */
AppRegistry.registerComponent(appName, () => AppPro);

