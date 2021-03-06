import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as PropTypes from 'prop-types';
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
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <ProductsScreen
      productsIds={productsIds}
      isLoadingProducts={isLoadingProducts}
      productsEntities={productsEntities}
    />
  );
};

ProductsScreenContainer.propTypes = {
  productsIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoadingProducts: PropTypes.bool.isRequired,
  getAllProducts: PropTypes.func.isRequired,
  productsEntities: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreenContainer);
