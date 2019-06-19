import { createStackNavigator } from "react-navigation";
import navService from "../../services/nav.service";

import SavedProductsScreen from "../../screens/SavedProductsScreen";
import SavedProductDetailScreen from "../../screens/SavedProductDetailScreen";

const SavedProductsNavigator = createStackNavigator({
  SavedProductsScreen: {
    screen: SavedProductsScreen,
    navigationOptions: navService.navigationOptions('Saved products'),
  },
  SavedProductDetailScreen: {
    screen: SavedProductDetailScreen,
    navigationOptions: navService.navigationOptions('Product'),
  },
}, {
  initialRouteName: 'SavedProductsScreen',
});

export default SavedProductsNavigator;