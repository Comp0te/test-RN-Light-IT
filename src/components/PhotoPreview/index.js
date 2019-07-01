import React from 'react';
import {
  Image, View,
} from 'react-native';
import style from './style';

const PhotoPreview = ({ uri, isOverlay }) => (
  <View
    style={[
      style.root,
      isOverlay ? style.overlay : { flex: 1 },
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
