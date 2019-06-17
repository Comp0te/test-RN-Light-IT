import { createSelector } from 'reselect'

export const getProductsEntities = state => state.products.entities;
export const getProductsAllIds = state => state.products.allIds;

export const getProductIdFromProps = (state, productItemProps) => productItemProps.productId;

export const getProductByIdFromProps = createSelector(
  [
    getProductsEntities,
    getProductIdFromProps,
  ],
  (productsEntities, productId) => {
    return productsEntities?.[productId];
  },
);