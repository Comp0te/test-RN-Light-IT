import { StyleSheet } from 'react-native';
import Color from '../../Themes/colors';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
    paddingTop: 59,
    backgroundColor: Color.WHITE,
  },
  image: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  flatList: {
    paddingHorizontal: 5,
  },
});

export default style;
