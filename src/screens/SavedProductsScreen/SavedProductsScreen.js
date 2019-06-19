import React from 'react';
import style from './style';

import { SafeAreaView, View } from 'react-native';
import SavedProductsList from '../../components/SavedProductsList';

const SavedProductsScreen = ({products, fetchProductsFromRealm, isFetchingProducts}) => {

  return (
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
};

export default React.memo(SavedProductsScreen);
