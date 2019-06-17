import React from 'react';
import { Color } from '../../Themes/colors';
import { ActivityIndicator } from 'react-native';

export const Spinner = ({size}) => {
  return (
    <ActivityIndicator
      size={size ? size : 'large'}
      color={Color.MAIN}
      animating={true}
    />
  );
};

export default React.memo(Spinner);