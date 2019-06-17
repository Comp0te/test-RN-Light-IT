import React from 'react';
import { connect } from 'react-redux';

import { getProductByIdFromProps } from '../../redux/products/selectors';
import { getReviewsIdsByProductIdFromProps } from '../../redux/reviews/selectors';
import { getIsLoading } from '../../redux/requests/getAllReviews/selectors';

import ProductItem from './ProductItem';
import { requestsAC } from "../../redux/requests/AC";

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
  }
);

const ProductsItemContainer = (
  {
    product,
    reviewsIds,
    isLoadingReviews,
    getAllReviews,
  },
) => {

  return (
    <ProductItem
      product={product}
      reviewsIds={reviewsIds}
      isLoadingReviews={isLoadingReviews}
      getAllReviews={getAllReviews}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsItemContainer);
