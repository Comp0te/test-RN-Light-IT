import { createStackNavigator } from "react-navigation";
import navService from "../../services/nav.service";

import SavedProductsScreen from "../../screens/SavedProductsScreen";

const SavedProductsNavigator = createStackNavigator({
  SavedProductsScreen: {
    screen: SavedProductsScreen,
    navigationOptions: navService.navigationOptions('Saved products'),
  },
}, {
  initialRouteName: 'SavedProductsScreen',
});

export default SavedProductsNavigator;