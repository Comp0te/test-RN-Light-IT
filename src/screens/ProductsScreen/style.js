import { StyleSheet } from 'react-native';
import { Color } from '../../Themes/colors';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
    paddingTop: 59,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: Color.WHITE,
  },
});

export default style;