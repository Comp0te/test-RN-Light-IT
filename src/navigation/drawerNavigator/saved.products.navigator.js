import { createStackNavigator } from 'react-navigation';
import React from 'react';
import HeaderButton from '../../components/HeaderButton';
import navService from '../../services/nav.service';

import SavedProductsScreen from '../../screens/SavedProductsScreen';
import SavedProductDetailScreen from '../../screens/SavedProductDetailScreen';

const SavedProductsNavigator = createStackNavigator({
  [navService.ScreenRouteNames.SAVED_PRODUCTS_SCREEN]: {
    screen: SavedProductsScreen,
    navigationOptions: ({ screenProps: { t } }) => navService.navigationOptions(t('Saved products')),
  },
  [navService.ScreenRouteNames.SAVED_PRODUCT_DETAIL_SCREEN]: {
    screen: SavedProductDetailScreen,
    navigationOptions: ({ navigation, screenProps: { t } }) => {
      const title = navigation.getParam('title');
      const onPressDelete = navigation.getParam('onPressDelete', null);

      return {
        ...navService.navigationOptions(title),
        headerRight: (
          !!onPressDelete
          && (
            <HeaderButton
              title={t('Delete')}
              onPress={onPressDelete}
            />
          )
        ),
      };
    },
  },
}, {
  initialRouteName: navService.ScreenRouteNames.SAVED_PRODUCTS_SCREEN,
});

export default SavedProductsNavigator;
