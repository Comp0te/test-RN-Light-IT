import * as RNFS from 'react-native-fs';
import { Platform } from 'react-native';

class RNFSService {
  CAMERA_DIR_PATH = `${RNFS.DocumentDirectoryPath}/Camera`;

  async createCameraDir() {
    await RNFS.mkdir(this.CAMERA_DIR_PATH);
  }

  async readPhotoDataFromCameraDir() {
    const isCameraDirExist = await RNFS.exists(this.CAMERA_DIR_PATH);

    if (!isCameraDirExist) {
      await this.createCameraDir();
    }

    const RNFSData = await RNFS.readDir(this.CAMERA_DIR_PATH);

    return Platform.OS === 'ios'
      ? RNFSData
      : RNFSData.map(data => ({ ...data, path: `file://${data.path}` }));
  }

  async deleteFile(path) {
    try {
      await RNFS.unlink(path);
    } catch (e) {
      console.log(e.message);
    }
  }

  async movePhotoToCameraDir(path) {
    const uriArray = path.split('/');
    const destPath = `${this.CAMERA_DIR_PATH}/${uriArray[uriArray.length - 1]}`;

    try {
      await RNFS.moveFile(path, destPath);
    } catch (e) {
      console.log(e.message);
    }
  }
}

export default new RNFSService();
