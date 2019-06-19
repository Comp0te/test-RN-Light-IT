import { createStackNavigator } from "react-navigation";
import navService from "../../services/nav.service";

import SettingsScreen from "../../screens/SettingsScreen";

const SettingsNavigator = createStackNavigator({
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: navService.navigationOptions('Settings'),
  },
}, {
  initialRouteName: 'SettingsScreen',
});

export default SettingsNavigator;