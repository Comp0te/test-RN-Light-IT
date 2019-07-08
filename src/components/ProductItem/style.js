import { StyleSheet } from 'react-native';
import Color from '../../Themes/colors';
import { scaleWidth, scaleHeight, scaleFontSize } from '../../utils/responsiveDimensionUtil';

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  productContainer: {
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: scaleFontSize(16),
    color: Color.MAIN,
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    width: scaleWidth(200),
    height: scaleHeight(200),
  },
  placeholderStyle: {
    backgroundColor: Color.WHITE,
  },
});

export default style;
