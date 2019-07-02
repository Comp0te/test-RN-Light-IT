import React, { useEffect, useCallback, useState } from 'react';
import {
  SafeAreaView, View, FlatList,
} from 'react-native';
import GalleryListItem from '../../components/GalleryListItem';
import style from './style';

import RNFSService from '../../services/rnfs.service';

const PhotoGalleryScreen = ({ navigation }) => {
  const [photoData, setPhotoData] = useState([]);

  const onWillFocus = useCallback(async () => {
    const data = await RNFSService.readPhotoDataFromCameraDir();
    setPhotoData(data);
  }, []);

  useEffect(() => {
    const focusListener = navigation.addListener('willFocus', onWillFocus);
    onWillFocus();
    return () => focusListener.remove();
  }, [onWillFocus]);

  const keyExtractor = data => `${data.path}`;

  const renderItem = ({ item }) => (
    <GalleryListItem photo={item} />
  );

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.root}>
        <FlatList
          data={photoData}
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
