import React from 'react';
import { connect } from 'react-redux';

import ProductsScreen from './ProductsScreen';

import { getIsLoading as getIsLoadingAllProducts } from '../../redux/requests/getAllProducts/selectors';
import { getProductsAllIds, getProductsEntities } from '../../redux/products/selectors';
import { requestsAC } from '../../redux/requests/AC';

const mapStateToProps = state => ({
  isLoadingProducts: getIsLoadingAllProducts(state),
  productsIds: getProductsAllIds(state),
  productsEntities: getProductsEntities(state),
});

const mapDispatchToProps = dispatch => (
  {
    getAllProducts: () => {
      dispatch(requestsAC.getAllProducts.Actions.getAllProducts());
    },
  }
);

const ProductsScreenContainer = (
  {
    productsIds,
    isLoadingProducts,
    getAllProducts,
    productsEntities,
  },
) => {

  return (
    <ProductsScreen
      productsIds={productsIds}
      isLoadingProducts={isLoadingProducts}
      getAllProducts={getAllProducts}
      productsEntities={productsEntities}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreenContainer);
