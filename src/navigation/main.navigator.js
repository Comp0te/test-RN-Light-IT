import React from 'react';
import { createStackNavigator } from 'react-navigation';

import navService from '../services/nav.service';

import ProductsScreen from '../screens/ProductsScreen';

const mainNavigator = createStackNavigator({
  ProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: navService.navigationOptions('Available products'),
  },
}, {
  initialRouteName: 'ProductsScreen',
});

export default mainNavigator;
