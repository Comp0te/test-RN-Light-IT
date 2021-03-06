import React, { useCallback } from 'react';
import { ListItem } from 'react-native-material-ui';
import FastImage from 'react-native-fast-image';
import * as PropTypes from 'prop-types';
import style from './style';
import { staticEndpoint } from '../../utils/constants';

import navService from '../../services/nav.service';

const SavedProductItem = ({ product }) => {
  const imageUri = `${staticEndpoint}${product.img}`;

  const LeftElement = () => (
    <FastImage
      style={style.image}
      source={{
        uri: imageUri,
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );

  const onRightElementPress = useCallback(() => {
    navService.navigate(navService.ScreenRouteNames.SAVED_PRODUCT_DETAIL_SCREEN, { product });
  }, [product]);

  return (
    <ListItem
      leftElement={<LeftElement />}
      onRightElementPress={onRightElementPress}
      centerElement={{
        primaryText: product.title,
      }}
      rightElement="chevron-right"
      divider
    />
  );
};

SavedProductItem.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default React.memo(SavedProductItem);
