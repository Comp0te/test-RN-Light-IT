import React from 'react';
import { SafeAreaView, View } from 'react-native';
import style from './style';

import ProductsList from '../../components/ProductsList';
import Spinner from '../../components/Spinner';
import AdBanner from '../../components/AdBanner';

const ProductsScreen = (
  {
    productsIds,
    isLoadingProducts,
    productsEntities,
  },
) => (
  <SafeAreaView style={style.safeArea}>
    <View style={style.root}>
      {
          isLoadingProducts
            ? <Spinner />
            : (
              <>
                <ProductsList
                  productsIds={productsIds}
                  productsEntities={productsEntities}
                />
                <AdBanner />
              </>
            )
        }
    </View>
  </SafeAreaView>
);

export default React.memo(ProductsScreen);
