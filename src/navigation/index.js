import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import navService from '../services/nav.service';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ProductsScreen from '../screens/ProductsScreen';

const Navigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: navService.navigationOptions('Sing In'),
  },
  RegistrationScreen: {
    screen: RegistrationScreen,
    navigationOptions: navService.navigationOptions('Registration'),
  },
    ProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: navService.navigationOptions('Available products'),
  },
}, {
  initialRouteName: 'LoginScreen',
});

const NavigatorContainer = createAppContainer(Navigator);

const AppNavigator = () => {
  const setNavigator = navigatorRef => {
    navService.navigator = navigatorRef;
  };

  return (
    <View style={{flex: 1}}>
      <NavigatorContainer ref={setNavigator}/>
    </View>
  );
};

export default AppNavigator;
