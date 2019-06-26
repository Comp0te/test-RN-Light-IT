import React from 'react';
import { SafeAreaView, View } from 'react-native';
import style from './style';

const PhotoGalleryScreen = () => (
  <SafeAreaView style={style.safeArea}>
    <View style={style.root}>
    </View>
  </SafeAreaView>
);

export default React.memo(PhotoGalleryScreen);
