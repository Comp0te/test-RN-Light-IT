import React from 'react';
import { createStackNavigator } from 'react-navigation';

import navService from '../services/nav.service';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const authNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: navService.navigationOptions('Sing In'),
  },
  RegistrationScreen: {
    screen: RegistrationScreen,
    navigationOptions: navService.navigationOptions('Registration'),
  },
}, {
  initialRouteName: 'LoginScreen',
});

export default authNavigator;
