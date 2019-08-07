import { AppRegistry } from 'react-native';
import App from './src/screens/App';
import { name as appName } from './app.json';
import './src/translation';
import bgMessagingService from './src/services/bgMessaging.servise';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessagingService);
