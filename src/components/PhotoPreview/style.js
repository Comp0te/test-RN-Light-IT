import { Dimensions, StyleSheet } from 'react-native';
import Color from '../../Themes/colors';

const style = StyleSheet.create({
  root: {
    backgroundColor: Color.WHITE,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
});

export default style;
