import React from 'react';
import { ActivityIndicator } from 'react-native';
import Color from '../../Themes/colors';

const Spinner = ({ size }) => (
  <ActivityIndicator
    size={size || 'large'}
    color={Color.MAIN}
    animating
  />
);

export default React.memo(Spinner);
