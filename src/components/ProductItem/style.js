import { StyleSheet } from 'react-native';
import Color from '../../Themes/colors';

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  productContainer: {
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 16,
    color: Color.MAIN,
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  placeholderStyle: {
    backgroundColor: Color.WHITE,
  },
});

export default style;
