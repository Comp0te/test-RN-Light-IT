import { NavigationActions } from 'react-navigation';
import { ScreenRouteNames, NavRouteNames } from '../utils/constants';

import { headerTitleStyle, headerStyle, headerTitleContainerStyle } from '../Themes/navigator';

class NavService {
  _navigator;

  _NavRouteNames = NavRouteNames;

  _ScreenRouteNames = ScreenRouteNames;

  _defaultNavOptions = {
    headerTitleStyle,
    headerStyle,
    headerTitleContainerStyle,
    headerTransparent: true,
  };

  get NavRouteNames() {
    return this._NavRouteNames;
  }

  get ScreenRouteNames() {
    return this._ScreenRouteNames;
  }

  set navigator(ref) {
    this._navigator = ref;
  }

  navigate(routeName, params) {
    if (this._navigator) {
      this._navigator.dispatch(
        NavigationActions.navigate({
          routeName,
          params,
        }),
      );
    }
  }

  navigationOptions(title, headerBackImage) {
    return {
      title,
      headerBackImage,
      ...this._defaultNavOptions,
    };
  }
}

export default new NavService();
