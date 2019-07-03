import React from 'react';
import { SafeAreaView, View } from 'react-native';
import * as PropTypes from 'prop-types';
import style from './style';

import SavedProductsList from '../../components/SavedProductsList';

const SavedProductsScreen = ({ products, fetchProductsFromRealm, isFetchingProducts }) => (
  <SafeAreaView style={style.safeArea}>
    <View style={style.root}>
      <SavedProductsList
        products={products}
        onRefresh={fetchProductsFromRealm}
        isFetchingProducts={isFetchingProducts}
      />
    </View>
  </SafeAreaView>
);

SavedProductsScreen.propTypes = {
  products: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  fetchProductsFromRealm: PropTypes.func.isRequired,
  isFetchingProducts: PropTypes.bool.isRequired,
};

export default React.memo(SavedProductsScreen);
