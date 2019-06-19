import { StyleSheet } from 'react-native';
import { Color } from '../../Themes/colors';

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 49,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
  },
  settingWrapper: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
  },
  text: {
    marginBottom: 10,
    fontSize: 14,
  },
  activeTab: {
    backgroundColor: Color.MAIN,
  },
  logoutText: {
    fontSize: 20,
  }
});

export default style;