import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-material-ui';
import ProductsScreen from '../../screens/ProductsScreen';
import navService from '../../services/nav.service';

const ProductsNavigator = createStackNavigator({
  [navService.ScreenRouteNames.PRODUCTS_SCREEN]: {
    screen: ProductsScreen,
    navigationOptions: ({ navigation, screenProps: { t } }) => {
      const title = navigation.getParam('title', t('Available products'));
      const onPressSave = navigation.getParam('onPressSave', null);
      const isLoadingReviews = navigation.getParam('isLoadingReviews', false);

      return {
        ...navService.navigationOptions(title),
        headerRight: (
          !!onPressSave && !isLoadingReviews
          && (
          <Button
            primary
            text={t('Save')}
            onPress={onPressSave}
          />
          )
        ),
      };
    },
  },
}, {
  initialRouteName: navService.ScreenRouteNames.PRODUCTS_SCREEN,
});

export default ProductsNavigator;
