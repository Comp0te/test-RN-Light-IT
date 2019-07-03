import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
import * as PropTypes from 'prop-types';

import { getProductByIdFromProps } from '../../redux/products/selectors';
import { getReviewsIdsByProductIdFromProps } from '../../redux/reviews/selectors';
import { getIsLoading } from '../../redux/requests/getAllReviews/selectors';

import ProductItem from './ProductItem';
import { requestsAC } from '../../redux/requests/AC';
import { Actions as realmActions } from '../../redux/realm/AC';

const ProductsItemContainer = (
  {
    product,
    reviewsIds,
    isLoadingReviews,
    getAllReviews,
    saveProductWithReviews,
    isActive,
    navigation,
  },
) => {
  const onPressSave = useCallback(() => {
    saveProductWithReviews(product.id);
  }, [product]);

  useEffect(() => {
    navigation.setParams({
      title: product.title,
      onPressSave,
      isLoadingReviews,
    });
  }, [product, isActive, isLoadingReviews]);

  const fetchReviewsList = useCallback(() => {
    if (product) {
      getAllReviews(product.id);
    }
  }, [product]);

  useEffect(() => {
    fetchReviewsList();
  }, [fetchReviewsList]);

  return (
    <ProductItem
      product={product}
      reviewsIds={reviewsIds}
      isLoadingReviews={isLoadingReviews}
      fetchReviewsList={fetchReviewsList}
    />
  );
};

ProductsItemContainer.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  reviewsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoadingReviews: PropTypes.bool.isRequired,
  getAllReviews: PropTypes.func.isRequired,
  saveProductWithReviews: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    setParams: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  product: getProductByIdFromProps(state, props),
  reviewsIds: getReviewsIdsByProductIdFromProps(state, props),
  isLoadingReviews: getIsLoading(state),
});

const mapDispatchToProps = dispatch => (
  {
    getAllReviews: (productId) => {
      dispatch(requestsAC.getAllReviews.Actions.getAllReviews(productId));
    },
    saveProductWithReviews: (productId) => {
      dispatch(realmActions.saveProductWithReviews(productId));
    },
  }
);

export default compose(
  withNavigation,
  connect(mapStateToProps, mapDispatchToProps),
)(ProductsItemContainer);
