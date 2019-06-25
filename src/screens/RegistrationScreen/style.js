import { StyleSheet } from 'react-native';

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
  },
});

export default style;
