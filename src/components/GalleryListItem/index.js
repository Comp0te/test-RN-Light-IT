import React, { useCallback } from 'react';
import { ListItem } from 'react-native-material-ui';
import FastImage from 'react-native-fast-image';
import * as PropTypes from 'prop-types';
import style from './style';

import navService from '../../services/nav.service';

const GalleryListItem = ({ photo }) => {
  const LeftElement = () => (
    <FastImage
      style={style.image}
      source={{
        uri: photo.path,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );

  const onRightElementPress = useCallback(() => {
    navService.navigate(navService.ScreenRouteNames.PHOTO_PREVIEW_SCREEN, { photo });
  }, [photo]);

  return (
    <ListItem
      leftElement={<LeftElement />}
      onRightElementPress={onRightElementPress}
      centerElement={{
        primaryText: photo.name,
      }}
      style={{ primaryText: style.text }}
      rightElement="chevron-right"
      divider
    />
  );
};

GalleryListItem.propTypes = {
  photo: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }).isRequired,
};

export default React.memo(GalleryListItem);
