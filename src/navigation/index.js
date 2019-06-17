import React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import navService from '../services/nav.service';

import authNavigator from './auth.navigator'
import mainNavigator from './main.navigator'

const Navigator = createSwitchNavigator({
  authNavigator,
  mainNavigator,
}, {
  initialRouteName: 'authNavigator',
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
