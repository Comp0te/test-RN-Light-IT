import React from 'react';
import {
  Image, View,
} from 'react-native';
import style from './style';

const PhotoPreview = ({ uri, isOverlay = false }) => (
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

export default React.memo(PhotoPreview);
