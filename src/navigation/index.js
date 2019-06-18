import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import navService from '../services/nav.service';
import {Actions as realmActions} from '../redux/realm/AC';

import AuthNavigator from './auth.navigator'
import DrawerNavigator from './drawerNavigator'

const Navigator = createSwitchNavigator({
  AuthNavigator,
  DrawerNavigator,
}, {
  initialRouteName: 'DrawerNavigator',
});

const NavigatorContainer = createAppContainer(Navigator);

const AppNavigator = ({dispatch}) => {
  const setNavigator = navigatorRef => {
    navService.navigator = navigatorRef;
  };

  useEffect(() => {
    dispatch(realmActions.rehydrateStore())
  }, []);

  return (
    <View style={{flex: 1}}>
      <NavigatorContainer ref={setNavigator}/>
    </View>
  );
};

export default connect()(AppNavigator);
