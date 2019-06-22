import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { Color } from '../../Themes/colors';
import { Icon } from 'react-native-material-ui';

import navService from '../../services/nav.service';

import ProductsNavigator from './products.navigator';
import SavedProductsNavigator from './saved.products.navigator';
import SettingsNavigator from './settings.navigator';

const DrawerNavigator = createDrawerNavigator({
  [navService.NavRouteNames.PRODUCTS_NAVIGATOR]: {
    screen: ProductsNavigator,
    navigationOptions: {
      drawerLabel: 'Products',
    }
  },
  [navService.NavRouteNames.SAVED_PRODUCTS_NAVIGATOR]: {
    screen: SavedProductsNavigator,
    navigationOptions: {
      drawerLabel: 'Saved products',
    }
  },
  [navService.NavRouteNames.SETTINGS_NAVIGATOR]: {
    screen: SettingsNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
    }
  },
}, {
  drawerWidth: Dimensions.get('window').width * 0.8,
  initialRouteName: navService.NavRouteNames.PRODUCTS_NAVIGATOR,
  contentOptions: {
    activeTintColor: Color.MAIN,
    inactiveTintColor: Color.GREY,
  },
  defaultNavigationOptions: ({navigation}) => ({
    drawerIcon: ({tintColor}) => {
      const {routeName} = navigation.state;

      if (routeName === navService.NavRouteNames.PRODUCTS_NAVIGATOR) {
        return (
          <Icon
            name='laptop'
            size={22}
            color={tintColor ? tintColor : undefined}
          />
        );
      } else if (routeName === navService.NavRouteNames.SAVED_PRODUCTS_NAVIGATOR) {
        return (
          <Icon
            name='shopping-cart'
            size={22}
            color={tintColor ? tintColor : undefined}
          />
        );
      } else {
        return (
          <Icon
            name='settings'
            size={22}
            color={tintColor ? tintColor : undefined}
          />
        );
      }
    },
  }),
});

export default DrawerNavigator;
