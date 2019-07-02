import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-material-ui';
import { TouchableOpacity } from 'react-native';
import Color from '../../Themes/colors';

import navService from '../../services/nav.service';

import CameraScreen from '../../screens/CameraScreen';
import PhotoGalleryScreen from '../../screens/PhotoGalleryScreen';
import PhotoPreviewScreen from '../../screens/PhotoPreviewScreen';

const PhotoGalleryNavigator = createStackNavigator({
  [navService.ScreenRouteNames.CAMERA_SCREEN]: {
    screen: CameraScreen,
    navigationOptions: {
      header: null,
    },
  },
  [navService.ScreenRouteNames.PHOTO_GALLERY_SCREEN]: {
    screen: PhotoGalleryScreen,
    navigationOptions: ({ screenProps: { t } }) => {
      const onPress = () => {
        navService.navigate(navService.ScreenRouteNames.CAMERA_SCREEN);
      };

      return {
        ...navService.navigationOptions(t('Photo gallery')),
        headerRight: (
          <TouchableOpacity
            onPress={onPress}
            style={{ padding: 10 }}
          >
            <Icon
              color={Color.MAIN}
              size={30}
              name="camera"
            />
          </TouchableOpacity>
        ),
      };
    },
  },
  [navService.ScreenRouteNames.PHOTO_PREVIEW_SCREEN]: {
    screen: PhotoPreviewScreen,
    navigationOptions: ({ navigation, screenProps: { t } }) => {
      const onPress = navigation.getParam('onPressTrash');

      return {
        ...navService.navigationOptions(t('Photo preview')),
        headerRight: (
          <TouchableOpacity
            onPress={onPress}
            style={{ padding: 10 }}
          >
            <Icon
              color={Color.MAIN}
              size={30}
              name="delete"
            />
          </TouchableOpacity>
        ),
      };
    },
  },
}, {
  initialRouteName: navService.ScreenRouteNames.PHOTO_GALLERY_SCREEN,
});

export default PhotoGalleryNavigator;
