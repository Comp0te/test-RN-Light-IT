import React, { useEffect, useCallback, useState } from 'react';

import SavedProductDetailScreen from './SavedProductDetailScreen';

import realmService from '../../services/realm.service';
import { populateReviewsWithUsers } from '../../realm/populate.helpers';

const SavedProductDetailScreenContainer = ({navigation}) => {

  const product = navigation.getParam('product');

  const [reviewsWithUsers, setReviewsWithUsers] = useState(null);
  const [isFetchingFromRealm, setIsFetchingFromRealm] = useState(false);

  const fetchReviewsFromRealm = useCallback(() => {
    setIsFetchingFromRealm(true);
    realmService.read(realmService.SchemaName.REVIEW, `product == ${product.id}`)
      .then(reviews => {
        setReviewsWithUsers(populateReviewsWithUsers(reviews));
        setIsFetchingFromRealm(false);
      })
  }, [product]);

  useEffect(() => {
    fetchReviewsFromRealm();
  }, [fetchReviewsFromRealm]);

  const onPressDelete = useCallback(() => {
    navigation.goBack();
    realmService.read(realmService.SchemaName.PRODUCT, `id == ${product.id}`)
      .then(result => {
        return realmService.delete(result)
      })
      .then(() => realmService.read(realmService.SchemaName.REVIEW, `product == ${product.id}`))
      .then(result => realmService.delete(result))
  },[product]);

  useEffect(() => {
    navigation.setParams({
      title: product.title,
      onPressDelete,
    })
  }, [product, onPressDelete]);

  return (
    <SavedProductDetailScreen
      product={product}
      reviewsWithUsers={reviewsWithUsers}
      fetchReviewsFromRealm={fetchReviewsFromRealm}
      isFetchingFromRealm={isFetchingFromRealm}
    />
  );
};

export default React.memo(SavedProductDetailScreenContainer);
