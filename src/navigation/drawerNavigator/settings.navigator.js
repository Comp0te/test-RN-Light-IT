import { createStackNavigator } from "react-navigation";
import navService from "../../services/nav.service";

import SettingsScreen from "../../screens/SettingsScreen";

const SettingsNavigator = createStackNavigator({
  [navService.ScreenRouteNames.SETTINGS_SCREEN]: {
    screen: SettingsScreen,
    navigationOptions: ({screenProps: { t }}) => ({
      ...navService.navigationOptions(t('Settings')),
    }),
  },
}, {
  initialRouteName: navService.ScreenRouteNames.SETTINGS_SCREEN,
});

export default SettingsNavigator;