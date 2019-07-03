import React, { useEffect, useCallback } from 'react';
import {
  SafeAreaView, View, Text,
} from 'react-native';
import * as PropTypes from 'prop-types';
import PhotoPreview from '../../components/PhotoPreview';
import style from './style';

import navService from '../../services/nav.service';
import RNFSService from '../../services/rnfs.service';

const PhotoPreviewScreen = ({ navigation }) => {
  const photo = navigation.getParam('photo');

  const onPressTrash = useCallback(async () => {
    await RNFSService.deleteFile(photo.path);
    navService.navigate(navService.ScreenRouteNames.PHOTO_GALLERY_SCREEN);
  }, [photo]);

  useEffect(() => {
    navigation.setParams({
      onPressTrash,
    });
  }, [onPressTrash]);

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.root}>
        <PhotoPreview uri={photo.path} />
        <Text>{photo.name}</Text>
      </View>
    </SafeAreaView>
  );
};

PhotoPreviewScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }).isRequired,
};

export default React.memo(PhotoPreviewScreen);
