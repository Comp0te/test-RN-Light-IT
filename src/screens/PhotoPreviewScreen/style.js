import { StyleSheet } from 'react-native';
import Color from '../../Themes/colors';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 59,
    backgroundColor: Color.WHITE,
  },
});

export default style;
