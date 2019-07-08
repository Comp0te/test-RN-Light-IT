import { StyleSheet } from 'react-native';
import Color from '../../Themes/colors';
import { scaleFontSize } from '../../utils/responsiveDimensionUtil';

const style = StyleSheet.create({
  text: {
    fontSize: scaleFontSize(13),
    color: Color.MAIN,
  },
});

export default style;
