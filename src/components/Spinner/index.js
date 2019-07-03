import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as PropTypes from 'prop-types';
import Color from '../../Themes/colors';

const Spinner = ({ size }) => (
  <ActivityIndicator
    size={size}
    color={Color.MAIN}
    animating
  />
);

Spinner.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
};

Spinner.defaultProps = {
  size: 'large',
};

export default React.memo(Spinner);
