import { createStackNavigator } from "react-navigation";
import ProductsScreen from "../../screens/ProductsScreen";
import navService from "../../services/nav.service";

const SavedProductsNavigator = createStackNavigator({
  SavedProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: navService.navigationOptions('Saved products'),
  },
}, {
  initialRouteName: 'SavedProductsScreen',
});

export default SavedProductsNavigator;