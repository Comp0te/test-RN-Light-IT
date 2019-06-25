import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
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

export default React.memo(ProductsItem);
