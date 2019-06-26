import React from 'react';
import {
  Dimensions, Image, View,
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
      style={{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }}
    />
  </View>
);

export default React.memo(PhotoPreview);
