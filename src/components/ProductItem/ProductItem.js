import React, { useEffect, useCallback } from 'react';
import style from './style';
import { withNavigation } from 'react-navigation';
import { staticEndpoint } from '../../utils/constants';

import { Text, View } from 'react-native'
import FastImage from 'react-native-fast-image';
import ReviewsList from '../ReviewsList'

const ProductsItem = (
  {
    product,
    reviewsIds,
    isLoadingReviews,
    getAllReviews,
    navigation,
    isActive,
  },
) => {

  useEffect(() => {
    navigation.setParams({
      title: product.title,
      onPressSave: () => console.log(`saved ${product.title}`),
      isLoadingReviews,
    })
  }, [product, isActive, isLoadingReviews]);

  const fetchReviewsList = useCallback(() => {
    if (product) {
      getAllReviews(product.id)
    }
  }, [product]);

  useEffect(() => {
    fetchReviewsList();
  }, [fetchReviewsList]);

  if (!product) {
    return null;
  }

  const imageUri = `${staticEndpoint}${product.img}`;

  return (
    <View style={style.root}>
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
      <ReviewsList
        reviewsIds={reviewsIds}
        isLoadingReviews={isLoadingReviews}
        onRefresh={fetchReviewsList}
      />
    </View>
  );
};

export default withNavigation(ProductsItem);
