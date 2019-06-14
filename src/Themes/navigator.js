import { Dimensions } from 'react-native';
import { Color } from './colors'

export const headerTitleStyle = {
  fontWeight: '700',
  fontSize: 16,
  color: Color.MAIN,
  alignSelf: 'center',
};

export const headerStyle = {
  alignSelf: 'center',
  height: 49,
  width: '100%',
  backgroundColor: Color.WHITE,
  borderBottomWidth: 0.5,
  borderBottomColor: 'rgba(0, 0, 0, 0.25)',
};

export const headerTitleContainerStyle = {
  position: 'absolute',
  left: 30,
  right: 30,
  justifyContent: 'center',
  width: '100%',
  maxWidth: Dimensions.get('window').width - 60,
};