import React from 'react';
import * as PropTypes from 'prop-types';
import { Button } from 'react-native-material-ui';
import style from './style';

const HeaderButton = ({ title, onPress }) => (
  <Button
    primary
    text={title}
    onPress={onPress}
    style={{ text: style.text }}
  />
);

HeaderButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default React.memo(HeaderButton);
