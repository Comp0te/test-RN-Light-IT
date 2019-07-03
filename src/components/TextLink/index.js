import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as PropTypes from 'prop-types';
import style from './style';

const TextLink = ({ toScreen, text }) => (
  <TouchableOpacity
    onPress={toScreen}
    hitSlop={{
      top: 10,
      bottom: 10,
      right: 0,
      left: 0,
    }}
    testID="textLink"
  >
    <Text style={style.text}>{text}</Text>
  </TouchableOpacity>
);

TextLink.propTypes = {
  toScreen: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default React.memo(TextLink);
