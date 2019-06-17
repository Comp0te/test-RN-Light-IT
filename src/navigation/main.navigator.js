import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { Color } from '../Themes/colors';
import { Icon } from 'react-native-material-ui';

import navService from '../services/nav.service';

import ProductsScreen from '../screens/ProductsScreen';

const mainNavigator = createDrawerNavigator({
  ProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: navService.navigationOptions('Available products'),
  },
  SavedProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: navService.navigationOptions('Saved products'),
  },
  SettingsScreen: {
    screen: ProductsScreen,
    navigationOptions: navService.navigationOptions('Settings'),
  },
}, {
  drawerWidth: Dimensions.get('window').width * 0.8,
  initialRouteName: 'ProductsScreen',
  contentOptions: {
    activeTintColor: Color.MAIN,
    inactiveTintColor: Color.GREY,
  },
  defaultNavigationOptions: ({navigation}) => ({
    drawerIcon: ({tintColor}) => {
      const {routeName} = navigation.state;

      if (routeName === 'ProductsScreen') {
        return (
          <Icon
            name='laptop'
            size={22}
            color={tintColor ? tintColor : undefined}
          />
        );
      } else if (routeName === 'SavedProductsScreen') {
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

export default mainNavigator;
