import React from 'react';
import { createStackNavigator } from 'react-navigation';

import navService from '../services/nav.service';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const authNavigator = createStackNavigator({
  [navService.ScreenRouteNames.LOGIN_SCREEN]: {
    screen: LoginScreen,
    navigationOptions: navService.navigationOptions('Sing In'),
  },
  [navService.ScreenRouteNames.REGISTRATION_SCREEN]: {
    screen: RegistrationScreen,
    navigationOptions: navService.navigationOptions('Registration'),
  },
}, {
  initialRouteName: navService.ScreenRouteNames.LOGIN_SCREEN,
});

export default authNavigator;
