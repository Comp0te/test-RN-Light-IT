import React from 'react';
import { createStackNavigator } from "react-navigation";
import { Button } from 'react-native-material-ui';
import ProductsScreen from "../../screens/ProductsScreen";
import navService from "../../services/nav.service";

const ProductsNavigator = createStackNavigator({
  ProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: ({navigation}) => {
      const title = navigation.getParam('title', 'Available products');
      const onPressSave = navigation.getParam('onPressSave', null);
      const isLoadingReviews = navigation.getParam('isLoadingReviews', false);

      return {
        ...navService.navigationOptions(title),
        headerRight: (
          !!onPressSave && !isLoadingReviews &&
          <Button
            primary={true}
            text='Save'
            onPress={onPressSave}
          />
        ),
      }
    },
  },
}, {
  initialRouteName: 'ProductsScreen',
});

export default ProductsNavigator;