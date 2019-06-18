import { createStackNavigator } from "react-navigation";
import ProductsScreen from "../../screens/ProductsScreen";
import navService from "../../services/nav.service";

const ProductsNavigator = createStackNavigator({
  ProductsScreen: {
    screen: ProductsScreen,
    navigationOptions: navService.navigationOptions('Available products'),
  },
}, {
  initialRouteName: 'ProductsScreen',
});

export default ProductsNavigator;