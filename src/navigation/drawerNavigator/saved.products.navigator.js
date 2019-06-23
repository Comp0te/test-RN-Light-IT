import { createStackNavigator } from "react-navigation";
import navService from "../../services/nav.service";

import SavedProductsScreen from "../../screens/SavedProductsScreen";
import SavedProductDetailScreen from "../../screens/SavedProductDetailScreen";
import { Button } from "react-native-material-ui";
import React from "react";

const SavedProductsNavigator = createStackNavigator({
  [navService.ScreenRouteNames.SAVED_PRODUCTS_SCREEN]: {
    screen: SavedProductsScreen,
    navigationOptions: ({screenProps: {t}}) => navService.navigationOptions(t('Saved products')),
  },
  [navService.ScreenRouteNames.SAVED_PRODUCT_DETAIL_SCREEN]: {
    screen: SavedProductDetailScreen,
    navigationOptions: ({navigation, screenProps: {t}}) => {
      const title = navigation.getParam('title');
      const onPressDelete = navigation.getParam('onPressDelete', null);

      return {
        ...navService.navigationOptions(title),
        headerRight: (
          !!onPressDelete &&
          <Button
            primary={true}
            text={t('Delete')}
            onPress={onPressDelete}
          />
        ),
      }
    },
  },
}, {
  initialRouteName: navService.ScreenRouteNames.SAVED_PRODUCTS_SCREEN,
});

export default SavedProductsNavigator;