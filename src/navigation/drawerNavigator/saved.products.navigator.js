import { createStackNavigator } from "react-navigation";
import navService from "../../services/nav.service";

import SavedProductsScreen from "../../screens/SavedProductsScreen";
import SavedProductDetailScreen from "../../screens/SavedProductDetailScreen";
import { Button } from "react-native-material-ui";
import React from "react";

const SavedProductsNavigator = createStackNavigator({
  SavedProductsScreen: {
    screen: SavedProductsScreen,
    navigationOptions: navService.navigationOptions('Saved products'),
  },
  SavedProductDetailScreen: {
    screen: SavedProductDetailScreen,
    navigationOptions: ({navigation}) => {
      const title = navigation.getParam('title');
      const onPressDelete = navigation.getParam('onPressDelete', null);

      return {
        ...navService.navigationOptions(title),
        headerRight: (
          !!onPressDelete &&
          <Button
            primary={true}
            text='Delete'
            onPress={onPressDelete}
          />
        ),
      }
    },
  },
}, {
  initialRouteName: 'SavedProductsScreen',
});

export default SavedProductsNavigator;