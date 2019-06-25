import { StyleSheet } from 'react-native';
import Color from '../../Themes/colors';

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
    fontSize: 16,
    color: Color.MAIN,
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  wrapper: {
    paddingHorizontal: 10,
  },
});

export default style;
