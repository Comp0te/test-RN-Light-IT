import { createStackNavigator } from 'react-navigation';

import navService from '../services/nav.service';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const authNavigator = createStackNavigator({
  [navService.ScreenRouteNames.LOGIN_SCREEN]: {
    screen: LoginScreen,
    navigationOptions: ({ screenProps: { t } }) => navService.navigationOptions(t('Sign In')),
  },
  [navService.ScreenRouteNames.REGISTRATION_SCREEN]: {
    screen: RegistrationScreen,
    navigationOptions: ({ screenProps: { t } }) => navService.navigationOptions(t('Registration')),
  },
}, {
  initialRouteName: navService.ScreenRouteNames.LOGIN_SCREEN,
});

export default authNavigator;
