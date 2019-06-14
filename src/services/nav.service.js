import React from 'react';
import { NavigationActions } from 'react-navigation';

import { headerTitleStyle, headerStyle, headerTitleContainerStyle } from '../Themes/navigator';

class NavService {
  _navigator;

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
      headerTitleStyle,
      headerStyle,
      headerTitleContainerStyle,
      headerTransparent: true,
      headerBackImage,
    };
  }
}

export default new NavService();