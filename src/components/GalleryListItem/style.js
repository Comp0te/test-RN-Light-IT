import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../utils/responsiveDimensionUtil';

const style = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: scaleFontSize(14),
  },
});

export default style;
