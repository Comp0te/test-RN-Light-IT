import { StyleSheet } from 'react-native';
import { scaleFontSize } from '../../utils/responsiveDimensionUtil';

const style = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
  title: {
    marginBottom: 5,
    fontSize: scaleFontSize(18),
  },
});

export default style;
