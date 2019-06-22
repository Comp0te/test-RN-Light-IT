import React from 'react';
import { NavigationActions } from 'react-navigation';

import { headerTitleStyle, headerStyle, headerTitleContainerStyle } from '../Themes/navigator';

class NavService {
  _navigator;

  _NavRouteNames = {
    AUTH_NAVIGATOR: 'AuthNavigator',
    DRAWER_NAVIGATOR: 'DrawerNavigator',
    PRODUCTS_NAVIGATOR: 'ProductsNavigator',
    SAVED_PRODUCTS_NAVIGATOR: 'SavedProductsNavigator',
    SETTINGS_NAVIGATOR: 'SettingsNavigator',
  };

  _ScreenRouteNames = {
    LOGIN_SCREEN: 'LoginScreen',
    REGISTRATION_SCREEN: 'RegistrationScreen',
    PRODUCTS_SCREEN: 'ProductsScreen',
    SAVED_PRODUCTS_SCREEN: 'SavedProductsScreen',
    SAVED_PRODUCT_DETAIL_SCREEN: 'SavedProductDetailScreen',
    SETTINGS_SCREEN: 'SettingsScreen',
  };

  get NavRouteNames() {
    return this._NavRouteNames;
  }

  get ScreenRouteNames() {
    return this._ScreenRouteNames;
  }

  set navigator(ref) {
    this._navigator = ref;
  }

  navigate(routeName, params) {
    if (this._navigator) {
      this._navigator.dispatch(
        NavigationActions.navigate({
          routeName,
          params,
        }),
      );
    }
  }

  navigationOptions(title, headerBackImage) {
    return {
      title,
      headerTitleStyle,
      headerStyle,
      headerTitleContainerStyle,
      headerTransparent: true,
      headerBackImage,
    };
  }
}

export default new NavService();