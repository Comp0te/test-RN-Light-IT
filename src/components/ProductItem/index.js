import React from 'react';
import { connect } from 'react-redux';

import { getProductByIdFromProps } from '../../redux/products/selectors';

import ProductItem from './ProductItem';

const mapStateToProps = (state, props) => ({
  product: getProductByIdFromProps(state, props),
});

const ProductsItemContainer = ({product}) => {

  return (
    <ProductItem product={product} />
  );
};

export default connect(mapStateToProps)(ProductsItemContainer);
