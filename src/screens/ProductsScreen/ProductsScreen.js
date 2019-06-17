import React, { useEffect } from 'react';
import style from './style';

import { SafeAreaView, View } from 'react-native';
import ProductsList from '../../components/ProductsList';
import Spinner from '../../components/Spinner';

const ProductsScreen = (
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
    <SafeAreaView style={style.safeArea}>
      <View style={style.root}>
        {
          isLoadingProducts ?
            <Spinner/> :
            <ProductsList
              productsIds={productsIds}
              productsEntities={productsEntities}
            />
        }
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductsScreen);
