import React, { useEffect, useCallback, useState } from 'react';
import {
  Image, SafeAreaView, View, FlatList,
} from 'react-native';
import style from './style';

import RNFSService from '../../services/rnfs.service';

const PhotoGalleryScreen = ({ navigation }) => {
  const [photoURIs, setPhotoURIs] = useState([]);

  const onWillFocus = useCallback(async () => {
    const uris = await RNFSService.readPhotoUrisFromCameraDir();
    setPhotoURIs(uris);
  }, []);

  useEffect(() => {
    const focusListener = navigation.addListener('willFocus', onWillFocus);
    onWillFocus();
    return () => focusListener.remove();
  }, [onWillFocus]);

  const keyExtractor = uri => `${uri}`;

  const renderItem = ({ item }) => (
    <Image
      source={{ uri: item }}
      style={style.image}
    />
  );

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.root}>
        <FlatList
          data={photoURIs}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          initialNumToRender={10}
          maxToRenderPerBatch={2}
          style={style.flatList}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(PhotoGalleryScreen);
