import 'react-native-gesture-handler';
import './polyfill';
import { enableScreens } from 'react-native-screens';

import './unistyles';

enableScreens();
import * as SplashScreen from 'expo-splash-screen';
import { registerRootComponent } from 'expo';

import App from './App';

void SplashScreen.preventAutoHideAsync();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
