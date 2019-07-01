import { StyleSheet } from 'react-native';
import Color from '../../Themes/colors';

const style = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraButtonsWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.MAIN_OPACITY,
  },
  snapshotWrapper: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: Color.WHITE,
  },
});

export default style;
