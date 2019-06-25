import React from 'react';
import { SafeAreaView, View } from 'react-native';
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

export default React.memo(SavedProductsScreen);
