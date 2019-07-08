import { StyleSheet } from 'react-native';
import Color from '../../Themes/colors';
import { scaleFontSize, scaleWidth, scaleHeight } from '../../utils/responsiveDimensionUtil';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
    paddingTop: 49,
    backgroundColor: Color.WHITE,
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
  wrapper: {
    paddingHorizontal: 10,
  },
});

export default style;
