import React, { useEffect, useCallback, useState } from 'react';

import SavedProductsScreen from './SavedProductsScreen';

import realmService from '../../services/realm.service';

const SavedProductsScreenContainer = () => {
  const [products, setProducts] = useState(null);
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);

  const fetchProductsFromRealm = useCallback(() => {
    setIsFetchingProducts(true);
    realmService.read(realmService.SchemaName.PRODUCT)
      .then(products => {
        setProducts(products);
        setIsFetchingProducts(false);
      })
  }, []);

  useEffect(() => {
    fetchProductsFromRealm();
  }, [fetchProductsFromRealm]);

  return (
    <SavedProductsScreen
      products={products}
      fetchProductsFromRealm={fetchProductsFromRealm}
      isFetchingProducts={isFetchingProducts}
    />
  );
};

export default React.memo(SavedProductsScreenContainer);
