import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { useTranslation } from 'react-i18next';

import navService from '../services/nav.service';
import i18nService from '../services/i18n.service';
import { Actions as realmActions } from '../redux/realm/AC';

import AuthNavigator from './auth.navigator';
import DrawerNavigator from './drawerNavigator';
import * as firebase from "react-native-firebase";

const Navigator = createSwitchNavigator({
  [navService.NavRouteNames.AUTH_NAVIGATOR]: AuthNavigator,
  [navService.NavRouteNames.DRAWER_NAVIGATOR]: DrawerNavigator,
}, {
  initialRouteName: navService.NavRouteNames.AUTH_NAVIGATOR,
});

const NavigatorContainer = createAppContainer(Navigator);

const AppNavigator = ({ dispatch }) => {
  const setNavigator = (navigatorRef) => {
    navService.navigator = navigatorRef;
  };

  useEffect(() => {
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          console.log('fcmToken - ', fcmToken);
          // user has a device token
        } else {
          // user doesn't have a device token yet
        }
      });

    const listener = firebase.messaging().onMessage((message) => {
      console.log('--------------------', message);
    });

    return () => listener();
  }, []);

  const { t, i18n } = useTranslation('navigation');

  useEffect(() => {
    dispatch(realmActions.rehydrateStore());
    i18nService.i18n = i18n;
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <NavigatorContainer
        ref={setNavigator}
        screenProps={{
          t,
        }}
      />
    </View>
  );
};

export default connect()(AppNavigator);
