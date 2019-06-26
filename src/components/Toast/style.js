import { StyleSheet, Dimensions } from 'react-native';
import Color from '../../Themes/colors';

const style = StyleSheet.create({
  text: {
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
  },
  root: {
    position: 'absolute',
    left: Dimensions.get('window').width * 0.1,
    alignItems: 'center',
    width: '80%',
    minHeight: 50,
    padding: 10,
    borderColor: Color.MAIN,
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: Color.MAIN_OPACITY,
  },
  error: {
    color: Color.ERROR,
  },
  success: {
    color: Color.SUCCESS,
  },
});

export default style;
