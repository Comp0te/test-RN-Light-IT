import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import * as PropTypes from 'prop-types';
import style from './style';

import { staticEndpoint } from '../../utils/constants';

import ReviewsList from '../ReviewsList';

const ProductsItem = (
  {
    product,
    reviewsIds,
    isLoadingReviews,
    fetchReviewsList,
  },
) => {
  const imageUri = `${staticEndpoint}${product.img}`;

  return (
    <View style={style.root}>
      <View style={style.productContainer}>
        <FastImage
          style={style.image}
          source={{
            uri: imageUri,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={style.title}>{product.title}</Text>
        <Text>{product.text}</Text>
      </View>
      <ReviewsList
        reviewsIds={reviewsIds}
        isLoadingReviews={isLoadingReviews}
        onRefresh={fetchReviewsList}
      />
    </View>
  );
};

ProductsItem.propTypes = {
  product: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  reviewsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoadingReviews: PropTypes.bool.isRequired,
  fetchReviewsList: PropTypes.func.isRequired,
};

export default React.memo(ProductsItem);
