import React from 'react';
import { connect } from 'react-redux';

import { getProductByIdFromProps } from '../../redux/products/selectors';
import { getReviewsIdsByProductIdFromProps } from '../../redux/reviews/selectors';
import { getIsLoading } from '../../redux/requests/getAllReviews/selectors';

import ProductItem from './ProductItem';
import { requestsAC } from "../../redux/requests/AC";
import { Actions as realmActions } from "../../redux/realm/AC";

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

const ProductsItemContainer = (
  {
    product,
    reviewsIds,
    isLoadingReviews,
    getAllReviews,
    saveProductWithReviews,
    ...rest,
  },
) => {

  return (
    <ProductItem
      product={product}
      reviewsIds={reviewsIds}
      isLoadingReviews={isLoadingReviews}
      getAllReviews={getAllReviews}
      saveProductWithReviews={saveProductWithReviews}
      {...rest}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsItemContainer);
