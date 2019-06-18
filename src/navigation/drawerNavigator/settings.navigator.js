import { createStackNavigator } from "react-navigation";
import ProductsScreen from "../../screens/ProductsScreen";
import navService from "../../services/nav.service";

const SettingsNavigator = createStackNavigator({
  SettingsScreen: {
    screen: ProductsScreen,
    navigationOptions: navService.navigationOptions('Settings'),
  },
}, {
  initialRouteName: 'SettingsScreen',
});

export default SettingsNavigator;