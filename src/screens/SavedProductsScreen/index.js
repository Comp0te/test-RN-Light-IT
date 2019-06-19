import React, { useEffect, useCallback, useState } from 'react';

import SavedProductsScreen from './SavedProductsScreen';

import realmService from '../../services/realm.service';

const SavedProductsScreenContainer = ({navigation}) => {
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
    const focusListener = navigation.addListener('willFocus', fetchProductsFromRealm);
    fetchProductsFromRealm();

    return () => focusListener.remove();
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
