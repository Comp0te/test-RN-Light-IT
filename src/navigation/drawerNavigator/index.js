import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { Color } from '../../Themes/colors';
import { Icon } from 'react-native-material-ui';

import ProductsNavigator from './products.navigator';
import SavedProductsNavigator from './saved.products.navigator';
import SettingsNavigator from './settings.navigator';

const DrawerNavigator = createDrawerNavigator({
  ProductsNavigator: {
    screen: ProductsNavigator,
    navigationOptions: {
      drawerLabel: 'Products',
    }
  },
  SavedProductsNavigator: {
    screen: SavedProductsNavigator,
    navigationOptions: {
      drawerLabel: 'Saved products',
    }
  },
  SettingsNavigator: {
    screen: SettingsNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
    }
  },
}, {
  drawerWidth: Dimensions.get('window').width * 0.8,
  initialRouteName: 'ProductsNavigator',
  contentOptions: {
    activeTintColor: Color.MAIN,
    inactiveTintColor: Color.GREY,
  },
  defaultNavigationOptions: ({navigation}) => ({
    drawerIcon: ({tintColor}) => {
      const {routeName} = navigation.state;

      if (routeName === 'ProductsNavigator') {
        return (
          <Icon
            name='laptop'
            size={22}
            color={tintColor ? tintColor : undefined}
          />
        );
      } else if (routeName === 'SavedProductsNavigator') {
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
