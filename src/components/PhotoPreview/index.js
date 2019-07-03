import React from 'react';
import {
  Image, View,
} from 'react-native';
import * as PropTypes from 'prop-types';
import style from './style';

const PhotoPreview = ({ uri, isOverlay }) => (
  <View
    style={[
      style.root,
      isOverlay ? style.overlay : {},
    ]}
  >
    <Image
      source={{ uri }}
      resizeMode="contain"
      style={style.image}
    />
  </View>
);

PhotoPreview.propTypes = {
  uri: PropTypes.string.isRequired,
  isOverlay: PropTypes.bool,
};

PhotoPreview.defaultProps = {
  isOverlay: false,
};

export default React.memo(PhotoPreview);
