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
    paddingTop: 95,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    minHeight: 460,
  },
  fieldWrapper: {
    width: '100%',
    marginBottom: 16,
  },
  signInWrapper: {
    width: '100%',
    height: 40,
    marginBottom: 10,
  },
  signInTouchIDWrapper: {
    width: '100%',
    height: 40,
  },
  singUpWrapper: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 11,
    color: Color.GREY,
  },
  googleSigninButton: {
    width: 192,
    height: 48,
    marginBottom: 10,
  },
});

export default style;
