import React from 'react';
import style from './style';

import { SafeAreaView, View } from 'react-native';
import ProductsList from '../../components/ProductsList';
import Spinner from '../../components/Spinner';
import AdBanner from '../../components/AdBanner';


const ProductsScreen = (
  {
    productsIds,
    isLoadingProducts,
    productsEntities,
  },
) => {

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.root}>
        {
          isLoadingProducts ?
            <Spinner/> :
            <>
              <ProductsList
                productsIds={productsIds}
                productsEntities={productsEntities}
              />
              <AdBanner/>
            </>
        }
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductsScreen);
