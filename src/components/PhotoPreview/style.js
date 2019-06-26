import { StyleSheet } from 'react-native';
import Color from '../../Themes/colors';

const style = StyleSheet.create({
  root: {
    backgroundColor: Color.WHITE,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default style;
