import React, { useEffect, useCallback, useState } from 'react';

import * as PropTypes from 'prop-types';
import SavedProductsScreen from './SavedProductsScreen';

import realmService from '../../services/realm.service';

const SavedProductsScreenContainer = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);

  const fetchProductsFromRealm = useCallback(() => {
    setIsFetchingProducts(true);
    realmService.read(realmService.SchemaName.PRODUCT)
      .then((RealmProducts) => {
        setProducts(RealmProducts);
        setIsFetchingProducts(false);
      });
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

SavedProductsScreenContainer.propTypes = {
  navigation: PropTypes.shape({
    addListener: PropTypes.func,
  }).isRequired,
};

export default React.memo(SavedProductsScreenContainer);
