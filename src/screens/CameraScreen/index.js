import React, { useCallback, useRef, useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-material-ui';
import { RNCamera } from 'react-native-camera';
import { useTranslation } from 'react-i18next';
import PhotoPreview from '../../components/PhotoPreview';
import style from './style';
import { ScreenRouteNames } from '../../utils/constants';
import RNFSService from '../../services/rnfs.service';

const CameraScreen = () => {
  const cameraRef = useRef(null);
  const { t } = useTranslation(ScreenRouteNames.CAMERA_SCREEN);
  const [photo, setPhoto] = useState(null);

  const onPressSnapshot = useCallback(async () => {
    if (cameraRef.current) {
      const options = { quality: 1, base64: true, exif: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setPhoto(data);
    }
  }, [cameraRef.current]);

  const onPressDelete = useCallback(async () => {
    if (photo && photo.uri) {
      await RNFSService.deleteFile(photo.uri);
      setPhoto(null);
    }
  }, [photo]);

  const onPressAdd = useCallback(async () => {
    if (photo && photo.uri) {
      await RNFSService.movePhotoToCameraDir(photo.uri);
      setPhoto(null);
    }
  }, [photo]);

  const getPreviewWithButtons = () => (
    <>
      <PhotoPreview
        isOverlay
        uri={photo.uri}
      />
      <View style={style.cameraButtonsWrapper}>
        <Button
          primary
          text={t('Add to gallery')}
          onPress={onPressAdd}
        />
        <Button
          primary
          text={t('Delete')}
          onPress={onPressDelete}
        />
      </View>
    </>
  );

  const getSnapshotButton = () => (
    <View style={[style.cameraButtonsWrapper, style.snapshotWrapper]}>
      <Button
        primary
        text={t('Snapshot')}
        onPress={onPressSnapshot}
      />
    </View>
  );

  return (
    <View style={style.root}>
      <RNCamera
        ref={cameraRef}
        style={style.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
      />
      {photo ? getPreviewWithButtons() : getSnapshotButton()}
    </View>
  );
};

export default React.memo(CameraScreen);
